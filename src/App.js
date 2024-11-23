import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./routes";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              ></Route>
            );
          })}
          <Route path="*" element={<h1>Not found 404</h1>}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;

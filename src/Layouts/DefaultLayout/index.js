import { Layout } from "antd";
import Header from "./Header";
import Sidebar from "./Sidebar";
const { Content } = Layout;

function DefaultLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;

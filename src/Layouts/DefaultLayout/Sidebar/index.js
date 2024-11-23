import Sider from "antd/es/layout/Sider";
import styles from "./Sidebar.module.css";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <Sider theme="light" width={"14%"} className={styles.sidebar}>
      <SidebarLogo />
      <SidebarMenu></SidebarMenu>
    </Sider>
  );
}

export default Sidebar;

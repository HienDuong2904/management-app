import { Menu } from "antd";
import styles from "./Sidebar.module.css";

const items = [
  {
    key: 1,
    label: "Home",
  },
  {
    key: 2,
    label: "Expense management",
  },
  {
    key: 3,
    label: "New management",
  },
  {
    key: 4,
    label: "Settings",
  },
];

function SidebarMenu() {
  return (
    <Menu
      className={styles.sidebarMenu}
      items={items}
      defaultSelectedKeys={["1"]}
      theme="light"
    />
  );
}

export default SidebarMenu;

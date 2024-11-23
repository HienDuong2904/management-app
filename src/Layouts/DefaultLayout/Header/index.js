import { Layout, Image, Dropdown, Space } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
const { Header: HeaderAntd } = Layout;

const items = [
  {
    key: "1",
    label: "Profile",
  },
  {
    key: "2",
    label: "Settings",
  },
  {
    key: "3",
    label: "Logout",
  },
];

function Header() {
  return (
    <HeaderAntd className={styles.header}>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Image
            className={styles.headerAvatar}
            preview={false}
            width="64px"
            src="logo.png"
          />
        </a>
      </Dropdown>
    </HeaderAntd>
  );
}

export default Header;

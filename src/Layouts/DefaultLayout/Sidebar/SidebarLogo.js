import { Flex, Image, Typography } from "antd";
import styles from "./Sidebar.module.css";
const { Text } = Typography;

function SidebarLogo() {
  return (
    <Flex gap="middle" align="center" justify="space-evenly">
      <Image src="logo.png" width="84px" preview={false} />
      <Text className={styles.logoText}>My managentment</Text>
    </Flex>
  );
}

export default SidebarLogo;

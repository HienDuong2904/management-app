import { Flex, DatePicker, Typography, Button } from "antd";
import styles from "./Home.module.css";
import { PlusCircleTwoTone } from "@ant-design/icons";
const { Text } = Typography;

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function Home() {
  return (
    <Flex justify="space-between" className={styles.home}>
      <div className={styles.homeDatePicker}>
        <Text>From</Text>
        <DatePicker size="large" onChange={onChange} />
        <Text>To</Text>
        <DatePicker size="large" onChange={onChange} />
      </div>
      <div>
        <Button size="large" icon={<PlusCircleTwoTone size="large" />}></Button>
      </div>
    </Flex>
  );
}

export default Home;

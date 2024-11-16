import Sider from 'antd/es/layout/Sider';
import { Flex } from 'antd';
import GeneralInformationDrawer from '../drawer/generalInformationDrawer/GeneralInformationDrawer';
import SensorDateDrawer from '../drawer/sensorDateDrawer/SensorDateDrawer';

const SideMenu = () => {
  return (
    <Sider style={{ background: '#FDF0D5' }} width={50}>
      {/* Menu не использовала, дополнительная возня со стилям, мне лень */}
      <Flex gap="middle" vertical>
        <GeneralInformationDrawer />
        <SensorDateDrawer />
      </Flex>
    </Sider>
  );
};

export default SideMenu;

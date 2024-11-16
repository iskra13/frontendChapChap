import { Header } from 'antd/es/layout/layout';
import { Typography } from 'antd';
const { Title } = Typography;

const HeaderContent = () => {
  return (
    <Header style={{ background: '#FDF0D5' }}>
      <Title style={{ textAlign: 'center' }}>Карта пожаров</Title>
    </Header>
  );
};

export default HeaderContent;

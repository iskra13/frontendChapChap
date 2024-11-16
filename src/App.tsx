import { FC } from 'react';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';

import HeaderContent from './Components/header/Header';
import Map from './Components/map/Map';
import SideMenu from './Components/sideMenu/SideMenu';

import './App.css';

const App: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderContent />
      <Layout>
        <Content style={{ padding: '0px 70px', background: '#FDF0D5' }}>
          <Map />
        </Content>
        <SideMenu />
      </Layout>
      <Footer style={{ textAlign: 'center', background: '#FDF0D5' }}>
        chapChap ©{new Date().getFullYear()} Created by chapChap
      </Footer>
    </Layout>
  );
};

export default App;

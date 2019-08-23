import React, { useState } from 'react';
import { Layout, Icon } from 'antd';
import Nav from '../Nav';
import './index.less';
const { Header, Sider, Content } = Layout;

export default function BasicLayout(props){

  const [collapsed,setCollapsed] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      <Nav collapsed={collapsed}/>
      <Layout>
        <Header className="header">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content className="content">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import menu from '../../utils/menu';

const { Sider } = Layout;

export default function Nav(props){
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {menu.map(item => (
          <Menu.Item key={item.path}>
            <NavLink to={item.path}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}
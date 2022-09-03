import React from "react";
import {
  Link,
  Outlet,
  useNavigate
} from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
import "../../style/css/index.css";

const { Header, Content, Footer } = Layout;

export default () => {
  let navigate = useNavigate();
  const onClick = (e) => {
    navigate(`/about`);
  };

  return (
    // <div>
    //   <nav>
    //     <Link to="about">about</Link><br/>
    //     <Link to="me">me</Link>
    //   </nav>
    //   <Outlet />
    // </div>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          onClick={onClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><Link to="me">List</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="about">App</Link></Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}
'use client'
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, route, children) {
  return {
    key,
    icon,
    children,
    label,
    route,
  };
}

const items = [
  getItem("Home", "1", <FileOutlined />, "/dashboard/userdashboard"),
  getItem("Profile", "1", <FileOutlined />, "/dashboard/userdashboard/userprofile"),
  getItem("Update-Profile", "1", <FileOutlined />, "/dashboard/userdashboard"),
  getItem("Ticket", "1", <FileOutlined />, "/dashboard/userdashboard/alluser")
 

];

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="mt-24" style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={item.route}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
       
      </Layout>
    </Layout>
  );
};

export default AdminLayout;

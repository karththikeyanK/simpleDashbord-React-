import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import style from "../../../../src/dynamicStyle.json";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const sidebarWidth = collapsed ? 80 : 256

  const items = [
    {
      label: "Dashboard",
      key: "1",
      icon: <PieChartOutlined />,
      link: "/Dashboard",
    },
    { label: "Project", key: "2", icon: <DesktopOutlined />, link: "/Project" },
    // { label: "Reports", key: "3", icon: <ContainerOutlined /> },
    {
      label: "Reports",
      key: "sub1",
      icon: <MailOutlined />,
      children: [
        { label: "Reports", key: "5", link: "/Reports" },
        { label: "Time Sheet", key: "6", link: "/Reports/TimeSheet" },
        // { label: "Option 7", key: "7" },
        // { label: "Option 8", key: "8" },
      ],
    },
    {
      label: "Teams",
      key: "sub2",
      icon: <AppstoreOutlined />,
      children: [
        { label: "Team Members", key: "9", link: "/Teams/TeamMembers" },
        { label: "Teams", key: "10", link: "/Teams" },
        // {
        //   label: "Submenu",
        //   key: "sub3",
        //   children: [
        //     { label: "Option 11", key: "11" },
        //     { label: "Option 12", key: "12" },
        //   ],
        // },
      ],
    },
  ]

  return (
    <div
      style={{
        width: sidebarWidth,
        height: "100vh",
        backgroundColor: style.sidebarColour,
      }}
    >
      <div className="px-3">
        <MenuOutlined
          className="p-2"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, fontSize: "1.3em" }}
        />
      </div>

      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        style={{ height: "100%", borderRight: 0 ,backgroundColor: style.sidebarColour}}
      >
        {items.map((item) =>
          item.children ? (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children.map((child) => (
                <Menu.Item key={child.key}>
                  <Link to={child.link} style={{ textDecoration: "none" }}>
                    {child.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link} style={{ textDecoration: "none" }}>
                {item.label}
              </Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </div>
  )
}

export default Sidebar

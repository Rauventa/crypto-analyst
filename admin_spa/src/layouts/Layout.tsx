import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout as LayoutAntd, Menu } from 'antd'
import { UserOutlined, TagOutlined, LineChartOutlined } from '@ant-design/icons'
import { RootRouter } from '../routers/RootRouter';
import { Header } from '../components/Header/Header';
import './Layout.scss'

const { Content, Sider } = LayoutAntd;

export const Layout = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed)
    }

    return (
        <LayoutAntd className="layout">
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="layout__menu">
                <div className="logo">ADMIN PANEL</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<LineChartOutlined />}>
                        <Link to='/'>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to='/users'>Users</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TagOutlined />}>
                        <Link to='/plans'>Plans</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <LayoutAntd className="layout__inner">
                <Header />
                <Content className="layout__content">
                    <RootRouter />
                </Content>
            </LayoutAntd>
      </LayoutAntd>
    )
}
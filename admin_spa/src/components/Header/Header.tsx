import React from 'react'
import { Button } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import './Header.scss'

export const Header = () => {
    return (
        <div className="header">
            <div className="header__actions">
                <Button danger icon={<LogoutOutlined />}>Log out</Button>
            </div>
        </div>
    )
}
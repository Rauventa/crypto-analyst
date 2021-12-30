import React from 'react';
import './Layout.scss'
import {RootRouter} from "../routers/RootRouter";
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';

export const Layout = () => {
  return (
    <div className={'layout'}>
      <div className="layout__overflow">
        <div className="layout__header">
          <Header />
        </div>
        <div className="layout__main">
          <div className="layout__main_menu">
            <Menu />
          </div>
          <div className="layout__main_content">
            <RootRouter />
          </div>
        </div>
      </div>
    </div>
  )
}
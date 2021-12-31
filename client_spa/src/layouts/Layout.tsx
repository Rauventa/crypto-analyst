import React from 'react';
import './Layout.scss';
import '../styles/theme.scss';
import {RootRouter} from "../routers/RootRouter";
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { useSelector } from 'react-redux';

export const Layout = () => {

  const theme = useSelector((state: any) => state.themeReducer.theme)

  return (
    <div className={`layout theme__${theme}`}>
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
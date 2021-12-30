import React from "react";
import {faChartLine, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import './Menu.scss'
import {MenuItem} from "./MenuItem/MenuItem";
import { MenuItemsProps } from "../../interfaces/Menu/Menu";

export const Menu = () => {

  const menuItems = [
    {
      title: 'Dashboard',
      icon: faBriefcase,
      path: '/'
    },
    {
      title: 'Market',
      icon: faChartLine,
      path: '/market'
    }
  ]

  return (
    <div className={'menu'}>
      {menuItems.map((item: MenuItemsProps) => {
        return (
          <MenuItem
            {...item}
          />
        )
      })}
    </div>
  )
}
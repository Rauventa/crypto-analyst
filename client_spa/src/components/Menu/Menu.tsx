import React from "react";
import {faChartLine, faBriefcase, faSignOutAlt, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import './Menu.scss'
import {MenuItem} from "./MenuItem/MenuItem";
import { MenuItemsProps } from "../../interfaces/Menu/Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
      <div className="menu__main">
        {menuItems.map((item: MenuItemsProps) => {
          return (
            <MenuItem
              {...item}
            />
          )
        })}
      </div>
      <div className="menu__additional">
        <div className="menu__additional_item">
          <div className="menu__additional_item-icon">
            <FontAwesomeIcon icon={faSignInAlt} />
          </div>
          <div className="menu__additional_item-text">
            Log out
          </div>
        </div>
      </div>
    </div>
  )
}
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItemsProps } from "../../../interfaces/Menu/Menu";
import {useNavigate} from "react-router-dom";

export const MenuItem = ({
  icon,
  title,
  path
}: MenuItemsProps) => {

  const navigation = useNavigate()

  const handleClick = () => {
    navigation(path)
  }

  return (
    <div className={'menu__item'} onClick={handleClick}>
      <div className="menu__item_icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="menu__item_title">
        {title}
      </div>
    </div>
  )
}
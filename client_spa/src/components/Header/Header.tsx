import React from 'react';
import './Header.scss'
import {useDispatch} from "react-redux";
import {changeTheme} from "../../store/actions/themeActions";
import {Switcher} from "../Switcher/Switcher";

export const Header = () => {

  const dispatch = useDispatch()

  const handleChangeTheme = (checked: boolean) => {
    dispatch(changeTheme(checked ? 'dark' : 'light'))
  }

  return (
    <div className={'header'}>
      <div className="header__left">
        header
      </div>
      <div className="header__right">
        <Switcher
          onChange={handleChangeTheme}
        />
      </div>
    </div>
  )
}
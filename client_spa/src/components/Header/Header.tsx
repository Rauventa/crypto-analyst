import React from 'react';
import './Header.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../../store/actions/themeActions";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

export const Header = () => {

  const dispatch = useDispatch()

  const navigation = useNavigate()

  const theme = useSelector((state: any) => state.themeReducer.theme)

  const handleChangeTheme = (theme: string) => {
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'))
  }

  //content - валюта, i18n - перевод текста, юзер, тема

  return (
    <div className={'header'}>
      <div className="header__logo">
        Crypto
        <span>
          Analyst
        </span>
      </div>
      <div className="header__content">
        <div className="header__content_user" onClick={() => navigation('/profile')}>
          <img src="https://www.lse.ac.uk/united-states/Assets/Images/People-images/Paul-Apostolidis-200x200.jpg" alt="pic"/>
          <div className="header__content_user-name">
            Devon Lane
          </div>
        </div>
        <div className="header__content_theme" onClick={() => handleChangeTheme(theme)}>
          <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
        </div>
      </div>
    </div>
  )
}
import React, { useState } from "react";
import Switch from "react-switch";
import './Switcher.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

interface SwitcherProps {
  className?: string,
  onChange: (checked: boolean) => void
}

export const Switcher = ({
  className,
  onChange,
}: SwitcherProps) => {

  const [value, setValue] = useState<boolean>(false)

  const handleClick = (checked: boolean) => {
    setValue(checked)

    onChange(checked)
  }

  return (
    <Switch
      className={className || ''}
      onChange={handleClick}
      checked={value}
      checkedIcon={<FontAwesomeIcon icon={faMoon} />}
      uncheckedIcon={<FontAwesomeIcon icon={faSun} />}
    />
  )
}
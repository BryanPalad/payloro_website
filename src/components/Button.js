import React from 'react'

const AppButton = (props) => {
  const {buttonStyle, buttonName} = props;
  return (
    <button className={buttonStyle}>{buttonName}</button>
  )
}

export default AppButton
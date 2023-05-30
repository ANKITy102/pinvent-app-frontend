import React from 'react'
import "./InfoBox.scss"
const InfoBox = ({bgColor, title, count, icon}) => {
  return (
    <div className={`info-box ${bgColor}`}>
        <span className="info-icon --color-white">
            {icon}
        </span>
        <span className="info-text">
            <p>{title}</p>
            <p>{count}</p>
        </span>
    </div>
  )
}

export default InfoBox

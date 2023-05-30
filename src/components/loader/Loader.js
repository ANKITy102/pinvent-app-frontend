import React from 'react'
import loaderImg from "../../assets/loader.gif"
import ReactDom from "react-dom"
import "./Loader.scss"
const Loader = () => {
  return ReactDom.createPortal(
    <div className="wrapper">
        <div className="loader">
            <img src={loaderImg} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export const SpinnerImg = () =>{
    return (
        <div className="--center-all">
            <img src={loaderImg} alt="Loading..." />
        </div>
    )
}

export default Loader

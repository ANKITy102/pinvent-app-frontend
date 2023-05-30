import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
const activeLink = ({ isActive }) => {
  return (isActive ? "active" : "link")
}
const activeSublink = ({ isActive }) => {
  return (isActive ? "active" : "link")
}
const SideBarItem = ({ item,  isOpen }) => {
  const [expandMenu, setExpandMenu] = useState(false);
  if (item.childrens) {

    return (
      <div className={expandMenu ? "sidebar-item s-parent open" : "sidebar-item s-parent"}>
        <div className="sidebar-title" style={{}} onClick={() => setExpandMenu(!expandMenu)} >
          <span>
            {item.icon && <div className="icon">{item.icon}</div>}
            {isOpen && <div> {item.title}</div>}
          </span>
          <MdKeyboardArrowRight size={25} className="arrow-icon" />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => {
            return (
              <div className="s-child" key={index}>
                <NavLink to={child.path} className={activeSublink}>
                  <div className="sidebar-item">
                    <div className="sidebar-title">
                      {child.icon && <div className="icon">{child.icon}</div>}
                      {isOpen && <div>{child.title}</div>}
                    </div>
                  </div>
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  else {
    return (
      <NavLink to={item.path} className={activeLink}>
        {/* By defualt the navlink provide the isActive attribute to know the link is active or not */}
        <div className="sidebar-item s-parent">
          <div className="sidebar-title">
            <span>

            {item.icon && <div className="icon">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    )
  }
}

export default SideBarItem
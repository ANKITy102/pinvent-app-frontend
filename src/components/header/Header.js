import React from 'react'
import { SET_LOGIN, selectName } from '../../redux/features/auth/authSlice';
// import { Dispatch } from '@reduxjs/toolkit';
import { logoutUser } from '../../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const logout = async ()=>{
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login")

  }
  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3>
            <span className="--fw-thin">Welcome, </span>
            <span className="--color-danger">{name} </span>
        </h3>
        <button className="--btn --btn-danger" onClick={logout}>Logout</button>
      </div>
        <hr />
    </div>
  )
}

export default Header

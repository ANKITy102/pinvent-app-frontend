import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { changePassword } from '../../services/authService';
import Card from '../card/Cardf';
import "./ChangePassword.scss"
import { useNavigate } from 'react-router-dom';
const initialState = {
    oldPassword: "",
    password: "",
    password2: ""
}
const ChangePassword = () => {
    const navigate = useNavigate()
    const [formData, setformData] = useState(initialState);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData, [name]: value
        })
    }
    const { oldPassword, password, password2 } = formData;
    const changePass = async (e) => {
        e.preventDefault()
        if (password !== password2) {
            return toast.error("New passwords do not match")
        }
        const formData = {
            oldPassword,
            password
        }
        const data = await changePassword(formData);
        toast.success(data)
        navigate("/profile")
    }
    return (
        <div className="change-password">
            <Card cardClass={"password-card"}>
                <h3>Change Password</h3>
                <form action="" onSubmit={changePass} className="--form-control">
                    <input
                        type="password"
                        placeholder = "Old Password"
                        required
                        name="oldPassword"
                        value={oldPassword}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder = "New Password"
                        required
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder = "Confirm New Password"
                        required
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                    />
                    <button className="--btn --btn-primary">Reset Password</button>
                </form>
            </Card>
        </div>
    )
}

export default ChangePassword

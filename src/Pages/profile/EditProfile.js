import React, { useEffect, useState } from 'react'
import "./Profile.scss"
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/auth/authSlice';
import Loader from '../../components/loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/card/Cardf';
import { toast } from 'react-toastify';
import { updateUser } from '../../services/authService';
import ChangePassword from '../../components/changePassword/ChangePassword';
const EditProfile = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector(selectUser);
    const { email } = user;

    useEffect(() => {
        if (!email) {
            navigate('/profile')
        }
    }, [email, navigate])
    const initialState = {
        name: user?.name,
        phone: user?.phone,
        bio: user?.bio,
        photo: user?.photo,
        email: user?.email
    }
    const [profile, setProfile] = useState(initialState);
    const [profileImage, setProfileImage] = useState("");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value })
    }
    const handleImageChange = (e) => {
        setProfileImage(e.target.files[0])
    }
    const saveProfile =async(e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            let imageURL;
            if (
                profileImage && (profileImage.type === "image/jpeg"
                    || profileImage.type === "image/jpg"
                    || profileImage.type === "image/png"
                )
            ) {
                const image = new FormData();
                image.append("file", profileImage);
                image.append("clound_name","did1ycjid");
                image.append("upload_preset","gz1p0iyp")


                //First  save image to cloudinary
                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/did1ycjid/image/upload",{
                        method:"post",
                        body: image
                    })
                    const imgData = await response.json()
                   
                    imageURL = imgData.url.toString();
                    
            }    
                // Save Profile
                const formData = {
                    name : profile.name,
                    phone: profile.phone, 
                    bio: profile.bio,
                    photo: profileImage? imageURL : profile.photo
                }
                const data = await updateUser(formData)
                console.log(data)
                toast.success("User Updated");
                navigate('/profile')
                setIsLoading(false);
            
        }
        catch (error) {
            console.log(error);
            setIsLoading(false)
            toast.error(error.message);
        }
    }
    return (
        <div className="profile --my2">
            {isLoading && <Loader />}
            <Card cardClass={`card --flex-dir-column`}>
                <span className="profile-photo">
                    <img src={user?.photo} alt="Profile pic" />
                </span>
                <form onSubmit={saveProfile} className="--form-control --m">
                    <span className="profile-data">
                        <p>
                            <label>Name : </label>
                            <input type='text' name="name" value={profile?.name} onChange={handleInputChange} />
                        </p>
                        <p>
                            <label>Email : </label>
                            <input type='text' name="email" disabled value={profile?.email} />
                            <br />
                            <code>Email cannot be changed.</code>
                        </p>
                        <p>
                            <label>Phone : </label>
                            <input type='number' onChange={handleInputChange} name="phone" value={profile?.phone} />
                        </p>
                        <p>
                            <label>Bio : </label>
                            <br />
                            <textarea onChange={handleInputChange} name="bio" value={profile?.bio} cols="30" rows="10"></textarea>
                        </p>
                        <p>
                            <label>Photo : </label>
                            <input onChange={handleImageChange} name="image" type='file' accept='image/*'/>
                        </p>
                        <div>

                            <button className="--btn --btn-primary">
                                Edit Profile
                            </button>

                        </div>
                    </span>
                </form>
            </Card>
            <br />
            <ChangePassword/>
        </div>
    )
}

export default EditProfile

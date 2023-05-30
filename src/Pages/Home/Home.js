import React from 'react'
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import "./Home.scss"
import heroImg from '../../assets/inv-img.png'
import { ShowOnLogin, ShowOnLogout,  } from '../../protect/HiddenLink';
const Home = () => {
    return (
        <div className="home">
            <nav className="container --flex-between">
                <div className="logo">
                    <RiProductHuntLine size={35} />
                </div>
                <ul className="home-links">
                    <ShowOnLogin>
                    <li>
                        <button className="--btn --btn-primary">
                            <Link to="/dashboard">DashBoard</Link>
                        </button>
                    </li>
                    </ShowOnLogin>
                    <ShowOnLogout>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <button className="--btn --btn-primary">
                            <Link to="/login">Login</Link>
                        </button>
                    </li>
                    </ShowOnLogout>
                </ul>
            </nav>
            {/* Hero section*/}
            <section className="container hero">
                <div className="hero-text">
                    <h2>
                        Inventory & Stock Management Solution
                    </h2>
                    <p>
                        Inventory system to control and manage proucts in the warehouse in real 
                        timeand integrated to make it easier to develop your business.
                    </p>
                    <div className="hero-buttons">
                        <button className="--btn --btn-secondary">
                            <Link to="/dashboard">Free Trial 1 Month</Link>
                        </button>
                    </div>
                    < div className="--flex-start">

                        <NumberText num="14K" text="Brand Owners" />
                        <NumberText num="23K" text="Active Users owners" />
                        <NumberText num="500+" text="Partners" />
                    </div>
                </div>
                <div className="hero-image">
                    <img src={heroImg } alt="Inventory" />
                </div>
            </section>
        </div>
    )
}

const NumberText = ({ num, text }) => {
    return (
        <div className="--mr">
            <h3 className="--color-white">{num}</h3>
            <p className="--color-white">{text}</p>
        </div>
    )
}
export default Home

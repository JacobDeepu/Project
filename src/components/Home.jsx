import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import '../Styles/Home.css'
import BannerImage from "./../assets/images/skilled.jpg";
//import { useNavigate } from "react-router-dom";
//import { Register } from './Register'
import "./Home.css";
export const Home = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");

    // const [openModal,setOpenModal]=useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone);
    };

    return (
        <div className="Home">
            <div className="form-left" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="form-right">
                    <h2 align="center">Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="phone">phone number</label> <br />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" placeholder="+91 90******21" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                        <br />
                        <label htmlFor="password">password</label>
                        <br />
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                        <br />
                    </form>
                    <br />
                    <br />
                    <span>
                        {" "}
                        <button className="button_log1" type="submit" onClick={() => navigate("/jobsearch")}>
                            Log In As Employee
                        </button>
                    </span>
                    <span>
                        <button className="button_log2" type="submit" onClick={() => navigate("/employer")}>
                            Log In As Employer
                        </button>
                    </span>
                    <br /> <br />
                    <br />
                    <button className="link-btn" onClick={() => navigate("/selectreg")}>
                        Don't have an account? Register here.
                    </button>
                </div>
            </div>

            <div className="adds"></div>
        </div>
    );
};

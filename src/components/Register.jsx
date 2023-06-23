import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registry.css";

export const Register = () => {
    const [phoner, setPhoner] = useState("");
    const [passr, setPassr] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const [birth, setBirth] = useState("");
    const [address, setAddress] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [skill, setSkill] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phoner);
    };

    return (
        <div className="register">
            <div className="emp_reg">
                <div className="form1">
                    <h1>EMPLOYEE REGISTRATION</h1>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="name">Full Name</label>
                                </td>
                                <td>
                                    <span>
                                        {" "}
                                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <label htmlFor="address">Address</label>
                                </td>
                                <td>
                                    <span>
                                        {" "}
                                        <textarea className="input" onChange={(e) => setAddress(e.target.value)} id="address" name="address" placeholder="add address" />
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <label htmlFor="birth">Birth</label>
                                </td>
                                <td>
                                    <span>
                                        <input value={birth} type="Date" name="birth" onChange={(e) => setBirth(e.target.value)} id="birth" />
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <label htmlFor="gender">Gender</label>
                                </td>

                                <td>
                                    <input value={gender} type="radio" name="male" onChange={(e) => setGender(e.target.value)} id="gender" />
                                    male
                                    <input value={gender} type="radio" name="female" onChange={(e) => setGender(e.target.value)} id="gender" />
                                    female
                                    <input value={gender} type="radio" name="others" onChange={(e) => setGender(e.target.value)} id="gender" />
                                    others
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    {" "}
                                    <label className="label">Age</label>{" "}
                                </td>

                                <td>
                                    <input className="input" type="textbox" />
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <label htmlFor="aadhar">Aadhar</label>
                                </td>
                                <td>
                                    <span>
                                        {" "}
                                        <input value={aadhar} name="aadhar" onChange={(e) => setAadhar(e.target.value)} id="aadhar" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <label htmlFor="skill">Skill</label>
                                </td>
                                <td>
                                    <span>
                                        {" "}
                                        <input list="skills" onChange={(e) => setSkill(e.target.value)} id="skill" placeholder="Select your skills" />
                                        <datalist id="skills">
                                            <option value="Carpenter" />
                                            <option value="Plumber" />
                                            <option value="Painter" />
                                            <option value="Electrician" />
                                            <option value="Mechanic" />
                                        </datalist>{" "}
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    {" "}
                                    <label htmlFor="phone">Phone Number</label>
                                </td>
                                <td>
                                    <span>
                                        {" "}
                                        <input value={phoner} onChange={(e) => setPhoner(e.target.value)} id="phone" name="phone" placeholder="+919072194621" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td>
                                    <label htmlFor="password">Set Password</label>
                                </td>
                                <td>
                                    <span>
                                        {" "}
                                        <input value={passr} onChange={(e) => setPassr(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />
                        </table>
                    </form>
                    <button type="submit" className="buttons" onClick={() => navigate("/")}>
                        Register
                    </button>
                    <br />
                    <button className="reglogbut" onClick={() => navigate("/")}>
                        Already have an account? Login here.
                    </button>
                </div>
            </div>
        </div>
    );
};

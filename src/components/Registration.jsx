import React from "react";

import "./Registration.css";
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();

    return (
        <div className="main">
            <h1>EMPLOYER REGISTRATION</h1>
            <br />
            <div className="emp_regs">
                <div className="formhead">
                    {" "}
                    <h1>Registration Form</h1>
                </div>
                <form className="forms">
                    <div className="div">
                        <table>
                            <tr>
                                <td>
                                    <label className="labels">fullname</label>
                                </td>
                                <td>
                                    <span>
                                        {" "}
                                        <input className="inputs" type="textbox" />
                                    </span>
                                    <br />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <label className="labels">gender</label>
                                </td>

                                <td>
                                    <input type="radio" value="Male" name="gender" /> Male
                                    <input type="radio" value="Female" name="gender" /> Female
                                    <input type="radio" value="Other" name="gender" /> Other
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    {" "}
                                    <label className="labels">DOB</label>{" "}
                                </td>

                                <td>
                                    <input className="inputs" type="date" />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    {" "}
                                    <label className="labels">Address</label>
                                </td>
                                <td>
                                    <textarea className="inputs" />
                                </td>
                            </tr>

                            <br />
                            <tr>
                                <td>
                                    <label className="labels">phone no</label>
                                </td>
                                <td>
                                    <input className="inputs" type="textbox" />
                                </td>
                            </tr>

                            <br />
                            <tr>
                                <td>
                                    <label>set password</label>
                                </td>
                                <td>
                                    <input className="inputs" type="password" placeholder="********" />
                                </td>
                            </tr>
                            <br />
                            <br />
                        </table>
                        <button className="buttons" type="submit" onClick={() => navigate("/")}>
                            Register
                        </button>

                        <br />
                        <br />

                        <button className="reglogbut" onClick={() => navigate("/")}>
                            {" "}
                            already have an account?login here
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;

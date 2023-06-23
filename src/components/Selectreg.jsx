import React from "react";
import "./Selectreg.css";
//import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
//import Registration from './components/Registration';
//import { useNavigate} from 'react-router-dom';
//import { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import { redirect } from 'react-router-dom'
function Selectreg() {
    const navigate = useNavigate();

    return (
        <div className="select">
            <form action="/register1" className="selectform">
                <h3>REGISTER AS:</h3>
                <br />
                <br />

                <button className="selectbutton" onClick={() => navigate("/register")}>
                    {" "}
                    EMPLOYER
                </button>

                <br />
                <br />
                <br />
                <br />

                <button className="selectbutton" onClick={() => navigate("/employeeregister")}>
                    EMPLOYEE{" "}
                </button>
            </form>
        </div>
    );
}

export default Selectreg;

import React from "react";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./JobSearch.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
//import JobList from './JobList';
//import { BrowserRouter } from 'react-router-dom';

export default function JobSearch() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const navigate = useNavigate();
    const optionList = [
        { value: "Electritian", label: "Electritian", href: "/ele" },
        { value: "Plumber", label: "Plumber" },
        { value: "Carpender", label: "Carpender" },
        { value: "Cocunut climber", label: "Cocunut climber" },
        { value: "Grass cutter", label: "Grass cutter" },
        { value: "Others", label: "Others" },
    ];
    return (
        <div className="App" style={{ backgroundImage: "bg1.jpeg" }}>
            <div>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <h1>JOB SEEKER</h1>
            <br />
            <br />
            <div id="wrapper" className="container">
                <form style={{ width: "600px" }} className="forma">
                    <table>
                        <tr>
                            <td>
                                <label className="labeljob">Search available jobs :</label>
                            </td>
                            <td>
                                <Select options={optionList} onChange={(opt) => console.log(opt.label, opt.value)} className="form-control" id="input-field" placeholder="Search job" />
                            </td>
                            <td>
                                <button onClick={() => navigate("/joblist")} className="buttons">
                                    search
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./JobSearch.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";

export default function JobList() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [sort, setSort] = useState("sort");

    const handleChange = (event) => {
        setSort(event.target.value);
    };
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
                <h2 className="listing"></h2>
                <table className="forma">
                    <tr>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Job Description</th>
                        <th></th>
                        <th>
                            <select value={sort} onChange={handleChange} className="buttons" style={{ backgroundColor: "lightcyan" }}>
                                <option>sort</option>
                                <option>Distance</option>
                                <option>Amount</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <td>Joy</td>
                        <td>Trivandrum</td>
                        <td>Seting electrical equipment on home</td>
                        <td>
                            <button className="buttons">Apply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Megha</td>
                        <td>Sreekaryam</td>
                        <td>Repairing the electric plug and switches</td>
                        <td>
                            <button className="buttons">Apply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Subash</td>
                        <td>Kazhakootam</td>
                        <td>Maintenance of electrical circuits</td>
                        <td>
                            <button className="buttons">Apply</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

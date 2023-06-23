import Select from "react-select";
import "./JobSearch.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
function Employer() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const optionList = [
        { value: "Electrician", label: "Electrician" },
        { value: "Plumber", label: "Plumber" },
        { value: "Carpender", label: "Carpender" },
        { value: "Cocunut climber", label: "Cocunut climber" },
        { value: "Grass cutter", label: "Grass cutter" },
        { value: "Others", label: "Others" },
    ];
    return (
        <div className="App">
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
            <h1 className="container">EMPLOYER</h1>
            <br />
            <br />
            <div id="wrapper" className="container">
                <form action="/jobpost" style={{ backgroundColor: "lightgray" }} className="forma">
                    <h2>JOB POSTING</h2>
                    <br />
                    <table>
                        <tr>
                            <td>
                                <label>Job Name : </label>
                            </td>
                            <td>
                                <Select options={optionList} id="input-field" placeholder="Select job" />
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <label>Description : </label>
                            </td>
                            <td>
                                <textarea></textarea>
                            </td>
                        </tr>{" "}
                        <br />
                        <tr>
                            <td>
                                <label>Address : </label>
                            </td>
                            <td>
                                <textarea></textarea>
                            </td>
                        </tr>{" "}
                        <br />
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" className="buttons">
                                    post
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}
export default Employer;

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
        <section className="pt-24 main">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0" style={{ backgroundImage: "bg1.jpeg" }}>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {/* <div className="navbar">
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
                </nav> */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"><b>JOB SEEKER</b></h1>
            <br />
            <div id="wrapper" className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form style={{ width: "600px" }} className="space-y-4 md:space-y-6">
                    <table>
                        <tr>
                            <td>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search available jobs :</label>
                            </td>
                            <td>
                                <Select options={optionList} onChange={(opt) => console.log(opt.label, opt.value)} className="form-control" id="input-field" placeholder="Search job" />
                            </td>
                            <td>
                                <button onClick={() => navigate("/joblist")} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    search
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}

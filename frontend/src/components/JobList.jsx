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
        <section className="pt-24 main">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
            {/* <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"> */}
            <div className="">
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
                </nav>
            </div> */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">JOB SEEKER</h1>

            <div id="wrapper" className="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <table style={{ width: "800px" }} className="space-y-4 md:space-y-6">
                    <tr>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Job Description</th>
                        <th></th>
                        <th>
                            <select value={sort} onChange={handleChange} className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ backgroundColor: "lightcyan" }}>
                                <option style={{color:"black"}}>sort</option>
                                <option style={{color:"black"}}>Distance</option>
                                <option style={{color:"black"}}>Amount</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <td>Joy</td>
                        <td>Trivandrum</td>
                        <td>Seting electrical equipment on home</td>
                        <td>
                            <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Megha</td>
                        <td>Sreekaryam</td>
                        <td>Repairing the electric plug and switches</td>
                        <td>
                            <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Subash</td>
                        <td>Kazhakootam</td>
                        <td>Maintenance of electrical circuits</td>
                        <td>
                            <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
        </div>
        </section>
    );
}

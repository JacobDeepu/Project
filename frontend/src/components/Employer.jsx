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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">EMPLOYER</h1>
        
            <div id="wrapper" className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form action="/jobpost" className="space-y-4 md:space-y-6">
                    <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Job  Posting</h2>
                    <br />
                    <table>
                        <tr>
                            <td>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Name : </label>
                            </td>
                            <td>
                                <Select options={optionList} id="input-field" placeholder="Select job" />
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description : </label>
                            </td>
                            <td>
                                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                            </td>
                        </tr>{" "}
                        <br />
                        <tr>
                            <td>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address : </label>
                            </td>
                            <td>
                                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                            </td>
                        </tr>{" "}
                        <br />
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Post
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
export default Employer;




// import { Button, TextField, Typography } from '@mui/material';
// import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import React, { useState } from 'react';

// export const Employer = ({ data, setJob }) => {
//   const [job, setEmployerDetails] = useState({
//     ename: '',
//     ejob: '',
//     eaddress: '',
//     ejdescription: ''
//   });

//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     setEmployerDetails((job) => ({ ...job, [name]: value }));
//   };

//   const addHandler = () => {
//     setJob((prevData) => [...prevData, job]);
//     setEmployerDetails({
//       ename: '',
//       ejob: '',
//       eaddress: '',
//       ejdescription: '',
//     });
//   };

//   return (
//     <div style={{ paddingTop: '100px' }}>
//       <Typography>Employer Name : </Typography>
//       <TextField variant="outlined" name="ename" value={job.ename} onChange={inputHandler} />
//       <Typography>Job : </Typography>
//       <TextField variant="outlined" name="ejob" value={job.ejob} onChange={inputHandler} />
//       <Typography>Address : </Typography>
//       <TextField variant="outlined" name="eaddress" value={job.eaddress} onChange={inputHandler} />
//       <Typography>Job Description : </Typography>
//       <TextField variant="outlined" name="ejdescription" value={job.ejdescription} onChange={inputHandler} />
//       <br />
//       <br />
//       <Button variant="contained" color="success" onClick={addHandler}>
//         Submit
//       </Button>
//     </div>
//   );
// };

// export const Home = ({ data }) => {
//   return (
//     <div style={{ paddingTop: '100px' }} className='App'>
//       <TableContainer>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Job</TableCell>
//             <TableCell>Address</TableCell>
//             <TableCell>Job Description</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((item, index) => {
//             return (
//               <TableRow key={index}>
//                 <TableCell>{item.ename}</TableCell>
//                 <TableCell>{item.ejob}</TableCell>
//                 <TableCell>{item.eaddress}</TableCell>
//                 <TableCell>{item.ejdescription}</TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </TableContainer>
//     </div>
//   );
// };

// employee
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registry.css";
import axios from 'axios';

export const Register = () => {
    const [inputData, setInputData] = useState({
        name:'',
        email:'',
        address:'',
        gender:'',
        dob:'',
        adhar:'',
        skill:'',
        phone:'',
        password:'',
        confirmpassword:''
    })
    const handleChange=(e)=>{
        const {name,value} = e.target;
        if (name === "gender") {
            // Set the value directly, as it's a radio button
            setInputData((inputData) => ({ ...inputData, gender: value }));
        } else {
            // For other fields, update as before
            setInputData((inputData) => ({ ...inputData, [name]: value }));
        }
        console.log(inputData);
        
    }

    const RegisterUser = () => {
        // required field validation
        if (!inputData.name || !inputData.email || !inputData.address || !inputData.gender || !inputData.dob || !inputData.adhar || !inputData.skill || !inputData.phone || !inputData.password || !inputData.confirmpassword) {
         alert('Please fill in all the required fields.');
         return;
       }


       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputData.email)) {
        alert('Please enter a valid email address.');
        return;
        }
        if (inputData.password === inputData.confirmpassword) {
          axios
            .post("http://localhost:5173/employeereg", inputData)
            .then(() => {
              alert("Registered Successfully");
              setInputData({
                name:'',
        email:'',
        address:'',
        gender:'',
        dob:'',
        adhar:'',
        skill:'',
        phone:'',
        password:'',
        confirmpassword:''

              })
           
            })
            .catch((err) => {
              alert("Error: Registration failed. Please try again later.");
            });
        } else {
          alert("Error: Passwords do not match.");
        }
      };

    // const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(phoner);
    // };

    return (
        <section className="pt-24 main">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">EMPLOYEE REGISTRATION</h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <input
                                    // type="text"
                                    name="name"
                                    // id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Name"
                                    required=""
                                    value={inputData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input
                                    // type="text"
                                    name="email"
                                    // id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email"
                                    required=""
                                    value={inputData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Address
                                </label>
                                <input
                                    // type="text"
                                    name="address"
                                    // id="address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Address"
                                    required=""
                                    value={inputData.address}
                                    onChange={handleChange}
                                />
                            </div>
<div>
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Gender
    </label>
    <div className="flex">
        <div className="flex items-center mr-4">
            <input
                // id="inline-radio"
                type="radio"
                defaultValue=""
                name="gender"
                value="Male"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={inputData.gender === "Male"}
                onChange={handleChange}
            />
            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Male
            </label>
        </div>
        <div className="flex items-center mr-4">
            <input
                // id="inline-radio"
                type="radio"
                defaultValue=""
                name="gender"
                value="Female"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={inputData.gender === "Female"}
                onChange={handleChange}
            />
            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Female
            </label>
        </div>
        <div className="flex items-center mr-4">
            <input
                // id="inline-radio"
                type="radio"
                defaultValue=""
                name="gender"
                value="Other"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={inputData.gender === "Other"}
                onChange={handleChange}
            />
            <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Other
            </label>
        </div>
    </div>
    </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Date Of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    // id="dob"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required=""
                                    value={inputData.dob}
                                    onChange={handleChange}
                                />
                            </div> 
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Aadhar
                                </label>
                                <input
                                    // type="text"
                                    name="adhar"
                                    // id="adhar"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Aadhar"
                                    required=""
                                    value={inputData.adhar}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Skill
                                </label>
                                <input
                                    // type="text"
                                    name="skill"
                                    // id="skill"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Skill"
                                    required=""
                                    value={inputData.skill}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone
                                </label>
                                <input
                                    // type="text"
                                    name="phone"
                                    // id="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Phone"
                                    required=""
                                    value={inputData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    // id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={inputData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    // id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    value={inputData.confirmpassword}
                                    onChange={handleChange}
                                />
                            </div>
                           <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required=""
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the{" "}
                                        <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
    </div>
                            <button
                                type="submit"
                                onClick={() => navigate("/")}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

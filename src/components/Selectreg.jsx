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
        <section className="pt-24 select">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">You are Registering As ?</h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <button
                                    type="submit"
                                    onClick={() => navigate("/register")}
                                    className="w-full my-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Employer
                                </button>
                                <button
                                    type="submit"
                                    onClick={() => navigate("/employeeregister")}
                                    className="w-full my-10 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Selectreg;

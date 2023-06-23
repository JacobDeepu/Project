import "./App.css";

import Navbar from "./components/Navbar";
import Registration from "./components/Registration";

import Selectreg from "./components/Selectreg";

import { Register } from "./components/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";
import Employer from "./components/Employer";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/selectreg" element={<Selectreg />} />
                    <Route exact path="/register" element={<Registration />} />
                    <Route exact path="/employeeregister" element={<Register />} />
                    <Route exact path="/jobsearch" element={<JobSearch />} />
                    <Route exact path="/joblist" element={<JobList />} />
                    <Route exact path="/employer" element={<Employer />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
                <div className="foot">
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

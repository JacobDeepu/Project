import React from "react";
import "./About.css";
function About() {
    return (
        <div className="mainabout">
            <h2 className="headabout">About Us</h2>
            <div className="para">
                <p>
                    <br />
                    <br />
                    The main aim of DESWA is the development of a decentralized platform, built on blockchain technology, to facilitate the connection between skilled workers and
                    <br />
                    potential clients. This innovative platform will ensure a secure, transparent, and decentralized environment. Skilled workers will be able to create profiles, showcasing
                    <br />
                    their abilities and experience, and can optionally upload their certification from the local governing authority. Clients will then be able to connect with these skilled
                    <br />
                    workers through the platform, enabling easy access to their services. This platform offers a potential solution to the issues faced by skilled workers in the informal
                    <br />
                    economy, such as the lack of regulation, intermediaries, and fair labor practices.
                </p>
            </div>
        </div>
    );
}

export default About;

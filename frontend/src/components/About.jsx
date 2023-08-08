import React from "react";
import "./About.css";
function About() {
    return (
        <section className="pt-24 main">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0" style={{ backgroundImage: "bg1.jpeg" }}>
        <div style={{alignContent:"center"}} className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">About</h1>
                <p>
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
        </section>
    );
}

export default About;

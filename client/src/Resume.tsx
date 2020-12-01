import React from 'react';
import './Resume.css';
import './App.css';

function Resume(props){
    return(
        <div className="Card">
            <header className="Card-header">Nathanael Wisth</header>
            <ul id="headerlinks">
                <li><button className="buttons"><a href="mailto:nategonepro@gmail.com">nategonepro@gmail.com</a></button></li>
                <p>|</p>
                <li><button className="buttons"><a href="https://www.linkedin.com/in/nathanael-wisth/">LinkedIn</a></button></li>
            </ul>
            <div className="res-section">
                <p className="res-separator">
                    ______________________________________________________________
                </p>
                <p className="res-text-left">
                    I am currently a software development student at MATC with a 
                    strong personal interest in machine learning. I’ve been programming as a hobby 
                    since middle school, and my interest has steered toward data science as I see 
                    the opportunity to make a large impact through use of the field.
                </p>
            </div>
            <div className="res-section">
                <p className="res-separator">
                    ______________________________________________________________
                </p>
                <div className="res-text-left">
                    <h3>Education</h3>
                    <br/>
                    <h4>Milwaukee Area Technical College</h4>
                    <p>IT Web and Software Developer - Graduating December 2020</p>
                    <br/>
                    <h4>Dominican High School</h4>
                    <p>Graduated 2018</p>
                </div>
            </div>
            <div className="res-section">
                <p className="res-separator">
                    ______________________________________________________________
                </p>
                <div className="res-text-left">
                    <h3>Skills</h3>
                    <p>Python</p>
                    <p>C#</p>
                    <p>Java</p>
                    <p>SQL</p>
                    <p>Pandas</p>
                </div>
            </div>
        </div>
    );
}

export default Resume;
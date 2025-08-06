import React from 'react'
import profile from "../Sources/Profile.PNG"
import About from "../Sources/About.PNG"
import Html from "../Sources/Html.png"
import Css from "../Sources/Css.png"
import Js from "../Sources/Javascript.png"
import Reactjs from "../Sources/React.png"
import C from "../Sources/C++.png"
import Mongodb from "../Sources/Mongodb.jpg"
import express from "../Sources/Expressjs.png"
import java from "../Sources/Java.png"
import dsa from "../Sources/Dsa.png"
import netflix from "../Sources/Netflix.png"
import news from "../Sources/News.png"
import email from "../Sources/Email.png"
import instagram from "../Sources/Instagram.png"
import github from "../Sources/github.png"


export default function Home() {
    const ScrollToSkill = () => {
        const elementt = document.getElementById('Skills');
        elementt.scrollIntoView({ behavior: "smooth" })
        document.getElementById("navbar-Mobile").classList.toggle("Navbar-Mobile-Show")
    }
    const ScrollToProjects = () => {
        const elementt = document.getElementById('Projects');
        elementt.scrollIntoView({ behavior: "smooth" })
        document.getElementById("navbar-Mobile").classList.toggle("Navbar-Mobile-Show")
    }
    const ScrollToContact = () => {
        const elementt = document.getElementById('Contact');
        elementt.scrollIntoView({ behavior: "smooth" })
        document.getElementById("navbar-Mobile").classList.toggle("Navbar-Mobile-Show")
    }
    const ScrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById("navbar-Mobile").classList.toggle("Navbar-Mobile-Show")
    }
    const DropNavbarMobile = () => {
        document.getElementById("navbar-Mobile").classList.toggle("Navbar-Mobile-Show")
    }
    return (
        <div id='home'>
            <div id="navbar" >
                <span id="navbar-name"><h1>Piyush tyagi</h1></span>
                <span id="navbar-contents">
                    <span id="navbar-contents-1" className="navbar-content" onClick={ScrollToHome}>Home</span>
                    <span id="navbar-contents-2" className="navbar-content" onClick={ScrollToSkill}>Skills</span>
                    <span id="navbar-contents-3" className="navbar-content" onClick={ScrollToProjects} >Projects</span>
                    <span id="navbar-contents-5" className="navbar-content" onClick={ScrollToContact} >Contact</span>
                </span>
                <span id="Corner-Navbar-Icon" onClick={DropNavbarMobile}>
                    <span className="Corner-Navbar-Line">.</span>
                    <span className="Corner-Navbar-Line">.</span>
                    <span className="Corner-Navbar-Line">.</span>
                </span>
            </div>
            <div id="navbar-Mobile" className='navbar-Mobile'>
                <span id="navbar-contents-1-Mobile" className="navbar-content-Mobile" onClick={ScrollToHome}>Home</span>
                <span id="navbar-contents-2-Mobile" className="navbar-content-Mobile" onClick={ScrollToSkill}>Skills</span>
                <span id="navbar-contents-3-Mobile" className="navbar-content-Mobile" onClick={ScrollToProjects} >Projects</span>
                <span id="navbar-contents-5-Mobile" className="navbar-content-Mobile" onClick={ScrollToContact} >Contact</span>

            </div>
            <div id="Introduction" >
                <span id="Introduction-text">
                    <span id='First-line-Introduction-text' className='Introduction-text-content'>Hello,</span>
                    <span id='Second-line-Introduction-text' className='Introduction-text-content'>I Am <b>Piyush Tyagi</b></span>
                    <span id='Third-line-Introduction-text' className='Introduction-text-content'>A Final Year CSE Student</span>
                    <span id='Fourth-line-Introduction-text' className='Introduction-text-content'>I make attractive webpages with pleasing User Interface. I am so eager to work in new projects and develop my skills more.</span>
                    <span id="Introduction-text-button-section">
                        <button id="Introduction-text-cv-button">My CV</button>
                    </span>
                </span>
                <span id="Introduction-image-box">
                    <img src={profile} id="Introduction-image" className='inc ' alt="" />
                </span>
            </div>
            <div id="About">
                <div id="About-heading">About me</div>
                <div id="About-contents">
                    <span id="About-contents-text-box">
                        <p>I am Piyush Tyagi, a 21 year old self taught Full Stack Developer to be, from New Delhi,India. <br /> I am proficient of many programming languages as well such as c++,java,etc. I am so excited to contribute my skills into your projects <br />
                            I am a Gymrat too and love to do workout on a daily basis to stay fit and maintain my personality.</p>
                    </span>
                    <span id="About-contents-image-box">
                        <img src={About} alt="" id="About-contents-image" />
                    </span>
                </div>
            </div>
            <div id="Skills">
                <div id="Skills-heading">My Skills</div>
                <div id="Skills-Contents">
                    <span id="Skill-Content-1" className="Skill-Content">
                        <span id="Skill-Content-1-image" className="Skill-Content-Image">
                            <img src={Html} alt="" id="Html-image" />
                        </span>
                        <span className="Skill-Content-1-text Skill-Content-Text">HTML</span>
                    </span>
                    <span id="Skill-Content-2" className="Skill-Content">
                        <span id="Skill-Content-2-image" className="Skill-Content-Image">
                            <img src={Css} alt="" id="Css-image" />
                        </span>
                        <span className="Skill-Content-2-text Skill-Content-Text">CSS</span>
                    </span>
                    <span id="Skill-Content-3" className="Skill-Content">
                        <span id="Skill-Content-3-image" className="Skill-Content-Image">
                            <img src={Js} alt="" id="Js-image" />
                        </span>
                        <span className="Skill-Content-3-text Skill-Content-Text">JavaScript</span>
                    </span>
                    <span id="Skill-Content-4" className="Skill-Content">
                        <span id="Skill-Content-4-image" className="Skill-Content-Image">
                            <img src={Reactjs} alt="" id="Reactjs-image" />
                        </span>
                        <span className="Skill-Content-4-text Skill-Content-Text">ReactJS</span>
                    </span>
                    <span id="Skill-Content-5" className="Skill-Content">
                        <span id="Skill-Content-5-image" className="Skill-Content-Image">
                            <img src={C} alt="" id="C++-image" />
                        </span>
                        <span className="Skill-Content-5-text Skill-Content-Text">C++</span>
                    </span>
                    <span id="Skill-Content-6" className="Skill-Content">
                        <span id="Skill-Content-6-image" className="Skill-Content-Image">
                            <img src={Mongodb} alt="" id="Mongodb-image" />
                        </span>
                        <span className="Skill-Content-6-text Skill-Content-Text">MongoDB</span>
                    </span>
                    <span id="Skill-Content-7" className="Skill-Content">
                        <span id="Skill-Content-7-image" className="Skill-Content-Image">
                            <img src={express} alt="" id="Express-image" />
                        </span>
                        <span className="Skill-Content-7-text Skill-Content-Text">ExpressJS</span>
                    </span>
                    <span id="Skill-Content-8" className="Skill-Content">
                        <span id="Skill-Content-8-image" className="Skill-Content-Image">
                            <img src={java} alt="" id="Java-image" />
                        </span>
                        <span className="Skill-Content-8-text Skill-Content-Text">Java</span>
                    </span>
                    <span id="Skill-Content-9" className="Skill-Content">
                        <span id="Skill-Content-9-image" className="Skill-Content-Image">
                            <img src={dsa} alt="" id="Dsa-image" />
                        </span>
                        <span className="Skill-Content-9-text Skill-Content-Text">Data structures and Algorithms</span>
                    </span>
                    <span id="Skill-Content-1" className="Skill-Content">
                        <span id="Skill-Content-1-image" className="Skill-Content-Image">
                            <img src={Html} alt="" id="Html-image" />
                        </span>
                        <span className="Skill-Content-1-text Skill-Content-Text">HTML</span>
                    </span>
                    <span id="Skill-Content-2" className="Skill-Content">
                        <span id="Skill-Content-2-image" className="Skill-Content-Image">
                            <img src={Css} alt="" id="Css-image" />
                        </span>
                        <span className="Skill-Content-2-text Skill-Content-Text">CSS</span>
                    </span>
                    <span id="Skill-Content-3" className="Skill-Content">
                        <span id="Skill-Content-3-image" className="Skill-Content-Image">
                            <img src={Js} alt="" id="Js-image" />
                        </span>
                        <span className="Skill-Content-3-text Skill-Content-Text">JavaScript</span>
                    </span>
                    <span id="Skill-Content-4" className="Skill-Content">
                        <span id="Skill-Content-4-image" className="Skill-Content-Image">
                            <img src={Reactjs} alt="" id="Reactjs-image" />
                        </span>
                        <span className="Skill-Content-4-text Skill-Content-Text">ReactJS</span>
                    </span>
                    <span id="Skill-Content-5" className="Skill-Content">
                        <span id="Skill-Content-5-image" className="Skill-Content-Image">
                            <img src={C} alt="" id="C++-image" />
                        </span>
                        <span className="Skill-Content-5-text Skill-Content-Text">C++</span>
                    </span>
                    <span id="Skill-Content-6" className="Skill-Content">
                        <span id="Skill-Content-6-image" className="Skill-Content-Image">
                            <img src={Mongodb} alt="" id="Mongodb-image" />
                        </span>
                        <span className="Skill-Content-6-text Skill-Content-Text">MongoDB</span>
                    </span>
                    <span id="Skill-Content-7" className="Skill-Content">
                        <span id="Skill-Content-7-image" className="Skill-Content-Image">
                            <img src={express} alt="" id="Express-image" />
                        </span>
                        <span className="Skill-Content-7-text Skill-Content-Text">ExpressJS</span>
                    </span>
                    <span id="Skill-Content-8" className="Skill-Content">
                        <span id="Skill-Content-8-image" className="Skill-Content-Image">
                            <img src={java} alt="" id="Java-image" />
                        </span>
                        <span className="Skill-Content-8-text Skill-Content-Text">Java</span>
                    </span>
                    <span id="Skill-Content-9" className="Skill-Content">
                        <span id="Skill-Content-9-image" className="Skill-Content-Image">
                            <img src={dsa} alt="" id="Dsa-image" />
                        </span>
                        <span className="Skill-Content-9-text Skill-Content-Text">Data structures and Algorithms</span>
                    </span>

                </div>

            </div>
            <div id="Projects">
                <div id="Projects-Heading">Projects</div>
                <div id="Project-Contents">
                    <div id="Project-1" className="Project">
                        <div id="Project-1-Text" className="Project-Text">
                            <div id="Project-1-Heading" className="Project-Text-Heading">News811</div>
                            <div id="Project-1-Explaination" className="Project-Text-Explanation">News811 is a simple News displaying website which fetches information from NewsAPI. It display news of many branches like science, medical, sports,etc.</div>
                            <div id="Project-1-Buttons" className="Projext-Text-Buttons">
                                <span id="ViewCode-Button-Project-1" className="Project-Button">
                                    <a className='ViewCode-Text' id='ViewCode-anchor' target='_blank' rel="noreferrer" href="https://github.com/piyushtyagii/News811">View code</a>
                                </span>
                                <span id="News-Noexplore-Text">This website don't display its all contents because the API from which news are fetched is only available for localhost use.</span>
                            </div>
                        </div>
                        <div id="Project-1-Image" className="Project-Image"><img id='Project-Actual-Image' src={news} alt="" /></div>
                    </div>
                    <div id="Project-2" className="Project">
                        <div id="Project-2-Text" className="Project-Text">
                            <div id="Project-2-Heading" className="Project-Text-Heading">Netflix Clone</div>
                            <div id="Project-2-Explaination" className="Project-Text-Explanation">I have tried my best to make this website similar to Netflix's original website. I have done backend development to get a user registered here, login and change password functionality is also present. But, apparantly Github doesn't host Backend. </div>
                            <div id="Project-1-Buttons" className="Projext-Text-Buttons">
                                <div id="ViewCode-Button-Project-1" className="Project-Button">
                                    <a className='ViewCode-Text' id='ViewCode-anchor' target='_blank' rel="noreferrer" href="https://github.com/piyushtyagii/Clone-website">View code</a>
                                </div>
                                <a id="Explore-Button-Project-1" href='https://piyushtyagii.github.io/NetflixClone/' target='_blank' rel="noreferrer" className="Project-Button">
                                    <span className='Explore-Text'>Explore</span>
                                    <span className="Explore-Arrow">&#8594;</span>
                                </a>
                            </div>
                        </div>
                        <div id="Project-1-Image" className="Project-Image"><img src={netflix} alt="" /></div>
                    </div>
                </div>
            </div>
            <div id="Contact">
                <div id="Contact-Heading">Let's work together</div>
                <div id="Contact-Email-Box">
                    <span id="Contact-Email-Logo"><img src={email} alt="" /></span>
                    <a target='_blank' rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLPtkPplWXGNsxVgSDZqgfXvgBgWXbDcwZDqWFrfwCWgBmkFBnXcQBlLcmJLDnMDxNSRLHg" id="Contact-Email-Text">tyagipiyush105@gmail.com</a>
                </div>
                <div id="Contact-Logos">
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/piyush-tyagi-32963a225/' id="Contact-Logo-1" className="Contact-Logo">in</a>
                    <a id="Contact-Logo-2" target='_blank' rel="noreferrer" href='https://github.com/piyushtyagii' className="Contact-Logo"><img src={github} alt="" /></a>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/piyushh.h?igsh=MWoyb2J3emV5cWdq&ut-m_source=qr' id="Contact-Logo-3" className="Contact-Logo"> <img src={instagram} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

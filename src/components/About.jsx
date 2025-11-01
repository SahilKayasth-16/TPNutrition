import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";
import Logo from '../assets/logo.png';
import pdf from '../assets/tp_logo.pdf';
import certificate from '../assets/certificate.jpg';
import certificate1 from '../assets/certificate1.jpg';
import certificate2 from '../assets/certificate2.jpg';

const About = () => {
    return (
        <>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.jpg'})`, 
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     height: '100vh'}}>
            <header>

                <nav className='navigationBar'>
                    <div className="container">
                        <a href={pdf} target="_blank" rel="noopener noreferrer">
                            <img src={Logo} alt="There is an logo" height={55} width={55} id='logo'/>
                        </a>
                        <span>&nbsp;&nbsp;&nbsp;TP Nutrition</span>
                    </div>
                    <div className="container1">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Transformation">Transformation</Link></li>
                        </ul>
                    </div>
                </nav>

            </header>

            <section>
                    <div className="Education">
                        <p><strong>Course Name:</strong> Bachelor of Physiotherapy(BPT)</p>
                        <p><strong>College Name:</strong>Uka Tarsadia University, Maliba Campus</p>
                        <p><strong>CGPA:</strong>8.22 (SEM 3)</p><br />

                        <p><strong>Course Name:</strong>Higher Secondary Certificate(HSC)</p>
                        <p><strong>School Name:</strong>SBR Science School, Bardoli</p>
                        <p><strong>Percentage:</strong> 83.33%</p><br />

                        <p><strong>Course Name:</strong> Secondary School Certificate(SSC)</p>
                        <p><strong>School Name:</strong>Parsi Trust English Medium School, Bardoli</p>
                        <p><strong>Percentage:</strong> 87.59%</p><br />
                    </div>

                    <div className="Certifications">
                        <div className="part">
                            <div className="item">
                                <div className="image">
                                    <img src={certificate} alt="There is an logo" height={125} width={125} id='logo'/>
                                </div>
                                <div className="description1">
                                    <p><strong>Course Name:</strong> Certified Personal Trainer (CPT)</p>
                                    <p><strong>Issued By:</strong> National Academy of Sports Medicine (NASM)</p>
                                </div>    
                            </div>

                            <div className="item">
                                <div className="image">
                                    <img src={certificate1} alt="There is an logo" height={125} width={125} id='logo'/>
                                </div>
                                <div className="description">
                                    <p><strong>Course Name:</strong> Certified Nutritionist </p>
                                    <p><strong>Issued By:</strong>FAAC</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="image">
                                    <img src={certificate2} alt="There is an logo" height={125} width={125} id='logo'/>
                                </div>
                                <div className="description">
                                    <p><strong>Course Name:</strong>Certified Fitness Professional (CFP)</p>
                                    <p><strong>Issued By:</strong> American Council on Exercise (ACE)</p>
                                </div>   
                            </div>     
                        </div>
                    </div>
            </section>
        </div>
        </>
    );
}
export default About;
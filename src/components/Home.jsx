import React, { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../styles/Home.css";
import Logo from '../assets/logo.png';
import pdf from '../assets/tp_logo.pdf';
import Img from '../assets/tanay.jpg';

const Home = () => {
    const navigate = useNavigate();

    const goToForm = () => {
        navigate("/Form");
    }
    return (
        <>
        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.jpg'})`, 
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundAttachment: 'fixed',
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
                <div className="img">
                    <img src={Img} alt="Couldn't load image" height={425} width={425} />
                </div>
                <div className="description">
                    <h1>Transform your body & life</h1>
                    <p>Hey, I am Tanay Parmar, a fitness enthusiast with a goal to spread awareness
                        about the importance of fitness and nutrition in our daily lives.
                    </p>
                    <div className="qualification">
                        <ul>
                            <li>Certified Personal trainer - Active Fitness Gym</li>
                            <li>Nutrition expert - ISSA Certified</li>
                        </ul>
                    </div>

                    <a href="#">
                        <button onClick={goToForm}>Book an appointment</button>
                    </a>
                </div>
                <div className="social_media">
                        <ul>
                            <a href="https://instagram.com/wellness_warrior_22" target="_blank" rel="noopener noreferrer">
                                <li><i className="fa-brands fa-instagram"></i></li>
                            </a>
                            <a href="https://facebook.com/tanay.parmar.752" target="_blank" rel="noopener noreferrer">
                                <li><i className="fa-brands fa-facebook-f"></i></li>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <li><i className="fa-brands fa-linkedin-in"></i></li>
                            </a>
                        </ul>
                </div>
            </section>
        </div>
        </>
    );
}

export default Home;
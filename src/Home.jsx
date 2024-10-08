import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import image from './me.jpg';
import './home.css';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';

function Home() {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 40,
            scale: 1.1,
            speed: 400,
        });
    }, []);

    return (
        <div id='bg' className='container-fluid d-flex align-items-center justify-content-center'>
            <div className='container p-3'>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className='mt-5 text-center'>
                        <h1 className='text-light fw-bold'>
                            <span style={{ boxShadow: '0 0 50px 0px',borderRadius:'20px' }}>FULL-STACK DEVELOPER</span>
                        </h1>
                        <p style={{ fontFamily: "Cinzel" }} className='text1 text-light mt-4'>
                            A seasoned MERN Stack Developer, seeking an exciting opportunity to contribute to a dynamic team. 
                            With a robust command of MongoDB, Express.js, React.js, and Node.js, I am eager to bring my skills 
                            to a forward-thinking team.
                        </p>
                        <div className='d-flex justify-content-center mt-4 tilt'>
                            <Link to='./myproject'>
                                <button
                                    style={{ color: 'black', boxShadow: '0 0 30px' }}
                                    className='button1 btn btn-primary p-3 fw-bold'
                                >
                                    My Projects
                                </button>
                            </Link>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className='d-flex justify-content-center mt-4'>
                        <img
                            src={image}
                            className='img1 img-fluid'
                            style={{ borderRadius: '100px', maxWidth: '80%', height: 'auto' }}
                            alt="Profile"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Home;

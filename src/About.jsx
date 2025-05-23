import React from 'react'
import './about.css'

function About() {
    return (
        <>

<div class='about d-flex align-items-center justify-content-center flex-column container'>
    <h1 class='mt-5 fw-bold' style={{color:'white',letterSpacing:'3px'}}>WHO I'M I ... ?</h1>

    <div class="shadow d-flex align-items-center justify-content-center mt-5 mb-3 ms-2 ">
        <p class='fs-3 ps-4 pe-4' style={{wordSpacing:'3px'}}>I'm <span style={{color:'White',boxShadow:'0 0  5px',borderRadius:'5px'}}>  ADHARSH.P  </span> ,a seasoned MERN Stack Developer, seeking an exciting opportunity to contribute to a dynamic team. As per my project Experience I can bring a wealth of expertise and a track record of successful project deliveries in the dynamic realm of full stack web development. With a robust command of MongoDB, Express.js, React.js and Node.js, I am eager to contribute my skills to a forward thinking team.</p>
    </div>

    <div class="row mt-5">
        <div class="col-md-6">
            <div class="card me-md-3 mb-3">
                <div class="card-body">
                    <h2 class="text-center fw-bold p-1 fs-3 bg-dark text-light rounded-pill mb-4">Qualification</h2>
                    <div class="qualification-details">
                        <h4 class="text-light fw-bold">* Graduation</h4>
                        <p class="text-light">BSC COMPUTER SCIENCE</p>
                        <p class="text-light">Kannur University</p>
                        <p class="text-light">College of Applied Science Cheemeni, Kasargod</p>

                        <h4 class="text-light fw-bold mt-4">* Plus-Two</h4>
                        <p class="text-light">SCIENCE</p>
                        <p class="text-light">Board of Higher secondary Education(Gov of Kerala)</p>
                        <p class="text-light">GHSS Chayoth</p>

                        <h4 class="text-light fw-bold mt-4">* SSLC</h4>
                        <p class="text-light">General Education Department(Gov of Kerala)</p>
                        <p class="text-light">GHSS Chayoth</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card me-md-3 mb-3">
                <div class="card-body">
                    <h2 class="text-center fw-bold p-1 fs-3 bg-dark text-light rounded-pill mb-4">Experience</h2>
                    <div class="experience-details">
                        <h4 class="text-light mx-5">  FULL-STACK DEVELOPER</h4><br></br>
                        <p class="text-light">6-Month internship at <a href="https://www.luminartechnolab.com" target="_blank" class="fw-bold text-light" title="Click to visit page"><span style={{color:'violet'}}>Luminar Technolab</span></a>, Kochi</p>
                        <h5 class="text-light mt-4">Key Stats</h5>
                        <ul class="text-light">
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Node js </li>
                            <li>Mongodb</li>
                            <li>Version Control</li>

                        </ul> 

                        <p class="text-light">3-Month internship at <a href="https://www.cybersapient.io" target="_blank" class="fw-bold text-light" title="Click to visit page"><span style={{color:'violet'}}>Cyber Sapient</span></a>, Kochi</p>

                
                         <h5 class="text-light mt-4">Key Stats</h5>
                        <ul class="text-light">
                            <li>Javascript</li>
                            <li>Next js</li>
                            <li>Psql</li>
                            <li>Version Control</li>
                        </ul> 

                       
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

     



         

        </>
    )
}

export default About
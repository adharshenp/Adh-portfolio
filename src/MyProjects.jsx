import React,{useEffect} from 'react';
import './myproject.css';
import VanillaTilt from 'vanilla-tilt'
import calc from './images/Calc.png';
import ecart from './images/E-cart.png'
import media from './images/Mediaplayer.png'
import netflix from './images/netflix.png'
import rest from './images/rest.png'
import weath from './images/weather1.png'
import space from './images/SpaceX.png'
import weather from './images/weather-react.png'


function MyProjects() {

    useEffect(()=>{
        VanillaTilt.init(document.querySelectorAll(".tilt"),{
            max:15,
            
        })
        
    })
    const projects = Array(1).fill({
        title: "",
        description: "",
        imgSrc: calc,ecart,media,netflix,rest,weath,space,weather,
        
    });

    return (
        <div className='container d-flex '>
            <div className="row mt-5">
                {projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4 " key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=calc} alt={`Project: ${project.title='Calculator'}`} className="card-img-top" />
                            <div className="overlay">
                            <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                            <p>{project.description=' For simple calculations'}</p>
                                <a href='https://calculator-rouge-nine.vercel.app' target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}

      {/* 2nd project */}


{projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4 " key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=ecart} alt={`Project: ${project.title='E-cart'}`} className="card-img-top" />
                            <div className="overlay">
                            <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                            <p>{project.description='simple e-commerce app'}</p>
                                <a href='https://e-cart-phi-ruddy.vercel.app'target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}

            {/* 3rd project */}
            {projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=media} alt={`Project: ${project.title='Media-player'}`} className="card-img-top" />
                            <div className="overlay">
                            <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                            <p>{project.description='Simple media player app'}</p>
                                <a href='https://mediaplayer-frontend-henna.vercel.app'target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}

                  {/* 4th prjct */}


                  {projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=netflix} alt={`Project: ${project.title='Netflix'}`} className="card-img-top" />
                            <div className="overlay">
                            <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                            <p>{project.description='A simple clone app'}</p>
                                <a href='https://netflix-self-alpha.vercel.app'target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}
           


                   {/* 5th prjct */}
               
                   {projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=rest} alt={`Project: ${project.title='Restaurant'}`} className="card-img-top" />
                            <div className="overlay">
                            <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                            <p>{project.description='A simple restaurant app'}</p>
                                <a href='https://restuarent-web.netlify.app'target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}




                   {/* 6th prjct */}

                   {projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=space} alt={`Project: ${project.title='SpaceX'}`} className="card-img-top" />
                            <div className="overlay">
                            <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                            <p>{project.description='A simple clone app'}</p>
                                <a href='https://space-x-steel-nine.vercel.app'target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}



                   {/* 7th prjct */}

                   {projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=weath} alt={`Project: ${project.title='Weather-js'}`} className="card-img-top" />
                            <div className="overlay">
                            <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                            <p>{project.description='Weather forecasting using js'}</p>
                                <a href='https://weather-indol-theta.vercel.app'target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}


                   {/* 8th */}
           
           
                   {projects.map((project, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                        <div className="card tilt">
                            <img src={project.imgSrc=weather} alt={`Project: ${project.title='Weather-React'}`} className="card-img-top" />
                            <div className="overlay">
                                <h3 className='fw-bold ' style={{boxShadow:'0 0 20px',borderRadius:'10px',color:'white'}}>{project.title}</h3>
                                <p>{project.description='Weather forecasting using React'}</p>
                                <a href='https://weather-react-xi-eight.vercel.app'target='blank' className="btn btn-outline-light fw-bold rounded-pill">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}


                
           
           
           
           
           
           
            </div>
        </div>
    );
}

export default MyProjects;

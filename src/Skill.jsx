import React from 'react';
import './skill.css';

function Skill() {
    return (
        <div className='container skill'>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <h1 className='d-flex text-light'>SKILLS</h1>
                <i className="fa-solid fa-bolt fs-1 ms-2 fw-bold"></i>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <img className='img-fluid mt-2 rounded w-25 mb-5' src="https://www.freecodecamp.org/news/content/images/2022/11/hire-full-stack-developers1546507474317-1.gif" alt="" />
            </div>
            <div className="row d-flex container-fluid align-items-center justify-content-center">

               <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="HTML" percentage={90} color="#04fc43" /></div>


               <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="CSS" percentage={90} color="#04fc43" /></div>

               
                <div className='col-md-3 d-flex align-items-center justify-content-center'
                ><SkillItem label="Bootstrap" percentage={80} color="#04fc43" /></div>


                <div className='col-md-3 d-flex align-items-center justify-content-center'>
                    <SkillItem label="JavaScript" percentage={75} color="#04fc43" /></div>
            </div>
            
            <div className="row d-flex container-fluid align-items-center justify-content-center">
                
               <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="React" percentage={75} color="yellow" /></div>


               <div className='col-md-3 d-flex align-items-center justify-content-center'>
                 <SkillItem label="Node.js" percentage={75} color="yellow" /></div>


                <div className='col-md-3 d-flex align-items-center justify-content-center'>
                    <SkillItem label="Express.js" percentage={70} color="yellow" /></div>

              <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="MongoDB" percentage={75} color="yellow" /></div>
            
            </div>

            <div className="row d-flex container-fluid align-items-center justify-content-center">

            <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="Git/Github" percentage={85} color="deeppink" />
             </div>


             <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="Multi-tasking" percentage={80} color="deeppink" />
             </div>


             <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="Team work" percentage={95} color="deeppink" />
             </div>


             <div className='col-md-3 d-flex align-items-center justify-content-center'> 
               <SkillItem label="observation" percentage={85} color="deeppink" />
             </div>

            </div>



        </div>
    );
}

function SkillItem({ label, percentage, color }) {
    return (
        <div className="col-lg-2 col-md-4 col-sm-6 p-3 d-flex justify-content-center align-items-center">
            <div className="percent" style={{ "--clr": color, "--num": `${percentage}` }}>
                <div className="dot"></div>
                <svg>
                    <circle cx={70} cy={70} r={70}></circle>
                    <circle cx={70} cy={70} r={70}></circle>
                </svg>
                <div className='percent1 flex-column'>
                    <h2 className='fw-bold fs-1 text-light'>{percentage}<span className='fs-6'>%</span></h2>
                    <h5 className='fw-bold'>{label}</h5>
                </div>
            </div>
        </div>
    );
}

export default Skill;

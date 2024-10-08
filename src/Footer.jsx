import React from 'react';

function Footer() {
    return (
        <div className='container-fluid mt-4'>
              <div className="d-flex align-items-center justify-content-center flex-column mt-5">
              
              <h1 className='fade2'>Contact <i class='fa-solid fa-phone-square mb-3 mt-5'></i></h1>


              <div className="row fade2">

                <div  className="d-flex align-items-center justify-content-center contact col-md-3">
          <a target='blank' href='https://www.linkedin.com/in/adharsh-p'> <button className='btn fs-3 p-2'> <i class=" fa-brands fa-linkedin"></i></button></a>
               </div>

               <div className="d-flex align-items-center justify-content-center contact col-md-3">
          <a target='blank' href='https://github.com/adharshenp'> <button className='btn fs-3 p-2'> <i class="fa-brands fa-square-github"></i> </button></a>
           </div>

           <div className=" d-flex align-items-center justify-content-center contact col-md-3">
          <a target='blank' href='https://wa.me/7306159712'> <button className='btn fs-3 p-2'> <i class="fa-brands fa-square-whatsapp"></i> </button></a>
           </div>

           <div className="d-flex align-items-center justify-content-center contact col-md-3">
          <a target='blank' href='mailto:adharshenp07@gmail.com'> <button className='btn fs-3 p-2'> <i class="fa-solid fa-square-envelope"></i> </button></a>
           </div>

              </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center mb-4'>
                    <p className='fw-bold mb-2'>My Portfolio Built with React</p>
                    <p  style={{ opacity: '0.7', wordSpacing: '4px', color: '#555', }}>All rights are reserved &copy; adharshenp</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

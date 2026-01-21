import React from 'react'
import cms from "../assets/cms.jpeg"
import erp from "../assets/erp.jpg"
import omr from "../assets/omr.jpg"
import oric from "../assets/oric.jpg"
import fbr from "../assets/fbr.jpg"
import e from "../assets/e.jpg"


function OurProducts() {
  return (
    <div>
        <h3 className='h3'>Our Products</h3>
        <div className='flex'>
            <div className='pcard'>
                    <div className='pimage-container'>
                    <img src={cms} alt="" className='pdigital'/>
                    <h2 className='ph2'>Campus Management System </h2>
                    <p className='pif'>Automate admissions, academics, and student records.</p>
                    </div>
                  </div>
                  <div className='pcard'>
                    <div className='pimage-container'>
                    <img src={erp} alt="" className='pdigital'/>
                    <h2 className='ph2'>Enterprise Resource Planning </h2>
                    <p className='pif'>ERP software integrates various business processes, enabling seamless.</p>
                    </div>
                  </div>
                  <div className='pcard'>
                    <div className='pimage-container'>
                    <img src={omr} alt="" className='pdigital'/>
                    <h2 className='ph2'>Optical Mark Recognition </h2>
                    <p className='pif'>OMR technology automates paper-based data collection with high accuracy.</p>
                    </div>
                  </div>
        </div>
        <div className='flex'>
            <div className='pcard'>
                    <div className='pimage-container'>
                    <img src={oric} alt="" className='pdigital'/>
                    <h2 className='ph2'>Office of Research, Innovation and Commercialization </h2>
                    <p className='pif'>ORIC enables research, innovation, and commercialization.</p>
                    </div>
                  </div>
                  <div className='pcard'>
                    <div className='pimage-container'>
                    <img src={fbr} alt="" className='pdigital'/>
                    <h2 className='ph2'>POS-FBR Integrated </h2>
                    <p className='pif'>POS-FBR integration automates sales reporting to the tax authority.</p>
                    </div>
                  </div>
                  <div className='pcard'>
                    <div className='pimage-container'>
                    <img src={e} alt="" className='pdigital'/>
                    <h2 className='ph2'>Ecommerce portal (Kp stores) </h2>
                    <p className='pif'>Support local sellers with online stores and easy payments.</p>
                    </div>
                  </div>
        </div>
    </div>
  )
}

export default OurProducts

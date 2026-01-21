import React from 'react'
import digital from "../assets/digital.jpeg"
import marketing from "../assets/marketing.jpeg"
import ai from "../assets/ai.jpeg"
import training from "../assets/training.jpeg"
import ui from "../assets/ui.jpeg"
import web from "../assets/web.jpeg"
function OurServices() {
  return (
    <div>
      <h3 className='h3'>Our Services</h3>
  <div className='flex'>
  <div className='card'>
        <div className='image-container'>
        <img src={digital} alt="" className='digital'/>
        <h2 className='h2'>Digital Transformation</h2>
        </div>
        <p className='if'>If you have any questions about <br /> our products or services, <br /> our office is here to help.</p>
      </div>
      <div className='card'>
        <div className='image-container'>
        <img src={marketing} alt="" className='digital'/>
        <h2 className='h2'>Digital Maketing</h2>
        </div>
        <p className='if'>If you have any questions about <br /> our products or services, <br /> our office is here to help.</p>
      </div>
      <div className='card'>
        <div className='image-container'>
        <img src={ai} alt="" className='digital'/>
        <h2 className='h2'>AI Consultancy</h2>
        </div>
        <p className='if'>If you have any questions about <br /> our products or services, <br /> our office is here to help.</p>
      </div>
  </div>
<div className='top'>
<div className='flex'>
  <div className='card'>
        <div className='image-container'>
        <img src={training} alt="" className='digital'/>
        <h2 className='h2'>Vocational And Technical Training</h2>
        </div>
        <p className='if'>If you have any questions about <br /> our products or services, <br /> our office is here to help.</p>
      </div>
      <div className='card'>
        <div className='image-container'>
        <img src={ui} alt="" className='digital'/>
        <h2 className='h2'>Ui/Ux Designing</h2>
        </div>
        <p className='if'>If you have any questions about <br /> our products or services, <br /> our office is here to help.</p>
      </div>
      <div className='card'>
        <div className='image-container'>
        <img src={web} alt="" className='digital'/>
        <h2 className='h2'>Web Development</h2>
        </div>
        <p className='if'>If you have any questions about <br /> our products or services, <br /> our office is here to help.</p>
      </div>
  </div>
</div>
    </div>
  )
}

export default OurServices

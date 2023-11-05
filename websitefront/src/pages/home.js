import React from 'react'
import ContentImage from "../assets/contentImage.webp";
import Iphone15 from "../assets/iphone15.jpg";
import "../styles/home.css"
export default function home(props) {
  return (
    <div>


      <h1 style={{textAlign:"center"}}>{props.Children}</h1>

      <div className='row' id='imageContainer'> 
     <section className='col-6' id='left'>
     <img src={ContentImage}  className='w-100 rounded'/>
        <button className='btn btn-warning'>ORDER NOW</button>
      </section>
      <section className='col-6' id='right'>
      <img src={Iphone15}  className='w-100 rounded'/>
      <button className='btn btn-warning'>ORDER NOW</button>
      </section>
      
      </div>

    </div>
  )
}

import React, { useState ,useEffect} from 'react'
// import ContentImage from "../assets/contentImage.webp";
import Iphone15 from "../assets/iphone15.jpg";
import carousel1 from '../assets/image/oneplus-carousel.webp';
import carousel2 from '../assets/image/oneplus2.webp';
import cardl from '../assets/image/onepluscardl.webp';
import cardr from '../assets/image/onepluscardr.webp';
import naversettle from '../assets/image/neversettle.webp';

import "../styles/home.css"
export default function Home(props) {
  const [data, setData]=useState([]);

      useEffect( ()=>{  
        fetch("menus2.json",{
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'

        }
        
      }).then((res)=>res.json())
      .then((myJson)=>{
        console.log(myJson)
        setData(myJson);
      })
      },[])
  
  return (
    
    <div className=''>
     
<section  className=""  id="carouselTab">
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={carousel1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={carousel2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Iphone15} className="d-block w-100" alt="..."/>
    </div>
  </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>
<section className="bg-light text-center p-5" id="videoSec">
    <h1 >Newly Launch of Apple Iphone 15 Pro <mark className="rounded bg-warning">5G</mark></h1>
    <div className="container  p-5">
        <video src="image/oneplus2.webp" className=" object-fit-contain " muted autoplay loop  style={{borderRadius:"30px"}}></video>
        {data.map((item,index)=>{
        return(
        <div className='row' id='imageContainer'>
        {/* <h1 style={{textAlign:"center"}}>{props.Children}</h1> */}
        <div key={index} className='col'  id='right'>
       <img src={item.imgs} alt='listItem' className='w-100 h-100  rounded'/>
       <button className='btn btn-warning'>ORDER NOW</button>
        </div>
        </div>
        )
      })
     }
    </div>

    <div className="row d-flex bg-black align-items-center p-5">
        <hr/>
        <div className="">
        <h2 className="text-light">Relentless innovation defines who we are OnePlus inspires through innovation.</h2>
        </div>
       
        <div className="col-lg-3 col-sm-2">
            <h1 className="text-light "><span className="text-danger">Never Settle <i className="fa fa-arrow-right"></i></span> Evolve your digital life.</h1>
        </div>
        <div className="col-lg-9 col-sm-10 p-5">
            <img src={naversettle} alt="neversettle" className="w-100"/>
        </div>
        <div className=" col-lg-6">
            <div className="mb-3">
                <div className="row g-0">
                <div className="col-lg-6 col-md-6">
                    <img src={cardr} alt="" className="object-fit-cover w-100"/>
                </div>
                <div className="col-lg-6 col-md-6 bg-dark align-items-end">
                    <div className="card-body text-light align-items-end ">
                    <p className="card-title">OxygenOS 14</p>
                    <p className="card-text fs-2">Evolved to Exceed</p>
                    <p className="card-text">The signature OxygenOS experience has evolved. Driven by the next-generation Trinity Engine, innovative features and refreshed design elements, discover the pinnacle of fast and smooth.</p>
                    </div>

                </div>
                </div>
            </div>
            
        </div>
        <div className="col-lg-6">
        <div className="mb-3">
                <div className="row g-0 ">
               
                <div className="col-md-6 bg-dark align-items-end">
                    <div className="card-body text-light align-items-end">
                    <p className="card-title">Capture Every Horizon</p>
                    <p className="card-text fs-2">2023 OnePlus Photography Awards Winners</p>
                    <p className="card-text">The 2023 OnePlus Photography Awards is dedicated to honoring everyone to use their phones to create their own works, to capture wonderful moments, and to tell the stories behind the lens.</p>   
                    </div>

                </div>
                <div className="col-md-6">
                    <img src={cardl}  alt="" className="object-fit-cover w-100"/>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>





    </div>
  )
};

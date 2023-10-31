import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import './footer.css';


const Footer = (props) => {
    const first = {
        color: "red",
        backgroundColor: "gray",
        display: "flex",
        justifyItems: "center"
    }
  
    // const { details1, details2, details3 } = props;
   const data = new Date().getFullYear();
  
    return (
       
       
        <footer class="bg-dark" id="footerDown">
            <div className="container  text-light mb-3 ">
                <div class="container text-light">
                    <div class="row justify-content-around">
                        <div class="col-lg-6 col-md-12 col-sm-6 mb-3">
                            <img src="./image/logos.png" class="object-fit-contain bg-light " alt=""/>
    
                        </div>
                        <div class="my-4 col-lg-6 col-md-12 ">
                            <span class=" fs-5  ">
                                <i class="fa fa-instagram me-3"></i>
                                <i class="fa fa-twitter me-3"></i> 
                                <i class="fa fa-facebook me-3"></i>
                                <i class="fa fa-envelope"></i>
                            </span>
    
                        </div>
                       
                    </div>
                    <div class="row" id="2">
                        <div class=" col-lg-6 col-md-12 col-sm-12 mb-3">
                            <h5>CONTACT</h5>
                        
                            <span class="me-3"> <i class="fa fa-envelope"></i> sales@mobileplatform.com</span>
                            <span class="me-3" ><i class="fa fa-phone"></i> +91-6874566778 </span>
                            <span><i class="fa fa-whatsapp"></i> +91-687-456-6778</span>
    
                        </div>
                        <div class=" col-lg-6 col-md-12 col-sm-12 mb-3">
                          <h5>COMPNAY</h5>
                          <span class="me-3"> About</span>
                          <span class="me-3" >Team</span>
                          <span class="me-3">Contact</span>
                          <span class="me-3"> Careers</span>
                         
                        </div>
                        <div class=" col-lg-6 col-md-12 col-sm-12 mb-3">
                            <h5>HELP</h5>
                            <span class="me-3"> Term of use</span>
                            <span class="me-3" >Privacy policy</span>
                            <span>Web Notification</span>
                        </div>
                        <div class=" col-lg-6 col-md-12">
                            <h5>Help</h5>
                        </div>
                    </div>
                </div>
                <div class="text-center text-light bg-dark smaller p-5 ">
                    <hr/>   
                    <span id="datecopy">{data}</span>  
                </div>
            </div>
        </footer>

    )
}

export default Footer;

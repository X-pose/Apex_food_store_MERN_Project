import React from "react";
import './footer.css';
import apexlogo from '../../assets/mylogo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer=()=>{
    return(
        
        <div className="footer">

            <div className="Logo">
               <img src={apexlogo} alt="" />
            </div>

            <div className="Description">
                <p>"Indulge your senses in a culinary journey with our modern food website. Immerse yourself in a feast of vibrant flavors, artfully crafted dishes, and the latest gastronomic trends. From innovative recipes to expertly curated food guides, our platform is a celebration of contemporary dining experiences. 
                    Explore a fusion of global cuisines, discover chef-inspired creations, and embark on a digital adventure that elevates your passion for modern gastronomy. Welcome to a world where every click is a step into the deliciously unexpected."</p>
            </div>

            <div className="links">
              <h4>Links</h4>
              <a className="sub_links" href="/about">
                <p>Home</p>
              </a>
              <a className="sub_links" href="/press">
                <p>Food & Beverage</p>
              </a>
              <a className="sub_links" href="/career">
                <p>Contact Us</p>
              </a>
              <a className="sub_links" href="/contact">
                <p>Feedback</p>
              </a>
            </div>

               <div className="social_media">
                <h4>Social Media</h4>
                <FaInstagram  style={{fontSize:'3rem'}} />
                <br/>
                <FaFacebook style={{fontSize:'3rem'}} />
                <br/>
                <FaXTwitter  style={{fontSize:'3rem'}} />
                 </div>

        </div>
        
    )
}

export default Footer;

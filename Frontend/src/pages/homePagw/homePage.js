import React, { Fragment } from "react";
import Searchfood from "./components/Searchfood";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./homePage.css";

import { Typography, ImageList, ImageListItem } from '@mui/material';
import "typeface-montserrat";
 // Import Montserrat font
 const imageListData = [
  { img: './img/bl1.jpeg', title: 'Image 1' },
  { img: './img/bl2.jpeg', title: 'Image 2' },
  // Add more image data as needed
];
 //



 
function Homepage() {
  return (
    <div>
 <div className="image"></div>
<div className="tophead">

<a className="h" >Home</a>
<a className="h">food and beverage</a>
<a className="h">cart</a>
<a className="h">contact</a>
</div>



    <div className="topcontainer">
      <div className="leftbox">
         
        <a className="siteName"> <span className="food">apex</span> foods</a> 
        <div className="description">
          <Typography variant="h6" component="h6">
          Indulge your senses in a culinary journey of flavors
        <br/> and delights at  where every bite is a celebration of taste
        </Typography>
        <div className="descrip2">dining/delivary</div>
       
          </div>
      </div>
      <div className="rightbox">
        <ImageList className="imglist" cols={2} rowHeight={300}>
          {imageListData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>

      </div>
      </div>
          
<Searchfood></Searchfood>
    </div>
  );
}

export default Homepage;
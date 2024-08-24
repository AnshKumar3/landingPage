'use client'
import { Slide, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useMediaQuery } from 'react-responsive';
import React from 'react';
export { createContext } from 'react';

export default function Home() {

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `;
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  return (
    <>
      <h1 className="custom-font">Premium</h1>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: isMobile ? "1fr" : "800px 400px", 
        gridTemplateRows: "50px 100px",
        margin: "100px", 
        alignItems: "center"
      }}>
        <div style={{ height: "200px", margin: "0px" }}>
          <Slide direction="right">
            <h1 className="responsive-heading" style={{ 
              marginTop: '0px', 
              color: "grey", 
              textAlign: "center", 
              fontSize: isMobile ? "30px" : "100px" // Adjusted font size for mobile view
            }}>
              SUPER BASS
            </h1>
          </Slide>
        </div>
        
        <Reveal keyframes={customAnimation}>
          <img className="responsive-image" style={{ width: "100%", maxWidth: "500px", height: "auto" }} src="https://www.pngarts.com/files/3/Black-Headphone-PNG-High-Quality-Image.png" alt="Headphones" />
        </Reveal>
        <h1 style={{ fontFamily: 'Kalnia Glaze', marginLeft:'20px',marginTop: "200px", fontSize: "50px", color: "white" }}>Overview</h1>




        <Slide direction="up">
          <div className="responsive-heading" style={{ fontSize: isMobile ? "30px" : "100px" ,color: "grey", marginBottom: "50px", textAlign: "center" }}></div>
        </Slide>
        <Slide direction="up">
          <div style={{ fontSize: isMobile ? "10px" : "30px" , color: "black",marginRight:'0px', marginTop: isMobile ? "10px" : '100px',marginBottom:isMobile? '100px' : '0px', textAlign: "center" }}>
            this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh             this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh 
            this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh 
            this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh 

          </div>
        </Slide>
        <Slide direction="up">
          <div className="responsive-heading" style={{ fontSize: isMobile ? "30px" : "40px" ,color: "grey", marginBottom: "50px", textAlign: "center" }}>MX_1000 DC</div>
        </Slide>
      </div>
      <Slide direction="left">
        <div style={{ color: "grey", marginTop: "0px", textAlign: "center" }}>
          <img style={{ height: isMobile ? '200px' : '600px', width: isMobile ? '200px' : '600px' }} src="https://www.pngplay.com/wp-content/uploads/7/Headphones-Transparent-PNG.png" alt="Headphones" />
        </div>
      </Slide>
    </>
  );
}

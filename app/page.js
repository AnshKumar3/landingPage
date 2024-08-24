'use client'
import { Slide, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useMediaQuery } from 'react-responsive';
import React from 'react';
export { createContext } from 'react';
import "./Navbar.module.css"
import "./component/nav"
import "./styles.css"
export default function Home() {

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
    overflow:"hidden"
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  `;
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  console.log(isMobile);
  return (
    <div>


      <div className="container">

        <div className="item" >
          <Slide direction="up">
            <h1 className="responsive-heading" style={{
              color: "grey",
              textAlign: "center",
              fontSize: '100px' // Adjusted font size for mobile view
            }}>
              SUPER BASS
            </h1>
          </Slide>
        </div>
        <div className="item">
          <Reveal keyframes={customAnimation}>
            <img className="responsive-image" style={{ width: "100%", maxWidth: "500px" }} src="https://www.pngarts.com/files/3/Black-Headphone-PNG-High-Quality-Image.png" alt="Headphones" />
          </Reveal>
        </div>
        <div className="item">
          <h1 className="item" style={{ fontFamily: 'Kalnia Glaze',margin:"0px", fontSize: "50px", color: "white" }}>Overview</h1>
        </div>



        <div className="item">
          <Slide direction="up">
            <div>
              this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh
              this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh
              this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh
              this is the best headphone in india world no. one brand...asdfghj asdfg hasdfgh asdfgh asdfgh asdfgh asdfgh asdfgh
            </div>
          </Slide>
        </div>
        <div className="item">
          <Slide direction="up">
            <div className="responsive-heading" style={{ fontSize: isMobile ? "30px" : "40px", color: "grey", marginBottom: "50px", textAlign: "center" }}>MX_1000 DC</div>
          </Slide>
        </div>
      </div>

      <Slide direction="left">
        <div style={{ color: "grey", marginTop: "0px", textAlign: "center" }}>
          <img style={{ height: '100%', width: '100%' }} src="https://www.pngplay.com/wp-content/uploads/7/Headphones-Transparent-PNG.png" alt="Headphones" />
        </div>
      </Slide>
    </div>
  );
}

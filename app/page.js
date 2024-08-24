
import { Fade,Slide,Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useMediaQuery } from 'react-responsive';

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
const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


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
      <div style={{height:"200px", margin:"0px"}}>
  <Slide  direction="right">
  <h1 className="responsive-heading" style={{ marginTop: '0px', color: "grey", textAlign: "center", fontSize: isMobile ? "50px" : "100px" }}>SUPER BASS</h1>
  </Slide>
</div>
  <Reveal keyframes={customAnimation}>
    <img className="responsive-image" style={{ width: "100%", maxWidth: "500px", height: "auto" }} src="https://www.pngarts.com/files/3/Black-Headphone-PNG-High-Quality-Image.png" alt="Headphones" />
  </Reveal>
  <h1 style={{ fontFamily: 'Kalnia Glaze' ,marginLeft:"", marginTop:"200px",fontSize:"50px",color:"white" }}>Overview</h1>

  <h1 style={{ color: "grey", textAlign: "center",marginLeft:"-10px",marginTop:"0px" }}></h1>
  <Slide direction="up">  <div className="" style={{ color: "black",marginTop:"100px", textAlign: "center" }}>this is the best headpnoe in india world no. one brand asdfg a sdfg asdf asdfa sdfga sdfa sdf asdf asdfg asdfg asdfg asdf gh asdfg asdfgh asdfgh asdfgas dfgha sdfg this is the best headpnoe in india world no. one brand asdfg a sdfg asdf asdfa sdfga sdfa sdf asdf asdfg asdfg asdfg asdf gh asdfg asdfgh asdfgh asdfgas dfgha sdfg this is the best headpnoe in india world no. one brand asdfg a sdfg asdf asdfa sdfga sdfa sdf asdf asdfg asdfg asdfg asdf gh asdfg asdfgh asdfgh asdfgas dfgha sdfg this is the best headpnoe in india world no. one brand asdfg a sdfg asdf asdfa sdfga sdfa sdf asdf asdfg asdfg asdfg asdf gh asdfg asdfgh asdfgh asdfgas dfgha sdfg this is the best headpnoe in india world no. one brand asdfg a sdfg asdf asdfa sdfga sdfa sdf asdf asdfg asdfg asdfg asdf gh asdfg asdfgh asdfgh asdfgas dfgha sdfg</div>
</Slide>
<Slide direction="up">  <div className="responsive-heading" style={{ color: "grey",marginBottom:"50px", textAlign: "center" }}>MX_1000 DC</div>
</Slide>


</div><Slide direction="left">  <div style={{ color: "grey",marginTop:"0px", textAlign: "center" }}><img style={{height:'600px',width:'600px'}} src="https://www.pngplay.com/wp-content/uploads/7/Headphones-Transparent-PNG.png"></img></div>
</Slide>


  </>
  );
}

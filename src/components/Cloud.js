import React, { useRef } from "react";

import cloud from "../images/cloud.png";
const Cloud = () => {
   const ChipStyles = useRef({
     position: "relative",
     top: Math.floor(Math.random() * 100),
     left: Math.floor(Math.random() * 100),
     transform: "translate(-20%, -60%)",
   });

   return (
     <img class="cloud" src={cloud} style={ChipStyles.current} alt=""/>
   )
}
    
export default Cloud
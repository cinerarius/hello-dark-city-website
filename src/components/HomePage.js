/*
Functionality: Represents the home page. Navigate to it by adding to the Url: /home

*/
import React, { Suspense } from "react";
import "./HomePage.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//import { Button } from './Button'
import { Animation } from "./Animation";
//import { Model } from "./Model";
import Particle from "./Particle";
import Menu from "./reusables/Background/Menu";

import GreenMist1 from "../assets/Background/1-green_mist-overlay.png";
import Sky from "../assets/Background/6-sky.gif";
import ForegroundTrees2 from "../assets/Background/2-foreground-trees.png";
import BackgroundTrees4 from "../assets/Background/4-background-trees.png";
import BackgroundTrees5 from "../assets/Background/5-background-trees.png";


function App() {
   return (
      <>
         <Canvas camera={{ position: [-0.5, 0.5, 3], fov: 30 }}>
            <OrbitControls />
            <Particle />
            <Suspense fallback={null}>
               <Animation />
            </Suspense>
            <ambientLight intensity={0.5} />
         </Canvas>
         <div
            id="images"
            style={{ height: "100vh", width: "100vw", position: "absolute" }}
         >
            <img src={GreenMist1} alt=""></img>
            <img src={ForegroundTrees2} alt=""></img>
            <img src={BackgroundTrees4} alt=""></img>
            <img src={BackgroundTrees5} alt=""></img>
            <img src={Sky} alt=""></img>
            <div className="Button">
            <button onClick={() => { }}>Happy</button>
            <button onClick={() => { }}>Waving</button>
            <button onClick={() => { }}>Angry</button>
            </div>
         </div>
         <Menu />
      </>
   );
}
export default App;

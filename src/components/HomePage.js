/*
Functionality: Represents the home page. Navigate to it by adding to the Url: /home

*/
import React, { Suspense } from 'react';
import "./HomePage.css"

import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

import Button from './Button'
import { Model } from './Model'
import Particle from './Particle'
import Menu from "./reusables/Background/Menu";


import GreenMist1 from "../assets/Background/1-green_mist-overlay.png"
import Sky from "../assets/Background/6-sky.gif"
import ForegroundTrees2 from "../assets/Background/2-foreground-trees.png"
import BackgroundTrees4 from "../assets/Background/4-background-trees.png"
import BackgroundTrees5 from "../assets/Background/5-background-trees.png"

function App() {
   return (
      <>
         <div id="images" style={{ height: "100vh", width: "100vw", position: "absolute" }}>
            <img src={GreenMist1} alt=""></img>
            <img src={ForegroundTrees2} alt=""></img>
            <img src={BackgroundTrees4} alt=""></img>
            <img src={BackgroundTrees5} alt=""></img>
            <gif src={Sky} alt=""></gif>
         </div>
         <Menu/>
         <Canvas camera={{ position: [-0.5, 0.5, 3], fov: 30 }}>
            <Html>
               <Button />
            </Html>
            <Particle />
            <Suspense fallback={null}>
               <Model />
            </Suspense>
            <ambientLight intensity={0.5} />
         </Canvas>
      </>
   );
}
export default App;

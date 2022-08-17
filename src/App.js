import React, { Suspense, useEffect } from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from  '@react-three/drei'
import gsap from 'gsap'

import Button from './components/Button'
import { Model } from './components/Model'
import Particle from './components/Particle';

import GreenMist1 from "./assets/Background/1-green_mist-overlay.png"
import ForegroundTrees2 from "./assets/Background/2-foreground-trees.png"
import BackgroundTrees4 from "./assets/Background/4-background-trees.png"
import BackgroundTrees5 from "./assets/Background/5-background-trees.png"

function App() {
  useEffect(()=>{
    gsap.to('camera.position',{ x: 0 })
  })
  return (
    <>
      <div id="images" style={{ height:"100vh", width:"100vw", position:"absolute"}}>
        <img src={GreenMist1} alt=""></img>
        <img src={ForegroundTrees2} alt=""></img>
        <img src={BackgroundTrees4} alt=""></img>
        <img src={BackgroundTrees5} alt=""></img>
      </div>

      <Canvas camera={{ position: [-0.5, 0.5, 3], fov: 30 }}>
        <OrbitControls />
        <Html>
          <Button />
        </Html>
        <Particle />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <ambientLight intensity={1} />
      </Canvas>
    </>
  );
}
export default App;

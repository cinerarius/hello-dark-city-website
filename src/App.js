import React, { Suspense, useEffect } from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from  '@react-three/drei'
import gsap from 'gsap'

import Button from './components/Button'
import { Model } from './components/Model'
import Particle from './components/Particle'

function App() {
  useEffect(()=>{
    gsap.to('camera.position',{ x: 0 })
  })
  return (
    <>
      <Canvas camera={{ position: [-0.5, 0.5, 3], fov: 30 }}>
        <OrbitControls />
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

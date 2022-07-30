import React from 'react';
import './App.css';

import { OrbitControls } from '@react-three/drei/core';
import { Canvas } from '@react-three/fiber'


/*import Box from './components/Box'*/
import Particle from './components/Particle';
import { Model } from './components/Homepage-scene'

function App() {
  return (
    <>
      <Canvas camera={{ position: [-0.5,0.5,3],  fov: 30 }}>
        <Particle />
        <Model />
        <ambientLight intensity={0.1}/>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;

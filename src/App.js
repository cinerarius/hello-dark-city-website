import React from 'react';
import './App.css';

import { OrbitControls } from '@react-three/drei';

import { Canvas } from '@react-three/fiber'


/*import Box from './components/Box'*/
import Model from './components/Model'
import Particle from './components/Particle';

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.5], fov: 75 }}>
        <Particle />
        <mesh>
          <Model />
        </mesh>
        <ambientLight intensity={0.1}/>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

import Button from './components/Button';
import Particle from './components/Particle';
import { Model } from './components/Model'

function App() {
  return (
    <>
      <Canvas camera={{ position: [-0.5, 0.5, 3], fov: 30 }}>
        <Html fullscreen>
          <Button />
        </Html>
        <Particle />
        <Model />
        <ambientLight intensity={0.1} />
      </Canvas>
    </>
  );
}

export default App;

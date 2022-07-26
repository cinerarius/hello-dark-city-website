import React from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber'

import Box from './components/Box'
import Particle from './components/Sparkle';

function App() {
  return (
    <>
      <Canvas>
        <group>
          <Box />
        </group>
        <Particle />
      </Canvas>
    </>
  );
}

export default App;

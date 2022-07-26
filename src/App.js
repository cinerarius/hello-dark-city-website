import React from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber'

import { Sparkles } from '@react-three/drei'

import Box from './components/Box'
import Particle from './components/Sparkle';

function App() {
  return (
    <>
      <Canvas>
        <Box />
        <Sparkles
          count={100}
          speed={0.5}
          opacity={1}
          color="white"
          size={2}
          scale={5}
          noise={1} />
        <Particle />
      </Canvas>
    </>
  );
}

export default App;

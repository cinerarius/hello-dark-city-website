import React, { Suspense } from 'react';
import './App.css';

import { Canvas } from '@react-three/fiber'

import { Model } from './components/Model'
import Particle from './components/Particle';
import Controls from './components/Controls'

function App() {
  return (
    <>
      <Canvas camera={{ position: [-0.5, 0.5, 3], fov: 30 }}>
        <Controls />
        <Particle />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <ambientLight intensity={0.01} />
      </Canvas>
    </>
  );
}
export default App;

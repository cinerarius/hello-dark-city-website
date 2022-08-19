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

function App() {
   return (
      <>
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

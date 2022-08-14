/*
  Functionality: Represents the home page. Navigate to it by adding to the Url: /home

*/
import React, { Suspense, useEffect } from 'react';

import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from  '@react-three/drei'
import gsap from 'gsap'

import Button from './Button'
import { Model } from './Model'
import Particle from './Particle';
import { AnimationWrapper } from './Animation'

import { Helmet } from "react-helmet";


export default function HomePage() {
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
            <AnimationWrapper />
            <Particle />
            <Suspense fallback={null}>
               <Model />
            </Suspense>
            <ambientLight intensity={0.01} />
         </Canvas>
      </>
   )
}}
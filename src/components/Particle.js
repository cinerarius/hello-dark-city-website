import React from 'react'
import { Sparkles } from '@react-three/drei'



const Particle = () => {
    const amount = 500
    const sizes = 0.5
    const scale = [10,10,10]
    return (
        <Sparkles
        speed={0.05}
        size={sizes} 
        scale={scale} 
        color="white" 
        count={amount} />
    )
}

export default Particle
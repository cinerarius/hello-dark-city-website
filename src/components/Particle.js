import React from 'react'
import { Sparkles } from '@react-three/drei'


import { useControls } from 'leva'

const Particle = () => {  
    const { amount, sizes, scale, position } = useControls({ amount: 500, sizes: 1, scale: [3,2,1], position: [-0.5, -0.05, 1] })
    return (
        <Sparkles
        position={position}
        speed={0.05}
        size={sizes} 
        scale={scale} 
        color="white" 
        count={amount} />
    )
}

export default Particle
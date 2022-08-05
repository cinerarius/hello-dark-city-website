import React from 'react'
import { Sparkles } from '@react-three/drei'


import { useControls } from 'leva'

const Particle = () => {  
    const { Particle_amount, Particle_sizes , Particle_scale, Particle_position } = useControls({ 
        Particle_amount: 200, 
        Particle_sizes: 0.5, 
        Particle_scale: [3,0.3,1], 
        Particle_position: [0, -0.2, 1.5] })
    return (
        <Sparkles
        position={Particle_position}
        speed={0.05}
        size={Particle_sizes} 
        scale={Particle_scale} 
        color="white" 
        count={Particle_amount} />
    )
}

export default Particle
import { gsap } from 'gsap'
import { useThree } from '@react-three/fiber'
import React from 'react'

export function AnimationWrapper() {
    const { camera } = useThree();
    const tl = React.useRef();

    React.useEffect(() => {
        camera.position.set(-0.5, 0.5, 5);
        tl.current = gsap
            .to(camera.position, { z: 3, delay:1, duration:3 }, "simultaneously");
    });
}
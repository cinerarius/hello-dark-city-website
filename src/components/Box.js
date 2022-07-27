import React from "react";
import { OrbitControls } from '@react-three/drei';

const Box = () => {
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial color="skyblue"/>
            <OrbitControls />
        </mesh>
    );
};

export default Box

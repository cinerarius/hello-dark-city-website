import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";

const Model = () => {
    const { Model_scale, Model_position, Model_rotation } = useControls({
        Model_scale: [0.03, 0.03, 0.03],
        Model_position: [-0.15, -0.05, -0.50],
        Model_rotation: [Math.PI * 1 ,Math.PI * 1 ,Math.PI * 1 ]
    });
    const gltf = useLoader(GLTFLoader, "/Homepage-scene.gltf");
    return (
        <mesh scale={Model_scale} position={Model_position} rotation={Model_rotation}>
            <Suspense fallback={null}>
                <primitive object={gltf.scene} />
            </Suspense>
            <meshStandardMaterial />
        </mesh>
    );
};

export default Model;

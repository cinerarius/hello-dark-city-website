import { useFBXLoader } from '@react-three/drei'

const Model = () => {
    const fbx = useFBXLoader('./assets/Model_1.fbx', true)
    return <primitive object={fbx.scene} dispose={null} />
}

export default Model
/*
    Functionality: Builds the whole app, manages routing and the whole app state 
*/
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage.js";
import LandingPage from "./components/LandingPage.js"
import LinkPage from "./components/LinkPage";

import { ghostCursor } from 'cursor-effects';

<<<<<<< HEAD
new ghostCursor();

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter  basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="/home" exact element={<HomePage />} />
                    <Route path="/are-you-lost" exact element={<LinkPage />} />
                </Routes>
            </BrowserRouter>
        )
    }

}
=======
import GreenMist1 from "./assets/Background/1-green_mist-overlay.png"
import ForegroundTrees2 from "./assets/Background/2-foreground-trees.png"
import BackgroundTrees4 from "./assets/Background/4-background-trees.png"
import BackgroundTrees5 from "./assets/Background/5-background-trees.png"

function App() {
  useEffect(()=>{
    gsap.to('camera.position',{ x: 0 })
  })
  return (
    <>
      <div id="images" style={{ height:"100vh", width:"100vw", position:"absolute"}}>
        <img src={GreenMist1} alt=""></img>
        <img src={ForegroundTrees2} alt=""></img>
        <img src={BackgroundTrees4} alt=""></img>
        <img src={BackgroundTrees5} alt=""></img>
      </div>

      <Canvas camera={{ position: [-0.5, 0.5, 3], fov: 30 }}>
        <OrbitControls />
        <Html>
          <Button />
        </Html>
        <Particle />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <ambientLight intensity={1} />
      </Canvas>
    </>
  );
}
export default App;
>>>>>>> 82cb4087d216ab5396ac885a7fa7d28ecae8ff0d

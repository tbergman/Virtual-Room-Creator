import React, { createRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { connect } from "react-redux"

import OrbitControl from "../three-fiber/OrbitControl.js";
import Geometry from "../three-fiber/Geometry.js";
<<<<<<< HEAD
import Light from "../three-fiber/Light.js";
=======
import Model from "../three-fiber/Model"
>>>>>>> 798249afd01eb03cb0388b6ad0a91ec381e07615


function Scene({ meshReducer, lightReducer }) {
    /// Ref to Orbit Control Stoped when Transform Start
    const orbitRef = createRef();
    return (
        <Canvas
            camera={{
                fov: 80,
                aspect: window.innerWidth / window.innerHeight,
                near: 0.1,
                far: 500,
                position: [0, 10, 15]
            }}
        >
            <ambientLight />
            <OrbitControl ref={orbitRef} />
            <gridHelper args={[50, 50, 0xff1744]} />
            {
                lightReducer.lights.map((light, key) => {
                    return <Light orbit={orbitRef} key={light.id} name={light.id} />
                })
            }
            {
                meshReducer.meshes.map((mesh, key) => {
                    if (mesh.type === "Poly") {
                        return (
                            <Suspense key={key} fallback={null}>
                                <Model orbit={orbitRef} key={mesh.id} name={mesh.id} url={mesh.url} murl={mesh.murl} />
                            </Suspense>
                        )
                    }
                    return <Geometry orbit={orbitRef} key={mesh.id} name={mesh.id} />
                })
<<<<<<< HEAD
            } 
=======
            }

>>>>>>> 798249afd01eb03cb0388b6ad0a91ec381e07615
        </Canvas>
    );
}

const mapStateToProps = (state) => ({
    meshReducer: state.meshReducer,
    lightReducer: state.lightReducer,
});
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Scene)

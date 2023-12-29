/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 moon.glb 
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-moon-9916fcec59f04b07b3e8d7f077dc3ded
Title: The Moon
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Moon(props) {
  const { nodes, materials } = useGLTF("/moon.glb");

  const moonRef = useRef(null);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    moonRef.current.rotation.y = elapsedTime / -8;
  });

  useEffect(() => {
    setTimeout(() => {
      gsap.to(moonRef.current.scale, {
        x: 0.6,
        y: 0.6,
        z: 0.6,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 90%",
          end: "bottom 65%",
          scrub: 1,
        },
      });
    }, 1000);
  }, []);
  return (
    <group {...props} dispose={null} ref={moonRef} position={[-1, 0, 1.5]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Material__50}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/moon.glb");

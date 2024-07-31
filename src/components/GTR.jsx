import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';

 function Model(props) {
  const { nodes, materials } = useGLTF('/models/gtr r34 wagonglb.glb');
  const texture = useTexture(props.item.img);

  useEffect(() => {
    Object.entries(materials).forEach(([key, material]) => {
      // these are the material names that can't be changed color
      if (
        key !== "zFdeDaGNRwzccye" &&
        key !== "ujsvqBWRMnqdwPx" &&
        key !== "hUlRcbieVuIiOXG" &&
        key !== "jlzuBkUzuJqgiAK" &&
        key !== "xNrofRCqOXXHVZt"
      ) {
        material.color = new THREE.Color(props.item.color[0]);
        material.map = texture; // Apply the texture to the material
        material.needsUpdate = true;
      }
    });
  }, [materials, props.item.color, texture]);

  return (
    <group {...props} dispose={null}>
      <group position={[0.018, 0, 2.87]}>
        <group position={[0.82, -0.185, -1.391]}>
          <group position={[-0.01, -0.005, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel004.geometry}
              material={materials['wheel.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel004_1.geometry}
              material={materials['wheel.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel004_2.geometry}
              material={materials['wheel.005']}
            />
          </group>
        </group>
      </group>
      <group position={[0.015, 0, 0.076]} rotation={[-Math.PI, 0.004, -Math.PI]}>
        <group position={[0.82, -0.185, -1.391]}>
          <group position={[-0.01, -0.005, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel005.geometry}
              material={materials['wheel.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel005_1.geometry}
              material={materials['wheel.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel005_2.geometry}
              material={materials['wheel.008']}
            />
          </group>
        </group>
      </group>
      <group position={[0.015, 0, -2.78]} rotation={[-Math.PI, 0.004, -Math.PI]}>
        <group position={[0.82, -0.185, -1.391]}>
          <group position={[-0.01, -0.005, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel006.geometry}
              material={materials['wheel.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel006_1.geometry}
              material={materials['wheel.010']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wheel006_2.geometry}
              material={materials['wheel.011']}
            />
          </group>
        </group>
      </group>
      <group position={[0.018, 0, 0.001]}>
        <group position={[-0.018, 0, -0.001]}>
          <group position={[-0.001, 0.171, -0.177]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_ok001.geometry}
              material={materials['chassis_ok.0']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_ok001_1.geometry}
              material={materials.primary}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_ok001_2.geometry}
              material={materials['chassis_ok.2']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_ok001_3.geometry}
              material={materials['chassis_ok.3']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chassis_ok001_4.geometry}
              material={materials['chassis_ok.4']}
            />
            <group position={[0.001, 0.104, 2.674]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.backlights001.geometry}
                material={materials['chassis_ok.2']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.backlights001_1.geometry}
                material={materials['parts_ok.5']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.backlights001_2.geometry}
                material={materials['parts_ok.6']}
              />
            </group>
            <group position={[-0.1, -0.053, 1.05]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001.geometry}
                material={materials['chassis_ok.0']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_1.geometry}
                material={materials['chassis_ok.2']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_2.geometry}
                material={materials['chassis_ok.3']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_3.geometry}
                material={materials['int_ok.3']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_4.geometry}
                material={materials['int_ok.4']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_5.geometry}
                material={materials['int_ok.5']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_6.geometry}
                material={materials['int_ok.6']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_7.geometry}
                material={materials['int_ok.7']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_8.geometry}
                material={materials['int_ok.8']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_9.geometry}
                material={materials['int_ok.9']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_10.geometry}
                material={materials['int_ok.10']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_11.geometry}
                material={materials['int_ok.11']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_12.geometry}
                material={materials['int_ok.12']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_13.geometry}
                material={materials['int_ok.13']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_14.geometry}
                material={materials['int_ok.14']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.int_ok001_15.geometry}
                material={materials['int_ok.15']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.IntFrontDoors.geometry}
                material={materials['IntFrontDoors.0']}
                position={[0.101, -0.041, -1.064]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.IntRearDoors.geometry}
                material={materials['IntRearDoors.0']}
                position={[0.101, -0.009, -0.031]}
              />
              <group position={[-0.361, -0.342, -1.14]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Mats001.geometry}
                  material={materials['Mats.0']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Mats001_1.geometry}
                  material={materials['Mats.1']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Model;
useGLTF.preload("/models/gtr r34 wagonglb.glb");

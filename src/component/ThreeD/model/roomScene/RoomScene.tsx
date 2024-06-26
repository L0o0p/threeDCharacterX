/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/scenes/roomScene.gltf -K -k 
*/

// import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { Mesh } from 'three';

interface ModelNodes {
  [name: string]: Mesh;
}

export const RoomScene = () => {
  const { nodes } = useGLTF('/scenes/roomScene.gltf') as unknown as { nodes: ModelNodes };
  const { materials } = useGLTF('/scenes/roomScene.gltf')
  // load贴图文件
  const texture = useTexture('/scenes/roomScene.png')
  // blender导出的时候默认flipY，可能导致mapping不正确，这里给他反回来
  texture.flipY = false;
  // texture.encoding = THREE.sRGBEncoding;//我也不知道有什么用
  // 将读取的贴图赋值给材质变量
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  return (
    <group
      scale={1.25}
      rotation={[0, Math.PI / 2, 0]}
      // {...props}
      dispose={null}>
      <group name="Scene">
        <group name="RootNode" position={[-0.812, 0, 1.105]}>
          <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh name="Icosphere003" geometry={nodes.Icosphere003.geometry} material={materials['Material.002']} position={[0.044, 0.696, -0.077]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group name="Empty" position={[-0.977, 0.536, -0.151]}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.003']} position={[1.72, -0.536, -0.067]} />
          <group name="Cube004" position={[0.169, -0.21, 0.042]}>
            <mesh name="Cube004-Mesh" geometry={nodes['Cube004-Mesh'].geometry} material={materials.Wood} />
            <mesh name="Cube004-Mesh_1" geometry={nodes['Cube004-Mesh_1'].geometry} material={materials['Metal-2']} />
            <mesh name="Cube004-Mesh_2" geometry={nodes['Cube004-Mesh_2'].geometry} material={materials.Paper} />
          </group>
          <group name="Cube006" position={[0.426, -0.323, 0.332]}>
            <mesh name="Cube006-Mesh" geometry={nodes['Cube006-Mesh'].geometry} material={materials.Wood} />
            <mesh name="Cube006-Mesh_1" geometry={nodes['Cube006-Mesh_1'].geometry} material={materials.Blanket} />
          </group>
          <group name="Cylinder" position={[0.081, 0.008, 0.202]}>
            <mesh name="Cylinder-Mesh" geometry={nodes['Cylinder-Mesh'].geometry} material={materials.Black} />
            <mesh name="Cylinder-Mesh_1" geometry={nodes['Cylinder-Mesh_1'].geometry} material={materials.Wood} />
            <mesh name="Cylinder-Mesh_2" geometry={nodes['Cylinder-Mesh_2'].geometry} material={materials.Pencil} />
          </group>
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={textureMaterial} position={[-0.158, 0.004, -0.23]} />
          <group name="Laptop_Cube010" position={[-0.171, 0.067, 0.142]}>
            <mesh name="Laptop_Cube010-Mesh" geometry={nodes['Laptop_Cube010-Mesh'].geometry} material={materials.Metal} />
            <mesh name="Laptop_Cube010-Mesh_1" geometry={nodes['Laptop_Cube010-Mesh_1'].geometry} material={materials.TVGlass} />
            <mesh name="Laptop_Cube010-Mesh_2" geometry={nodes['Laptop_Cube010-Mesh_2'].geometry} material={materials.Keyboard} />
          </group>
        </group>
        <group name="Plane">
          <mesh name="Plane-Mesh" geometry={nodes['Plane-Mesh'].geometry} material={materials.Wall} />
          <mesh name="Plane-Mesh_1" geometry={nodes['Plane-Mesh_1'].geometry} material={materials.Floor} />
        </group>
        <mesh name="rubber_duck_toy001" geometry={nodes.rubber_duck_toy001.geometry} material={textureMaterial} position={[-0.935, -0.005, -1.005]} rotation={[-Math.PI, 0.708, -Math.PI]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scenes/roomScene.gltf')

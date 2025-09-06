"use client"

import { useRef, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const PlanetMesh = memo(function PlanetMesh() {
  const meshRef = useRef<THREE.Group>(null)
  
  // Load the GLB file
  const gltf = useGLTF('/3d/a7a.glb')
  const { scene } = gltf

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone()
  
  // Apply color modifications to all materials in the model
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material) {
      // If it's an array of materials
      if (Array.isArray(child.material)) {
        child.material.forEach((material) => {
          if (material.isMeshStandardMaterial) {
            material.color.set('#1e293b') // Dark slate color
            material.metalness = 0.1
            material.roughness = 0.8
            material.emissive.set('#0f172a')
            material.emissiveIntensity = 0.1
          }
        })
      } else {
        // Single material
        if (child.material.isMeshStandardMaterial) {
          child.material.color.set('#1e293b') // Dark slate color
          child.material.metalness = 0.1
          child.material.roughness = 0.8
          child.material.emissive.set('#0f172a')
          child.material.emissiveIntensity = 0.1
        }
      }
    }
  })
  
  // Apply transformations to the cloned scene
  clonedScene.scale.set(150, 150, 150) // Scale to match the original planet size
    clonedScene.position.set(0, -32, 0) // Position to match original
  
  // useFrame((state) => {
  //   if (meshRef.current) {
  //     // Automatic rotation on Y-axis (around its axis)
  //     meshRef.current.rotation.y += 0.01
      
  //     // Gentle floating motion - adjusted for massive planet
  //     meshRef.current.position.y = -32 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      
  //     // Slight wobble effect
  //     meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.02
  //   }
  // })

  return (
    <group>
      {/* GLB Model */}
      <primitive 
        ref={meshRef}
        object={clonedScene}
        castShadow
        receiveShadow
      />
      
      {/* Sparkle particles above the model */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={`sparkle-${i}`}
          position={[
            (Math.random() - 0.5) * 60,
            Math.random() * 15 - 2,
            (Math.random() - 0.5) * 60
          ]}
        >
          <sphereGeometry args={[0.05, 4, 4]} />
          <meshBasicMaterial 
            color="#ffffff" 
            transparent={true}
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  )
})

interface Planet3DProps {
  className?: string
}

const Planet3D = memo(function Planet3D({ className = "" }: Planet3DProps) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 8, 30], fov: 65 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[15, 15, 15]} intensity={2} color="#f8fafc" />
        <pointLight position={[-10, 5, 5]} intensity={1.2} color="#e2e8f0" />
        
        <PlanetMesh />
        
        <Environment preset="night" />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
      

      
    </div>
  )
})

export default Planet3D

// Preload the GLB file
useGLTF.preload('/3d/a7a.glb')

'use client'

import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// GLB Model component with better error handling
function AstronautModel() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [modelLoaded, setModelLoaded] = useState(false)
  
  // Load the GLB file
  const gltf = useGLTF('/3d/small-asturnate.glb')
  const { nodes, materials, scene } = gltf

  // Check if model is loaded
  useEffect(() => {
    if (scene && Object.keys(nodes).length > 0) {
      setModelLoaded(true)
    }
  }, [scene, nodes])

  // Animation frame
  useFrame((state) => {
    if (!meshRef.current || !modelLoaded) return
    
    const time = state.clock.getElapsedTime()
    
    // Gentle floating motion
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1
    
    // Subtle rotation
    meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
  })

  // Show loading state
  if (!modelLoaded) {
    return (
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
    )
  }

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone()
  
  // Apply transformations to the cloned scene
  clonedScene.scale.set(3, 3, 3)
  clonedScene.position.set(0, 0, 0)
  clonedScene.rotation.set(1, 0, 0)

  return (
    <primitive 
      ref={meshRef}
      object={clonedScene}
      castShadow
      receiveShadow
    />
  )
}

export default function MoonScene() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div></div>
    )
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [2, 1, 4], fov: 60 }}
        style={{ 
          width: '100%',
          height: '100%'
        }}
        gl={{ antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[10, -10, -10]} intensity={0.5} color="#60a5fa" />

        {/* 3D Model */}
        <Suspense fallback={
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#6b7280" />
          </mesh>
        }>
          <AstronautModel />
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls 
          enablePan={true} 
          enableZoom={false} 
          enableRotate={true}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}

// Preload the GLB file
useGLTF.preload('/3d/small-asturnate.glb')


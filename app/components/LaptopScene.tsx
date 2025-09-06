'use client'

import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// GLB Model component with entrance animation
function LaptopModel() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hasEntered, setHasEntered] = useState(false)
  
  // Load the GLB file
  const gltf = useGLTF('/3d/laptoop.glb')
  const { scene } = gltf

  // Animation frame - must be called before any early returns
  useFrame((state) => {
    if (!meshRef.current || !scene) return
    
    const time = state.clock.getElapsedTime()
    
    // Entrance animation from right
    if (!hasEntered && time > 0.1) {
      const progress = Math.min((time - 0.1) * 2, 1) // 0.5 second entrance
      const easeOut = 1 - Math.pow(1 - progress, 3) // Ease out cubic
      meshRef.current.position.x = 10 - (10 * easeOut) // Move from 10 to 0
      meshRef.current.position.y = 0 // Keep Y at 0 during entrance
      
      if (progress >= 1) {
        setHasEntered(true)
      }
    }
    
    // Gentle floating motion (only after entrance)
    if (hasEntered) {
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.1
      
      // Subtle rotation
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
    }
  })
  
  // Error handling - after hooks
  if (!scene) {
    console.error('Failed to load laptop model')
    return null
  }

  // Clone the scene to avoid modifying the original
  const clonedScene = scene.clone()
  
  // Apply transformations to the cloned scene
  clonedScene.scale.set(0.08, 0.08, 0.08)
  clonedScene.rotation.set(0, 0, 0)

  return (
    <primitive 
      ref={meshRef}
      object={clonedScene}
      castShadow
      receiveShadow
    />
  )
}

export default function LaptopScene() {
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
        <Suspense fallback={null}>
          <LaptopModel />
        </Suspense>

        {/* Camera Controls */}
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          enableRotate={true}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}

// Preload the GLB file
useGLTF.preload('/3d/laptoop.glb')


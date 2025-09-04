"use client"

import { useRef, useState, memo, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Environment, OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const PlanetMesh = memo(function PlanetMesh({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Memoize the planet texture to avoid regenerating it on every render
  const planetTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024 // Reduced from 2048 for better performance
    canvas.height = 1024
    const ctx = canvas.getContext('2d')!
    
    // Create base planet surface with primary brand colors
    const baseGradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 512)
    baseGradient.addColorStop(0, '#3b82f6')  // blue-500
    baseGradient.addColorStop(0.2, '#1d4ed8') // blue-700
    baseGradient.addColorStop(0.4, '#1e40af') // blue-800
    baseGradient.addColorStop(0.6, '#1e3a8a') // blue-900
    baseGradient.addColorStop(0.8, '#172554') // blue-950
    baseGradient.addColorStop(1, '#0f172a')   // slate-900
    
    ctx.fillStyle = baseGradient
    ctx.fillRect(0, 0, 1024, 1024)
    
    // Simplified continent generation for better performance
    for (let i = 0; i < 8; i++) { // Reduced from 12
      const centerX = Math.random() * 1024
      const centerY = Math.random() * 1024
      const baseSize = 50 + Math.random() * 100 // Reduced size
      
      ctx.beginPath()
      for (let angle = 0; angle < Math.PI * 2; angle += 0.1) { // Reduced detail
        const noise = Math.sin(angle * 3) * 0.3 // Simplified noise
        const radius = baseSize * (0.7 + noise)
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        
        if (angle === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      
      const continentGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseSize)
      continentGradient.addColorStop(0, '#ffffff')
      continentGradient.addColorStop(0.5, '#e2e8f0')
      continentGradient.addColorStop(1, '#cbd5e1')
      
      ctx.fillStyle = continentGradient
      ctx.fill()
    }
    
    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    return texture
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      // Only rotate when hovered, and rotate on Y-axis (around its axis)
      // The rotation will stay in place when not hovered
      if (isHovered) {
        meshRef.current.rotation.y += 0.02
      }
      
      // Gentle floating motion - adjusted for massive planet
      meshRef.current.position.y = -32 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      
      // Slight wobble effect
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.02
    }
  })

  return (
    <group>
      {/* Main Planet - Massive size for dramatic effect */}
      <Sphere ref={meshRef} args={[40, 64, 64]} position={[0, -32, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.4}
          roughness={0.6}
          envMapIntensity={1.2}
          map={planetTexture}
        />
      </Sphere>
      

      

      
      {/* Sparkle particles above massive planet */}
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 8, 30], fov: 65 }}
        style={{ background: 'transparent', cursor: 'pointer' }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[-10, 5, 5]} intensity={1} color="#ec4899" />
        <pointLight position={[0, -8, 10]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[0, 8, -10]} intensity={0.6} color="#a855f7" />
        
        <PlanetMesh isHovered={isHovered} />
        
        <Environment preset="night" />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
      

      
      {/* Hover instruction */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-purple-200 text-sm opacity-80 pointer-events-none">
        Hover to spin faster
      </div>
    </div>
  )
})

export default Planet3D

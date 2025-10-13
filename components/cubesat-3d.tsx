"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Cylinder } from "@react-three/drei"
import type * as THREE from "three"

export function CubeSat3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      groupRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#4dd4ff" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={2} color="#ffd700" castShadow />

      <Box args={[1.2, 3.6, 1.2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ffd700"
          metalness={0.95}
          roughness={0.15}
          emissive="#ffb700"
          emissiveIntensity={0.3}
        />
      </Box>

      <Box args={[1.22, 0.15, 1.22]} position={[0, 1.2, 0]}>
        <meshStandardMaterial
          color="#ffed4e"
          metalness={1}
          roughness={0.1}
          emissive="#ffd700"
          emissiveIntensity={0.4}
        />
      </Box>
      <Box args={[1.22, 0.15, 1.22]} position={[0, -1.2, 0]}>
        <meshStandardMaterial
          color="#ffed4e"
          metalness={1}
          roughness={0.1}
          emissive="#ffd700"
          emissiveIntensity={0.4}
        />
      </Box>

      {/* Solar panels - left side */}
      <group position={[-1.5, 0, 0]}>
        <Box args={[0.05, 3.2, 2.4]}>
          <meshStandardMaterial
            color="#0a1128"
            metalness={0.3}
            roughness={0.7}
            emissive="#1e3a8a"
            emissiveIntensity={0.2}
          />
        </Box>
        {/* Solar cells grid pattern */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={`left-cell-${i}`} args={[0.06, 0.35, 0.35]} position={[0, (i - 3.5) * 0.4, 0]}>
            <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.3} />
          </Box>
        ))}
      </group>

      {/* Solar panels - right side */}
      <group position={[1.5, 0, 0]}>
        <Box args={[0.05, 3.2, 2.4]}>
          <meshStandardMaterial
            color="#0a1128"
            metalness={0.3}
            roughness={0.7}
            emissive="#1e3a8a"
            emissiveIntensity={0.2}
          />
        </Box>
        {/* Solar cells grid pattern */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={`right-cell-${i}`} args={[0.06, 0.35, 0.35]} position={[0, (i - 3.5) * 0.4, 0]}>
            <meshStandardMaterial color="#1e40af" metalness={0.8} roughness={0.3} />
          </Box>
        ))}
      </group>

      {/* Communication antenna - top */}
      <group position={[0, 2.2, 0]}>
        <Cylinder args={[0.03, 0.03, 0.8]} position={[0, 0.4, 0]}>
          <meshStandardMaterial
            color="#4dd4ff"
            metalness={0.9}
            roughness={0.1}
            emissive="#4dd4ff"
            emissiveIntensity={0.5}
          />
        </Cylinder>
        <Box args={[0.08, 0.08, 0.08]} position={[0, 0.8, 0]}>
          <meshStandardMaterial
            color="#4dd4ff"
            metalness={0.9}
            roughness={0.1}
            emissive="#4dd4ff"
            emissiveIntensity={0.8}
          />
        </Box>
      </group>

      {/* Deployable antenna - bottom */}
      <group position={[0, -2.2, 0]}>
        <Cylinder args={[0.02, 0.02, 0.6]} position={[0, -0.3, 0]}>
          <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
        </Cylinder>
      </group>

      {/* Thrusters - corners */}
      {[
        [0.5, 1.8, 0.5],
        [-0.5, 1.8, 0.5],
        [0.5, 1.8, -0.5],
        [-0.5, 1.8, -0.5],
      ].map((pos, i) => (
        <Cylinder
          key={`thruster-${i}`}
          args={[0.08, 0.06, 0.15]}
          position={pos as [number, number, number]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.3} />
        </Cylinder>
      ))}

      <Box args={[1.21, 0.4, 0.4]} position={[0, 0.8, 0.61]}>
        <meshStandardMaterial
          color="#c9a227"
          metalness={0.9}
          roughness={0.3}
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </Box>
      <Box args={[1.21, 0.4, 0.4]} position={[0, -0.8, 0.61]}>
        <meshStandardMaterial
          color="#c9a227"
          metalness={0.9}
          roughness={0.3}
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </Box>

      {[
        [0.4, 0, 0.61],
        [-0.4, 0, 0.61],
      ].map((pos, i) => (
        <Box key={`light-${i}`} args={[0.1, 0.1, 0.02]} position={pos as [number, number, number]}>
          <meshStandardMaterial
            color="#22c55e"
            metalness={0.5}
            roughness={0.2}
            emissive="#22c55e"
            emissiveIntensity={1.2}
          />
        </Box>
      ))}

      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.05} depthWrite={false} />
      </mesh>
    </group>
  )
}

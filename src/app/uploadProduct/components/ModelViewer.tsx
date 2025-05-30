"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { toast } from "react-hot-toast";

function Model({ gltf }: { gltf: GLTF }) {
  return <primitive object={gltf.scene} />;
}

interface ModelViewerProps {
  file: File | null;
}

export default function ModelViewer({ file }: ModelViewerProps) {
  const [model, setModel] = useState<GLTF | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!file) {
      setModel(null);
      return;
    }

    const loadModel = async () => {
      setIsLoading(true);
      try {
        const arrayBuffer = await file.arrayBuffer();
        const loader = new GLTFLoader();

        loader.parse(
          arrayBuffer,
          "",
          (gltf) => {
            setModel(gltf);
            toast.success("مدل با موفقیت بارگذاری شد");
          },
          (error) => {
            console.error("Error parsing model", error);
            toast.error(
              file.name.endsWith(".glb")
                ? "خطا در بارگذاری فایل GLB"
                : "خطا در بارگذاری فایل STL"
            );
          }
        );
      } catch (error) {
        console.error("Error loading model", error);
        toast.error("خطا در پردازش فایل");
      } finally {
        setIsLoading(false);
      }
    };

    loadModel();
  }, [file]);

  return (
    <div className="w-full h-100 mt-8 border-2 border-black border-dashed rounded-md">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[#209099]">در حال بارگذاری مدل...</p>
        </div>
      ) : (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          {/* Improved lighting setup */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
          />
          <directionalLight
            position={[-10, -10, -5]}
            intensity={0.5}
          />
          <pointLight position={[0, 10, 0]} intensity={1} />
          
          {/* Environment lighting for better reflections */}
          <Environment preset="city" />
          
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          {model ? (
            <Model gltf={model} />
          ) : (
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#209099" />
            </mesh>
          )}
        </Canvas>
      )}
    </div>
  );
}
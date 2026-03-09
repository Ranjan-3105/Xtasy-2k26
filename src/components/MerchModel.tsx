import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import modelUrl from '../assets/merch_model/XTASY_2026_BAKEEEEE.glb';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Model(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scene } = useGLTF(modelUrl) as any;

  return <primitive object={scene} {...props} />;
}

export function MerchModel() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] bg-black/50 rounded-3xl border border-white/10 overflow-hidden relative shadow-[0_0_30px_rgba(230,0,126,0.15)]">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-hot-pink/5 blur-[100px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="cursor-grab active:cursor-grabbing w-full h-full touch-none"
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} adjustCamera={1.2}>
            <Model />
          </Stage>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <p className="font-body text-white/50 text-sm tracking-widest uppercase">Drag to rotate</p>
      </div>
    </div>
  );
}



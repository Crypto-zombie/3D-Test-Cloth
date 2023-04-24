/* eslint-disable react/no-unknown-property */
import { Preload, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { ControlContext } from 'provider/ControlProvider';
import { Suspense } from 'react';

export default function Configurator() {
  const ContextBridge = useContextBridge(ControlContext);
  return (
    <div className={'h-screen w-screen fixed ios'}>
      <Suspense fallback={null}>
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 22] }}>
          <ContextBridge>
            <group></group>
          </ContextBridge>
          <Preload />
          <ambientLight intensity={2} />
        </Canvas>
      </Suspense>
    </div>
  );
}

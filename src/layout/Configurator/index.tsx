/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import TextureModel from 'componentsFor3D/TextureModel';
import BasicModel from 'componentsFor3D/BasicModel';
import { ControlContext } from 'provider/ControlProvider';
import { Suspense } from 'react';
import BackGround from 'componentsFor3D/BackGround';
import OverlayTexture from 'componentsFor3D/OverlayTexture';
import Navigation from 'components/Navigation';

export default function Configurator() {
  const ContextBridge = useContextBridge(ControlContext);
  return (
    <div className={'h-screen w-screen fixed ios'}>
      <Suspense fallback={null}>
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 2] }}>
          <ContextBridge>
            <OverlayTexture />
            <BackGround />
            <BasicModel />
            <TextureModel />
          </ContextBridge>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minAzimuthAngle={-0.2}
            maxAzimuthAngle={0.2}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <Preload />
          <pointLight intensity={1} position={[0, 0, 5]} />
          <ambientLight intensity={0.4} />
        </Canvas>
        <img
          src={'assets/silk_scarf/silk_scarf_front.png'}
          className='h-full w-auto '
        />
      </Suspense>
      <Navigation />
    </div>
  );
}

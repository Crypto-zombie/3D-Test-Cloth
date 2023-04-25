import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';
import { useMemo } from 'react';

const BasicModel = () => {
  const texture = useMemo(
    () =>
      new THREE.TextureLoader().load(
        '/assets/silk_scarf/silk_scarf_overlay.png'
      ),
    []
  );
  // rest of your component code here
  return (
    <mesh position={[0, 0, 0.07]}>
      <planeBufferGeometry args={[2.1, 2.1, 1]} />
      <meshStandardMaterial
        map={texture}
        lightMap={texture}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
};

export default BasicModel;
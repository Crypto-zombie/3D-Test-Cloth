import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';
import { useMemo } from 'react';

const BackGround = () => {
  const texture = useMemo(
    () =>
      new THREE.TextureLoader().load('/assets/silk_scarf/silk_scarf_front.png'),
    []
  );
  // rest of your component code here
  return (
    <mesh position={[0, 0, 0.069]}>
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

export default BackGround;

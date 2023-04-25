import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';
import { useContext, useMemo } from 'react';
import { ControlContext } from 'provider/ControlProvider';

const BasicModel = () => {
  const { sh } = useContext(ControlContext);
  const texture = useMemo(
    () =>
      new THREE.TextureLoader().load(
        '/assets/silk_scarf/silk_scarf_overlay.png'
      ),
    []
  );
  // rest of your component code here
  return (
    <mesh position={[0, 0.4, 0.07]}>
      <planeBufferGeometry args={[2.18, 2.1, 1]} />
      <meshStandardMaterial
        map={texture}
        lightMap={texture}
        transparent
        opacity={sh[0] / 500}
      />
    </mesh>
  );
};

export default BasicModel;

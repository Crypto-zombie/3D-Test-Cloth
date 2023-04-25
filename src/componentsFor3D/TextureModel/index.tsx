import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';
import { useContext, useMemo } from 'react';
import { ControlContext } from 'provider/ControlProvider';

function hslToHex(h: number, s: number, l: number): string {
  // Convert hue to degrees and scale saturation and lightness to percentages
  const hue = h % 360;
  const sat = s / 100;
  const lum = l / 100;

  // Calculate chroma and intermediate values
  const chroma = (1 - Math.abs(2 * lum - 1)) * sat;
  const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = lum - chroma / 2;

  // Calculate RGB values in [0, 1]
  let [r, g, b] =
    hue < 60
      ? [chroma, x, 0]
      : hue < 120
      ? [x, chroma, 0]
      : hue < 180
      ? [0, chroma, x]
      : hue < 240
      ? [0, x, chroma]
      : hue < 300
      ? [x, 0, chroma]
      : [chroma, 0, x];
  r += m;
  g += m;
  b += m;

  // Convert RGB values to hexadecimal format
  const hex = (
    (Math.round(r * 255) << 16) +
    (Math.round(g * 255) << 8) +
    Math.round(b * 255)
  )
    .toString(16)
    .padStart(6, '0');

  return `#${hex}`;
}
const TextureModel = () => {
  const { scale, hsv } = useContext(ControlContext);
  const model = useLoader(
    OBJLoader,
    '/assets/silk_scarf/silk_scarf_3d_model.obj'
  );
  const texture = useLoader(
    THREE.TextureLoader,
    '/assets/patterns/1_texture_original.png'
  );

  const material = useMemo(() => {
    const newTexture = texture.clone();
    newTexture.repeat.set(2 * (scale / 100), 0.8 * (scale / 100));
    newTexture.wrapS = THREE.RepeatWrapping;
    newTexture.wrapT = THREE.RepeatWrapping;
    return new THREE.MeshBasicMaterial({
      map: newTexture,
      lightMap: newTexture,
      transparent: true,
      color: hslToHex(hsv[0], hsv[1], hsv[2]),
    });
  }, [texture, scale, hsv]);

  model.traverse((child: any) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return (
    <primitive
      position={[-0.01, 0.39, 0.005]}
      scale={[1.03, 1.05, 1]}
      object={model}
    />
  );
};

export default TextureModel;

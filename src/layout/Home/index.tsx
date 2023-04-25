import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';

import { ControlContext } from 'provider/ControlProvider';
export default function Home() {
  const { progress, active, loaded } = useProgress();

  const { controlStatus, setControlStatus } = useContext(ControlContext);
  const content = useRef<any>();
  const bg = useRef<any>();
  const slideEffect = () => {
    gsap.to(content.current, {
      duration: 0.8,
      ease: 'power1.out',
      opacity: 0,
      onComplete: () => {
        gsap.to(bg.current, {
          duration: 2,
          ease: 'power1.out',
          opacity: 0,
          onComplete: () => {
            setControlStatus(true);
          },
        });
      },
    });
  };
  useEffect(() => {
    if (loaded >= 11 && progress === 100) slideEffect();
  }, [loaded]);
  return !controlStatus ? (
    <div
      ref={bg}
      className='w-screen h-screen ios fixed z-30 flex items-center justify-center bg-zinc-900 select-none'
    >
      <Suspense fallback={null}>
        <div className='p-10 text-gray-500 h-screen ios w-screen flex justify-center items-center text-center'>
          <div
            ref={content}
            className='relative -translate-y-20 flex flex-col justify-center items-center space-y-5'
          >
            <p className='font-bold text-5xl'>3D Texture Viewer</p>
            <p className='font-bold text-2xl'>Please wait for a minute...</p>
            <p>Made by valcano103@gmail.com</p>
          </div>
        </div>
      </Suspense>
    </div>
  ) : null;
}

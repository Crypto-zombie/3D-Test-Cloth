import CustomSlider from 'components/Slider';
import { ControlContext } from 'provider/ControlProvider';
import React, { useContext, useState } from 'react';

export default function Modal() {
  const { scale, navIndex, setScale, sh, setSH, hsv, setHSV, setDegree } =
    useContext(ControlContext);
  // console.log('hsv', hsv);
  return navIndex === 3 ? (
    <div className='absolute bg-white top-10 left-5 p-3 drop-shadow-md shadow-md rounded-md w-52 flex flex-col justify-center space-y-3 items-start'>
      <CustomSlider
        max={300}
        min={10}
        step={1}
        text={'Scale'}
        value={scale}
        defaultValue={scale ?? 1}
        onChange={(nextValues: any) => {
          setScale(nextValues);
        }}
      />
      <button
        className='border border-gray-400 hover:bg-gray-200 rounded-sm p-2 w-full text-cyan-500'
        onClick={() => setScale(100)}
      >
        Reset
      </button>
    </div>
  ) : navIndex === 2 ? (
    <div className='absolute bg-white top-10 left-5 p-3 drop-shadow-md shadow-md rounded-md w-52 flex flex-col justify-center space-y-3 items-start'>
      <CustomSlider
        max={360}
        min={1}
        step={1}
        text={'Hue'}
        value={hsv[0]}
        defaultValue={hsv[0] ?? 1}
        onChange={(nextValues: any) => {
          setHSV([nextValues, hsv[1], hsv[2]]);
        }}
      />
      <CustomSlider
        max={100}
        min={0}
        step={1}
        text={'Saturation'}
        value={hsv[1]}
        defaultValue={hsv[1] ?? 1}
        onChange={(nextValues: any) => {
          setHSV([hsv[0], nextValues, hsv[2]]);
        }}
      />
      <CustomSlider
        max={100}
        min={-100}
        step={1}
        text={'Lightness'}
        value={hsv[2]}
        defaultValue={hsv[2] ?? 1}
        onChange={(nextValues: any) => {
          setHSV([hsv[0], hsv[1], nextValues]);
        }}
      />
      <button
        className='border border-gray-400 hover:bg-gray-200 rounded-sm p-2 w-full text-cyan-500'
        onClick={() => setHSV([225, 35, 80])}
      >
        Reset
      </button>
    </div>
  ) : navIndex === 1 ? (
    <div className='absolute bg-white top-10 left-5 p-3 drop-shadow-md shadow-md rounded-md w-52 flex flex-col justify-center space-y-3 items-start'>
      <CustomSlider
        max={300}
        min={100}
        step={1}
        text={'Shadow'}
        value={sh[0]}
        defaultValue={sh[0] ?? 1}
        onChange={(nextValues: any) => {
          setSH([nextValues, sh[1]]);
        }}
      />
      <CustomSlider
        max={300}
        min={100}
        step={1}
        text={'Highight'}
        value={sh[1]}
        defaultValue={sh[1] ?? 1}
        onChange={(nextValues: any) => {
          setSH([sh[0], nextValues]);
        }}
      />
      <button
        className='border border-gray-400 hover:bg-gray-200 rounded-sm p-2 w-full text-cyan-500'
        onClick={() => setSH([100, 100])}
      >
        Reset
      </button>
    </div>
  ) : navIndex === 0 ? (
    <div className='absolute bg-white top-10 left-5 p-3 drop-shadow-md shadow-md rounded-md w-52 flex flex-col justify-center space-y-3 items-start'>
      <div className='flex justify-center items-center'>
        <button
          className='border border-gray-300 py-3 w-11 text-center hover:bg-slate-100'
          onClick={() => setDegree(0)}
        >
          0°
        </button>
        <button
          className='border border-gray-300 py-3  w-11 text-center hover:bg-slate-100'
          onClick={() => setDegree(Math.PI / 2)}
        >
          90°
        </button>
        <button
          className='border border-gray-300 py-3  w-11 text-center hover:bg-slate-100'
          onClick={() => setDegree(-Math.PI / 2)}
        >
          -90°
        </button>
        <button
          className='border border-gray-300 py-3  w-11 text-center hover:bg-slate-100'
          onClick={() => setDegree(Math.PI)}
        >
          180°
        </button>
      </div>
      <button
        className='border border-gray-400 hover:bg-gray-200 rounded-sm p-2 w-full text-cyan-500'
        onClick={() => setDegree(0)}
      >
        Reset
      </button>
    </div>
  ) : null;
}

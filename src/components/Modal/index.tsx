import CustomSlider from 'components/Slider';
import { ControlContext } from 'provider/ControlProvider';
import React, { useContext, useState } from 'react';

export default function Modal() {
  const { scale, navIndex, setScale } = useContext(ControlContext);
  return navIndex === 3 ? (
    <div className='absolute top-10 left-5 p-3 drop-shadow-md shadow-md rounded-md w-52 flex flex-col justify-center space-y-3 items-start'>
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
  ) : null;
}

declare module 'react-range-slider-input' {
  import React from 'react';

  interface RangeSliderProps {
    min?: number;
    max?: number;
    value: [number, number];
    onChange?: (value: [number, number]) => void;
    onInput?: (value: [number, number]) => void;
    step?: number;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
  }

  const RangeSlider: React.FC<RangeSliderProps>;

  export default RangeSlider;
}

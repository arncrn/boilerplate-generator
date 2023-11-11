import * as React from 'react';
import type { ReactElement, ComponentProps } from 'react';

import Slider from '../Slider';

function SquareSlider(
  { label, ...delegated }: ComponentProps<'input'> & { label: string },
  ref: any,
): ReactElement {
  return (
    <Slider
      label={label}
      className={'squareSlider'}
      ref={ref}
      { ...delegated }
    />
  );
}

export default React.forwardRef(SquareSlider);

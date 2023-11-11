import React from 'react';
import type { ReactElement, ComponentProps } from 'react';

import styled from 'styled-components';

function Slider(
  { label, className = '', ...delegated }: ComponentProps<'input'> & { label: string },
  ref: any,
): ReactElement {
  const id = React.useId();

  return (
    <Wrapper>
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
      <SliderRange
        type="range"
        id={id}
        {...delegated}
        className={className}
        ref={ref}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const SliderRange: any = styled.input`
  --handle-size: 16px;
  --handle-radius: 1000px;
  --track-size: 3px;
  --bg: white;
  --track-color: hsl(0deg 0% 50% / 0.25);
  --handle-color: hsl(250deg 100% 50%);
  --track-active-color: hsl(0deg 0% 50% / 0.125);
  --handle-active-color: hsl(250deg 100% 70%);

  display: block;
  width: 100%;
  background: transparent;
  appearance: none;
  outline-offset: 6px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    height: var(--handle-size);
    width: var(--handle-size);
    border-radius: var(--handle-radius);
    background: var(--handle-color);
    cursor: grab;
    transform: translateY(
      calc(-50% + var(--track-size) / 2)
    );
    outline: 2px solid var(--bg);
  }

  &::-moz-range-thumb {
    background: var(--handle-color);
    border: 2px solid var(--bg);
    border-radius: var(--handle-radius);
    height: var(--handle-size);
    width: var(--handle-size);
  }

  &:active::-webkit-slider-thumb, &:active::-moz-range-thumb {
    cursor: grabbing;
    background: var(--handle-active-color);
  }

  &::-webkit-slider-runnable-track {
    width: calc(100% - var(--handle-size));
    height: var(--track-size);
    background: var(--track-color);
    border-radius: var(--track-size) / 2;
    margin: calc(var(--handle-size) / 2) 0;
  }

  &::-moz-range-track {
    background: var(--track-color);
  }

  &:active::-webkit-slider-runnable-track, &:active::-moz-range-track {
    background: var(--track-active-color);
  }

  &.squareSlider {
  --handle-size: 16px;
  --handle-radius: 1px;
  --track-size: 22px;
  --outline-width: 0px;

  &::-webkit-slider-runnable-track {
    padding-left: 3px;
    padding-right: 3px;
  }
}
`;

/*
  forwardRef allows the "ref" argument to be enabled, and for this element to
  use the passed down reference from "react.useRef"
*/
export default React.forwardRef(Slider);

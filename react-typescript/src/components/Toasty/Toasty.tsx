import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';

import useIsOnscreen from '../../hooks/use-is-onscreen';

/*
  Component that will remain off screen until the user has scrolled to a
  certain point, and then it will slide on screen.
*/
const Toasty = (): ReactElement => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const isShown = useIsOnscreen(wrapperRef);

  const translateX = isShown ? '0%' : '100%';

  return (
    <Wrapper ref={wrapperRef}>
      <Character
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </Character>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: block; */
  position: relative;
  pointer-events: none;
`;

const Character = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 200px;
  transition: transform 200ms;
`;

export default Toasty;

import React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import { Loader } from 'react-feather';

import styled from 'styled-components';

interface StyleProps extends React.CSSProperties {
  '--speed': string
}

function Spinner({
  color = 'black',
  size = 24,
  opacity = 0.5,
  speed = 1200,
}: ComponentProps<any>): ReactElement {
  return (
    <Wrapper
      style={{
        opacity,
        '--speed': `${speed}ms`,
        width: size,
        height: size,
      } as StyleProps}
    >
      <Loader color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.span`
  @keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

  display: block;
  animation: spin var(--speed) linear infinite;

  svg {
    /*
      Ensure that the child is block so
      that it spins symmetrically
    */
    display: block;
  }
`;

export default Spinner;

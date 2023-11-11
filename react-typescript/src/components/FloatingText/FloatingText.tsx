import React from 'react';
import type { ReactElement, ComponentProps } from 'react';

import styled from 'styled-components';

function FloatingText({ children }: ComponentProps<any>): ReactElement {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @keyframes floatBy {
    0% {
      transform: translateY(50%);
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      transform: translateY(-50%);
      opacity: 0;
    }
  }

  animation: floatBy 600ms both cubic-bezier(0,.66,.48,1);
`;

export default FloatingText;

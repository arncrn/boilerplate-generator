import React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import styled from 'styled-components';

function MaxWidthWrapper({
  children,
  as: Tag = 'div',
  className = '',
  ...delegated
}: ComponentProps<any>): ReactElement {
  return (
    <StyledWrapper
      as={Tag}
      {...delegated}
      className={`${className as string}`}
    >
      {children}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 700px;
  margin-inline: auto;
  padding-inline: 16px;
`;

export default MaxWidthWrapper;

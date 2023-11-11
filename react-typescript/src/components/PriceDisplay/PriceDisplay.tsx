import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';

function PriceDisplay({
  price,
  id
}: { price: number, id: string }): ReactElement {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <Wrapper>
      <Animated key={`${id}-${price}`}>
        {formattedPrice}
      </Animated>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 16px 0;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
`;

const Animated = styled.div`
  @keyframes slide {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes colors {
    from {
      color: hsl(50deg 100% 50%);
    }
  }
  
  animation:
    slide 750ms cubic-bezier(0.15, 0.75, 0.25, 1.05),
    colors 1500ms;
`;

export default PriceDisplay;

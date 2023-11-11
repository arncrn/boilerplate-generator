import React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import styled from 'styled-components';

function Asterisk({ children }: ComponentProps<any>): ReactElement {
  return (
    <Tooltip.Root>
      <TooltipTrigger>
          *
      </TooltipTrigger>
      <Tooltip.Portal>
        <TooltipContent>
          { children }
        </TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

const TooltipTrigger = styled(Tooltip.Trigger)`
  position: relative;
  display: inline-block;
  color: hsl(245deg 100% 50%);
  font-weight: bold;
  border: none;
  background: transparent;
  padding: 0px 2px;

  /*
    Increase the size of the trigger target,
    to make it easier to trigger the tooltip.
  */
  &::after {
    content: '';
    position: absolute;
    inset: -8px;
  }
`;

const TooltipContent = styled(Tooltip.Content)`
  padding: 12px 18px;
  border-radius: 6px;
  background-color: hsl(245deg 100% 60%);
  color: white;
  font-size: 0.875rem;
  text-align: center;
  filter: drop-shadow(0px 4px 8px hsl(245deg 100% 40% / 0.2));

  svg {
    display: block;
    transform: scale(1.1);
    fill: hsl(245deg 100% 60%);
  }
`;

export default Asterisk;

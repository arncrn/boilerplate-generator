import * as React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import styled from 'styled-components';

/*
  An icon component is passed in as the 'icon' prop, but that component's
  props are completely controlled by this component. This allows you to simplify how
  icons are used, by eliminating the requirement to pass in a size or strokeWidth.

  Also if the Icons were to be required/imported in this file, you would need to import
  every single one, causing bloat and making the component much more complex.
*/
function IconButton(
  {
    icon: Icon,
    children,
    size = 24,
    strokeWidth = 1.5
  }: ComponentProps<any>
): ReactElement {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon size={size} strokeWidth={strokeWidth} />
      </IconWrapper>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </Wrapper>
  );
}

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  aspect-ratio: 1 / 1;
  background-color: hsl(270deg 25% 35%);
  border-radius: 4px;
  transition: background-color 200ms;
`;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 4px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: hsl(270deg 40% 20%);
  font-size: 1.125rem;
  cursor: pointer;

  &:hover ${IconWrapper} {
    background-color: hsl(270deg 25% 40%);
  }

  &:active ${IconWrapper} {
    transform: scale(0.9);
  }
`;

const ChildrenWrapper = styled.span`
  padding: 0px 24px;
`;

export default IconButton;

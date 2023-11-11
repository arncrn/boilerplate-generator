import * as React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import { Menu } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';

import Drawer from '../Drawer';

function NavHeader(): ReactElement {
  return (
    <Wrapper>
        <a href="">Kaboom</a>

        <nav role="navigation" aria-label="Main menu">
            <Drawer
              triggerButton={
                <HamburgerButton>
                  <Menu aria-hidden="true" focusable="false" />
                  <VisuallyHidden>Open main menu</VisuallyHidden>
                </HamburgerButton>
              }
            >
              <NavigationList>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">Photographers</a>
                </li>
                <li>
                  <a href="">Submit Work</a>
                </li>
              </NavigationList>
            </Drawer>
        </nav>
      </Wrapper>
  );
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    padding: 16px;
`;

const NavigationList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style-type: none;
  padding: 0px;

  & a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;

    &:hover {
      color: hsl(350deg 100% 40%);
    }
  }
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: transform 200ms;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export default NavHeader;

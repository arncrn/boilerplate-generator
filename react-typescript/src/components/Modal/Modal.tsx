import React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import { X as Close } from 'react-feather';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import VisuallyHidden from '../VisuallyHidden'

function Modal(
  {
    title,
    children,
    triggerButton,
  }: ComponentProps<'div'> & { triggerButton: ReactElement }
): ReactElement {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        { triggerButton }
      </Dialog.Trigger>
      <Dialog.Portal>
        <Wrapper>
          <Backdrop />
          <DialogContent>
            <Dialog.Close asChild>
              <CloseButton>
                <Close />
                <VisuallyHidden>
                  Dismiss modal
                </VisuallyHidden>
              </CloseButton>
            </Dialog.Close>
            <DialogTitle>{ title }</DialogTitle>
            {children}
          </DialogContent>
        </Wrapper>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  padding: 16px;
`;

const Backdrop = styled(Dialog.Overlay)`
  position: absolute;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
`;

const DialogContent = styled(Dialog.Content)`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 32px;
  width: 340px;
  max-width: 100vw;

  & h2 {
    text-align: center;
    margin-top: -8px;
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  color: var(--mauve-12);
  font-size: 17px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
  color: white;
  transform: translateY(-100%);
  cursor: pointer;
  background: transparent;
  border: none
`;

export default Modal;

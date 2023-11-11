import React from 'react';
import type { ComponentProps, ReactElement } from 'react';
import { X as Close } from 'react-feather';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

function Drawer(
  {
    children,
    triggerButton,
  }: ComponentProps<'button'> & { triggerButton: ReactElement }): ReactElement {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        { triggerButton }
      </Dialog.Trigger>
      <Dialog.Portal>
        <Wrapper>
          <Backdrop />
          <DrawerContent>
            <div>{children}</div>
            <Dialog.Close asChild>
              <CloseButton>
                <Close size={18} aria-hidden="true" focusable="false" />{' '}
                Dismiss
              </CloseButton>
            </Dialog.Close>
          </DrawerContent>
        </Wrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Wrapper = styled.div`
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }

  position: fixed;
  inset: 0;
  padding: 16px;
`;

const Backdrop = styled(Dialog.Overlay)`
  position: absolute;
  inset: 0;
  background: hsl(350deg 100% 30% / 0.75);
  backdrop-filter: blur(3px);
  animation: fadeIn 850ms cubic-bezier(.14,.78,.36,1);
`;

const DrawerContent = styled(Dialog.Content)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  max-width: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 32px;
  animation: slideIn 500ms cubic-bezier(.14,.78,.36,1);
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  border: none;
  background: hsl(350deg 100% 90%);
  border-radius: 4px;
`;

export default Drawer;

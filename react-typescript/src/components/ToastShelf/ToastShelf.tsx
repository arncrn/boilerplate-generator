import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';

function ToastShelf(): ReactElement {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ListWrapper role="region" aria-live="assertive" aria-label="Notification">
      {toasts?.map((toast) => (
        <ToastWrapper key={toast.id}>
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </ToastWrapper>
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ol`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  list-style-type: none;
`;

const ToastWrapper = styled.li`
  @keyframes toast {
    from {
      transform: translateX(calc(100% + 64px));
    }
  }

  animation: toast 800ms cubic-bezier(0, 0.46, 0, 1.04) both;
  will-change: transform;
`;

export default ToastShelf;

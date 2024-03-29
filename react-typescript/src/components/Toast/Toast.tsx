import React from 'react';
import type { ReactElement } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import styled from 'styled-components';

import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

const ICONS_BY_VARIANT: Record<string, any> = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  id,
  variant,
  children,
}: {
  id: string
  variant: string
  children: any
}): ReactElement {
  const { dismissToast } = React.useContext(ToastContext);
  const Icon: any = ICONS_BY_VARIANT[variant];

  return (
    <Wrapper className={variant}>
      <IconContainer>
        <Icon size={24} />
      </IconContainer>
      <Content>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </Content>
      <CloseButton
        onClick={() => { dismissToast(id) }}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </CloseButton>
    </Wrapper>
  );
}

const IconContainer = styled.p`
  flex-shrink: 0;
  padding: 16px;
  padding-right: 0px;

  svg {
    display: block;
  }
`;

const Wrapper = styled.div`
  --color-notice: hsl(235deg 100% 50%);
  --color-notice-bg: hsl(235deg 0% 100%);
  --color-warning: hsl(35deg 100% 46%);
  --color-warning-bg: hsl(40deg 100% 94%);
  --color-success: hsl(120deg 80% 35%);
  --color-success-bg: hsl(120deg 90% 96%);
  --color-error: hsl(345deg 100% 50%);
  --color-error-bg: hsl(350deg 90% 96%);

  --shadow-color: 250deg 35% 11%;
  /* prettier-ignore */
  --shadow-elevation-low:
  0px 0.6px 0.6px hsl(var(--shadow-color) / 0.26),
  0px 0.8px 0.8px -1.6px hsl(var(--shadow-color) / 0.22),
  0px 1.8px 1.8px -3.2px hsl(var(--shadow-color) / 0.19);
  /* prettier-ignore */
  --shadow-elevation-medium:
  0px 0.3px 0.6px hsl(var(--shadow-color) / 0.2),
  0px 0.7px 1.4px -1.1px hsl(var(--shadow-color) / 0.19),
  0px 1.5px 3.7px -2.1px hsl(var(--shadow-color) / 0.18),
  0.1px 4px 9.2px -3.2px hsl(var(--shadow-color) / 0.17),
  0.2px 6px 15px -2.3px hsl(var(--shadow-color) / 0.16);
  /* prettier-ignore */
  --shadow-elevation-high:
    0px 0.6px 0.6px hsl(var(--shadow-color) / 0.26),
    0px 1.8px 1.8px -0.5px hsl(var(--shadow-color) / 0.24),
    0px 3.2px 3.3px -0.9px hsl(var(--shadow-color) / 0.23),
    0.1px 5.4px 5.5px -1.4px hsl(var(--shadow-color) / 0.21),
    0.1px 9.1px 9.3px -1.8px hsl(var(--shadow-color) / 0.2),
    0.2px 14.7px 15px -2.3px hsl(var(--shadow-color) / 0.19),
    0.3px 22.8px 23.3px -2.7px hsl(var(--shadow-color) / 0.17),
    0.4px 34.2px 34.9px -3.2px hsl(var(--shadow-color) / 0.16);

  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  color: black;
  color-scheme: light;
  background: white;
  max-width: 100%;
  width: 350px;
  box-shadow: var(--shadow-elevation-medium);

  &.notice {
    background: var(--color-notice-bg);

    & ${IconContainer} {
    color: var(--color-notice);
  }
  }

  &.warning {
    background: var(--color-warning-bg);

    & ${IconContainer} {
      color: var(--color-warning);
    }
  }

  &.success {
    background: var(--color-success-bg);

    & ${IconContainer} {
      color: var(--color-success);
    }
  }

  &.error {
    background: var(--color-error-bg);

    & ${IconContainer} {
      color: var(--color-error);
    }
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 12px 0px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  flex-shrink: 0;
  border: none;
  background: transparent;
  padding: 16px;
  cursor: pointer;
`;

export default Toast;

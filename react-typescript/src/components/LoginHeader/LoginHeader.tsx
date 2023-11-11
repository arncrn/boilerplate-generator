import React from 'react';
import type { ReactElement } from 'react';
import Modal from '../Modal';
import LoginForm from '../LoginForm';
import styled from 'styled-components';

function LoginHeader(): ReactElement {
  return (
    <Wrapper>
      <Modal
        title="Log in"
        triggerButton={<button>Log in</button>}
      >
        <LoginForm />
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;
  border-bottom: 1px dashed silver;

  & button {
    padding: 8px 24px;
    margin-right: 16px;
  }
`;

export default LoginHeader;

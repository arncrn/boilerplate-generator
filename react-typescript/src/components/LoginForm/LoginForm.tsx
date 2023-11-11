import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';

function LoginForm(): ReactElement {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const id = React.useId();

  function handleSubmit(event: any): void {
    event.preventDefault();
    console.log('Login function called')
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`email-${id}`}>
          Email
        </label>
        <input
          type="email"
          id={`email-${id}`}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor={`password-${id}`}>
          Password
        </label>
        <input
          type="password"
          id={`password-${id}`}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button>Submit</button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  label {
    display: block;
    color: #555;
    margin-bottom: 8px;
  }

  input {
    display: block;
    width: 100%;
    padding: 8px;
    margin-bottom: 24px;
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: 48px;
    padding: 8px 24px;
    font-size: 1.125rem;
    border: 1px solid black;
    border-radius: 2px;
    background-color: buttonface;
  }
`;

export default LoginForm;

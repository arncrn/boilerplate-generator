import React from 'react';
import type { FormEvent, ReactElement } from 'react';
import styled from 'styled-components';

import { ToastContext } from '../ToastProvider';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = [
  'notice',
  'warning',
  'success',
  'error'
];

function ToastPlayground(): ReactElement {
  const { createToast } = React.useContext(ToastContext);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleCreateToast(event: FormEvent): void {
    event.preventDefault();

    createToast(message, variant);

    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <Wrapper>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <ControlsWrapper
        onSubmit={handleCreateToast}
      >
        <Row>
          <Label
            htmlFor="message"
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </Label>
          <InputWrapper>
            <MessageInput
              id="message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
            />
          </InputWrapper>
        </Row>

        <Row>
          <DivLabel>Variant</DivLabel>
          <RadioWrapper>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`
              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={(event) => {
                      setVariant(event.target.value)
                    }}
                  />
                  {option}
                </label>
              )
            })}
          </RadioWrapper>
        </Row>

        <Row>
          <DivLabel />
          <RadioWrapper>
            <Button>
              Pop Toast!
            </Button>
          </RadioWrapper>
        </Row>
      </ControlsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 64px 32px;
  max-width: 800px;
  margin: 0 auto;

  header {
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 64px;
    min-height: 300px;

    h1 {
      position: relative;
      font-size: 4.25rem;
      line-height: 1.1;
      padding-bottom: 32px;
      color: white;
      /* prettier-ignore */
      text-shadow:
        0px 0px 10px hsl(250deg 40% 16% / 0.5),
        0px 0px 20px hsl(250deg 40% 16% / 0.5),
        0px 0px 40px hsl(250deg 40% 16% / 0.5);
    }

    img {
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      width: 250px;
    }
  }
`;

const ControlsWrapper = styled.form`
  color-scheme: light;
  outline: 2px dashed hsl(250deg 80% 80% / 0.6);
  outline-offset: 4px;
  border-radius: 4px;
  background: white;
  color: black;
  padding: 16px;
  margin-top: 32px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  /*
    This is the height when a row contains a text input.
    We specify it to prevent a layout shift when "dismiss-after"
    is toggled on/off.
  */
  min-height: 3rem;

  &:not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px dotted hsl(250deg 80% 80% / 0.5);
    margin-bottom: 16px;
  }
`;

const DivLabel = styled.div`
  flex-basis: 160px;
  text-align: right;
  font-weight: 700;
`;

const Label = styled.label`
  flex-basis: 160px;
  text-align: right;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const RadioWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100px;
  }
`;

const MessageInput = styled.textarea`
  display: block;
  width: 100%;
  height: 4rem;
`;

const Button = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(
    to top,
    hsl(245deg 50% 30%),
    hsl(280deg 60% 44%)
  );
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;
  outline-offset: 4px;
`;

export default ToastPlayground;

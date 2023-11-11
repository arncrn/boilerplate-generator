import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';

/*
  Component to visually hide data, but continue to show it to screen readers.
  To see what is hidden, hold the "alt" key ("option" on mac).
*/
const VisuallyHidden = ({ children, ...delegated }: any): ReactElement => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (
        event: KeyboardEvent,
      ): void => {
        if (event.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = (): void => {
        setForceShow(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default VisuallyHidden;

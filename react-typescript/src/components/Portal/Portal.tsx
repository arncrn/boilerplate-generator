import React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }: ComponentProps<'div'>): ReactElement | null {
  const [host, setHost] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    host.setAttribute('data-react-portal-host', '')

    setHost(host);

    return () => {
      host.remove();
    };
  }, []);

  if (!host) {
    return null;
  }

  return createPortal(children, host);
}

export default Portal;

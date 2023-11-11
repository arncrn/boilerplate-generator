import React from 'react';
import type { ComponentProps, ReactElement, Context } from 'react';

import useKeydown from '../../hooks/use-keydown';

interface ToastInterface {
  id: string
  message: string
  variant: string
}

interface ToastContextInterface {
  toasts?: ToastInterface[]
  createToast: (message: string, variant: string) => void
  dismissToast: (id: string) => void
}

const defaultContext: ToastContextInterface = {
  toasts: [],
  createToast: (message: string, variant: string) => {},
  dismissToast: (id: string) => {}
}

export const ToastContext: Context<ToastContextInterface> = React.createContext(defaultContext);

function ToastProvider({ children }: ComponentProps<any>): ReactElement {
  const [toasts, setToasts] = React.useState<ToastInterface[]>([]);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', handleEscape);

  function createToast(message: string, variant: string): void {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id: string): void {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

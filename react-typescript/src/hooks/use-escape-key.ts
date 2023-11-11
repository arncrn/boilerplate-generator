import React from 'react';

function useEscapeKey(callback: () => void): void {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.code === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

export default useEscapeKey;

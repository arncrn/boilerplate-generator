import React from 'react';

function useKeydown(key: string, callback: (event?: KeyboardEvent) => void): void {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeydown;

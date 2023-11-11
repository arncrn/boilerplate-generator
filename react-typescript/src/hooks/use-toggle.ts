import React from 'react';

function useToggle(initialValue: boolean = false): [boolean, (newValue?: unknown) => void] {
  const [value, setValue] = React.useState(
    initialValue
  );

  /*
    the useCallback hook is not necessary, and is more of an optimization tool.
    However, it is used here in order to allow the useToggle hook to be more generic.
    This will prevent child components from force-re-rendering when a component that passes
    this hook to them re-renders.
  */
  const toggleValue = React.useCallback((newValue?: unknown): void => {
    if (typeof newValue === 'boolean') {
      setValue(() => newValue);
    } else {
      setValue((currentValue) => !currentValue);
    }
  }, []);

  return [value, toggleValue];
}

export default useToggle;

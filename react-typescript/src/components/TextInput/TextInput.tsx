import React from 'react';
import type { ReactElement, ComponentProps } from 'react';

function TextInput({ id, label, ...delegated }: ComponentProps<'input'> & { label: string }): ReactElement {
  const generatedId = React.useId();
  const appliedId = id ?? generatedId;

  return (
    <div className="text-input">
      <label htmlFor={appliedId}>
        {label}
      </label>
      <input
        id={appliedId}
        {...delegated}
      />
    </div>
  );
}

export default TextInput;

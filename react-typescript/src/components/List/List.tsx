import * as React from 'react';
import type { ReactElement, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

function ListBase({
  className = '',
  as: Tag = 'ul',
  children,
  ...delegated
}: ComponentPropsWithoutRef<'ul' | 'ol'> & { as: 'ul' | 'ol' }): ReactElement {
  return (
    <Tag
      className={className}
      {...delegated}
    >
      { children }
    </Tag>
  );
}

const List = styled(ListBase)`
  font-size: 1.25rem;
  padding: 0px;

  li {
    margin-bottom: 0.5em;

    &::marker {
      color: hsl(345deg 100% 50%);
    }
  }
`;

export default List;

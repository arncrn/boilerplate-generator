import * as React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import styled from 'styled-components';

function Breadcrumbs({ children }: ComponentProps<'nav'>): ReactElement {
  return (
    <nav aria-label="Breadcrumbs">
      <BreadcrumbList>
        { children }
      </BreadcrumbList>
    </nav>
  )
}

function Crumb({
  children,
  href,
  isCurrent,
}: ComponentProps<'a'> & { isCurrent?: boolean }): ReactElement {
  return (
    <li>
      <Anchor href={href} aria-current={isCurrent && 'page'}>
        { children }
      </Anchor>
    </li>
  )
}

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;

  & li {
    display: inline;
    --spacing: 12px;

    &:not(:first-of-type) {
      margin-left: var(--spacing);
    }

    &:not(:first-of-type)::before {
      content: '';
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      margin-right: var(--spacing);
      height: 0.8em;
    }
  }
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

Breadcrumbs.Crumb = Crumb;

export default Breadcrumbs;

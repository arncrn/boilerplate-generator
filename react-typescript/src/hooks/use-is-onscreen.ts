/*
    Useful hook if you want some visual effect to happen only when an element is
    on screen. It can be expensive to render every single effect on a page whether the
    element is in the viewport or not.
    Plus you can get a real performance boost if you do "just in time" visual effects.
*/
import React from 'react';

function useIsOnscreen<T extends { current: HTMLElement | null }>(
  elementRef: T
): boolean {
  const [isOnscreen, setIsOnscreen] = React.useState(false);

  React.useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnscreen(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
    /*
        passing elementRef as a useEffect dependency is not necessary from
        a functionality standpoint. It is to satisfy the linter because the
        linter doesn't work well with data across files.
     */
  }, [elementRef]);

  return isOnscreen;
}

export default useIsOnscreen;

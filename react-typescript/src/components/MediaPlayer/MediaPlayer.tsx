import React from 'react';
import type { ReactElement, ComponentProps } from 'react';
import styled from 'styled-components';
import { Play, Pause } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';

function MediaPlayer({ src }: ComponentProps<'audio'>): ReactElement {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.code === 'Space') {
        /*
          by passing a function to "setIsPlaying" instead of passing a value,
          we are able to access the current "freshest" value of the state variable. This is
          used instead of adding "isPlaying" to useEffect's dependency array.

          This alternative syntax is only necessary when it's possible for state variables to grow stale
        */
        setIsPlaying((currentIsPlaying) => {
          return !currentIsPlaying;
        });
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (!audioRef?.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Wrapper>
      <Player>
        <img alt="" src="https://sandpack-bundler.vercel.app/img/take-it-easy.png" />
        <Summary>
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </Summary>
        {/* "enter" or "space" can behave as a click event when focuesed on an element.
          To stop the event from behaving as both a click event and as a keydown event,
           we explicitly prevent the event from bubbling up with "stopPropagation". */}
        <button
          onKeyDown={(event) => {
            if (event.code === 'Space') {
              event.stopPropagation();
            }
          }}
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio
          ref={audioRef}
          src={src}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />
      </Player>
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;

const Player = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px;
    border-top: 1px solid hsl(0deg 0% 85%);
    background: white;

    & img {
      width: 64px;
      border-radius: 8px;
    }

    & button {
      width: 48px;
      height: 48px;
      min-width: 48px;
      background: hsl(0deg 0% 10%);
      border: none;
      color: white;
      border-radius: 50%;
      display: grid;
      place-content: center;
      cursor: pointer;
      outline-offset: 4px;
    }
`;

const Summary = styled.div`
  flex: 1;
  min-width: 0px;

  & h2 {
    line-height: 1em;
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & p {
    font-size: 1rem;
    color: hsl(0deg 0% 33%);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default MediaPlayer;

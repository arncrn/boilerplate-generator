import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import {
  Award,
  Camera,
  Frown,
  Slash,
  XCircle,
} from 'react-feather';
import * as Tooltip from '@radix-ui/react-tooltip';

import MaxWidthWrapper from './MaxWidthWrapper';
import MediaPlayer from './MediaPlayer';
import Toasty from './Toasty';
import VisuallyHidden from './VisuallyHidden';
import TextInput from './TextInput';
import Slider from './Slider';
import SquareSlider from './SquareSlider';
import Toggle from './Toggle';
import List from './List';
import Breadcrumbs from './Breadcrumbs';
import IconButton from './IconButton';
import NavHeader from './NavHeader';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import LoginHeader from './LoginHeader';
import Asterisk from './Asterisk';
import ToastProvider from './ToastProvider';
import FloatingText from './FloatingText';
import PriceDisplay from './PriceDisplay';
import Spinner from './Spinner';
// import Portal from './Portal'; // component to create a custom portal. Typically used with things like tooltips and modals.

import useMousePosition from '../hooks/use-mouse-position';
import useToggle from '../hooks/use-toggle';

import faqData from '../dummy-data/faq-data';
import ToastPlayground from './ToastPlayground';

const DEMO_SONG_SRC = 'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3';

function App(): ReactElement {
  const mousePosition = useMousePosition();
  const [showHiddenValue, setShowHiddenValue] = useToggle(false);
  const [toggleValue, setToggleValue] = useToggle(false);
  const [floatingTextKey, setFloatingTextKey] = React.useState('initial');
  const [someNumber, setSomeNumber] = React.useState(0);

  const squareSliderRef = React.useRef<HTMLInputElement>(null);

  const handleIconClick = (): void => {
    setFloatingTextKey(crypto.randomUUID());
    setSomeNumber(someNumber + 1);
  }

  React.useEffect(() => {
    // autofocus on the square slider when the page loads
    squareSliderRef?.current?.focus();
  }, []);

  return (
    <Tooltip.Provider delayDuration={200}>
      <Wrapper>
        <NavHeader />
        <LoginHeader />
        <Spinner />
        <FloatingText key={floatingTextKey}>
          <p>I re-render as my key is changed</p>
        </FloatingText>
        <PriceDisplay id={floatingTextKey} price={someNumber} />
        <button onClick={handleIconClick}>
          Click me!
        </button>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>
            Home
            <Asterisk>This is a navigation breadcrumb</Asterisk>
          </Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/CLYW'>
            CLYW
          </Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb
            href='/CLYW/boy'
            isCurrent={true}
          >
            BOY
          </Breadcrumbs.Crumb>
        </Breadcrumbs>

        <Asterisk>These icons show a technique of passing a react component through props</Asterisk>
        <IconButton icon={Award}>
          Award Icon
        </IconButton>
        <IconButton icon={Camera}>
          Camera Icon
        </IconButton>
        <IconButton icon={Frown}>
          Frown Icon
        </IconButton>
        <IconButton icon={Slash}>
          Slash Icon
        </IconButton>
        <IconButton icon={XCircle}>
          XCircle Icon
        </IconButton>

        <MaxWidthWrapper>
          <FrequentlyAskedQuestions data={faqData} />
        </MaxWidthWrapper>

        <button onClick={setShowHiddenValue}>
          Click me to show the hidden value
        </button>
        {showHiddenValue && <p>I am a fire truck</p>}

        <div>
          <p>{mousePosition.x} / {mousePosition.y}</p>
        </div>

        <TextInput label={'Text Input Component'}/>
        <Slider label={'Slider Component'}/>
        <SquareSlider
          label={'Square Slider using composition'}
          ref={squareSliderRef}
        />
        <Toggle
          checked={toggleValue}
          onClick={setToggleValue}
          label={'custom toggle button'}
          className='green-toggle'
        />

        <List as='ul'>
          <li>
            Item 1
            <Asterisk>
              This is an unordered list item. This shows a useful way to create multiple
              types of components by passing keywords through props
            </Asterisk>
          </li>
          <li>Item 2</li>
          <li>Item 3</li>
        </List>
        <List as='ol'>
          <li>Item 1 <Asterisk>This is an ordered list item</Asterisk></li>
          <li>Item 2</li>
          <li>Item 3</li>
        </List>

        <MediaPlayer src={DEMO_SONG_SRC} />
        <VisuallyHidden>
          <p>This text is hidden until you press 'Alt'</p>
        </VisuallyHidden>
        <Toasty />
        <ToastProvider>
          <ToastPlayground />
        </ToastProvider>
      </Wrapper>
    </Tooltip.Provider>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
`;

export default App;

import React from 'react';
import type { ReactElement } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'react-feather';

import styled from 'styled-components';

interface FaqData {
  data: Array<{
    id: string
    question: string
    answer: string
  }>
}

function FrequentlyAskedQuestions(
  {
    data,
  }: FaqData
): ReactElement {
  return (
    <Wrapper type="single" collapsible={true}>
      {data.map(({ id, question, answer }) => {
        return (
          <AccordionItem key={id} value={id}>
            <Accordion.Header>
              <AccordionTrigger>
                {question}
                <ChevronDown className={'chevron'} />
              </AccordionTrigger>
            </Accordion.Header>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled(Accordion.Root)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }
`;

const AccordionItem = styled(Accordion.Item)`
  border: 2px solid;
  border-bottom: 0px;
  background: white;
  overflow: hidden;

  &:first-of-type {
    border-radius: 8px 8px 0px 0px;
  }

  &:last-of-type {
    border-radius: 0px 0px 8px 8px;
    border-bottom: 2px solid;
  }

  &:not(:last-of-type) AccordionContent {
    padding-bottom: 24px;
  }
`;

const AccordionTrigger = styled(Accordion.Trigger)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  text-align: left;
  outline: none;

  &:focus-visible {
    background: hsl(60deg 100% 70%);
  }

  & svg {
    display: block;
    flex-shrink: 0;
    transform: translateY(3px);
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;

const AccordionContent = styled(Accordion.Content)`
  border-top: 1px solid hsl(0deg 0% 0% / 0.75);
  background: hsl(130deg 100% 95%);
  padding: 8px 16px 16px;
  animation: fadeIn 200ms;
`;

export default FrequentlyAskedQuestions;

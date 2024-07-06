'use client';

import { ReactNode } from 'react';

type Question = {
  get: () => string;
  prompt: string;
  id: string;
  element: JSX.Element;
};

const Question = ({
  question,
  className,
  children,
}: {
  question: Question;
  className: string;
  children: ReactNode;
}) => {
  if (!question) return null;

  const { prompt, id, element } = question;
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-4 w-3/4 m-auto">
        {prompt}
      </label>
      {element}
      {children}
    </div>
  );
};
export default Question;

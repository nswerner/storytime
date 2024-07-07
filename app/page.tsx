'use client';

import { NextRequest } from 'next/server';
import { useState, useCallback, useEffect, ChangeEvent } from 'react';
import Storytime from '@/app/components/StorytimeAnimation';
import Question from '@/app/components/Question';
import Story from '@/app/components/Story';
import Button from '@/app/components/Button';
import {
  LIFEFORM_OPTIONS,
  PROFESSION_OPTIONS,
  SETTING_OPTIONS,
  GOAL_OPTIONS,
} from '@/app/constants/STORY_ELEMENT_OPTIONS';

const StoryElements = () => {
  const [story, setStory] = useState('');
  const [name, setName] = useState('');
  const [lifeform, setLifeform] = useState('');
  const [profession, setProfession] = useState('');
  const [setting, setSetting] = useState('');
  const [goal, setGoal] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    if (questionIndex === 5) {
      const request = new NextRequest('http://localhost:3000/api/story', {
        method: 'POST',
        body: JSON.stringify({ name, lifeform, profession, setting, goal }),
      });

      fetch(request).then((response) => {
        if (response.ok) {
          response.json().then((story) => {
            setStory(story);
          });
        } // TODO: handle error with app that could story
      });
    }
  }, [questionIndex, name, lifeform, profession, setting, goal]);

  const handleKeyDown = useCallback(
    (
      event: React.KeyboardEvent<
        HTMLInputElement | HTMLButtonElement | HTMLSelectElement
      >
    ) => event.key === 'Enter' && setQuestionIndex(questionIndex + 1),
    [questionIndex]
  );

  const QUESTIONS = [
    {
      get: () => name,
      prompt: 'What is the name of our stories hero?',
      id: 'question-0',
      element: (
        <input
          id="question-0"
          className="question-input"
          value={name}
          onKeyDown={(event) => name && handleKeyDown(event)}
          onChange={({ target: { value } }) => setName(value)}
          placeholder='e.g. "Princess Sparkle"'
        />
      ),
    },
    {
      get: () => lifeform,
      prompt: 'What type of organism are they?',
      id: 'question-1',
      element: (
        <select
          id="question-1"
          className="question-input"
          value={lifeform}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setLifeform(event.target.value);
          }}
          onKeyDown={(event) => lifeform && handleKeyDown(event)}
        >
          {LIFEFORM_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      get: () => profession,
      prompt: 'What does your character do for a living?',
      id: 'question-2',
      element: (
        <select
          id="question-2"
          className="question-input"
          value={profession}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setProfession(event.target.value);
          }}
          onKeyDown={(event) => profession && handleKeyDown(event)}
        >
          {PROFESSION_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      get: () => setting,
      prompt: 'Where does this story take place?',
      id: 'question-3',
      element: (
        <select
          id="question-3"
          className="question-input"
          value={setting}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setSetting(event.target.value);
          }}
          onKeyDown={(event) => setting && handleKeyDown(event)}
        >
          {SETTING_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
    {
      get: () => goal,
      prompt: 'What is the goal of our hero?',
      id: 'question-4',
      element: (
        <select
          id="question-4"
          className="question-input h-24 text-wrap"
          value={goal}
          defaultValue={goal}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setGoal(event.target.value);
          }}
          onKeyDown={(event) => goal && handleKeyDown(event)}
        >
          {GOAL_OPTIONS.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      ),
    },
  ];

  const question = QUESTIONS[questionIndex];

  return (
    <Storytime>
      {questionIndex < 5 ? (
        <Question className="appear" question={question}>
          <Button
            disabled={!question.get()}
            onKeyDown={handleKeyDown}
            onClick={() => setQuestionIndex(questionIndex + 1)}
            text={questionIndex === 4 ? "Let's Read!" : 'Next'}
          />
        </Question>
      ) : (
        <Story story={story} />
      )}
    </Storytime>
  );
};

export default StoryElements;

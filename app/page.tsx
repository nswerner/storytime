'use client';

import { NextRequest } from 'next/server';
import { useState, useCallback, useEffect, ChangeEvent } from 'react';
import Storytime from '@/app/components/StorytimeAnimation';
import Question from '@/app/components/Question';
import Story from '@/app/components/Story';
import Button from '@/app/components/Button';

const StoryElements = () => {
  const [story, setStory] = useState('');
  const [name, setName] = useState('');
  const [lifeform, setLifeform] = useState('human');
  const [profession, setProfession] = useState('princess');
  const [setting, setSetting] = useState('underwater');
  const [goal, setGoal] = useState(
    'to teach a grumpy ogre how to dance at the village festival.'
  );
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
        }
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
      prompt: 'What is the name of the main character in our story?',
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
      prompt: 'What type of lifeform are they?',
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
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
          <option value="fox">Fox</option>
          <option value="dinosaur">Dinosaur</option>
          <option value="elf">Elf</option>
          <option value="unicorn">Unicorn</option>
          <option value="puppy">Puppy</option>
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
          <option value="princess">Princess</option>
          <option value="pirate">Pirate</option>
          <option value="astronaut">Astronaut</option>
          <option value="superhero">Superhero</option>
          <option value="ninja">Ninja</option>
          <option value="wizard">Wizard</option>
          <option value="spy">Spy</option>
          <option value="detective">Detective</option>
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
          <option value="underwater">Underwater</option>
          <option value="futuristic city">Futuristic City</option>
          <option value="enchanted forest">Enchanted Forest</option>
          <option value="outerspace">Outerspace</option>
          <option value="ancient ruins">Ancient Ruins</option>
          <option value="magical school">Magical School</option>
          <option value="sky city made of clouds and floating platforms">
            Sky City
          </option>
          <option value="ice kingdom">Ice Kingdom</option>
        </select>
      ),
    },
    {
      get: () => goal,
      prompt: 'What is the goal of the main character?',
      id: 'question-4',
      element: (
        <select
          id="question-4"
          className="question-input"
          value={goal}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setGoal(event.target.value);
          }}
          onKeyDown={(event) => goal && handleKeyDown(event)}
        >
          <option value="to teach a grumpy ogre how to dance at the village festival.">
            To teach a grumpy ogre how to dance at the village festival.
          </option>
          <option value="to help a mischievous leprechaun return a stolen pot of gold to its rightful owner.">
            To help a mischievous leprechaun return a stolen pot of gold to its
            rightful owner.
          </option>
          <option value="to rescue a grumpy dragon's lost teddy bear from a treacherous cave.">
            To rescue a grumpy dragon&apos;s lost teddy bear from a treacherous
            cave.
          </option>
          <option value="to convince a forgetful wizard to remember the spell that can fix a magical mishap.">
            To convince a forgetful wizard to remember the spell that can fix a
            magical mishap.
          </option>
          <option value="to help a shy mermaid win a singing contest against boastful sea creatures.">
            To help a shy mermaid win a singing contest against boastful sea
            creatures.
          </option>
          <option value="to organize a surprise birthday party for a grumpy troll who insists on hating birthdays.">
            To organize a surprise birthday party for a grumpy troll who insists
            on hating birthdays.
          </option>
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
            text={questionIndex === 5 ? 'Tell me a story!' : 'Next'}
          />
        </Question>
      ) : (
        <Story story={story} />
      )}
    </Storytime>
  );
};

export default StoryElements;

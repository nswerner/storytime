'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';

const Storytime = () => {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showTitle ? (
        <h1 className="disappear">STORY TIME</h1>
      ) : (
        <div className="story-container appear">
          <h2>Once upon a time...</h2>
          <p>
            There was a developer who wanted to create a storybook. They used
            Storybook to create a collection of components that told a story.
          </p>
          <p>
            The developer used Storybook to document the components and share
            them with their team. They used Storybook to test the components in
            isolation and ensure they worked as expected.
          </p>
          <br />
          <p>
            The developer was happy with the storybook they created. They shared
            it with the world and everyone lived happily ever after.
          </p>
        </div>
      )}
    </div>
  );
};

export default Storytime;

'use client';

import { useState, useEffect } from 'react';

const Storytime = ({ story }: { story: string | null }) => {
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
          <p>{story}</p>
        </div>
      )}
    </div>
  );
};

export default Storytime;

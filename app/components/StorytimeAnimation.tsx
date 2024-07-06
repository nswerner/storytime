'use client';

import { useState, useEffect, ReactNode } from 'react';

const Storytime = ({ children }: { children: ReactNode }) => {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showTitle ? <h1 className="disappear">STORY TIME</h1> : children}
    </div>
  );
};

export default Storytime;

'use client';

import { useState } from 'react';
import splitTextIntoPages from '../utilities/pagifyLargeText';
import Link from 'next/link';
import Button from './Button';
import Loading from './Loading';

const Story = ({ story }: { story: string }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const storyLength = story.length;
  const pageBreak = storyLength / 3;

  const pages = splitTextIntoPages(story, pageBreak);
  const pageText = pages[pageNumber];

  return story.length === 0 ? (
    <div className="loader-container text-pretty p-8 appear">
      <Loading />
    </div>
  ) : (
    <div className="story-container appear p-8 text-pretty">
      <div className="story-text">{pageText}</div>
      {pageNumber < 2 ? (
        <Button
          text={'Next'}
          disabled={false}
          onClick={() => pageNumber < 2 && setPageNumber(pageNumber + 1)}
        />
      ) : (
        <Link
          className="block w-1/2 m-auto border border-white border-1 rounded px-4 py-2 mt-4"
          href="/"
          onClick={() => window.location.reload()}
        >
          Another!
        </Link>
      )}
    </div>
  );
};

export default Story;

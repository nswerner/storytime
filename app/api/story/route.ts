import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import generateRandomX from '../../utilities/generateRandomX';
import generateStory from '../../utilities/generateStory';
import { SURPRISE_ME } from '@/app/constants/STORY_ELEMENT_OPTIONS';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const properties = Object.keys(body);

  const handledSurprises: { [k: string]: string } = {};
  for (let property of properties) {
    if (body[property] === SURPRISE_ME) {
      const randomX = await generateRandomX(property);
      handledSurprises[property] = randomX;
    } else {
      handledSurprises[property] = body[property];
    }
  }

  const story = generateStory(handledSurprises);
  //TODO - Add Error Handling and OpenAI Moderation

  return Response.json(story, { status: 200 });
};

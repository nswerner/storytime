import { NextRequest } from 'next/server';
import generateRandomX from '../../utilities/generateRandomX';
import generateStory from '../../utilities/generateStory';
import { moderateText, isTextFlagged } from '../../utilities/moderateText';
import { SURPRISE_ME } from '@/app/constants/STORY_ELEMENT_OPTIONS';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const properties = Object.keys(body);

  try {
    const handledSurprises: { [k: string]: string } = {};
    for (let property of properties) {
      if (body[property] === SURPRISE_ME) {
        const randomX = await generateRandomX(property);
        handledSurprises[property] = randomX;
      } else {
        handledSurprises[property] = body[property];
      }
    }

    const story = await generateStory(handledSurprises);
    const moderationResults = await moderateText(story);
    const isFlagged = isTextFlagged(moderationResults);

    if (isFlagged) throw new Error('Story is inappropriate');
    return Response.json(story, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 406 });
  }
};

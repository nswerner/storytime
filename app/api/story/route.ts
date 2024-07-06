import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  return Response.json({ hello: 'world' }, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  // const completion = await openai.chat.completions.create({
  //   frequency_penalty: 0.5,
  //   messages: [
  //     {
  //       role: 'system',
  //       content: `You are a childrens' storyteller. You will be provided some
  //       character information and basic story telling elements. Use the information provided to create a unique story that is whimsical, fun,
  //       and confidence inspiring. Use pixar storytelling methods and themes as a reference. The stories should invoke opportunities for children
  //       to challenge their fears while still being safe and light-hearted. All content must be child-friendly, appropriate for ages 4 - 11.`,
  //     },
  //     {
  //       role: 'user',
  //       content: `Our hero is ${body?.name} the ${body?.lifeform}.
  //     They are wonderful ${body?.profession} and often make companions wherever they go!
  //     They are currently in a ${body?.setting} and need to ${body?.goal}.`,
  //     },
  //   ],
  //   model: 'gpt-3.5-turbo',
  // });

  // const story = completion?.choices[0]?.message?.content;
  const story =
    "Once upon a time, in a magical land far, far away, there lived a lovely little fox named Heather. Heather was not just any ordinary fox; she was a princess who spread joy and kindness wherever she went. Her fur was a beautiful shade of orange, and her eyes sparkled with curiosity and wonder.\n\nOne day, Heather found herself exploring ancient ruins near the shimmering ocean. As she wandered through the moss-covered stones and crumbling columns, she heard the melodic sound of singing drifting towards her. Following the enchanting music, she came upon a shy mermaid named Marina.\n\nMarina had a voice that was as sweet as a lullaby, but she was too timid to share her gift with the world. Nearby, a group of boastful sea creatures were holding a singing contest, and Marina longed to join in but was too scared to compete against them.\n\nHeather, with her kind heart and adventurous spirit, decided to help her new friend. She encouraged Marina to believe in herself and her beautiful voice. Together, they practiced singing by the glittering shore, the waves keeping time with their melodies.\n\nAs the day of the contest arrived, Marina felt a flutter of nervousness in her chest. But with Heather by her side, she stood tall and took to the stage, her voice ringing out like a bell through the sea. The sea creatures were amazed by her talent, their boastful airs deflating like bubbles in the water.\n\nIn the end, Marina's heartfelt song touched the hearts of all who listened, and she was crowned the winner of the contest. The sea creatures cheered and applauded, realizing that true talent shines brightest when shared with others.\n\nHeather smiled proudly at her friend, knowing that bravery and friendship had helped Marina overcome her fears. From that day on, Marina sang with confidence and joy, and the ancient ruins echoed with the sound of her beautiful voice.\n\nAnd so, Heather the fox and Marina the mermaid taught everyone that with a little courage and a lot of love, anything is possible in this magical world. The end.";
  return Response.json(story, { status: 200 });
};

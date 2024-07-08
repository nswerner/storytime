import OpenAI from 'openai';

export default async function generateStory({
  //TODO - validate name for injection/prompt hijacking
  name,
  lifeform,
  profession,
  setting,
  goal,
}: {
  [k: string]: string;
}) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    frequency_penalty: 0.5,
    messages: [
      {
        role: 'system',
        content: `You are a childrens' storyteller. You will be provided some
        character information and basic story telling elements. Use the information provided
        to create a unique story that is whimsical, fun, and confidence inspiring. Use pixar storytelling
        methods and themes as a reference. The stories should invoke opportunities for children to challenge 
        their fears while still being safe and light-hearted. All content must be child-friendly, appropriate for ages 4 - 11. 
        Include paragraph breaks where applicable.`,
      },
      {
        role: 'user',
        content: `Our hero is ${name} the ${lifeform}.
      They are wonderful ${profession} and often make companions wherever they go!
      They are currently in a ${setting} and need to ${goal}.`,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  return completion?.choices[0]?.message?.content || '';
}

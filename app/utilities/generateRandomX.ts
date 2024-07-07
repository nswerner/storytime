import OpenAI from 'openai';

export default async function generateRandomX(propertyName: string) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    frequency_penalty: 0.5,
    messages: [
      {
        role: 'system',
        content: `Please help me generate one story element for a child-friendly tale.
        I will provide you the attribute that we need help generating content for. 
        All content must be child-friendly, appropriate for ages 4 - 11. The content you generate will be
        injected into another prompt as a noun. For example, if the attribute is "name", you could generate, "Heather".
        If the attribute is "profession", you could generate, "singing mermaid". If the attribute was "setting",
        you could generate "a cavern full of singing mushrooms". If the attribute was "goal", you could generate,
         "find the magical piano that brings peace to the lands".`,
      },
      {
        role: 'user',
        content: `I need a random ${propertyName} for a children's story.`,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  const randomX = completion?.choices[0]?.message?.content;
  return randomX as string;
}

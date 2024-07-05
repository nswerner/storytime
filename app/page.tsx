import OpenAI from 'openai';
import Storytime from '@/components/StorytimeAnimation';

const StorytimeContainer = async () => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Who won the world series in 2020?' },
      {
        role: 'assistant',
        content: 'The Los Angeles Dodgers won the World Series in 2020.',
      },
      { role: 'user', content: 'Where was it played?' },
    ],
    model: 'gpt-3.5-turbo',
  });

  const story = completion?.choices[0]?.message?.content;

  return <Storytime story={story} />;
};

export default StorytimeContainer;

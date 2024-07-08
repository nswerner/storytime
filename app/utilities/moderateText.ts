import OpenAI from 'openai';
import { Moderation } from 'openai/resources/moderations.mjs';

export const moderateText = async (text: string) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const moderation = await openai.moderations.create({
    input: text,
  });

  return moderation?.results[0];
};

export const isTextFlagged = (moderation: Moderation): boolean => {
  return moderation?.flagged;
};

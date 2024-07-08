const validateCharacters = (input: string): boolean =>
  /^[a-zA-Z0-9 ,!']*$/.test(input);

const validateLength = (input: string) => input.length <= 25;

const sanitizeInput = (input: string): string => {
  return input.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
};

const validateInput = (input: string): string => {
  const sanitizedInput = sanitizeInput(input);

  if (!validateCharacters(sanitizedInput)) {
    throw new Error('Invalid characters');
  }

  if (!validateLength(sanitizedInput)) {
    throw new Error('Oops! Please enter a name less than 25 characters');
  }

  return sanitizedInput;
};

export default validateInput;

export const genericErrors = (error: any) => {
  let message = '';
  for (const key in error.errors) {
    message += error.errors[key] + '. ';
  }
  return message.trim();
};

export const userErrors = (error: any) => {
  let message = genericErrors(error);
  if (error.code === 11000) message = "L'email esiste già";
  return message;
};

export const verifyUserErrors = (error: any) => {
  let message = '';
  if (error.message.includes('split')) message = 'Il bearer token è mancante';
  return message;
};

export const scoutErrors = (error: any) => {
  let message = genericErrors(error);
  if (error.code === 11000) message = 'Il nome esiste già';
  return message;
};

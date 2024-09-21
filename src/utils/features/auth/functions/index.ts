
const emailAddress = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];

const emailValidation = (email: string) => {

  const emailSplit = email.split('@')[1];
  return (!email || !email.includes('@') || emailAddress.includes(emailSplit)) ? true : false
};

const passwordValidation = (password: string) => (!password || password.length < 6) ? true : false;


export { emailValidation, passwordValidation };
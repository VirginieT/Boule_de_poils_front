export const log = param => console.log(param);

const passwordHas8CharMin = (password) => password.length >= 8;
log(passwordHas8CharMin('hallllttt'));

const passwordHasUpperCaseChar = (password) => /[A-Z]/.test(password);
log(passwordHasUpperCaseChar('hallllLLLL'));

const passwordHasInt = (password) => /[0-9]/.test(password);
log(passwordHasInt('hallllLLLL999'));

const passwordHasSpecialChar = (password) => /[&"-è_@+*]/.test(password);
log(passwordHasSpecialChar('hallllLLLL999*'));

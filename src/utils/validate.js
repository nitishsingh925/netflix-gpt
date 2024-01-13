export const checkValidData = (email, password, name) => {
  const isNameValidRegex = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(name);
  const isEmailValidRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValidRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValidRegex) return "Name is not valid";
  if (!isEmailValidRegex) return "Email is not valid";
  if (!isPasswordValidRegex) return "Password is not valid";

  return null;
};

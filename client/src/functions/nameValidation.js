const nameRegex = /^[ A-Za-z'-]*$/;

export const isNameValid = (name) => {
  return name.length != 0 && nameRegex.test(name);
};

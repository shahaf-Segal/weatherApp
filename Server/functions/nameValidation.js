const nameRegex = /^[ A-Za-z'-]*$/;

const isNameValid = (name) => {
  return name.length != 0 && nameRegex.test(name);
};
module.exports = { isNameValid };

export default mustHaveLowercaseLetter;

function mustHaveLowercaseLetter(value) {
  const hasLowercase = value.match(/[a-z]/);
  return !!hasLowercase || "Input must have one lowercase letter";
}

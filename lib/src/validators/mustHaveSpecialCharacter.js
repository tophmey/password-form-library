export default mustHaveSpecialCharacter;

function mustHaveSpecialCharacter(value) {
  const specialChars = `!@#$%^&*()_-+={[}]|:;"'<,>.)`;
  return (
    specialChars.split("").some((char) => value.includes(char)) ||
    `Password must include one of these characters: ${specialChars}`
  );
}

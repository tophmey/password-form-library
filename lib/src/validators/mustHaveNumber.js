export default mustHaveNumber;

function mustHaveNumber(value) {
  const hasNumber = value.match(/\d/);
  return !!hasNumber || "Input must have one number";
}

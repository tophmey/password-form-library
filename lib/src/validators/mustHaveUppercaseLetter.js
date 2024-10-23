export default function mustHaveUppercaseLetter(value) {
  const hasUppercase = value.match(/[A-Z]/);
  return !!hasUppercase || "Input must have one uppercase letter";
}

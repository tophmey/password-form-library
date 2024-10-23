/**
 * @function PasswordInput
 * React Component that renders a password input
 * @param {ref} inputRef - a React ref object for the password input element
 * @returns {ReactDOM}
 */

function PasswordInput({ inputRef, ...props }) {
  const attrs = {};
  if (inputRef) {
    attrs.ref = inputRef;
  }
  return <input {...attrs} type="password" {...props} />;
}

export default PasswordInput;

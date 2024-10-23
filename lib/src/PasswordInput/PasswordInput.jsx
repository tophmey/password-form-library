/**
 * @function PasswordInput
 * React Component that renders a password input
 * @param {ref} inputRef - a React ref object for the password input element
 * @returns {ReactDOM}
 */

function PasswordInput({ inputRef, ...props }) {
  return <input ref={inputRef} type="password" {...props} />;
}

export default PasswordInput;

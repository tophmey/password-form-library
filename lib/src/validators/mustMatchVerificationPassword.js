export default mustMatchVerificationPassword;

function mustMatchVerificationPassword(value, formState) {
  const { "confirm-password": verifyPassword, "new-password": newPassword } =
    formState;
  return verifyPassword === newPassword || "The passwords do not match.";
}

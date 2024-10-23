import { useForm } from "react-hook-form";
import { PasswordInput } from "src";

export default UpdatePasswordForm;

function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      "current-password": "",
      "new-password": "",
      "confirm-password": "",
    },
  });
  const { ref: currentPasswordRef, ...currentPasswordProps } = register(
    "current-password",
    { required: "Current password is required." }
  );
  const { ref: newPasswordRef, ...newPasswordProps } = register(
    "new-password",
    {
      required: true,
      validate: {
        mustHaveSpecialCharacter,
        mustMatchVerificationPassword,
        mustHaveUppercaseLetter,
        mustHaveLowercaseLetter,
        mustHaveNumber,
      },
    }
  );
  const { ref: confirmPasswordRef, ...confirmPasswordProps } = register(
    "confirm-password",
    { required: true }
  );
  return (
    <form
      onSubmit={handleSubmit((formState, event) => {
        console.log("submit", { formState, event });
      })}
    >
      <fieldset>
        <legend>Update Password</legend>
        <div style={{ color: "red", lineHeight: 1, margin: 0, padding: 0 }}>
          {errors["current-password"]?.message || <Nbsp />}
        </div>
        <label htmlFor="current-password">
          <span className="label__text">Current Password </span>
          <PasswordInput
            inputRef={currentPasswordRef}
            autoComplete="section-update current-password"
            id="update-current-password"
            {...currentPasswordProps}
          />
        </label>
        <br />
        <div style={{ color: "red", lineHeight: 1, margin: 0, padding: 0 }}>
          {errors["new-password"]?.message || <Nbsp />}
        </div>
        <label htmlFor="new-password">
          <span className="label__text">New Password </span>
          <PasswordInput
            inputRef={newPasswordRef}
            autoComplete="section-update new-password"
            id="update-new-password"
            {...newPasswordProps}
          />
        </label>
        <br />
        <label htmlFor="confirm-password">
          <span className="label__text">Confirm Password </span>
          <PasswordInput
            inputRef={confirmPasswordRef}
            autoComplete="section-update confirm-password"
            id="update-confirm-password"
            {...confirmPasswordProps}
          />
        </label>
        <br />
        <br />
        <button>Update password</button>
      </fieldset>
    </form>
  );
}

function mustHaveUppercaseLetter(value) {
  const hasUppercase = value.match(/[A-Z]/);
  return !!hasUppercase || "Input must have one uppercase letter";
}
function mustHaveLowercaseLetter(value) {
  const hasLowercase = value.match(/[a-z]/);
  return !!hasLowercase || "Input must have one lowercase letter";
}
function mustHaveNumber(value) {
  const hasNumber = value.match(/\d/);
  return !!hasNumber || "Input must have one number";
}

function mustHaveSpecialCharacter(value) {
  const specialChars = `!@#$%^&*()_-+={[}]|:;"'<,>.)`;
  return (
    specialChars.split("").some((char) => value.includes(char)) ||
    `Password must include one of these characters: ${specialChars}`
  );
}

function mustMatchVerificationPassword(value, formState) {
  const { "confirm-password": verifyPassword, "new-password": newPassword } =
    formState;
  return verifyPassword === newPassword || "The passwords do not match.";
}

function Nbsp() {
  return <span>&nbsp;</span>;
}

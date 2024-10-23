import { useForm } from "react-hook-form";
import { PasswordInput, validators } from "src";

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
      validate: validators,
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

function Nbsp() {
  return <span>&nbsp;</span>;
}

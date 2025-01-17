import React from "react";
import { useForm } from "react-hook-form";
import PasswordInput from "../PasswordInput";
import validators from "../validators";

export default CreatePasswordForm;

/**
 * @function CreatePasswordForm
 * React Component that renders a password
 * @param {string} username
 * @returns
 */
function CreatePasswordForm({ username }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { register, handleSubmit, trigger, resetField } = useForm({
    defaultValues: {
      "new-password": "",
      "confirm-password": "",
    },
    shouldUseNativeValidation: true,
  });
  const { ref: confirmPasswordRef, ...confirmPasswordProps } =
    register("confirm-password");
  const { ref: newPasswordRef, ...newPasswordProps } = register(
    "new-password",
    {
      required: true,
      minLength: { value: 6, message: "Password must be 6 characters" },
      validate: {
        mustHaveSpecialCharacter: validators.mustHaveSpecialCharacter,
        mustMatchVerificationPassword: validators.mustMatchVerificationPassword,
        mustHaveUppercaseLetter: validators.mustHaveUppercaseLetter,
        mustHaveLowercaseLetter: validators.mustHaveLowercaseLetter,
        mustHaveNumber: validators.mustHaveNumber,
      },
    }
  );
  return (
    <>
      <form
        target="/create-password"
        onSubmit={handleSubmit((formState, event) => {
          console.log(formState, event);
          setIsSubmitting(true);
          setTimeout(() => {
            setIsSuccess(true);
            setIsSubmitting(false);
          }, 500);
        })}
      >
        {username && (
          <input
            readOnly
            type="text"
            hidden
            autoComplete="username"
            value={username}
            id="username"
            name="username"
          />
        )}
        <fieldset>
          <legend>Create a password</legend>
          <label htmlFor="new-password">Password</label>
          <br />
          <PasswordInput
            autoComplete="new-password"
            id="new-password"
            {...newPasswordProps}
            inputRef={newPasswordRef}
          />
          <br />
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
          </div>
          <PasswordInput
            autoComplete="new-password"
            id="confirm-password"
            {...confirmPasswordProps}
            inputRef={confirmPasswordRef}
            onBlur={(...args) => {
              trigger("new-password");
              confirmPasswordProps.onBlur(...args);
            }}
          />
          <br />
          <br />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Create Password"}
          </button>
        </fieldset>
      </form>
      <dialog open={isSuccess}>
        <p>Success!</p>
        <button
          onClick={() => {
            setIsSuccess(false);
            resetField("new-password");
            resetField("confirm-password");
          }}
        >
          Reset
        </button>
      </dialog>
    </>
  );
}

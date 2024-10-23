import Form from "./Form";
import { describe, expect, it } from "vitest";
import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe("Form", () => {
  it("should render", () => {
    const rendered = render(<Form username="testuser" />);
    const passwordInput = rendered.getByLabelText("Password");
    fireEvent.input(passwordInput);
    expect(rendered.getByText("Create a password")).toBeVisible();
  });
});

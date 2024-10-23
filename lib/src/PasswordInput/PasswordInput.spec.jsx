import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("Password Input", () => {
  it("should render", () => {
    const { container } = render(<PasswordInput id="test-id" />);
    const input = container.querySelector("#test-id");
    expect(input).toMatchInlineSnapshot(`
        <input
          id="test-id"
          type="password"
        />
      `);
  });
  it("should apply an inputRef prop as ref", () => {
    const ref = { current: null };
    const { container } = render(<PasswordInput inputRef={ref} id="test-id" />);
    const input = container.querySelector("#test-id");
    expect(ref.current).toBe(input);
  });
});

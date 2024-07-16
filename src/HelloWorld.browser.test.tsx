import { screen } from "@testing-library/dom";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test("renders name", async () => {
  render(<HelloWorld name="World" />);
  const h = await screen.findByRole("heading");
  expect(h).toHaveTextContent("Hello World!");
});

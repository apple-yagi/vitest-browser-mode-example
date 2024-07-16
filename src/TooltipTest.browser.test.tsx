import { screen } from "@testing-library/dom";
import { test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@vitest/browser/context";
import { TooltipTest } from "./TooltipTest";

test("TooltipTest", async () => {
  const onClickTrigger = vi.fn();
  render(<TooltipTest onClickTrigger={onClickTrigger} />);
  const button = await screen.findByRole("button", { name: "Trigger" });

  await userEvent.hover(button);
  expect(await screen.findByRole("tooltip")).toHaveTextContent("Content");

  await userEvent.click(button);
  expect(onClickTrigger).toHaveBeenCalledOnce();
});

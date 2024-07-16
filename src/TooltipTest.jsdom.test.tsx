import { render, screen } from "@testing-library/react";
import { test, vi, expect, beforeAll } from "vitest";
import { TooltipTest } from "./TooltipTest";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };
});

test("TooltipTest", async () => {
  const onClickTrigger = vi.fn();
  render(<TooltipTest onClickTrigger={onClickTrigger} />);
  const button = await screen.findByRole("button", { name: "Trigger" });

  await userEvent.hover(button);
  expect(await screen.findByRole("tooltip")).toHaveTextContent("Content");

  await userEvent.click(button);
  expect(onClickTrigger).toHaveBeenCalledOnce();
});

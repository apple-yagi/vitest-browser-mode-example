import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipTest = ({
  onClickTrigger,
}: {
  onClickTrigger: () => void;
}) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button onClick={onClickTrigger}>Trigger</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content sideOffset={5}>
            <p>Content</p>
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

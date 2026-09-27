import { createApp } from "@tschk/moonshine/react";
import ScrambleIn from "./fancy/scramble-in";
import LetterSwapForward from "./fancy/letter-swap-forward";

type FancyLabelOptions = {
  text: string;
  variant?: "scramble" | "swap";
};

/** Mount the upstream React component through Moonshine's React adapter. */
export function mountFancyLabel(
  container: Element,
  { text, variant }: FancyLabelOptions,
) {
  const Root = () => variant === "swap"
    ? <LetterSwapForward label={text} staggerDuration={0.018} />
    : <ScrambleIn text={text} />;
  const app = createApp({ root: Root, className: "fancy-label-island" });
  app.mount(container);
  return app;
}

import { createSignal } from "@tschk/moonshine";

/**
 * Shared client state on moonshine's signal kernel. Components subscribe in
 * onMount and read with signal() — same contract @tschk/moonshine/react uses.
 */
export const scrollY = createSignal(0);

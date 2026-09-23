/**
 * Shared timing. The loading overlay and the first content reveal have to agree,
 * or the reveal plays behind the overlay and nobody sees it.
 */
export const LOADER_HOLD = 3200;
export const LOADER_FADE = 500;

/**
 * Stagger offsets for the statement's masked reveal, in ms. These are added to
 * the `--reveal-start` CSS variable rather than baked in: that variable is
 * LOADER_HOLD on a first visit and 0 once `loader-seen` is set, so when the
 * intro is skipped the statement appears immediately instead of waiting out a
 * loader that never ran. Keep the CSS default in sync with LOADER_HOLD.
 */
export const REVEAL_STAGGER = { label: 0, title: 140, name: 420 } as const;

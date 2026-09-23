import type { SVGProps } from "react";

/**
 * Instagram glyph: frame, lens ring and flash dot as one even-odd path, so the
 * nested shapes punch through each other without a mask.
 */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" aria-hidden focusable="false" {...props}>
      <path d="M7 1H17A6 6 0 0 1 23 7V17A6 6 0 0 1 17 23H7A6 6 0 0 1 1 17V7A6 6 0 0 1 7 1ZM7.2 3.2H16.8A4 4 0 0 1 20.8 7.2V16.8A4 4 0 0 1 16.8 20.8H7.2A4 4 0 0 1 3.2 16.8V7.2A4 4 0 0 1 7.2 3.2ZM6.8 12a5.2 5.2 0 1 0 10.4 0a5.2 5.2 0 1 0-10.4 0ZM9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM16.1 6.6a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0Z" />
    </svg>
  );
}

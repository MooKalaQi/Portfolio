/** Data that is the same in every language. Anything translatable lives in lib/dictionaries. */

export const contact = {
  handle: "MooKalaQi",
  email: "ArsaalanZolfaghari@gmail.com",
  linkedin: "https://www.linkedin.com/in/amirarsalanlfaghari",
  linkedinHandle: "amirarsalan",
};

/** Footer social links. Labels live in the dictionaries under `socials`. */
export const socials = {
  x: "https://x.com/MooKalaQi",
  instagram: "https://www.instagram.com/_arsaalan",
  spotify: "https://open.spotify.com/user/ayiksedatyu66zc7mrogtlumf?si=fde22ebc19784726",
};

/**
 * Card-to-card details for the coffee modal. `display` is the readable grouping,
 * `raw` is what gets copied — a banking app won't accept the separators.
 */
export const payment = {
  iban: { raw: "IR060560611828005116170901", display: "IR06 0560 6118 2800 5116 1709 01" },
  card: { raw: "6219861496368265", display: "6219 - 8614 - 9636 - 8265" },
};

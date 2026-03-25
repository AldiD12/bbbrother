export interface Review {
  rating: number;
  title: string;
  text: string;
  date: string;
  jobLocation: string;
  verified: boolean;
  services: string[];
}

export const reviews: Review[] = [
  {
    rating: 10,
    title: "Professional",
    text: "Transformed our toilet, added a fantastic top-floor extension, and sorted out the garden — all while keeping the place tidy! Communication was great and price was spot on. Would definitely use again.",
    date: "2026-01-30",
    jobLocation: "HA5",
    verified: false,
    services: ["extensions", "bathroom-renovations"],
  },
  {
    rating: 10,
    title: "Excellent work from start to finish",
    text: "Excellent work carried out on our property. The team handled the bathroom, tiling, loft conversion and extension, and the quality of workmanship was excellent throughout. Everything was well organised, completed as agreed, and finished to a very high standard. They were punctual, respectful, and communicated clearly from start to finish. The final result exceeded our expectations and I would not hesitate to recommend them to anyone looking for reliable and skilled builders.",
    date: "2026-01-29",
    jobLocation: "NW4",
    verified: true,
    services: ["extensions", "loft-conversions", "bathroom-renovations"],
  },
  {
    rating: 10,
    title: "House Renovation",
    text: "I'm delighted with the recent renovation work on my home. The new flooring looks fantastic — neatly installed with precise finishing. Ceiling repairs have left smooth, flawless surfaces with no sign of previous issues. The painting and decorating is professional, with even application, clean edges and perfect colour choices that have brightened up every room. The work was finished on time, the site was kept tidy, and the craftsmanship is excellent.",
    date: "2026-01-29",
    jobLocation: "NW4",
    verified: true,
    services: ["painting-decorating", "plastering", "general-renovations"],
  },
  {
    rating: 10,
    title: "This company is very good — I strongly recommend, 10/10",
    text: "I had a whole renovation of my flat from BBBrother Building including plastering, tiles, kitchen, bathroom and electrical and plumbing work. They were very good to deal with, very understanding and hard working. Always made sure and kept me up to date with everything they were doing. I strongly recommend this company. Top job and trustworthy people. 10/10.",
    date: "2026-01-29",
    jobLocation: "HA9",
    verified: false,
    services: ["kitchen-fitting", "bathroom-renovations", "plastering"],
  },
];

/** Get reviews relevant to a specific service */
export function getReviewsForService(serviceSlug: string): Review[] {
  return reviews.filter((r) => r.services.includes(serviceSlug));
}

/** Get reviews relevant to a location by postcode prefix */
export function getReviewsForLocation(postcodeArea: string): Review[] {
  return reviews.filter((r) => r.jobLocation.startsWith(postcodeArea));
}

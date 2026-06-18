export type DateVibe =
  | "cozy"
  | "outdoors"
  | "foodie"
  | "artsy"
  | "adventure"
  | "night";

export interface EdmontonDate {
  id: string;
  title: string;
  description: string;
  why: string;
  addOn: string;
  vibes: DateVibe[];
  seasonal?: "winter" | "summer";
}

export const edmontonDates: EdmontonDate[] = [
  {
    id: "muttart",
    title: "Muttart Conservatory & River Valley",
    description:
      "Wander through the pyramids, then stroll the trails along the North Saskatchewan.",
    why: "Greenhouse warmth, river views, and quiet time together.",
    addOn: "Grab hot chocolate at a nearby café on your way home.",
    vibes: ["cozy", "outdoors", "artsy"],
  },
  {
    id: "strathcona",
    title: "Old Strathcona Evening",
    description:
      "Explore Whyte Ave: vintage shops, bookstores, and dinner at a cozy spot.",
    why: "Feels like a mini getaway without leaving the city.",
    addOn: "End with gelato or a late walk through the neighbourhood.",
    vibes: ["cozy", "foodie", "night"],
  },
  {
    id: "elk-island",
    title: "Elk Island Stargazing Picnic",
    description:
      "Pack a blanket, snacks, and watch the sky open up away from city lights.",
    why: "Pure adventure. Bison, stars, and just us.",
    addOn: "Bring a thermos of something warm for when the night cools down.",
    vibes: ["outdoors", "adventure", "cozy"],
  },
  {
    id: "aga",
    title: "Art Gallery of Alberta & Downtown Dinner",
    description:
      "Get inspired by the exhibits, then treat yourselves downtown.",
    why: "Culture, conversation, and a night that feels special.",
    addOn: "Walk through Churchill Square if there's an event happening.",
    vibes: ["artsy", "foodie", "night"],
  },
  {
    id: "streetcar",
    title: "High Level Bridge Streetcar Sunset",
    description:
      "Ride the historic streetcar across the river at golden hour.",
    why: "Nostalgic, romantic, and uniquely Edmonton.",
    addOn: "Dinner in Old Strathcona before or after the ride.",
    vibes: ["cozy", "adventure", "night"],
  },
  {
    id: "neon",
    title: "Neon Sign Museum & Craft Brewery",
    description:
      "Snap photos at the neon museum, then sample local brews nearby.",
    why: "Colourful, fun, and a little bit quirky, just like us.",
    addOn: "Walk the Ice District lights if it's evening.",
    vibes: ["artsy", "night", "foodie"],
  },
  {
    id: "skating",
    title: "River Valley Skating & Hot Cocoa",
    description:
      "Lace up at a scenic outdoor rink, then warm up together.",
    why: "Winter magic in our own backyard.",
    addOn: "Stop at Remedy or a local bakery on the way home.",
    vibes: ["outdoors", "cozy", "adventure"],
    seasonal: "winter",
  },
  {
    id: "rgerd",
    title: "RGE RD Special Dinner",
    description:
      "An unforgettable farm-to-table experience for when we want to celebrate.",
    why: "Because you deserve the very best.",
    addOn: "Dress up. Make it a whole evening.",
    vibes: ["foodie", "night", "cozy"],
  },
  {
    id: "uap",
    title: "UAp District Food Crawl",
    description:
      "Hop between spots in University Ave: tacos, ramen, coffee, whatever we're craving.",
    why: "No plan, just following our appetites.",
    addOn: "Pick one new place we've never tried.",
    vibes: ["foodie", "adventure", "night"],
  },
  {
    id: "fort-edmonton",
    title: "Fort Edmonton Park Day",
    description:
      "Step back in time. Explore the streets, rides, and stories of Edmonton's past.",
    why: "A full day of discovery and wandering hand in hand.",
    addOn: "Pack a picnic for the park grounds.",
    vibes: ["adventure", "outdoors", "artsy"],
    seasonal: "summer",
  },
];

export const vibeLabels: Record<DateVibe, string> = {
  cozy: "Cozy",
  outdoors: "Outdoors",
  foodie: "Foodie",
  artsy: "Artsy",
  adventure: "Adventure",
  night: "Night Out",
};

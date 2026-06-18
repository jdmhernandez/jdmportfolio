export const angelaConfig = {
  name: "Angela",
  password: "lemon pie",
  passwordHint: "Think Sagada...",
  relationshipStart: "2022-06-01",
  birthdayDate: "1997-06-30",
  birthdayDisplay: "June 30",

  // Optional: add Supabase URL + anon key in Netlify env vars for shared sticky notes
  // PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY
  loveNotesRoomKey: "angela-justin",

  hero: {
    headline: "For Angela",
    subline: "Four years. Infinite adventures. One love.",
  },

  loveLetter: [
    "Angela, four years with you has been the most beautiful journey of my life. Every day I wake up grateful that the universe put us on the same path.",
    "You have this way of turning ordinary moments into memories I'll carry forever. A laugh on a long drive, the way you light up when you talk about a place you want to see, the quiet mornings that feel like home.",
    "I want to know more. More of your stories, more of your dreams, more of every version of you. The traveler, the dreamer, the woman who finds meaning in a lemon pie slice she never got to taste.",
    "I love you more than words on a screen can hold. This little corner of the internet is just for you.",
  ],

  lemonPieStory: {
    sagada:
      "High in the mountains of Sagada, there's a legend that lives in every bakery window: the famous lemon pie slice. Golden crust, bright filling, a taste of sunshine at the edge of the clouds. Everyone who visits talks about it. It's part of the place itself.",
    disappointment:
      "You were there. You walked those misty streets, felt that mountain air, stood in the very town where this pie is legendary, and you didn't get to try it. I know how much that disappointed you. You were so close to something everyone raves about, and it slipped away.",
    meaning:
      "But you found something deeper in that moment, a meaning that wasn't about the pie at all. Sometimes the things we miss become the stories we carry. The almost-tried, the almost-had. Sagada gave you more than a dessert; it gave you a symbol of longing, of beauty just out of reach, and the grace to find poetry in that.",
    tattoo:
      "Now you're etching that story onto your skin, a lemon pie slice tattoo, permanent and proud. I think it's beautiful. Not because of what you missed, but because of what you chose to honor. I'm behind you every step of the way. Wear your story.",
  },

  timeline: [
    {
      date: "Day One",
      title: "Where it all began",
      memory:
        "The moment I knew there was something extraordinary about you. Edit this with your real story.",
    },
    {
      date: "First Adventure",
      title: "Our first trip together",
      memory:
        "The open road, new places, and the feeling that anywhere is home when I'm with you.",
    },
    {
      date: "Sagada",
      title: "Your mountains & meaning",
      memory:
        "A journey you took that stayed with you. Misty peaks, lemon pie legends, and a story that became part of who you are. I'm proud of what you found there.",
    },
    {
      date: "Every Day",
      title: "The ordinary magic",
      memory:
        "Coffee mornings, inside jokes, quiet evenings. The real love lives here.",
    },
  ],

  travelStamps: {
    visited: [
      {
        place: "Calgary",
        country: "Alberta, Canada",
        memory: "City lights, chinooks, and time together out west.",
      },
      {
        place: "Vancouver",
        country: "British Columbia",
        memory: "Mountains, ocean air, and exploring the coast.",
      },
      {
        place: "Hamilton",
        country: "Ontario",
        memory: "Steel city charm and memories along the way.",
      },
      {
        place: "Toronto",
        country: "Ontario",
        memory: "Big city energy, food, and nights out together.",
      },
      {
        place: "Bataan & Batangas",
        country: "Philippines",
        memory: "Sun, family roots, and the islands you hold close.",
      },
      {
        place: "Japan",
        country: "Tokyo",
        memory: "Our first time in Japan together. Neon, ramen, and the city side of it all.",
      },
      {
        place: "Korea",
        country: "South Korea",
        memory: "Street food, cityscapes, and adventures abroad.",
      },
      {
        place: "Edmonton",
        country: "Home",
        memory: "Our home base. River valleys, winter lights, and us.",
      },
    ],
    dream: [
      {
        place: "Japan",
        country: "Mountains & nature",
        memory:
          "Next time: the quiet side of Japan. Trails, cherry blossoms, nemophila fields, and all the nature we didn't get in Tokyo.",
      },
      {
        place: "Greece",
        country: "Islands & history",
        memory: "White cliffs, blue water, and slow evenings by the sea.",
      },
      {
        place: "Iceland",
        country: "Northern lights",
        memory: "Waterfalls, hot springs, and skies that dance.",
      },
      {
        place: "Sagada",
        country: "Philippines",
        memory: "One day. That lemon pie slice, finally.",
      },
    ],
  },

  birthday: {
    title: "29 & Unstoppable",
    message:
      "Don't let anything stop you, especially not a number. Twenty-nine is not a ceiling; it's a launchpad. The best adventures, the boldest dreams, and the deepest love are all still ahead of you.",
    submessage:
      "You are a traveler, a dreamer, and the most radiant person I know. Age is just a stamp in the passport, and yours is filling up beautifully.",
  },

  unicornMessages: [
    "You make every trip better.",
    "I'd follow you anywhere.",
    "Your smile is my favourite view.",
    "Four years and I'd do it all again.",
    "You're my favourite adventure.",
    "Still falling for you, every day.",
    "Forever your travel buddy.",
  ],

  photos: [
    { src: null, caption: "Add our photo here" },
    { src: null, caption: "A travel memory" },
    { src: null, caption: "Us being us" },
    { src: null, caption: "Somewhere beautiful" },
    { src: null, caption: "Adventure awaits" },
    { src: null, caption: "My favourite person" },
    { src: null, caption: "Together" },
    { src: null, caption: "One more for the road" },
  ],

  closing: {
    title: "Thank you for being you",
    message:
      "More adventures are still waiting for us, Angela. More places to see, more sunsets to catch, more lemon pie we can finally enjoy without sharing. I love you now, and I'll love you in all the moments we haven't lived yet.",
    cta: "Spin another date idea",
  },
};

export function daysTogether(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function daysUntilBirthday(birthday: string): number {
  const [, month, day] = birthday.split("-").map(Number);
  const now = new Date();
  let next = new Date(now.getFullYear(), month - 1, day);
  if (next < now) {
    next = new Date(now.getFullYear() + 1, month - 1, day);
  }
  return Math.ceil((next.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

import { BIRTHDAY_CONFIG } from "./birthdayConfig";

const m = BIRTHDAY_CONFIG.recipientName;

const modernFamilyData = {
  hero: {
    emoji: "🏡",
    title: "MODERN FAMILY",
    subtitle: `The one where the Dunphy-Pritchett family throws ${m} an unforgettable celebration! 📸`,
    stamp: `Dunphy Family Archives · Dedicated To ${m}`,
  },

  birthdayMessage: {
    heading: `A Family Hug For ${m}`,
    message:
      `Every family has its own brand of wonderful crazy. Phil has his trampoline tricks, Cam has his theatrical entrances, Gloria has her passion, and Claire keeps everyone running. Today and every day, ${m}, you are warmly embraced! Happy Birthday, ${m}! ❤️`,
  },

  birthdaySurprise: {
    tag: `SURPRISE GIFT #4 FOR ${m}`,
    title: `Phil's Official Magician's Guild Award`,
    revealedItem: "🎩✨",
    revealedTitle: `Master of Magic & Coolness Certificate!`,
    gifUri: "https://i.giphy.com/l2Je0oOcT4cioSIfu.gif",
    revealedMessage:
      `Phil Dunphy tips his magician's top hat: '${m}! The Magicians' Alliance has officially declared you the coolest, kindest, most magical human being on the planet! Always keep your wonder alive!' Ta-da!`,
  },

  stickyNotes: [
    {
      id: "mf-n1",
      tag: `Phil's-osophy For ${m}`,
      text: `When life gives you lemonade, make lemons! Life will be like, 'Whaaaat?' Never lose your optimism, your goofy smile, and your huge heart, ${m}.`,
      author: "Phil Dunphy",
      color: "#FEF3C7",
      tapeColor: "#FCD34D",
      rotation: "2deg",
    },
    {
      id: "mf-n2",
      tag: `Gloria's Fierce Blessing`,
      text: `You cannot spend your life hiding your light, ${m}! Hold your head high, speak with passion, and always know how beautiful you are inside and out!`,
      author: "Gloria Delgado-Pritchett",
      color: "#FCE7F3",
      tapeColor: "#F472B6",
      rotation: "-1.5deg",
    },
    {
      id: "mf-n3",
      tag: `Jay's Warm Words`,
      text: `Take a look around, ${m}. You've done great things, and the best days are still ahead. Enjoy every second of your special day.`,
      author: "Jay Pritchett",
      color: "#DCFCE7",
      tapeColor: "#86EFAC",
      rotation: "1deg",
    },
  ],

  favoriteMoments: [
    {
      id: "mf-1",
      title: "Phil Dunphy: The Cool Dad",
      description: `Phil reminding ${m} that staying fabulous and positive is a superpower.`,
      gif: "https://i.giphy.com/l2Je0oOcT4cioSIfu.gif",
      emoji: "🧔",
      sticker: "✨",
      mood: "pep",
    },
    {
      id: "mf-2",
      title: "Gloria's Radiant Smile",
      description: `Pure, joyful energy lighting up the room to celebrate ${m}.`,
      gif: "https://i.giphy.com/26gsq8fim9nnlRUgU.gif",
      emoji: "💃",
      sticker: "🔥",
      mood: "laugh",
    },
    {
      id: "mf-3",
      title: "Dunphy Family Warmth",
      description: "Celebrating together through the noise, the laughs, and the love.",
      gif: "https://i.giphy.com/E4Y0VjghOGxKE.gif",
      emoji: "🏡",
      sticker: "❤️",
      mood: "comfort",
    },
    {
      id: "mf-4",
      title: "Pure Celebration Spirit",
      description: `Surrounding ${m} with laughter and unconditional family support.`,
      gif: "https://i.giphy.com/fYGM9HVdNeSzOI3Wet.gif",
      emoji: "🎉",
      sticker: "⭐",
      mood: "pep",
    },
  ],

  roulette: [
    {
      id: "mf-r1",
      title: "Cool Dad Energy",
      quote: `You are fabulous, ${m}! T-G-I-F: Thank God I'm Fabulous!`,
      gif: "https://i.giphy.com/l2Je0oOcT4cioSIfu.gif",
    },
    {
      id: "mf-r2",
      title: "Gloria's Joy",
      quote: `Today we celebrate the wonderful ${m}!`,
      gif: "https://i.giphy.com/26gsq8fim9nnlRUgU.gif",
    },
    {
      id: "mf-r3",
      title: "Dunphy Cheer",
      quote: "Love is what binds us through any kind of weather.",
      gif: "https://i.giphy.com/E4Y0VjghOGxKE.gif",
    },
    {
      id: "mf-r4",
      title: "Family Celebration",
      quote: "Every normal moment becomes extraordinary with the right people.",
      gif: "https://i.giphy.com/fYGM9HVdNeSzOI3Wet.gif",
    },
  ],

  birthdayEpisode: {
    season: "04",
    episode: "11",
    title: `The Birthday Extravaganza For ${m}`,
    description:
      `Phil plans an elaborate magic show, Cam bakes a 4-tier themed cake, and the whole family gathers in matching shirts to celebrate ${m}.`,
  },

  episodeArchive: [
    {
      id: "mf-ep1",
      season: "01",
      episode: "01",
      title: "Pilot (The Lion King Baby Reveal)",
      description: "Cam introducing baby Lily to the family with 'Circle of Life' blasting in the living room.",
    },
    {
      id: "mf-ep2",
      season: "03",
      episode: "08",
      title: "After the Fire",
      description: "Pure family solidarity disguised under hilarious misunderstandings and barbecue chaos.",
    },
    {
      id: "mf-ep3",
      season: "04",
      episode: "12",
      title: "Party Crasher",
      description: "Gloria going into labor and Cam & Claire organizing an over-the-top surprise party.",
    },
  ],

  openWhen: [
    {
      id: "mf-open-1",
      emoji: "🌧️",
      title: "Open when you're feeling down or lonely",
      preview: "The Dunphy family arms are wide open for a giant hug...",
      description:
        `Remember that you are cherished and never alone, ${m}. No matter what happened today, tomorrow is a blank page. Go make yourself a warm drink, put on cozy socks, and relax.`,
      quote: "We do strange things for the people we love. That's family.",
      character: "Phil Dunphy",
      gif: "https://i.giphy.com/E4Y0VjghOGxKE.gif",
    },
    {
      id: "mf-open-2",
      emoji: "💪",
      title: "Open when you need confidence and cheerleading",
      preview: "Phil and Gloria have a message about your superpowers...",
      description:
        `The world is full of noise, ${m}, but your light is unique. You have creativity, strength, and that special spark that makes everyone smile just being around you. Go out there and shine!`,
      quote: "You are fabulous, and don't let anyone dim your sparkle.",
      character: "Cameron Tucker",
      gif: "https://i.giphy.com/l2Je0oOcT4cioSIfu.gif",
    },
    {
      id: "mf-open-3",
      emoji: "😂",
      title: "Open when you need pure ridiculous comedy",
      preview: "Why the face? Phil's-osophy to the rescue!",
      description:
        `Whenever life gives you lemons, ${m}, remember Phil Dunphy's advice: throw the lemons back and make lemonade! Don't let anything steal your smile today.`,
      quote: "WTF: Why The Face? Turn that frown upside down!",
      character: "Phil Dunphy",
      gif: "https://i.giphy.com/26gsq8fim9nnlRUgU.gif",
    },
  ],

  finalSurprise: {
    title: `You Are Part of The Story, ${m}!`,
    message:
      `Happy Birthday, ${m}! Life is a little chaotic, a little messy, and wonderfully hilarious — but having people like you in it makes all the difference in the world. Keep smiling! ❤️`,
  },
};

export default modernFamilyData;

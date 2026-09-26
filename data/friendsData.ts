import { BIRTHDAY_CONFIG } from "./birthdayConfig";

const m = BIRTHDAY_CONFIG.recipientName;

const friendsData = {
  hero: {
    emoji: "☕",
    title: "FRIENDS",
    subtitle: `The one where we celebrate ${m}'s birthday with all our love! 🎂`,
    stamp: `Central Perk Blend · Crafted For ${m}`,
  },

  birthdayMessage: {
    heading: `A Birthday Hug For ${m}`,
    message:
      `Could ${m}'s birthday BE any more special? Six friends, countless memories, and one incredible person we are celebrating today. Whenever life gets loud or you need a smile, consider this your permanent spot on the Central Perk orange couch. Happy Birthday, ${m}! ❤️`,
  },

  birthdaySurprise: {
    tag: `SURPRISE GIFT #1 FOR ${m}`,
    title: `The Central Perk Birthday Gift`,
    revealedItem: "☕🏆",
    revealedTitle: `The Geller Cup & Lifetime Central Perk Pass!`,
    gifUri: "https://i.giphy.com/26FPGI3ZgduhYYVTa.gif",
    revealedMessage:
      `Congratulations, ${m}! Monica has officially awarded you the coveted Geller Cup, Gunther has reserved the velvet couch exclusively for you, and Phoebe wrote a song in your honor! You are the sweetest friend anyone could ever ask for.`,
  },

  stickyNotes: [
    {
      id: "fn-1",
      tag: "Monica's Rule For M",
      text: `Welcome to another fabulous year of life, ${m}! You are organized, resilient, and way stronger than you think. Keep being incredible.`,
      author: "Monica Geller",
      color: "#FEF3C7",
      tapeColor: "#FCD34D",
      rotation: "-1.5deg",
    },
    {
      id: "fn-2",
      tag: "Joey's Golden Advice",
      text: `Whenever you feel tired or stressed, ${m}: order your favorite food, take a nap, and remember Joey doesn't share food... but I'd share pizza with you!`,
      author: "Joey Tribbiani",
      color: "#FFE4E6",
      tapeColor: "#FDA4AF",
      rotation: "2deg",
    },
    {
      id: "fn-3",
      tag: "Chandler's Sincere Note",
      text: `Could I BE any prouder to know someone as kind, genuine, and wonderful as you, ${m}? Have the happiest birthday!`,
      author: "Chandler Bing",
      color: "#E0F2FE",
      tapeColor: "#7DD3FC",
      rotation: "-1deg",
    },
  ],

  favoriteMoments: [
    {
      id: "friends-1",
      title: "Central Perk Warm Hug",
      description: `Surrounding ${m} with infinite warmth and love from the whole gang.`,
      gif: "https://i.giphy.com/VbEC9WchxkiWTL5PFo.gif",
      emoji: "☕",
      sticker: "🛋️",
      mood: "comfort",
    },
    {
      id: "friends-2",
      title: "Monica's Birthday Celebration",
      description: "Pure victory celebration energy because today is all about you!",
      gif: "https://i.giphy.com/26FPGI3ZgduhYYVTa.gif",
      emoji: "🎉",
      sticker: "⭐",
      mood: "laugh",
    },
    {
      id: "friends-3",
      title: "The Ultimate Friend Circle",
      description: `Six friends who remind us that people like you, ${m}, make life beautiful.`,
      gif: "https://i.giphy.com/dCLbnsZVBdeGB9rBma.gif",
      emoji: "👫",
      sticker: "❤️",
      mood: "comfort",
    },
    {
      id: "friends-4",
      title: "Unstoppable Smiles & Coffee",
      description: "When the gang gets together for good laughs and sweet conversations.",
      gif: "https://i.giphy.com/hXOc9DJufLxpzo82zq.gif",
      emoji: "✨",
      sticker: "☕",
      mood: "pep",
    },
  ],

  roulette: [
    {
      id: "r1",
      title: "Central Perk Hug",
      quote: `The one where ${m} is reminded how loved she is.`,
      gif: "https://i.giphy.com/VbEC9WchxkiWTL5PFo.gif",
    },
    {
      id: "r2",
      title: "Pure Joy Celebration",
      quote: `Happy Birthday to the one and only ${m}!`,
      gif: "https://i.giphy.com/26FPGI3ZgduhYYVTa.gif",
    },
    {
      id: "r3",
      title: "Squad High Spirits",
      quote: "I'll be there for you, 'cause you're there for me too.",
      gif: "https://i.giphy.com/YQHBoOpGwdTwuBSZKs.gif",
    },
    {
      id: "r4",
      title: "Friends Laughing Together",
      quote: "The best moments are the ones that make your stomach hurt from laughing.",
      gif: "https://i.giphy.com/RJgcQtiKDfuQDG2eKr.gif",
    },
  ],

  birthdayEpisode: {
    season: "10",
    episode: "18",
    title: `The One With ${m}'s Special Birthday`,
    description:
      `The gang gathers in apartment 20 with balloons, cheesecake, and endless laughter to throw ${m} the most unforgettable birthday party ever.`,
  },

  episodeArchive: [
    {
      id: "friends-ep1",
      season: "01",
      episode: "01",
      title: "The One Where Monica Gets a Roommate",
      description: "Where it all begins and six strangers become a lifelong comfort family.",
    },
    {
      id: "friends-ep2",
      season: "04",
      episode: "12",
      title: "The One With The Embryos (The Trivia Game)",
      description: "Pure comedy perfection guaranteed to make you laugh every single time.",
    },
    {
      id: "friends-ep3",
      season: "05",
      episode: "14",
      title: "The One Where Everybody Finds Out",
      description: "Phoebe and Chandler's showdown: they don't know that we know they know we know!",
    },
  ],

  openWhen: [
    {
      id: "friends-open-1",
      emoji: "🌧️",
      title: "Open when you're feeling sad or down",
      preview: "A warm cup of coffee and a tight hug are waiting for you inside...",
      description:
        `Take a slow breath, ${m}. Bad days happen, but they always pass. Even in gloomy weather, you are cherished, supported, and never alone. You don't have to carry the whole world on your shoulders today.`,
      quote: "I'll be there for you, when the rain starts to pour.",
      character: "The Central Perk Crew",
      gif: "https://i.giphy.com/VbEC9WchxkiWTL5PFo.gif",
    },
    {
      id: "friends-open-2",
      emoji: "💪",
      title: "Open when you need motivation or courage",
      preview: "Channeling Monica Geller's unstoppable determination...",
      description:
        `You have solved 100% of your hardest days so far, ${m}. Whatever challenge is in front of you right now, you have the brains, grace, and courage to get through it. Believe in your magic!`,
      quote: "You are stronger, smarter, and more capable than you know.",
      character: "Monica Geller",
      gif: "https://i.giphy.com/26FPGI3ZgduhYYVTa.gif",
    },
    {
      id: "friends-open-3",
      emoji: "😂",
      title: "Open when you just need a hearty laugh",
      preview: "Guaranteed serotonin boost inside for M...",
      description:
        `Life is too short to take everything seriously, ${m}! Drop your shoulders, relax your jaw, and let yourself giggle. Here is your reminder to dance like nobody's watching!`,
      quote: "Could today BE any more wonderful?",
      character: "Chandler Bing",
      gif: "https://i.giphy.com/dCLbnsZVBdeGB9rBma.gif",
    },
  ],

  finalSurprise: {
    title: `A Birthday Wish Just For ${m}`,
    message:
      `Happy Birthday, ${m}! Thank you for being such a wonderful, bright, and heartwarming presence. Whenever life gets busy or noisy, you always have this comfort scrapbook to return to. Wishing you the happiest year ahead! ❤️`,
  },
};

export default friendsData;

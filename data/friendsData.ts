import { BIRTHDAY_CONFIG } from "./birthdayConfig";

const m = BIRTHDAY_CONFIG.recipientName;

const friendsData = {
  hero: {
    emoji: "☕",
    title: "FRIENDS",
    subtitle: `The one where we celebrate ${m}'s birthday with warm laughs & comfort! 🎂`,
    stamp: `Central Perk · Reserved Just For ${m}`,
  },

  birthdayMessage: {
    heading: `A Birthday Cheer For ${m}`,
    message:
      `Could ${m}'s birthday BE any more special? Six friends, countless cozy memories, and one wonderful person we are celebrating today. Whenever life gets loud or you need a smile, consider this your permanent spot on the Central Perk orange couch. Happy Birthday, ${m}! ❤️`,
  },

  birthdaySurprise: {
    tag: `SURPRISE GIFT #1 FOR ${m}`,
    title: `The Central Perk Birthday Gift`,
    revealedItem: "☕🛋️",
    revealedTitle: `Chandler & Joey's Victory Hug & Lifetime Central Perk Pass!`,
    gifUri: "https://i.giphy.com/26FPGI3ZgduhYYVTa.gif",
    revealedMessage:
      `Gunther saved the velvet couch for you, Monica baked your favorite treats, and Chandler & Joey are doing their iconic victory celebration hug! You bring so much good energy to everyone around you, ${m}.`,
  },

  cuteClips: [
    {
      id: "f-clip-1",
      title: "The Iconic Fountain Opening",
      subtitle: "'I'll Be There For You' — pure comfort ☕",
      youtubeId: "s2TyVQGoCYo",
      emoji: "⛲",
    },
    {
      id: "f-clip-2",
      title: "Joey Doesn't Share Food!",
      subtitle: "The classic hilarious Joey moment to make you giggle 🍕",
      youtubeId: "dGLObch14e4",
      emoji: "🍕",
    },
  ],

  stickyNotes: [
    {
      id: "fn-1",
      tag: "Monica's Rule For M",
      text: `Welcome to another year of life, ${m}! You are organized, kind, and way stronger than you think. Keep shining!`,
      author: "Monica Geller",
      color: "#FEF3C7",
      tapeColor: "#FCD34D",
      rotation: "-1.5deg",
    },
    {
      id: "fn-2",
      tag: "Joey's Golden Advice",
      text: `Whenever you feel tired or stressed, ${m}: grab a slice of your favorite cake, take a nap, and remember Joey doesn't share food... but I'd share with you!`,
      author: "Joey Tribbiani",
      color: "#FFE4E6",
      tapeColor: "#FDA4AF",
      rotation: "2deg",
    },
    {
      id: "fn-3",
      tag: "Chandler's Sincere Note",
      text: `Could I BE any happier to wish you a happy birthday, ${m}? You make every regular day a lot more fun.`,
      author: "Chandler Bing",
      color: "#E0F2FE",
      tapeColor: "#7DD3FC",
      rotation: "-1deg",
    },
  ],

  favoriteMoments: [
    {
      id: "friends-1",
      title: "Monica's Turkey Dance",
      description: "The most iconic, ridiculous celebration dance of all time to make you giggle!",
      gif: "https://i.giphy.com/cnjJcoWSpb5pSV40gc.gif",
      emoji: "🦃",
      sticker: "😂",
      mood: "laugh",
    },
    {
      id: "friends-2",
      title: "Chandler's Big Thumbs Up",
      description: `Chandler letting ${m} know that you're doing an amazing job.`,
      gif: "https://i.giphy.com/JPsFUPp3vLS5q.gif",
      emoji: "👍",
      sticker: "✨",
      mood: "pep",
    },
    {
      id: "friends-3",
      title: "The Big Group Celebration",
      description: "Pure jumping, hugging, happy celebration energy for your birthday!",
      gif: "https://i.giphy.com/Za2odM4y39pa7h5PAv.gif",
      emoji: "🎉",
      sticker: "❤️",
      mood: "comfort",
    },
    {
      id: "friends-4",
      title: "Cozy Central Perk Days",
      description: "Six friends sharing life over warm coffee mugs on the orange couch.",
      gif: "https://i.giphy.com/Zds7ggWpSfe675qU1A.gif",
      emoji: "☕",
      sticker: "🛋️",
      mood: "comfort",
    },
  ],

  roulette: [
    {
      id: "r1",
      title: "Joey & Chandler's Great Laugh",
      quote: `You've got this, ${m}! Keep on smiling.`,
      gif: "https://i.giphy.com/ZCltfQc8CMbh7DRcG8.gif",
    },
    {
      id: "r2",
      title: "Phoebe's Happy Dance",
      quote: "Dance like no one's watching and let yourself be silly!",
      gif: "https://i.giphy.com/eHLMFV5OsZLEDX1adl.gif",
    },
    {
      id: "r3",
      title: "Friends On The Couch",
      quote: `Happy Birthday, ${m}! You deserve all the good things in the world.`,
      gif: "https://i.giphy.com/LrGO8ATqII2oegLenU.gif",
    },
  ],

  birthdayEpisode: {
    season: "10",
    episode: "18",
    title: `The One With ${m}'s Birthday`,
    description:
      `The gang gathers in apartment 20 with warm tea, delicious cake, and cozy stories to celebrate ${m}.`,
  },

  openWhen: [
    {
      id: "friends-open-1",
      emoji: "🌧️",
      title: "Open when you're feeling down or tired",
      preview: "A warm cup of coffee and a tight hug are waiting inside...",
      description:
        `Take a slow breath, ${m}. Bad days happen, but they pass. Even in gloomy weather, you are cherished, supported, and never alone. You don't have to carry the whole world today.`,
      quote: "I'll be there for you, when the rain starts to pour.",
      character: "The Friends Crew",
      gif: "https://i.giphy.com/kgCVLjQ9nBAXDya16s.gif",
    },
    {
      id: "friends-open-2",
      emoji: "🦕",
      title: "Open when life feels confusing or weird",
      preview: "Ross trying to make sense of the universe...",
      description:
        `When things feel upside down, ${m}, remember: Ross has survived three divorces, leather pants, and an entire sandwich heist. You will get through whatever's on your plate with flying colors!`,
      quote: "I'm fine... totally fine!",
      character: "Ross Geller",
      gif: "https://i.giphy.com/JTUtO8ZZu4CdNmSOds.gif",
    },
    {
      id: "friends-open-3",
      emoji: "😂",
      title: "Open when you just need a hearty laugh",
      preview: "Guaranteed giggle inside for M...",
      description:
        `Life is too short to take everything seriously, ${m}! Drop your shoulders, relax your jaw, and let yourself giggle.`,
      quote: "Could today BE any more wonderful?",
      character: "Chandler Bing",
      gif: "https://i.giphy.com/hXOc9DJufLxpzo82zq.gif",
    },
  ],

  finalSurprise: {
    title: `A Birthday Wish Just For ${m}`,
    message:
      `Happy Birthday, ${m}! Thank you for being such a wonderful, bright, and heartwarming person. Whenever you need comfort, this scrapbook is always here for you. Have the happiest year ahead! ❤️`,
  },
};

export default friendsData;

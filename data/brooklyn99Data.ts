import { BIRTHDAY_CONFIG } from "./birthdayConfig";

const m = BIRTHDAY_CONFIG.recipientName;

const brooklyn99Data = {
  hero: {
    emoji: "🕵️",
    title: "BROOKLYN NINE-NINE",
    subtitle: `The one where the Nine-Nine squad celebrates ${m}'s birthday with elite hype! 🚔`,
    stamp: `Nine-Nine Precinct · Special Birthday Order For ${m}`,
  },

  birthdayMessage: {
    heading: `Captain Holt's Official Birthday Dispatch For ${m}`,
    message:
      `Attention Detective ${m}: by executive authority of the 99th Precinct, today is an officially declared holiday. Whether you need elite laughs, unconditional squad backup, or a proud salute, the entire Nine-Nine is on your team. Happy Birthday, ${m}! Cool cool cool! 🎉`,
  },

  birthdaySurprise: {
    tag: `SURPRISE GIFT #2 FOR ${m}`,
    title: `The Ultimate Detective / Human Badge`,
    revealedItem: "🎖️🛡️",
    revealedTitle: `Captain Holt's Medal of Honor & Golden Badge!`,
    gifUri: "https://i.giphy.com/lp0D8EezWMXBhcQygb.gif",
    revealedMessage:
      `Captain Raymond Holt hereby proclaims: '${m}, you are an extraordinary human being and an indispensable light. We have concluded our investigation and determined that you are 100% phenomenal.' Hot damn!`,
  },

  stickyNotes: [
    {
      id: "b99-n1",
      tag: `Captain Holt's Note To ${m}`,
      text: `Every time someone steps up and shines like you do, ${m}, the world becomes a better, more interesting place. I am profoundly proud to know you.`,
      author: "Captain Raymond Holt",
      color: "#FEF3C7",
      tapeColor: "#FCD34D",
      rotation: "1.5deg",
    },
    {
      id: "b99-n2",
      tag: `Gina's Official Birthday Mandate`,
      text: `Listen to me, ${m}: walk into every room this year like the superstar you are. The world is your stage and you are the main event!`,
      author: "Gina Linetti",
      color: "#FCE7F3",
      tapeColor: "#F472B6",
      rotation: "-2deg",
    },
    {
      id: "b99-n3",
      tag: `Jake Peralta's Hype Note`,
      text: `Cool cool cool cool cool! Happy Birthday, ${m}! No case is unsolvable and no bad day lasts forever. You're an absolute legend!`,
      author: "Jake Peralta",
      color: "#E0F2FE",
      tapeColor: "#38BDF8",
      rotation: "1deg",
    },
  ],

  favoriteMoments: [
    {
      id: "b99-1",
      title: "Cool Cool Cool Cool Cool",
      description: `Jake's official reminder that ${m} can handle whatever comes her way with style.`,
      gif: "https://i.giphy.com/l41lI4bYmcsPJX9Go.gif",
      emoji: "😎",
      sticker: "🚔",
      mood: "comfort",
    },
    {
      id: "b99-2",
      title: "Captain Holt's Sincere Smile",
      description: "A rare display of pure, proud happiness to brighten your day.",
      gif: "https://i.giphy.com/lp0D8EezWMXBhcQygb.gif",
      emoji: "🫡",
      sticker: "⭐",
      mood: "pep",
    },
    {
      id: "b99-3",
      title: "The Nine-Nine Celebration",
      description: "The squad gathering together with full excitement and energy.",
      gif: "https://i.giphy.com/KxiRwO7tqXCTDVKobo.gif",
      emoji: "🎉",
      sticker: "🔥",
      mood: "laugh",
    },
    {
      id: "b99-4",
      title: "Squad Unstoppable Joy",
      description: `Surrounding ${m} with the most supportive squad in television history.`,
      gif: "https://i.giphy.com/jslzBnsMtVd6UX9D0v.gif",
      emoji: "🤝",
      sticker: "💙",
      mood: "comfort",
    },
  ],

  roulette: [
    {
      id: "b99-r1",
      title: "Cool Cool Cool",
      quote: `Cool cool cool cool cool, tight tight tight! Happy Birthday, ${m}!`,
      gif: "https://i.giphy.com/l41lI4bYmcsPJX9Go.gif",
    },
    {
      id: "b99-r2",
      title: "Captain Holt's Pride",
      quote: `You are an extraordinary person, ${m}.`,
      gif: "https://i.giphy.com/lp0D8EezWMXBhcQygb.gif",
    },
    {
      id: "b99-r3",
      title: "Squad High Spirits",
      quote: "Nine-Nine! All hands on deck to celebrate you!",
      gif: "https://i.giphy.com/KxiRwO7tqXCTDVKobo.gif",
    },
    {
      id: "b99-r4",
      title: "The Victory Cheer",
      quote: "Bingpot! That's what we call a birthday triumph!",
      gif: "https://i.giphy.com/3o8doT5DaMjfH3paHC.gif",
    },
  ],

  birthdayEpisode: {
    season: "05",
    episode: "14",
    title: `The Ultimate Birthday Heist for ${m}`,
    description:
      `Jake, Holt, and the entire squad orchestrate a legendary heist to steal all the smiles and deliver the most memorable birthday celebration ever to ${m}.`,
  },

  episodeArchive: [
    {
      id: "b99-ep1",
      season: "05",
      episode: "17",
      title: "DFW (The Backstreet Boys Lineup)",
      description: "It was number five. Number five killed my brother. Iconic comedy gold.",
    },
    {
      id: "b99-ep2",
      season: "05",
      episode: "14",
      title: "The Box",
      description: "Jake and Holt in a battle of wits with Sterling K. Brown. 10/10 perfection.",
    },
    {
      id: "b99-ep3",
      season: "04",
      episode: "05",
      title: "Halloween IV",
      description: "The heists where absolute unhinged chaos meets pure squad affection.",
    },
  ],

  openWhen: [
    {
      id: "b99-open-1",
      emoji: "🌧️",
      title: "Open when you're overwhelmed or feeling low",
      preview: "Captain Holt has an official memo for you...",
      description:
        `Attention ${m}: whatever has knocked your spirits down today does not define your capabilities. Take a breath. Even the sharpest detectives encounter obstacles. You have an entire squad rooting for you, always.`,
      quote: "Every time you feel small, remember: you are an extraordinary human being.",
      character: "Captain Raymond Holt",
      gif: "https://i.giphy.com/lp0D8EezWMXBhcQygb.gif",
    },
    {
      id: "b99-open-2",
      emoji: "💪",
      title: "Open when you need motivation to tackle a goal",
      preview: "Peralta is ready to hype you up...",
      description:
        `You've tackled difficult exams, weird moments, and tricky days, ${m}. This challenge is just another case waiting to be cracked. Put on your game face and show them what an absolute genius looks like!`,
      quote: "Cool cool cool cool cool. No doubt no doubt, you've got this.",
      character: "Jake Peralta",
      gif: "https://i.giphy.com/l41lI4bYmcsPJX9Go.gif",
    },
    {
      id: "b99-open-3",
      emoji: "😂",
      title: "Open when you need an immediate smile & cheer",
      preview: "The Nine-Nine victory horn is sounding...",
      description:
        `Stop what you're doing right now, ${m}. Shake out your shoulders, take a goofy deep breath, and let the Nine-Nine joy take over! Life is meant to be enjoyed, detective!`,
      quote: "Nine-Nine! Best squad, best moments!",
      character: "The 99th Precinct",
      gif: "https://i.giphy.com/KxiRwO7tqXCTDVKobo.gif",
    },
  ],

  finalSurprise: {
    title: `Mission Accomplished, ${m}!`,
    message:
      `Case closed! You are officially crowned the Ultimate Human / Genius of the year. Keep shining, smiling, and bringing laughter wherever you go. Happy Birthday, ${m}! Nine-Nine! 🎉`,
  },
};

export default brooklyn99Data;

import { BIRTHDAY_CONFIG } from "./birthdayConfig";

const m = BIRTHDAY_CONFIG.recipientName;

const officeData = {
  hero: {
    emoji: "🏢",
    title: "THE OFFICE",
    subtitle: `The one where Dunder Mifflin awards ${m} the greatest Dundie of all time! 📄`,
    stamp: `Dunder Mifflin · Birthday Trophy For ${m}`,
  },

  birthdayMessage: {
    heading: `A Scranton Birthday Note For ${m}`,
    message:
      `That's what she said... and by 'she', we mean everyone in Scranton wishing ${m} the coziest, happiest birthday! Today, you are officially the Dundie winner for 'Best Human Being In The Entire Universe'. Happy Birthday, ${m}! 🏆`,
  },

  birthdaySurprise: {
    tag: `SURPRISE GIFT #3 FOR ${m}`,
    title: `The Official Dundie Award Ceremony`,
    revealedItem: "🏆✨",
    revealedTitle: `The Dundie Award For Outstanding Human Being!`,
    gifUri: "https://i.giphy.com/92hAb1nIitH1u.gif",
    revealedMessage:
      `Michael Scott steps up to the mic at Chili's: '${m}! You have won the most prestigious honor in Scranton history! You bring warmth, kindness, and incredible energy to everyone around you.' Pam feels God in this room tonight!`,
  },

  cuteClips: [
    {
      id: "off-clip-1",
      title: "Jim & Pam's Sweetest Story",
      subtitle: "The cutest, most wholesome moments in Dunder Mifflin 💛",
      youtubeId: "QDjRyY8Feks",
      emoji: "☕",
    },
    {
      id: "off-clip-2",
      title: "Jim & Pam: Unforgettable Moments",
      subtitle: "Pure heartwarming comfort from Dunder Mifflin 🏆",
      youtubeId: "GivFpU7eegs",
      emoji: "🎉",
    },
  ],

  stickyNotes: [
    {
      id: "off-n1",
      tag: `Michael's Note To ${m}`,
      text: `Never, for any reason, do anything, to anyone... wait, what I meant is: ${m}, you are brilliant, hilarious, and doing an amazing job. Happy Birthday!`,
      author: "Michael Scott",
      color: "#FEF3C7",
      tapeColor: "#FCD34D",
      rotation: "-1.5deg",
    },
    {
      id: "off-n2",
      tag: `Pam's Gentle Reminder`,
      text: `It takes a lot of courage to be who you are, pursue what you love, and take your time, ${m}. You have such a gentle, special light. Be kind to yourself.`,
      author: "Pam Beesly",
      color: "#FCE7F3",
      tapeColor: "#F472B6",
      rotation: "2deg",
    },
    {
      id: "off-n3",
      tag: `Dwight's Ironclad Truth`,
      text: `Fact: ${m} was born on this day. Fact: The world immediately became 100% better. I salute your greatness.`,
      author: "Dwight K. Schrute",
      color: "#E0F2FE",
      tapeColor: "#38BDF8",
      rotation: "-1deg",
    },
  ],

  favoriteMoments: [
    {
      id: "office-1",
      title: "Jim & Pam's Sweet Smile",
      description: "That unmistakable warm smile that makes all the chaos fade away.",
      gif: "https://i.giphy.com/EMFxuIPeomTGE.gif",
      emoji: "💛",
      sticker: "☕",
      mood: "comfort",
    },
    {
      id: "office-2",
      title: "The Scranton Celebration",
      description: "When the whole office celebrates with pure joy!",
      gif: "https://i.giphy.com/jp7jSyjNNz2ansuOS8.gif",
      emoji: "🥳",
      sticker: "🏆",
      mood: "laugh",
    },
    {
      id: "office-3",
      title: "Michael Scott's Heartfelt 'Thank You!'",
      description: `Michael stepping up to say a sincere thank you for being such a wonderful person, ${m}.`,
      gif: "https://i.giphy.com/1Z02vuppxP1Pa.gif",
      emoji: "🙏",
      sticker: "✨",
      mood: "comfort",
    },
    {
      id: "office-4",
      title: "Pam's Warm Smile",
      description: "Gentle happiness and genuine affection from Pam Beesly to brighten your day.",
      gif: "https://i.giphy.com/A6eZZGnk3r0BuMWIrk.gif",
      emoji: "🌸",
      sticker: "❤️",
      mood: "pep",
    },
  ],

  roulette: [
    {
      id: "off-r1",
      title: "Andy Bernard's Party Excitement",
      quote: `Roo-doo-doot-da-doo! Have the absolute happiest birthday ever, ${m}!`,
      gif: "https://i.giphy.com/r8I7tDl75QLfh2SkpE.gif",
    },
    {
      id: "off-r2",
      title: "Michael's Golden Finger Guns",
      quote: `Ayyy! You are doing amazing, ${m}! That's what she said.`,
      gif: "https://i.giphy.com/55SfA4BxofRBe.gif",
    },
    {
      id: "off-r3",
      title: "Stanley's Rare Laugh",
      quote: "When life is good, you just have to laugh and smile!",
      gif: "https://i.giphy.com/ei0E9JEqlOT54BI4fk.gif",
    },
  ],

  birthdayEpisode: {
    season: "02",
    episode: "19",
    title: `The Dundie Award Banquet For ${m}`,
    description:
      `Michael reserves Chili's for the night, sets up the microphone, and presents ${m} with the most coveted golden trophy in history.`,
  },

  openWhen: [
    {
      id: "office-open-1",
      emoji: "🌧️",
      title: "Open when work or life feels overwhelming",
      preview: "Michael Scott calling an official company time-out...",
      description:
        `Time out, ${m}! Put down whatever you are stressing about. Step away from the screen, take a deep breath, and remember that nothing is more important than your peace of mind.`,
      quote: "Time out! Nobody panic, nobody stress!",
      character: "Michael Scott",
      gif: "https://i.giphy.com/CZGcUfnAy3ayJw2eZX.gif",
    },
    {
      id: "office-open-2",
      emoji: "💪",
      title: "Open when you need confidence and fire",
      preview: "Jim Halpert cheering you on with a big YES...",
      description:
        `You've got this, ${m}! When the imposter syndrome creeps in, remember how much capability and smarts you bring to the table.`,
      quote: "Yes! Absolutely, 100% yes!",
      character: "Jim Halpert",
      gif: "https://i.giphy.com/ffJ6aDa3WnglqxiLRN.gif",
    },
    {
      id: "office-open-3",
      emoji: "😂",
      title: "Open when you need comic relief right now",
      preview: "Kevin Malone bringing pure celebration hype...",
      description:
        `When life gets serious, channel your inner Kevin. Drop your shoulders, grab your favorite treat, and let yourself enjoy the moment without overthinking!`,
      quote: "It is a celebration! It is pure greatness!",
      character: "Kevin Malone",
      gif: "https://i.giphy.com/Hm3rh1nMYe9BR20ThG.gif",
    },
  ],

  finalSurprise: {
    title: `A Golden Dundie Just For ${m} 💛`,
    message:
      `Happy Birthday, ${m}! You are declared the most indispensable source of joy, humor, and goodness in this world. Never forget to look into the camera and smile! 📄✨`,
  },
};

export default officeData;

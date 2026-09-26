import { BIRTHDAY_CONFIG } from "./birthdayConfig";

const m = BIRTHDAY_CONFIG.recipientName;

const officeData = {
  hero: {
    emoji: "🏢",
    title: "THE OFFICE",
    subtitle: `The one where Dunder Mifflin awards ${m} the greatest Dundie of all time! 📄`,
    stamp: `Dunder Mifflin Scranton · Official Award For ${m}`,
  },

  birthdayMessage: {
    heading: `A Scranton Branch Memo For ${m}`,
    message:
      `That's what she said... and by 'she', we mean everyone in Scranton wishing ${m} the brightest, coziest, happiest birthday! Today, you are officially the Dundie winner for 'Best Human Being In The Entire Universe'. Happy Birthday, ${m}! 🏆`,
  },

  birthdaySurprise: {
    tag: `SURPRISE GIFT #3 FOR ${m}`,
    title: `The Official Dundie Award Ceremony`,
    revealedItem: "🏆✨",
    revealedTitle: `The Dundie Award For Outstanding Human Being!`,
    gifUri: "https://i.giphy.com/55SfA4BxofRBe.gif",
    revealedMessage:
      `Michael Scott takes the microphone at Chili's: '${m}! You have won the most prestigious honor in paper company history! You bring warmth, kindness, and incredible energy to everyone around you.' Pam feels God in this room tonight!`,
  },

  stickyNotes: [
    {
      id: "off-n1",
      tag: `Michael's Note To ${m}`,
      text: `Never, for any reason, do anything, to anyone, for any reason... wait, what I meant is: ${m}, you are brilliant, hilarious, and doing an amazing job. Happy Birthday!`,
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
      title: "The Jim Halpert Camera Glance",
      description: `That knowing look when the world is chaotic, but ${m} is handling it like a pro.`,
      gif: "https://i.giphy.com/1Z02vuppxP1Pa.gif",
      emoji: "😏",
      sticker: "☕",
      mood: "comfort",
    },
    {
      id: "office-2",
      title: "Michael Scott's Pure Joy",
      description: `Michael celebrating because today is officially ${m}'s birthday!`,
      gif: "https://i.giphy.com/55SfA4BxofRBe.gif",
      emoji: "🎉",
      sticker: "✨",
      mood: "laugh",
    },
    {
      id: "office-3",
      title: "The Scranton Celebration",
      description: "When the whole office puts aside their quirks and unites in joy.",
      gif: "https://i.giphy.com/jp7jSyjNNz2ansuOS8.gif",
      emoji: "🥳",
      sticker: "🏆",
      mood: "pep",
    },
    {
      id: "office-4",
      title: "Wholesome Office Moments",
      description: `Surrounding ${m} with laughter, high fives, and comfort.`,
      gif: "https://i.giphy.com/WPRJfpqxa9RF6.gif",
      emoji: "🤝",
      sticker: "❤️",
      mood: "comfort",
    },
  ],

  roulette: [
    {
      id: "off-r1",
      title: "The Classic Jim Look",
      quote: `You make every regular day a whole lot brighter, ${m}.`,
      gif: "https://i.giphy.com/1Z02vuppxP1Pa.gif",
    },
    {
      id: "off-r2",
      title: "Michael Proud Moment",
      quote: `I am proud of you, ${m}. That's what she said.`,
      gif: "https://i.giphy.com/55SfA4BxofRBe.gif",
    },
    {
      id: "off-r3",
      title: "Scranton High Spirits",
      quote: "No celebration is complete without excessive Dundie glory!",
      gif: "https://i.giphy.com/jp7jSyjNNz2ansuOS8.gif",
    },
    {
      id: "off-r4",
      title: "Office Happiness",
      quote: "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
      gif: "https://i.giphy.com/WPRJfpqxa9RF6.gif",
    },
  ],

  birthdayEpisode: {
    season: "02",
    episode: "19",
    title: `The Dundie Award Banquet For ${m}`,
    description:
      `Michael reserves Chili's for the night, sets up an excessive microphone, and presents ${m} with the most coveted golden trophy in Dunder Mifflin history.`,
  },

  episodeArchive: [
    {
      id: "office-ep1",
      season: "05",
      episode: "14",
      title: "Stress Relief (Part 1)",
      description: "Dwight's fire drill, CPR training, and pure comedic mayhem from start to finish.",
    },
    {
      id: "office-ep2",
      season: "02",
      episode: "01",
      title: "The Dundies",
      description: "Pam feels God in this Chili's tonight. The ultimate wholesome comfort watch.",
    },
    {
      id: "office-ep3",
      season: "04",
      episode: "13",
      title: "Dinner Party",
      description: "Awkward humor elevated to high art. Michael showing off his tiny plasma TV.",
    },
  ],

  openWhen: [
    {
      id: "office-open-1",
      emoji: "🌧️",
      title: "Open when work or life feels overwhelming",
      preview: "Jim and Pam have a grounding reminder for you...",
      description:
        `Take a slow breath, ${m}, and give the imaginary camera a gentle smile. Half the noise around you isn't yours to fix. You are capable, steady, and doing just fine.`,
      quote: "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
      character: "Pam Beesly",
      gif: "https://i.giphy.com/1Z02vuppxP1Pa.gif",
    },
    {
      id: "office-open-2",
      emoji: "💪",
      title: "Open when you need confidence and fire",
      preview: "Channeling Dwight Schrute's indestructible determination...",
      description:
        `You miss 100% of the shots you don't take — Wayne Gretzky — Michael Scott. Go out there and take your shot, ${m}! You have twice the determination and five times the charm of anyone in the room!`,
      quote: "I am ready to face any challenge that might be foolish enough to face me.",
      character: "Dwight K. Schrute",
      gif: "https://i.giphy.com/jp7jSyjNNz2ansuOS8.gif",
    },
    {
      id: "office-open-3",
      emoji: "😂",
      title: "Open when you need comic relief right now",
      preview: "Michael Scott is here to make you smile...",
      description:
        `If Michael Scott can survive George Foreman grills, GPS lakes, and dinner parties... you can breeze through whatever little bump happened today, ${m}!`,
      quote: "Today is a day for smiles, happiness, and celebrations!",
      character: "Michael Scott",
      gif: "https://i.giphy.com/55SfA4BxofRBe.gif",
    },
  ],

  finalSurprise: {
    title: `Official Scranton Certification For ${m}`,
    message:
      `By authority vested in Dunder Mifflin, ${m} has been declared an indispensable source of joy, humor, and goodness in this world. Keep smiling into the camera! Happy Birthday, ${m}! 📄✨`,
  },
};

export default officeData;

const officeData = {
  hero: {
    emoji: "🏢",
    title: "THE OFFICE",
    subtitle: "The one with Dunder Mifflin comfort, Dundie awards, and camera smiles 📄",
    stamp: "Dunder Mifflin Scranton · Quality Comfort",
  },

  birthdayMessage: {
    title: "A Special Memo From The Scranton Branch",
    message:
      "That's what she said... and by 'she', we mean everyone in Scranton wishing you the brightest, coziest, happiest moments! You are officially the Dundie winner for Best Human Being. 🏆",
  },

  stickyNotes: [
    {
      id: "off-n1",
      tag: "Michael's Golden Rule",
      text: "Never, for any reason, do anything, to anyone, for any reason, ever, no matter what... Wait, what I meant is: you're doing amazing, just be yourself!",
      author: "Michael Scott",
      color: "#FEF3C7", // yellow memo
      tapeColor: "#FCD34D",
      rotation: "-1.5deg",
    },
    {
      id: "off-n2",
      tag: "Pam's Gentle Reminder",
      text: "It takes a lot of courage to be who you are, pursue what you love, and take your time. Be kind to yourself.",
      author: "Pam Beesly",
      color: "#FCE7F3", // soft pink
      tapeColor: "#F472B6",
      rotation: "2deg",
    },
    {
      id: "off-n3",
      tag: "Dwight's Ironclad Truth",
      text: "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing. You are no idiot. You are powerful.",
      author: "Dwight K. Schrute",
      color: "#E0F2FE", // cyan
      tapeColor: "#38BDF8",
      rotation: "-1deg",
    },
  ],

  favoriteMoments: [
    {
      id: "office-1",
      title: "The Jim Halpert Camera Glance",
      description: "That knowing look when the world around you is completely absurd, but you're handling it like a champ.",
      gif: "https://media.giphy.com/media/1Z02vuppxP1Pa/giphy.gif",
      emoji: "😏",
      sticker: "☕",
      mood: "comfort",
    },
    {
      id: "office-2",
      title: "STAY CALM! EVERYBODY STAY CALM!",
      description: "Michael's definition of graceful crisis management during the legendary fire drill.",
      gif: "https://media.giphy.com/media/1FMaabePDEUgiQ0R7n/giphy.gif",
      emoji: "🚨",
      sticker: "🔥",
      mood: "laugh",
    },
    {
      id: "office-3",
      title: "Dwight Schrute Victory Pump",
      description: "Unstoppable beet-farming energy when you conquer a difficult task or milestone.",
      gif: "https://media.giphy.com/media/FcuiZUneg1Sty/giphy.gif",
      emoji: "💪",
      sticker: "🏆",
      mood: "pep",
    },
    {
      id: "office-4",
      title: "The Dundies Celebration",
      description: "Because every regular day deserves an excessively grand celebration in your honor.",
      gif: "https://media.giphy.com/media/dXKiNwweqx4GA4Sc3N/giphy.gif",
      emoji: "🏆",
      sticker: "✨",
      mood: "comfort",
    },
  ],

  roulette: [
    {
      id: "off-r1",
      title: "The Classic Jim Look",
      quote: "Right now, this is just a job. But having great people makes it everything.",
      gif: "https://media.giphy.com/media/1Z02vuppxP1Pa/giphy.gif",
    },
    {
      id: "off-r2",
      title: "Panic Mode Activated",
      quote: "OH MY GOD! OKAY, IT'S HAPPENING! EVERYBODY STAY CALM!",
      gif: "https://media.giphy.com/media/1FMaabePDEUgiQ0R7n/giphy.gif",
    },
    {
      id: "off-r3",
      title: "Dwight's Triumph",
      quote: "Power. Raw, unadulterated Scranton power.",
      gif: "https://media.giphy.com/media/FcuiZUneg1Sty/giphy.gif",
    },
    {
      id: "off-r4",
      title: "Michael Proud Moment",
      quote: "I am proud of you. That's what she said.",
      gif: "https://media.giphy.com/media/6gLyE15StY3PC/giphy.gif",
    },
  ],

  birthdayEpisode: {
    season: "02",
    episode: "19",
    title: "The Dundie Award For Outstanding Human",
    description:
      "Michael reserves Chili's for the night to present you with the most coveted award in the entire Scranton business park.",
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
      preview: "Michael Scott is about to tell you to stay calm...",
      description:
        "Take a deep breath and give the imaginary camera a gentle Jim Halpert smile. Half of the chaos around you isn't your responsibility to fix. You are capable, steady, and doing just fine.",
      quote: "There's a lot of beauty in ordinary things. Isn't that kind of the point?",
      character: "Pam Beesly",
      gif: "https://media.giphy.com/media/1Z02vuppxP1Pa/giphy.gif",
    },
    {
      id: "office-open-2",
      emoji: "💪",
      title: "Open when you need confidence and fire",
      preview: "Channeling Dwight Schrute's indestructible willpower...",
      description:
        "You miss 100% of the shots you don't take — Wayne Gretzky — Michael Scott. Go out there and take your shot. You have twice the determination and five times the charm of anyone else in the room!",
      quote: "I am ready to face any challenge that might be foolish enough to face me.",
      character: "Dwight K. Schrute",
      gif: "https://media.giphy.com/media/FcuiZUneg1Sty/giphy.gif",
    },
    {
      id: "office-open-3",
      emoji: "😂",
      title: "Open when you need comic relief right now",
      preview: "It's happening! Stay calm! Stay f***ing calm!",
      description:
        "If Michael Scott can survive setting his foot on a George Foreman grill, driving into a lake because GPS told him to, and hosting dinner parties... you can survive whatever silly obstacle is bothering you today!",
      quote: "Nobody panic! STAY CALM!",
      character: "Michael Scott",
      gif: "https://media.giphy.com/media/1FMaabePDEUgiQ0R7n/giphy.gif",
    },
  ],

  finalSurprise: {
    title: "Official Scranton Branch Certification",
    message:
      "By authority vested in Dunder Mifflin, you have been declared an indispensable source of joy, humor, and warmth. Never forget to look into the camera and smile! 📄✨",
  },
};

export default officeData;

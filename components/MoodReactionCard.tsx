import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BIRTHDAY_CONFIG } from "../data/birthdayConfig";
import DoodleSticker from "./DoodleSticker";
import WashiTape from "./WashiTape";

interface MoodReactionProps {
  mood: string;
  showTitle: string;
  onClear: () => void;
}

const MOOD_DATA: Record<
  string,
  {
    emoji: string;
    headline: string;
    message: string;
    gif: string;
    tapeColor: string;
    tag: string;
    sticker: string;
  }
> = {
  comfort: {
    emoji: "🧸☕",
    headline: `A warm hug for you, ${BIRTHDAY_CONFIG.recipientName}`,
    message:
      `Hey ${BIRTHDAY_CONFIG.recipientName}, take a slow, gentle breath. You don't have to have everything figured out today, and you don't have to carry the whole world. Grab a warm cup of tea, wrap yourself in the softest blanket, and just rest. I'm always in your corner. ❤️`,
    gif: "https://i.giphy.com/3M4NpbLCTxBqU.gif",
    tapeColor: "#FDE68A",
    tag: "COZY COMFORT",
    sticker: "comfort zone",
  },
  laugh: {
    emoji: "🤪🍿",
    headline: `Emergency Giggle for ${BIRTHDAY_CONFIG.recipientName}!`,
    message:
      `Doctor's orders: you are required to smile right now, ${BIRTHDAY_CONFIG.recipientName}! Life is way too short to take seriously. Here is your mandatory serotonin boost:`,
    gif: "https://i.giphy.com/kC8N6DPOkbqWTxkNTe.gif",
    tapeColor: "#FCA5A5",
    tag: "INSTANT LAUGH",
    sticker: "instant smile",
  },
  pep: {
    emoji: "💪✨",
    headline: `You've got this, ${BIRTHDAY_CONFIG.recipientName}!`,
    message:
      `Just in case you forgot today: you are smart, resilient, and deeply loved. Whatever tricky thing is ahead of you, remember you've survived every tough day so far. Channel your inner superstar and conquer it!`,
    gif: "https://i.giphy.com/artj92V8o75VPL7AeQ.gif",
    tapeColor: "#93C5FD",
    tag: "PEP TALK",
    sticker: "you got this",
  },
  cozy: {
    emoji: "🛋️🌙",
    headline: `Cozy Sanctuary Mode On`,
    message:
      `Put your notifications on silent, kick your feet up, and enjoy this little pocket of peace, ${BIRTHDAY_CONFIG.recipientName}. You deserve pure relaxation today.`,
    gif: "https://i.giphy.com/lJ8PEeXlZRWcijJhme.gif",
    tapeColor: "#A7F3D0",
    tag: "PEACE & QUIET",
    sticker: "100% cozy",
  },
};

export default function MoodReactionCard({
  mood,
  showTitle,
  onClear,
}: MoodReactionProps) {
  if (mood === "all" || !MOOD_DATA[mood]) return null;

  const data = MOOD_DATA[mood];

  return (
    <View style={styles.container}>
      <WashiTape color={data.tapeColor} width={100} height={22} rotation="-1deg" />

      <View style={styles.card}>
        <View style={styles.tagBadge}>
          <Text style={styles.tagText}>{data.tag} 💛</Text>
        </View>

        <Text style={styles.emoji}>{data.emoji}</Text>
        <Text style={styles.headline}>{data.headline}</Text>

        <View style={styles.gifBox}>
          <Image
            source={{ uri: data.gif }}
            style={styles.gif}
            contentFit="cover"
            transition={200}
            cachePolicy="memory-disk"
          />
        </View>

        <Text style={styles.message}>{data.message}</Text>

        <DoodleSticker type="heart" text={data.sticker} color="#BE185D" bg="#FCE7F3" rotation="2deg" />

        <Pressable
          style={({ pressed }) => [
            styles.dismissButton,
            pressed && { opacity: 0.7 },
          ]}
          onPress={onClear}
        >
          <Text style={styles.dismissText}>Show All Scrapbook Pages ➔</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFDF9",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    alignItems: "center",
    shadowColor: "#3D2B1B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tagBadge: {
    backgroundColor: "#FEF3C7",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.2,
    color: "#B45309",
  },
  emoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  headline: {
    fontSize: 18,
    fontWeight: "900",
    color: "#2C2219",
    textAlign: "center",
    marginBottom: 10,
  },
  gifBox: {
    width: "100%",
    height: 190,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#F2EBE0",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2D3BE",
  },
  gif: {
    width: "100%",
    height: "100%",
  },
  message: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4A3D31",
    textAlign: "center",
    marginBottom: 14,
    paddingHorizontal: 6,
  },
  dismissButton: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#F4EDE1",
  },
  dismissText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#8B4513",
  },
});

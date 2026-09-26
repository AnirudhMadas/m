import { StyleSheet, Text, View } from "react-native";
import ScrapbookStamp from "./ScrapbookStamp";
import WashiTape from "./WashiTape";

export default function SitcomHero({ emoji, title, subtitle, stamp }) {
  return (
    <View style={styles.container}>
      <WashiTape color="#FCD34D" width={120} height={26} rotation="-2deg" />

      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      {stamp ? (
        <ScrapbookStamp label={stamp} emoji="⭐" color="#92400E" rotation="2deg" />
      ) : (
        <ScrapbookStamp label="A Comfort Scrapbook" emoji="⭐" color="#92400E" rotation="2deg" />
      )}

      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  emoji: {
    fontSize: 54,
    marginBottom: 10,
    marginTop: 6,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 2.5,
    color: "#241D17",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#6D5F52",
    lineHeight: 21,
    maxWidth: 340,
    fontStyle: "italic",
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: "#D97706",
    marginTop: 18,
    borderRadius: 2,
  },
});

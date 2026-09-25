import { StyleSheet, Text, View } from "react-native";

export default function QuoteCard({
  quote,
  character,
  characterEmoji,
  accentColor = "#ffd369",
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.quoteMark, { color: accentColor }]}>“</Text>

      <Text style={styles.quote}>{quote}</Text>

      <View style={styles.attributionRow}>
        <View style={[styles.divider, { backgroundColor: accentColor }]} />
        {characterEmoji ? (
          <Text style={styles.characterEmoji}>{characterEmoji}</Text>
        ) : null}
        <Text style={[styles.character, { color: accentColor }]}>
          {character}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingVertical: 4,
  },
  quoteMark: {
    fontSize: 48,
    fontWeight: "900",
    lineHeight: 48,
    marginBottom: -10,
  },
  quote: {
    fontSize: 17,
    fontStyle: "italic",
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    lineHeight: 24,
    marginTop: 6,
    marginBottom: 16,
  },
  attributionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  divider: {
    width: 20,
    height: 2,
    borderRadius: 1,
    opacity: 0.7,
  },
  characterEmoji: {
    fontSize: 16,
  },
  character: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});

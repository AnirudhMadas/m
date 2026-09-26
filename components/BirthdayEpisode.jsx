import { StyleSheet, Text, View } from "react-native";

export default function BirthdayEpisode({
  season = "01",
  episode = "01",
  title,
  description,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎞️</Text>

      <Text style={styles.heading}>Birthday Episode</Text>

      <View style={styles.card}>
        <Text style={styles.episodeNumber}>
          SEASON {season} · EPISODE {episode}
        </Text>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>{description}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>⭐ BIRTHDAY SPECIAL</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  emoji: {
    fontSize: 28,
    marginBottom: 6,
  },

  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2b2b2b",
    marginBottom: 14,
  },

  card: {
    backgroundColor: "#fff5df",

    borderRadius: 20,
    padding: 24,

    borderWidth: 1,
    borderColor: "#ead8b5",

    shadowColor: "#8c7355",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 2,
  },

  episodeNumber: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#b47c00",
    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#2b2b2b",
    lineHeight: 31,
  },

  divider: {
    width: 55,
    height: 3,
    backgroundColor: "#d89b00",
    marginVertical: 16,
    borderRadius: 2,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#665e56",
  },

  badge: {
    alignSelf: "flex-start",
    marginTop: 18,

    paddingVertical: 7,
    paddingHorizontal: 10,

    borderRadius: 20,

    backgroundColor: "#f3dfad",
    borderWidth: 1,
    borderColor: "#e6c979",
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#9a6a00",
  },
});

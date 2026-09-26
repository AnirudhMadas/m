import { Pressable, StyleSheet, Text, View } from "react-native";

export default function EpisodeArchive({ episodes, onEpisodePress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📺</Text>

      <Text style={styles.heading}>Episode Archive</Text>

      <Text style={styles.subtitle}>
        Previously on this very important story...
      </Text>

      <View style={styles.list}>
        {episodes.map((episode) => (
          <Pressable
            key={episode.id}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() => onEpisodePress?.(episode)}
          >
            <View style={styles.info}>
              <Text style={styles.number}>
                S{episode.season} · E{episode.episode}
              </Text>

              <Text style={styles.title}>{episode.title}</Text>

              <Text style={styles.description}>{episode.description}</Text>
            </View>

            <View style={styles.playButton}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
          </Pressable>
        ))}
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
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 21,
    color: "#77706a",
  },

  list: {
    gap: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#fff8ef",

    borderRadius: 18,
    padding: 18,

    borderWidth: 1,
    borderColor: "#eadfce",

    shadowColor: "#8c7355",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 6,

    elevation: 2,
  },

  cardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }],
  },

  info: {
    flex: 1,
    paddingRight: 15,
  },

  number: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#b47c00",
    marginBottom: 7,
  },

  title: {
    fontSize: 17,
    fontWeight: "800",
    color: "#2b2b2b",
    marginBottom: 5,
  },

  description: {
    fontSize: 13,
    lineHeight: 19,
    color: "#77706a",
  },

  playButton: {
    width: 38,
    height: 38,
    borderRadius: 19,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#f3d477",
  },

  playIcon: {
    fontSize: 13,
    color: "#5c4300",
    marginLeft: 2,
  },
});

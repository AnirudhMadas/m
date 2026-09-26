import { StyleSheet, Text, View } from "react-native";

export default function FavoriteMoments({ moments }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>❤️</Text>

      <Text style={styles.heading}>Favorite Moments</Text>

      <Text style={styles.subtitle}>
        The little moments that became the best memories.
      </Text>

      <View style={styles.list}>
        {moments.map((moment, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardEmoji}>{moment.emoji}</Text>

            <View style={styles.cardContent}>
              <Text style={styles.title}>{moment.title}</Text>

              <Text style={styles.description}>{moment.description}</Text>
            </View>
          </View>
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
    color: "#77706a",
    fontSize: 14,
    lineHeight: 21,
  },

  list: {
    gap: 12,
  },

  card: {
    flexDirection: "row",
    alignItems: "flex-start",

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

  cardEmoji: {
    fontSize: 28,
    marginRight: 14,
  },

  cardContent: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2b2b2b",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#77706a",
  },
});

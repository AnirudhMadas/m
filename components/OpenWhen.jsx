import { Pressable, StyleSheet, Text, View } from "react-native";

export default function OpenWhen({ cards, onCardPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>💌</Text>

      <Text style={styles.heading}>Open When</Text>

      <Text style={styles.subtitle}>Little messages for little moments.</Text>

      <View style={styles.list}>
        {cards.map((card) => (
          <Pressable
            key={card.id}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() => onCardPress?.(card)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{card.emoji}</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>{card.title}</Text>

              <Text style={styles.description}>{card.description}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
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
    padding: 16,

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

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 23,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#f3eadc",

    marginRight: 14,
  },

  icon: {
    fontSize: 22,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2b2b2b",
    marginBottom: 4,
  },

  description: {
    fontSize: 13,
    color: "#77706a",
    lineHeight: 18,
  },

  arrow: {
    fontSize: 28,
    color: "#c48a00",
    marginLeft: 8,
  },
});

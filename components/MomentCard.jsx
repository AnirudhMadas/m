import { StyleSheet, Text, View } from "react-native";

export default function MomentCard({ emoji, title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginRight: 14,
    elevation: 4,
  },

  emoji: {
    fontSize: 40,
    marginBottom: 12,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
  },
});

import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SitcomCard({ title, emoji, description}: { title: string; emoji: string; description: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.description}>{description}</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Explore →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#eee",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  button: {
    marginTop: 10,
    padding: 10,
  },

  buttonText: {
    fontSize: 16,
  },
  emoji: {
    fontSize: 40,
    marginVertical: 10, 
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FinalSurprise({
  title = "One Last Thing...",
  message,
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎁</Text>

      <Text style={styles.heading}>Final Surprise</Text>

      <Text style={styles.subtitle}>
        Every good episode deserves an ending.
      </Text>

      <View style={styles.card}>
        {!revealed ? (
          <>
            <Text style={styles.smallTitle}>🎬 THE FINAL SCENE</Text>

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.description}>
              But wait... there's still one more thing.
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => setRevealed(true)}
            >
              <Text style={styles.buttonText}>✨ OPEN IT ✨</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.revealedEmoji}>💛</Text>

            <Text style={styles.title}>Happy Birthday!</Text>

            <Text style={styles.message}>{message}</Text>

            <Text style={styles.end}>THE END... FOR NOW 🎬</Text>
          </>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 50,
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

  card: {
    backgroundColor: "#fff5df",

    borderRadius: 22,
    padding: 28,

    alignItems: "center",

    borderWidth: 1,
    borderColor: "#ead8b5",

    shadowColor: "#8c7355",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 3,
  },

  smallTitle: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#b47c00",
    marginBottom: 15,
  },

  title: {
    fontSize: 25,
    fontWeight: "900",
    color: "#2b2b2b",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#665e56",
    textAlign: "center",
    marginBottom: 22,
  },

  button: {
    backgroundColor: "#f3d477",

    paddingVertical: 12,
    paddingHorizontal: 24,

    borderRadius: 25,

    borderWidth: 1,
    borderColor: "#e1bd54",
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.97 }],
  },

  buttonText: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#5c4300",
  },

  revealedEmoji: {
    fontSize: 45,
    marginBottom: 10,
  },

  message: {
    fontSize: 15,
    lineHeight: 24,
    color: "#514a44",
    textAlign: "center",
    marginBottom: 22,
  },

  end: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#b47c00",
  },
});

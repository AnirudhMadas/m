import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import WashiTape from "./WashiTape";

export default function FinalSurprise({
  title = "One Last Thing...",
  message,
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎁</Text>

      <Text style={styles.heading}>Scrapbook Souvenir</Text>

      <Text style={styles.subtitle}>
        Every good album has a final secret message tucked away at the back.
      </Text>

      <View style={styles.card}>
        <WashiTape color="#FCA5A5" width={100} height={22} rotation="1.5deg" />

        {!revealed ? (
          <>
            <Text style={styles.smallTitle}>✨ SECRET POCKET NOTE</Text>

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.description}>
              Tap below to unseal this special note whenever you need an extra smile.
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => setRevealed(true)}
            >
              <Text style={styles.buttonText}>✨ UNSEAL NOTE ✨</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.revealedEmoji}>🌻💛✨</Text>

            <Text style={styles.title}>You Are Cherished!</Text>

            <Text style={styles.message}>{message}</Text>

            <View style={styles.endBadge}>
              <Text style={styles.end}>TO BE CONTINUED IN REAL LIFE 🎬</Text>
            </View>
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
    color: "#2C231B",
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 14,
    color: "#776B5E",
  },
  card: {
    backgroundColor: "#FFFBF2",
    borderRadius: 20,
    padding: 26,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    shadowColor: "#3D2E1E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  smallTitle: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#B45309",
    marginTop: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 23,
    fontWeight: "900",
    color: "#2C231B",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#6D5F52",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#D97706",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
    color: "#FFFFFF",
  },
  revealedEmoji: {
    fontSize: 40,
    marginBottom: 8,
    marginTop: 6,
  },
  message: {
    fontSize: 15,
    lineHeight: 25,
    color: "#4A3D31",
    textAlign: "center",
    marginBottom: 20,
  },
  endBadge: {
    backgroundColor: "#F4EDE1",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2D5C3",
  },
  end: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#92400E",
  },
});

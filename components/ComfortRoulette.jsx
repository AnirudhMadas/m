import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import WashiTape from "./WashiTape";

export default function ComfortRoulette({ items = [], title = "🎲 Instant Mood Lifter" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rollsCount, setRollsCount] = useState(0);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleNext = () => {
    let nextIndex;
    if (items.length > 1) {
      do {
        nextIndex = Math.floor(Math.random() * items.length);
      } while (nextIndex === currentIndex);
    } else {
      nextIndex = 0;
    }
    setCurrentIndex(nextIndex);
    setRollsCount((c) => c + 1);
  };

  return (
    <View style={styles.container}>
      <WashiTape color="#FCA5A5" rotation="1deg" width={110} />

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            Tap anytime you need a quick laugh or comfort boost!
          </Text>
        </View>

        <View style={styles.gifBox}>
          <Image
            source={{ uri: currentItem.gif }}
            style={styles.gif}
            contentFit="cover"
            transition={200}
            cachePolicy="memory-disk"
          />
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.itemTitle}>{currentItem.title}</Text>
          <Text style={styles.itemQuote}>"{currentItem.quote}"</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>
            {rollsCount === 0 ? "✨ Roll For A Chuckle ✨" : "🎲 Another One! ✨"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFBF2",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    alignItems: "center",
    shadowColor: "#3D2E1E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#2C231B",
  },
  subtitle: {
    fontSize: 12,
    color: "#786B5D",
    marginTop: 3,
    textAlign: "center",
  },
  gifBox: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#F2EBE0",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E2D3BE",
  },
  gif: {
    width: "100%",
    height: "100%",
  },
  infoBox: {
    alignItems: "center",
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#3B2E20",
    marginBottom: 4,
  },
  itemQuote: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#6B5E50",
    textAlign: "center",
    lineHeight: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#E09F3E",
    paddingVertical: 11,
    paddingHorizontal: 22,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});

import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BIRTHDAY_CONFIG } from "../data/birthdayConfig";
import WashiTape from "./WashiTape";

export default function BirthdayCakeWish() {
  const [candles, setCandles] = useState([true, true, true]);
  const [wished, setWished] = useState(false);

  const blowCandle = (index: number) => {
    const nextCandles = [...candles];
    nextCandles[index] = false;
    setCandles(nextCandles);

    if (nextCandles.every((c) => !c)) {
      setWished(true);
    }
  };

  const relightCandles = () => {
    setCandles([true, true, true]);
    setWished(false);
  };

  return (
    <View style={styles.container}>
      <WashiTape color="#F472B6" width={110} height={22} rotation="-1deg" />

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.badge}>🎂 SPECIAL BIRTHDAY RITUAL FOR {BIRTHDAY_CONFIG.recipientName}</Text>
          <Text style={styles.title}>Make A Birthday Wish!</Text>
          <Text style={styles.subtitle}>
            {!wished
              ? "Close your eyes, think of your biggest wish for this year, and tap each candle to blow it out!"
              : `✨ Hooray! All candles blown out for ${BIRTHDAY_CONFIG.recipientName}! ✨`}
          </Text>
        </View>

        {/* Candles and Cake */}
        <View style={styles.cakeStage}>
          <View style={styles.candlesRow}>
            {candles.map((isLit, idx) => (
              <Pressable
                key={idx}
                onPress={() => isLit && blowCandle(idx)}
                style={({ pressed }) => [
                  styles.candleButton,
                  pressed && { opacity: 0.7 },
                ]}
              >
                <Text style={styles.flame}>{isLit ? "🔥" : "💨"}</Text>
                <View
                  style={[
                    styles.candleStick,
                    { backgroundColor: idx === 0 ? "#F87171" : idx === 1 ? "#FBBF24" : "#60A5FA" },
                  ]}
                />
              </Pressable>
            ))}
          </View>

          <View style={styles.cakeBase}>
            <Text style={styles.cakeIcing}>══════════════════════</Text>
            <Text style={styles.cakeText}>🎂 HAPPY BIRTHDAY, {BIRTHDAY_CONFIG.recipientName}! 🎂</Text>
          </View>
        </View>

        {/* Celebration Wish Result */}
        {wished ? (
          <View style={styles.wishRevealed}>
            <View style={styles.gifContainer}>
              <Image
                source={{ uri: "https://i.giphy.com/YO6nKoM5BpONjf5hR4.gif" }}
                style={styles.gif}
                contentFit="cover"
                transition={200}
                cachePolicy="memory-disk"
              />
            </View>

            <Text style={styles.wishTitle}>🎉 Wish Sent Into The Universe! 🎉</Text>
            <Text style={styles.wishMessage}>
              May this year bring you endless laughter, peace, adventures, and all the quiet moments of joy you deserve, {BIRTHDAY_CONFIG.recipientName}. Never forget how loved and special you are! 💛
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.relightButton,
                pressed && { opacity: 0.8 },
              ]}
              onPress={relightCandles}
            >
              <Text style={styles.relightText}>Relight Candles 🕯️</Text>
            </Pressable>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    marginHorizontal: 16,
    width: "100%",
    maxWidth: 380,
  },
  card: {
    backgroundColor: "#FFFBF2",
    borderRadius: 18,
    padding: 22,
    borderWidth: 1.5,
    borderColor: "#FBCFE8",
    alignItems: "center",
    shadowColor: "#831843",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  badge: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#DB2777",
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#2C231B",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#786B5D",
    marginTop: 4,
    textAlign: "center",
    lineHeight: 19,
    maxWidth: 320,
  },
  cakeStage: {
    alignItems: "center",
    marginVertical: 12,
  },
  candlesRow: {
    flexDirection: "row",
    gap: 24,
    marginBottom: -4,
    zIndex: 5,
  },
  candleButton: {
    alignItems: "center",
    padding: 4,
  },
  flame: {
    fontSize: 22,
    marginBottom: -2,
  },
  candleStick: {
    width: 8,
    height: 32,
    borderRadius: 4,
  },
  cakeBase: {
    backgroundColor: "#FED7AA",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#FDBA74",
    alignItems: "center",
  },
  cakeIcing: {
    fontSize: 10,
    color: "#FB923C",
    letterSpacing: -1,
    marginBottom: 4,
  },
  cakeText: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#9A3412",
  },
  wishRevealed: {
    marginTop: 18,
    alignItems: "center",
    width: "100%",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#FCE7F3",
  },
  gifContainer: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FCE7F3",
    marginBottom: 14,
  },
  gif: {
    width: "100%",
    height: "100%",
  },
  wishTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#BE185D",
    marginBottom: 6,
    textAlign: "center",
  },
  wishMessage: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4A3E31",
    textAlign: "center",
    marginBottom: 14,
  },
  relightButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#FDF2F8",
    borderWidth: 1,
    borderColor: "#FBCFE8",
  },
  relightText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#BE185D",
  },
});

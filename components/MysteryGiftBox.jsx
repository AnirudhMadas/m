import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BIRTHDAY_CONFIG } from "../data/birthdayConfig";
import WashiTape from "./WashiTape";

export default function MysteryGiftBox({
  tag = "BIRTHDAY SURPRISE",
  title = "A Special Gift For M",
  revealedTitle,
  revealedMessage,
  revealedItem,
  gifUri,
  tapeColor = "#FBBF24",
}) {
  const [opened, setOpened] = useState(false);

  return (
    <View style={styles.container}>
      <WashiTape color={tapeColor} width={100} height={22} rotation="2deg" />

      <View style={styles.card}>
        <View style={styles.tagBadge}>
          <Text style={styles.tagText}>{tag} 🎁</Text>
        </View>

        {!opened ? (
          <View style={styles.wrappedBox}>
            <Text style={styles.giftEmoji}>🎁</Text>
            <Text style={styles.giftTitle}>{title}</Text>
            <Text style={styles.giftSubtitle}>
              Specially packed for {BIRTHDAY_CONFIG.recipientName}. Tap the ribbon to unwrap!
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.unwrapButton,
                pressed && { opacity: 0.8, transform: [{ scale: 0.97 }] },
              ]}
              onPress={() => setOpened(true)}
            >
              <Text style={styles.unwrapText}>🎀 Unwrap Gift 🎀</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.openedBox}>
            <Text style={styles.openedEmoji}>{revealedItem || "🏆✨"}</Text>
            <Text style={styles.revealedTitle}>{revealedTitle}</Text>

            {gifUri ? (
              <View style={styles.gifBox}>
                <Image
                  source={{ uri: gifUri }}
                  style={styles.gif}
                  contentFit="cover"
                  transition={200}
                  cachePolicy="memory-disk"
                />
              </View>
            ) : null}

            <Text style={styles.revealedMessage}>{revealedMessage}</Text>

            <View style={styles.forMBadge}>
              <Text style={styles.forMText}>✨ DEDICATED TO {BIRTHDAY_CONFIG.recipientName} ✨</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFDF9",
    borderRadius: 18,
    padding: 22,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    alignItems: "center",
    shadowColor: "#3D2B1B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tagBadge: {
    backgroundColor: "#FEF3C7",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FDE68A",
    marginBottom: 10,
  },
  tagText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.2,
    color: "#B45309",
  },
  wrappedBox: {
    alignItems: "center",
    width: "100%",
  },
  giftEmoji: {
    fontSize: 48,
    marginVertical: 8,
  },
  giftTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#2C2219",
    textAlign: "center",
    marginBottom: 4,
  },
  giftSubtitle: {
    fontSize: 13,
    color: "#786B5D",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 18,
  },
  unwrapButton: {
    backgroundColor: "#E11D48", // gift ribbon red
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  unwrapText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  openedBox: {
    alignItems: "center",
    width: "100%",
  },
  openedEmoji: {
    fontSize: 44,
    marginVertical: 6,
  },
  revealedTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#2C2219",
    textAlign: "center",
    marginBottom: 10,
  },
  gifBox: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#F2EBE0",
    marginBottom: 12,
  },
  gif: {
    width: "100%",
    height: "100%",
  },
  revealedMessage: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4A3D31",
    textAlign: "center",
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  forMBadge: {
    backgroundColor: "#FCE7F3",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FBCFE8",
  },
  forMText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#BE185D",
  },
});

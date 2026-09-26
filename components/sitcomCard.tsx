import { Pressable, StyleSheet, Text, View } from "react-native";
import WashiTape from "./WashiTape";

interface SitcomCardProps {
  id: string;
  title: string;
  emoji: string;
  description: string;
  onSelect: (id: string) => void;
  selected: boolean;
  tapeColor?: string;
  rotation?: string;
}

export default function SitcomCard({
  id,
  title,
  emoji,
  description,
  onSelect,
  selected,
  tapeColor = "#FCD34D",
  rotation = "0deg",
}: SitcomCardProps) {
  return (
    <Pressable
      onPress={() => onSelect(id)}
      style={({ pressed }) => [
        styles.cardContainer,
        { transform: [{ rotate: rotation }, { scale: pressed ? 0.98 : 1 }] },
      ]}
    >
      <WashiTape color={tapeColor} width={80} height={22} rotation="-1deg" />

      <View style={[styles.card, selected && styles.selectedCard]}>
        <View style={styles.topRow}>
          <Text style={styles.emoji}>{emoji}</Text>
          <View style={styles.albumBadge}>
            <Text style={styles.albumText}>SCRAPBOOK</Text>
          </View>
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.footerRow}>
          <Text style={styles.exploreText}>Flip Open Album ➔</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 12,
    width: "100%",
    maxWidth: 380,
    alignSelf: "center",
  },
  card: {
    backgroundColor: "#FFFDF9",
    padding: 22,
    paddingTop: 24,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    shadowColor: "#3A2B1E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  selectedCard: {
    borderColor: "#D97706",
    backgroundColor: "#FFFBEB",
    borderWidth: 2,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  emoji: {
    fontSize: 38,
  },
  albumBadge: {
    backgroundColor: "#F4EDE1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E0D2BE",
  },
  albumText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#7E674F",
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#2C2219",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#6D5F52",
    lineHeight: 20,
    marginBottom: 16,
  },
  footerRow: {
    borderTopWidth: 1,
    borderTopColor: "#F0E4D2",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  exploreText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#B45309",
  },
});
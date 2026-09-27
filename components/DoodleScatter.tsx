import { StyleSheet, View } from "react-native";
import DoodleSticker from "./DoodleSticker";

interface DoodleScatterProps {
  preset?: "cozy" | "fun" | "birthday";
}

export default function DoodleScatter({ preset = "cozy" }: DoodleScatterProps) {
  if (preset === "birthday") {
    return (
      <View style={styles.row}>
        <DoodleSticker type="ribbon" text="birthday magic" color="#BE185D" bg="#FCE7F3" rotation="-4deg" />
        <DoodleSticker type="star" text="make a wish" color="#B45309" bg="#FEF3C7" rotation="3deg" />
        <DoodleSticker type="heart" text="cherished" color="#9D174D" bg="#FDF2F8" rotation="-2deg" />
      </View>
    );
  }

  if (preset === "fun") {
    return (
      <View style={styles.row}>
        <DoodleSticker type="sparkle" text="instant smile" color="#92400E" bg="#FEF3C7" rotation="-3deg" />
        <DoodleSticker type="star" text="10/10 comfort" color="#065F46" bg="#D1FAE5" rotation="4deg" />
        <DoodleSticker type="note" text="p.s. you're amazing" color="#1E40AF" bg="#DBEAFE" rotation="-2deg" />
      </View>
    );
  }

  return (
    <View style={styles.row}>
      <DoodleSticker type="coffee" text="100% cozy" color="#92400E" bg="#FEF3C7" rotation="-3deg" />
      <DoodleSticker type="heart" text="comfort zone" color="#BE185D" bg="#FCE7F3" rotation="2deg" />
      <DoodleSticker type="flower" text="take a breath" color="#047857" bg="#ECFDF5" rotation="-4deg" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 8,
  },
});

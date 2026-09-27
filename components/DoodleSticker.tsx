import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface DoodleStickerProps {
  type?: "heart" | "star" | "flower" | "coffee" | "note" | "sparkle" | "badge" | "ribbon";
  text?: string;
  rotation?: string;
  color?: string;
  bg?: string;
  style?: ViewStyle;
}

export default function DoodleSticker({
  type = "star",
  text,
  rotation = "3deg",
  color = "#B45309",
  bg = "#FEF3C7",
  style,
}: DoodleStickerProps) {
  const getIcon = () => {
    switch (type) {
      case "heart":
        return "♡";
      case "star":
        return "⭐";
      case "flower":
        return "🌸";
      case "coffee":
        return "☕";
      case "sparkle":
        return "✨";
      case "ribbon":
        return "🎀";
      default:
        return "★";
    }
  };

  return (
    <View
      style={[
        styles.sticker,
        {
          backgroundColor: bg,
          borderColor: color,
          transform: [{ rotate: rotation }],
        },
        style,
      ]}
    >
      <Text style={[styles.icon, { color }]}>{getIcon()}</Text>
      {text ? <Text style={[styles.text, { color }]}>{text}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  sticker: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1.5,
    borderStyle: "dashed",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    marginVertical: 6,
    marginHorizontal: 8,
    zIndex: 5,
  },
  icon: {
    fontSize: 14,
    marginRight: 4,
  },
  text: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0.8,
  },
});

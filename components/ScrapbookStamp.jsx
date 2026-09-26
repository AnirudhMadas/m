import { StyleSheet, Text, View } from "react-native";

export default function ScrapbookStamp({
  label,
  emoji,
  color = "#B45309",
  rotation = "3deg",
}) {
  return (
    <View
      style={[
        styles.stamp,
        {
          borderColor: color,
          transform: [{ rotate: rotation }],
        },
      ]}
    >
      <View style={[styles.innerBorder, { borderColor: color }]}>
        {emoji ? <Text style={styles.emoji}>{emoji}</Text> : null}
        <Text style={[styles.label, { color }]}>{label.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stamp: {
    padding: 3,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  innerBorder: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 16,
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
  },
});

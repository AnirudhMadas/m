import { StyleSheet, Text, View } from "react-native";
import WashiTape from "./WashiTape";

export default function StickyNote({
  text,
  author,
  tag,
  color = "#FEF3C7", // warm pastel yellow
  rotation = "-1.5deg",
  tapeColor = "#FCD34D",
  showTape = true,
  style,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
          transform: [{ rotate: rotation }],
        },
        style,
      ]}
    >
      {showTape && (
        <WashiTape
          color={tapeColor}
          width={70}
          height={20}
          rotation="1deg"
          style={{ top: -10 }}
        />
      )}

      {tag ? (
        <View style={styles.tagBadge}>
          <Text style={styles.tagText}>{tag.toUpperCase()}</Text>
        </View>
      ) : null}

      <Text style={styles.quoteMark}>“</Text>
      <Text style={styles.text}>{text}</Text>

      {author ? <Text style={styles.author}>— {author}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    marginHorizontal: 16,
    padding: 20,
    paddingTop: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.06)",
    shadowColor: "#4A3B2C",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  tagBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    color: "#5C4D3C",
  },
  quoteMark: {
    fontSize: 26,
    lineHeight: 24,
    fontWeight: "900",
    color: "#8C7864",
    marginBottom: 2,
  },
  text: {
    fontSize: 15,
    lineHeight: 23,
    color: "#2E241B",
    fontWeight: "500",
    fontStyle: "italic",
  },
  author: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "700",
    color: "#735F4B",
    textAlign: "right",
  },
});

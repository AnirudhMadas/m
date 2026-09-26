import { StyleSheet, Text, View } from "react-native";

export default function SitcomHero({ emoji, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.divider} />

      <Text style={styles.special}>A Birthday Special</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  emoji: {
    fontSize: 52,
    marginBottom: 12,
  },

  title: {
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#2b2b2b",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
    color: "#77706a",
    fontStyle: "italic",
  },

  divider: {
    width: 70,
    height: 3,
    backgroundColor: "#d89b00",
    marginVertical: 20,
    borderRadius: 2,
  },

  special: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#b47c00",
    textTransform: "uppercase",
  },
});

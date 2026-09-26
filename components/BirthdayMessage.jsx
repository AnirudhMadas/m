import { StyleSheet, Text, View } from "react-native";

export default function BirthdayMessage({
  heading = "The Birthday Message",
  message,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎂</Text>

      <Text style={styles.heading}>{heading}</Text>

      <View style={styles.card}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },

  emoji: {
    fontSize: 28,
    marginBottom: 6,
  },

  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2b2b2b",
    marginBottom: 14,
  },

  card: {
    backgroundColor: "#fff8ef",
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "#eadfce",

    shadowColor: "#8c7355",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 2,
  },

  message: {
    fontSize: 16,
    lineHeight: 27,
    color: "#514a44",
  },
});

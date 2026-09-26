import { StyleSheet, Text, View } from "react-native";
import WashiTape from "./WashiTape";

export default function BirthdayMessage({
  heading = "A Warm Comfort Note",
  message,
}) {
  return (
    <View style={styles.container}>
      <WashiTape color="#FDE68A" width={90} height={22} rotation="-1deg" />

      <Text style={styles.emoji}>💌</Text>

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
    marginBottom: 25,
  },
  emoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2C231B",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFDF9",
    borderRadius: 16,
    padding: 22,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    shadowColor: "#4A3927",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  message: {
    fontSize: 15,
    lineHeight: 26,
    color: "#4A3D31",
  },
});

// import { StyleSheet, Text, View } from "react-native";

// export default function BirthdayMessage({
//   greeting = "Happy Birthday!",
//   message,
//   signature,
// }) {
//   return (
//     <View>
//       <Text style={styles.greeting}>{greeting}</Text>
//       <Text style={styles.message}>{message}</Text>
//       {signature ? <Text style={styles.signature}>— {signature}</Text> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   greeting: {
//     fontSize: 20,
//     fontWeight: "800",
//     color: "#fff",
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 15,
//     lineHeight: 22,
//     color: "#e0e0e0",
//   },
//   signature: {
//     fontSize: 13,
//     color: "#b5b5b5",
//     fontStyle: "italic",
//     marginTop: 12,
//     textAlign: "right",
//   },
// });

import { StyleSheet, Text, View } from "react-native";

export default function BirthdayMessage({ message }) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>🎂</Text>

      <Text style={styles.heading}>HAPPY BIRTHDAY!</Text>

      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    elevation: 4,
  },

  emoji: {
    fontSize: 45,
    marginBottom: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },

  message: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginTop: 12,
    opacity: 0.75,
  },
});

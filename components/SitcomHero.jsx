// import { StyleSheet, Text, View } from "react-native";

// export default function SitcomHero({
//   emoji = "🎬",
//   title,
//   tagline,
//   accentColor = "#ffd369", // each sitcom overrides this
//   cardColor = "rgba(255,255,255,0.06)",
// }) {
//   return (
//     <View style={[styles.card, { borderColor: accentColor }]}>
//       {/* Decorative top accent */}
//       <View style={[styles.decorLine, { backgroundColor: accentColor }]} />

//       <Text style={styles.emoji}>{emoji}</Text>

//       <Text style={[styles.heroTitle, { color: accentColor }]}>{title}</Text>

//       {tagline ? <Text style={styles.tagline}>“{tagline}”</Text> : null}

//       {/* Decorative bottom accent */}
//       <View style={styles.dotsRow}>
//         <View style={[styles.dot, { backgroundColor: accentColor }]} />
//         <View
//           style={[styles.dot, { backgroundColor: accentColor, opacity: 0.6 }]}
//         />
//         <View
//           style={[styles.dot, { backgroundColor: accentColor, opacity: 0.3 }]}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingVertical: 28,
//     paddingHorizontal: 20,
//     alignItems: "center",
//     backgroundColor: "rgba(255,255,255,0.06)",
//     marginBottom: 24,
//     overflow: "hidden",
//   },
//   decorLine: {
//     width: 40,
//     height: 4,
//     borderRadius: 2,
//     marginBottom: 16,
//     opacity: 0.8,
//   },
//   emoji: {
//     fontSize: 48,
//     marginBottom: 10,
//   },
//   heroTitle: {
//     fontSize: 24,
//     fontWeight: "900",
//     letterSpacing: 1,
//     textAlign: "center",
//   },
//   tagline: {
//     fontSize: 14,
//     color: "#d8d8d8",
//     fontStyle: "italic",
//     textAlign: "center",
//     marginTop: 10,
//     paddingHorizontal: 10,
//   },
//   dotsRow: {
//     flexDirection: "row",
//     gap: 6,
//     marginTop: 16,
//   },
//   dot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//   },
// });

import { StyleSheet, Text, View } from "react-native";

export default function SitcomHero({ emoji, title, subtitle }) {
  return (
    <View style={styles.hero}>
      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: "center",
    paddingVertical: 30,
    marginBottom: 20,
  },

  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },

  title: {
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: 2,
  },

  subtitle: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
    opacity: 0.7,
  },
});

// import { StyleSheet, Text, View } from "react-native";

// export default function SitcomSection({
//   icon = "⭐",
//   heading,
//   accentColor = "#ffd369",
//   children,
// }) {
//   return (
//     <View style={styles.wrapper}>
//       <View style={styles.headingRow}>
//         <Text style={styles.icon}>{icon}</Text>
//         <Text style={[styles.heading, { color: accentColor }]}>{heading}</Text>
//       </View>

//       <View style={[styles.card, { borderColor: accentColor }]}>
//         {children}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     marginBottom: 28,
//   },
//   headingRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//     gap: 8,
//   },
//   icon: {
//     fontSize: 20,
//   },
//   heading: {
//     fontSize: 16,
//     fontWeight: "800",
//     letterSpacing: 0.5,
//     textTransform: "uppercase",
//   },
//   card: {
//     borderWidth: 1,
//     borderRadius: 16,
//     padding: 18,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
// });

import { StyleSheet, Text, View } from "react-native";

export default function SitcomSection({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },

  content: {
    width: "100%",
  },
});

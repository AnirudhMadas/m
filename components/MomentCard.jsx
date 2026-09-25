// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function MomentCard({
//   emoji,
//   image, // optional: pass a require() or { uri } — overrides emoji if present
//   title,
//   caption,
//   accentColor = "#ffd369",
//   onPress,
// }) {
//   return (
//     <TouchableOpacity
//       style={[styles.card, { borderColor: accentColor }]}
//       onPress={onPress}
//       activeOpacity={0.7}
//     >
//       <View style={styles.visualWrap}>
//         {image ? (
//           <Image source={image} style={styles.image} resizeMode="cover" />
//         ) : (
//           <Text style={styles.emoji}>{emoji}</Text>
//         )}
//       </View>

//       <Text style={styles.title} numberOfLines={1}>
//         {title}
//       </Text>

//       {caption ? (
//         <Text style={styles.caption} numberOfLines={2}>
//           {caption}
//         </Text>
//       ) : null}
//     </TouchableOpacity>
//   );
// }

// const CARD_WIDTH = 140;

// const styles = StyleSheet.create({
//   card: {
//     width: CARD_WIDTH,
//     borderWidth: 1,
//     borderRadius: 14,
//     padding: 12,
//     marginRight: 12,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
//   visualWrap: {
//     width: "100%",
//     height: 80,
//     borderRadius: 10,
//     backgroundColor: "rgba(255,255,255,0.06)",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   emoji: {
//     fontSize: 34,
//   },
//   title: {
//     fontSize: 13,
//     fontWeight: "700",
//     color: "#fff",
//     marginBottom: 4,
//   },
//   caption: {
//     fontSize: 11,
//     color: "#c2c2c2",
//     lineHeight: 15,
//   },
// });

import { StyleSheet, Text, View } from "react-native";

export default function MomentCard({ emoji, title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginRight: 14,
    elevation: 4,
  },

  emoji: {
    fontSize: 40,
    marginBottom: 12,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
  },
});

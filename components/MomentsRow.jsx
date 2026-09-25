// import { ScrollView, StyleSheet } from "react-native";
// import MomentCard from "./MomentCard";

// export default function MomentsRow({
//   moments = [],
//   accentColor,
//   onMomentPress,
// }) {
//   return (
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.row}
//     >
//       {moments.map((moment, index) => (
//         <MomentCard
//           key={moment.id ?? index}
//           emoji={moment.emoji}
//           image={moment.image}
//           title={moment.title}
//           caption={moment.caption}
//           accentColor={accentColor}
//           onPress={() => onMomentPress?.(moment, index)}
//         />
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   row: {
//     paddingRight: 8, // so last card isn't flush against screen edge
//   },
// });

import { ScrollView, StyleSheet } from "react-native";
import MomentCard from "./MomentCard";

export default function MomentsRow({ moments }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {moments.map((moment) => (
        <MomentCard
          key={moment.id}
          emoji={moment.emoji}
          title={moment.title}
          description={moment.description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
});

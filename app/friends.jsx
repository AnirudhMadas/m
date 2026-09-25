import { ScrollView, StyleSheet } from "react-native";
import BirthdayMessage from "../components/BirthdayMessage";
import MomentsRow from "../components/MomentsRow";
import SitcomHero from "../components/SitcomHero";
import SitcomSection from "../components/SitcomSection";
import { friendsMoments } from "../data/friendsData";

export default function FriendsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SitcomHero
        emoji="☕"
        title="FRIENDS"
        subtitle="The one where the celebration begins..."
      />

      <SitcomSection title="🎂 Birthday Message">
        <BirthdayMessage message="Welcome to your very special Friends episode! Here's to another amazing year filled with laughter, memories, and your favorite people." />
      </SitcomSection>

      <SitcomSection title="⭐ Favorite Moments">
        <MomentsRow moments={friendsMoments} />
      </SitcomSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
  },

  content: {
    padding: 20,
  },
});

// import { ScrollView, StyleSheet, Text, View } from "react-native";

// export default function FriendsScreen() {
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.content}>
//       <View style={styles.hero}>
//         <Text style={styles.emoji}>☕</Text>

//         <Text style={styles.title}>FRIENDS</Text>

//         <Text style={styles.subtitle}>
//           The one where the celebration begins...
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFF8F0",
//   },

//   content: {
//     padding: 20,
//   },

//   hero: {
//     alignItems: "center",
//     paddingVertical: 30,
//     marginBottom: 20,
//   },

//   emoji: {
//     fontSize: 60,
//     marginBottom: 10,
//   },

//   title: {
//     fontSize: 36,
//     fontWeight: "800",
//     letterSpacing: 2,
//   },

//   subtitle: {
//     fontSize: 16,
//     marginTop: 8,
//     textAlign: "center",
//     opacity: 0.7,
//   },
// });

// import { useRouter } from "expo-router";
// import BirthdayMessage from "../components/BirthdayMessage";
// import MomentsRow from "../components/MomentsRow";
// import QuoteCard from "../components/QuoteCard";
// import SitcomHero from "../components/SitcomHero";
// import SitcomPageTemplate from "../components/SitcomPageTemplate";
// import SitcomSection from "../components/SitcomSection";
// import SurpriseReveal from "../components/SurpriseReveal";

// const friendsMoments = [
//   {
//     id: "1",
//     emoji: "☕",
//     title: "The One with...",
//     caption: "Central Perk hangouts",
//   },
//   {
//     id: "2",
//     emoji: "🦃",
//     title: "Thanksgiving",
//     caption: "Turkey on Joey's head",
//   },
//   { id: "3", emoji: "💍", title: "The Proposal", caption: "Chandler & Monica" },
//   { id: "4", emoji: "🛋️", title: "Pivot!", caption: "The couch scene" },
// ];

// export default function FriendsPage() {
//   const router = useRouter();

//   return (
//     <SitcomPageTemplate
//       title=""
//       onBack={() => router.back()}
//       backgroundColor="#2b1d0e"
//     >
//       <SitcomHero
//         emoji="☕"
//         title="FRIENDS"
//         tagline="A special episode... just for you"
//         accentColor="#ffd369"
//       />

//       <SitcomSection icon="🎂" heading="Birthday Message" accentColor="#ffd369">
//         <BirthdayMessage
//           greeting="Happy Birthday!"
//           message="Just like this gang at Central Perk, you make everyday moments feel special. Here's to another year of laughs, chaos, and unforgettable memories."
//           signature="Ross, Rachel, Monica, Chandler, Joey & Phoebe"
//         />
//       </SitcomSection>

//       <SitcomSection
//         icon="⭐"
//         heading="Your Favorite Moments"
//         accentColor="#ffd369"
//       >
//         <MomentsRow
//           moments={friendsMoments}
//           accentColor="#ffd369"
//           onMomentPress={(moment) => console.log("Tapped:", moment.title)}
//         />
//       </SitcomSection>

//       <SitcomSection icon="💬" heading="Iconic Quote" accentColor="#ffd369">
//         <QuoteCard
//           quote="How you doin'?"
//           character="Joey Tribbiani"
//           characterEmoji="😏"
//           accentColor="#ffd369"
//         />
//       </SitcomSection>

//       <SitcomSection icon="🎁" heading="Special Surprise" accentColor="#ffd369">
//         <SurpriseReveal
//           buttonLabel="Reveal"
//           revealedEmoji="🎉"
//           surpriseText="Here's to a year as legendary as a Thanksgiving episode. Cake's on us — see you at Central Perk. 🎂"
//           accentColor="#ffd369"
//         />
//       </SitcomSection>
//     </SitcomPageTemplate>
//   );
// }

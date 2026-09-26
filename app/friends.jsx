import { ScrollView, StyleSheet } from "react-native";

import BirthdayEpisode from "../components/BirthdayEpisode";
import BirthdayMessage from "../components/BirthdayMessage";
import EpisodeArchive from "../components/EpisodeArchive";
import FinalSurprise from "../components/FinalSurprise";
import MomentsRow from "../components/MomentsRow";
import OpenWhen from "../components/OpenWhen";
import SitcomHero from "../components/SitcomHero";
import SitcomSection from "../components/SitcomSection";

import { episodes, friendsMoments, openWhenCards } from "../data/friendsData";

export default function FriendsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* SITCOM HERO */}
      <SitcomHero
        emoji="☕"
        title="FRIENDS"
        subtitle="The one where the celebration begins..."
      />

      {/* BIRTHDAY MESSAGE */}
      <SitcomSection title="🎂 Birthday Message">
        <BirthdayMessage message="Welcome to your very special Friends episode! Here's to another amazing year filled with laughter, memories, and your favorite people." />
      </SitcomSection>

      {/* FAVORITE MOMENTS */}
      <SitcomSection title="⭐ Favorite Moments">
        <MomentsRow moments={friendsMoments} />
      </SitcomSection>

      {/* BIRTHDAY EPISODE */}
      <BirthdayEpisode
        season="01"
        episode="01"
        title="The One Where The Birthday Begins"
        description="A very special episode featuring laughter, chaos, unforgettable memories, and one more year of an amazing person."
      />

      {/* EPISODE ARCHIVE */}
      <EpisodeArchive
        episodes={episodes}
        onEpisodePress={(episode) => {
          console.log("Selected episode:", episode.title);
        }}
      />

      {/* OPEN WHEN */}
      <OpenWhen
        cards={openWhenCards}
        onCardPress={(card) => {
          console.log("Opened:", card.title);
        }}
      />

      {/* FINAL SURPRISE */}
      <FinalSurprise
        title="The One With The Birthday"
        message="No matter how many episodes we add to this story, I hope there are always more memories waiting to be made. Happy Birthday! ❤️"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf3",
  },

  content: {
    paddingBottom: 40,
  },
});

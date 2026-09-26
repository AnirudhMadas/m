import { ScrollView, StyleSheet } from "react-native";

import BirthdayEpisode from "../components/BirthdayEpisode";
import BirthdayMessage from "../components/BirthdayMessage";
import EpisodeArchive from "../components/EpisodeArchive";
import FavoriteMoments from "../components/FavoriteMoments";
import FinalSurprise from "../components/FinalSurprise";
import OpenWhen from "../components/OpenWhen";
import SitcomHero from "../components/SitcomHero";

import friendsData from "../data/friendsData";

export default function FriendsScreen() {
  const data = friendsData;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SitcomHero {...data.hero} />

      <BirthdayMessage {...data.birthdayMessage} />

      <FavoriteMoments moments={data.favoriteMoments} />

      <BirthdayEpisode {...data.birthdayEpisode} />

      <EpisodeArchive episodes={data.episodeArchive} />

      <OpenWhen cards={data.openWhen} />

      <FinalSurprise {...data.finalSurprise} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F1E7",
  },

  content: {
    paddingBottom: 40,
  },
});

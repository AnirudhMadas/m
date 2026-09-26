import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BirthdayEpisode from "./BirthdayEpisode";
import BirthdayMessage from "./BirthdayMessage";
import ComfortRoulette from "./ComfortRoulette";
import EpisodeArchive from "./EpisodeArchive";
import FavoriteMoments from "./FavoriteMoments";
import FinalSurprise from "./FinalSurprise";
import MoodFilter from "./MoodFilter";
import MysteryGiftBox from "./MysteryGiftBox";
import OpenWhen from "./OpenWhen";
import SitcomHero from "./SitcomHero";
import StickyNote from "./StickyNote";

export default function SitcomPageTemplate({ data }: { data: any }) {
  const [selectedMood, setSelectedMood] = useState("all");

  const filteredMoments =
    selectedMood === "all"
      ? data.favoriteMoments
      : data.favoriteMoments?.filter(
          (m: any) => m.mood === selectedMood || !m.mood
        );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Navigation Bar */}
      <View style={styles.topNav}>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && { opacity: 0.7 },
          ]}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Scrapbook Desk</Text>
        </Pressable>
        <Text style={styles.albumTitleText}>{data.hero.title}</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero with Stamp & Tape */}
        <SitcomHero {...data.hero} />

        {/* Show-Specific Birthday Surprise Gift Box */}
        {data.birthdaySurprise ? (
          <MysteryGiftBox
            tag={data.birthdaySurprise.tag}
            title={data.birthdaySurprise.title}
            revealedItem={data.birthdaySurprise.revealedItem}
            revealedTitle={data.birthdaySurprise.revealedTitle}
            revealedMessage={data.birthdaySurprise.revealedMessage}
            gifUri={data.birthdaySurprise.gifUri}
          />
        ) : null}

        {/* Mood Selector Filter */}
        <MoodFilter
          selectedMood={selectedMood}
          onSelectMood={setSelectedMood}
        />

        {/* Character Sticky Notes / Pep Talks */}
        {data.stickyNotes && data.stickyNotes.length > 0 ? (
          <View style={styles.stickyNotesSection}>
            <Text style={styles.sectionHeader}>📌 CHARACTER WISDOM & PEP TALKS</Text>
            {data.stickyNotes.map((note: any) => (
              <StickyNote
                key={note.id}
                tag={note.tag}
                text={note.text}
                author={note.author}
                color={note.color}
                tapeColor={note.tapeColor}
                rotation={note.rotation}
              />
            ))}
          </View>
        ) : null}

        {/* Instant Mood Lifter Roulette */}
        {data.roulette ? (
          <ComfortRoulette
            items={data.roulette}
            title={`🎲 ${data.hero.title} Comfort Roulette`}
          />
        ) : null}

        {/* Polaroids / Iconic Moments (GIFs) */}
        <FavoriteMoments
          moments={filteredMoments}
          heading="Scrapbook Moments & GIFs"
          subtitle={
            selectedMood === "all"
              ? "Iconic scenes & comforting moments captured on tape."
              : `Showing moments tailored for: ${selectedMood.toUpperCase()}`
          }
        />

        {/* Open When Interactive Letters */}
        <OpenWhen cards={data.openWhen} />

        {/* Sitcom Birthday Message */}
        <BirthdayMessage {...data.birthdayMessage} />

        {/* Birthday Episode Card */}
        <BirthdayEpisode {...data.birthdayEpisode} />

        {/* Episode Archive */}
        <EpisodeArchive episodes={data.episodeArchive} />

        {/* Final Surprise Reveal */}
        <FinalSurprise {...data.finalSurprise} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F3E8",
  },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAE0CE",
    backgroundColor: "#FFFDF9",
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8B4513",
  },
  albumTitleText: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#6D5F52",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 50,
  },
  stickyNotesSection: {
    marginVertical: 10,
    paddingHorizontal: 6,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#9C8570",
    marginLeft: 20,
    marginBottom: 4,
  },
});

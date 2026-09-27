import { router } from "expo-router";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BirthdayCakeWish from "../components/BirthdayCakeWish";
import DoodleScatter from "../components/DoodleScatter";
import DoodleSticker from "../components/DoodleSticker";
import PersonalFriendLetter from "../components/PersonalFriendLetter";
import ScrapbookStamp from "../components/ScrapbookStamp";
import SitcomCard from "../components/SitcomCard";
import WashiTape from "../components/WashiTape";
import { BIRTHDAY_CONFIG } from "../data/birthdayConfig";
import { sitcoms } from "../data/sitcoms";

export default function HomeScreen() {
  const [selectedSitcom, setSelectedSitcom] = useState("");

  const handleSelect = (id: string) => {
    setSelectedSitcom(id);
    const sitcom = sitcoms.find((s) => s.id === id);
    if (sitcom) {
      router.push(sitcom.route as any);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={sitcoms}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerBlock}>
            <WashiTape color="#F472B6" width={120} height={24} rotation="-1deg" />

            {/* Birthday Gift Tag */}
            <View style={styles.giftTag}>
              <View style={styles.giftTagHole} />
              <Text style={styles.giftTagTo}>TO: {BIRTHDAY_CONFIG.recipientName} 🎀</Text>
              <Text style={styles.giftTagFrom}>FROM: {BIRTHDAY_CONFIG.giftTagFrom} 💛</Text>
            </View>

            <Text style={styles.headerEmoji}>🎂🎁✨</Text>
            <Text style={styles.mainTitle}>{BIRTHDAY_CONFIG.fullTitle}</Text>
            <Text style={styles.subtitle}>
              {BIRTHDAY_CONFIG.birthdayTagline}
            </Text>

            <View style={styles.doodleRow}>
              <DoodleSticker type="ribbon" text="birthday edition" color="#BE185D" bg="#FCE7F3" rotation="-3deg" />
              <DoodleSticker type="star" text="100% wholesome" color="#B45309" bg="#FEF3C7" rotation="2deg" />
            </View>

            <ScrapbookStamp
              label={`Made With Love For ${BIRTHDAY_CONFIG.recipientName}`}
              emoji="💛"
              color="#BE185D"
              rotation="1.5deg"
            />

            {/* Personal Heartfelt Friend Letter */}
            <PersonalFriendLetter />

            {/* Doodle Divider */}
            <DoodleScatter preset="birthday" />

            {/* Interactive Birthday Cake with Candles */}
            <BirthdayCakeWish />

            <View style={styles.shelfHeader}>
              <Text style={styles.shelfTitle}>CHOOSE AN ALBUM TO OPEN</Text>
              <Text style={styles.shelfSubtitle}>Pick a show to dive into its cozy moments, clips & surprises</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <SitcomCard
            id={item.id}
            title={item.title}
            emoji={item.emoji}
            description={item.description}
            onSelect={handleSelect}
            selected={selectedSitcom === item.id}
            tapeColor={item.tapeColor}
            rotation={item.rotation}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
        ListFooterComponent={
          <View style={styles.footerBlock}>
            <DoodleSticker type="heart" text="always here for you" color="#BE185D" bg="#FDF2F8" rotation="-2deg" />
            <Text style={styles.footerNote}>
              Save this link on your phone or computer and come back whenever you need a warm hug, a quick laugh, or just some peace. Happy Birthday, {BIRTHDAY_CONFIG.recipientName}! 🌻💛
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F3E8",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 50,
  },
  headerBlock: {
    alignItems: "center",
    marginBottom: 16,
    paddingTop: 10,
  },
  giftTag: {
    backgroundColor: "#FEF3C7",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#FCD34D",
    alignItems: "center",
    marginBottom: 14,
    marginTop: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    position: "relative",
  },
  giftTagHole: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#F8F3E8",
    borderWidth: 1,
    borderColor: "#D97706",
    marginBottom: 4,
  },
  giftTagTo: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#9A3412",
  },
  giftTagFrom: {
    fontSize: 11,
    fontWeight: "700",
    color: "#B45309",
    marginTop: 2,
  },
  headerEmoji: {
    fontSize: 44,
    marginBottom: 6,
  },
  mainTitle: {
    fontSize: 27,
    fontWeight: "900",
    color: "#2C2218",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#726354",
    textAlign: "center",
    lineHeight: 21,
    maxWidth: 340,
    marginBottom: 8,
  },
  doodleRow: {
    flexDirection: "row",
    gap: 8,
    marginVertical: 4,
  },
  shelfHeader: {
    marginTop: 24,
    marginBottom: 8,
    alignSelf: "flex-start",
    width: "100%",
  },
  shelfTitle: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#9C8570",
  },
  shelfSubtitle: {
    fontSize: 12,
    color: "#786B5D",
    marginTop: 2,
  },
  footerBlock: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E8DCBE",
    alignItems: "center",
  },
  footerNote: {
    fontSize: 13,
    color: "#8C7C6D",
    textAlign: "center",
    lineHeight: 20,
    fontStyle: "italic",
    maxWidth: 320,
    marginTop: 10,
  },
});
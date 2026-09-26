import { router } from "expo-router";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ScrapbookStamp from "../components/ScrapbookStamp";
import SitcomCard from "../components/SitcomCard";
import WashiTape from "../components/WashiTape";
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
            <WashiTape color="#FCD34D" width={110} height={24} rotation="-1.5deg" />

            <Text style={styles.headerEmoji}>📖✨</Text>
            <Text style={styles.mainTitle}>The Comfort Scrapbook</Text>
            <Text style={styles.subtitle}>
              A little sanctuary of laughter, hugs, and favorite sitcom moments whenever you need a smile.
            </Text>

            <ScrapbookStamp label="Open Whenever You Need A Smile" emoji="💛" color="#92400E" rotation="1deg" />

            <View style={styles.shelfHeader}>
              <Text style={styles.shelfTitle}>CHOOSE YOUR SCRAPBOOK ALBUM</Text>
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
            <Text style={styles.footerNote}>
              Save this page & open anytime: on good days, tough days, or whenever you need a chuckle. 🌻
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
    backgroundColor: "#F8F3E8", // warm scrapbook paper background
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },
  headerBlock: {
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 10,
  },
  headerEmoji: {
    fontSize: 44,
    marginTop: 8,
    marginBottom: 8,
  },
  mainTitle: {
    fontSize: 27,
    fontWeight: "900",
    color: "#2C2218",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#726354",
    textAlign: "center",
    lineHeight: 21,
    maxWidth: 340,
  },
  shelfHeader: {
    marginTop: 24,
    marginBottom: 4,
    alignSelf: "flex-start",
  },
  shelfTitle: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#9C8570",
  },
  footerBlock: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E8DCBE",
    alignItems: "center",
  },
  footerNote: {
    fontSize: 12,
    color: "#8C7C6D",
    textAlign: "center",
    lineHeight: 18,
    fontStyle: "italic",
    maxWidth: 320,
  },
});
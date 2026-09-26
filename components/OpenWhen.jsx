import { Image } from "expo-image";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import WashiTape from "./WashiTape";

export default function OpenWhen({ cards = [] }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionEmoji}>💌</Text>
      <Text style={styles.heading}>"Open When..." Scrapbook</Text>
      <Text style={styles.subtitle}>
        Little envelopes with warm words & comfort scenes whenever you need them.
      </Text>

      <View style={styles.list}>
        {cards.map((card, idx) => (
          <Pressable
            key={card.id || idx}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() => setActiveCard(card)}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{card.emoji || "✉️"}</Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {card.preview || card.description}
              </Text>
            </View>

            <View style={styles.openBadge}>
              <Text style={styles.openText}>Open ➔</Text>
            </View>
          </Pressable>
        ))}
      </View>

      {/* Pop-up Letter Modal */}
      <Modal
        visible={!!activeCard}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setActiveCard(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalLetter}>
            <WashiTape color="#FDE68A" rotation="-1deg" width={100} />

            <ScrollView
              contentContainerStyle={styles.modalContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.modalEmoji}>{activeCard?.emoji || "💌"}</Text>
              <Text style={styles.modalTitle}>{activeCard?.title}</Text>

              {activeCard?.gif ? (
                <View style={styles.modalGifContainer}>
                  <Image
                    source={{ uri: activeCard.gif }}
                    style={styles.modalGif}
                    contentFit="cover"
                    transition={200}
                    cachePolicy="memory-disk"
                  />
                </View>
              ) : null}

              <View style={styles.paperBody}>
                <Text style={styles.modalMessage}>{activeCard?.description}</Text>

                {activeCard?.quote ? (
                  <View style={styles.quoteBlock}>
                    <Text style={styles.quoteText}>"{activeCard.quote}"</Text>
                    {activeCard?.character ? (
                      <Text style={styles.quoteAuthor}>— {activeCard.character}</Text>
                    ) : null}
                  </View>
                ) : null}
              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.closeButton,
                  pressed && styles.closeButtonPressed,
                ]}
                onPress={() => setActiveCard(null)}
              >
                <Text style={styles.closeButtonText}>Close Letter 💛</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 35,
  },
  sectionEmoji: {
    fontSize: 28,
    marginBottom: 4,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2B241D",
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 13,
    lineHeight: 19,
    color: "#73675B",
  },
  list: {
    gap: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFBF2",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EADBCE",
    shadowColor: "#423223",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4EBDB",
    marginRight: 14,
  },
  icon: {
    fontSize: 22,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "800",
    color: "#2C231B",
    marginBottom: 3,
  },
  description: {
    fontSize: 12,
    color: "#73675B",
    lineHeight: 16,
  },
  openBadge: {
    backgroundColor: "#F3DEB0",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginLeft: 8,
  },
  openText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#7E580A",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(35, 27, 18, 0.65)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalLetter: {
    backgroundColor: "#FFFDF9",
    width: "100%",
    maxWidth: 420,
    maxHeight: "85%",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
    paddingTop: 10,
    overflow: "hidden",
  },
  modalContent: {
    padding: 24,
    alignItems: "center",
  },
  modalEmoji: {
    fontSize: 40,
    marginBottom: 8,
    marginTop: 6,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#2B241D",
    textAlign: "center",
    marginBottom: 14,
  },
  modalGifContainer: {
    width: "100%",
    height: 190,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#EFE8DC",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E4D6C3",
  },
  modalGif: {
    width: "100%",
    height: "100%",
  },
  paperBody: {
    width: "100%",
    backgroundColor: "#FAF6EE",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#EDE2CF",
    marginBottom: 20,
  },
  modalMessage: {
    fontSize: 15,
    lineHeight: 24,
    color: "#3F3429",
    textAlign: "left",
  },
  quoteBlock: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E0D3BE",
  },
  quoteText: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#7D674E",
    lineHeight: 19,
  },
  quoteAuthor: {
    fontSize: 12,
    fontWeight: "700",
    color: "#9C794A",
    textAlign: "right",
    marginTop: 4,
  },
  closeButton: {
    backgroundColor: "#2B241D",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 24,
  },
  closeButtonPressed: {
    opacity: 0.8,
  },
  closeButtonText: {
    color: "#FFFDF9",
    fontSize: 14,
    fontWeight: "800",
  },
});

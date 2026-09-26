import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import WashiTape from "./WashiTape";

export default function PolaroidCard({
  imageUri,
  caption,
  subtitle,
  rotation = "0deg",
  tapeColor = "#f6d89b",
  tapeRotation = "-2deg",
  showTape = true,
  sticker,
  aspectRatio = 1,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.outerContainer,
        { transform: [{ rotate: rotation }, { scale: pressed ? 0.98 : 1 }] },
      ]}
    >
      {showTape && <WashiTape color={tapeColor} rotation={tapeRotation} />}

      <View style={styles.polaroidFrame}>
        {sticker && <Text style={styles.stickerBadge}>{sticker}</Text>}

        <View style={[styles.imageContainer, { aspectRatio }]}>
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            contentFit="cover"
            transition={300}
            cachePolicy="memory-disk"
          />
        </View>

        <View style={styles.captionContainer}>
          <Text style={styles.caption}>{caption}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 12,
    marginHorizontal: 8,
    alignSelf: "center",
    width: "92%",
    maxWidth: 380,
  },
  polaroidFrame: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    paddingBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E2D6",
    shadowColor: "#3a2e21",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "#F2ECE1",
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  captionContainer: {
    marginTop: 12,
    alignItems: "center",
    paddingHorizontal: 8,
  },
  caption: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2C2621",
    textAlign: "center",
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6D645A",
    textAlign: "center",
    lineHeight: 18,
    fontStyle: "italic",
  },
  stickerBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 15,
    fontSize: 26,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

import { Image } from "expo-image";
import { useState } from "react";
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DoodleSticker from "./DoodleSticker";
import WashiTape from "./WashiTape";

interface CuteClipProps {
  title: string;
  subtitle: string;
  youtubeId: string;
  emoji?: string;
  tapeColor?: string;
  rotation?: string;
}

export default function CuteClipCard({
  title,
  subtitle,
  youtubeId,
  emoji = "🎬",
  tapeColor = "#FCD34D",
  rotation = "-1deg",
}: CuteClipProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  const handlePlay = () => {
    if (Platform.OS === "web") {
      setIsPlaying(true);
    } else {
      Linking.openURL(videoUrl);
    }
  };

  const handleOpenExternal = () => {
    Linking.openURL(videoUrl);
  };

  return (
    <View
      style={[
        styles.container,
        { transform: [{ rotate: rotation }] },
      ]}
    >
      <WashiTape color={tapeColor} width={90} height={20} rotation="1deg" />

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.emoji}>{emoji}</Text>
          <View style={styles.headerText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <DoodleSticker type="sparkle" text="cute" color="#BE185D" bg="#FDF2F8" rotation="3deg" />
        </View>

        {/* Video Player Box */}
        <View style={styles.videoBox}>
          {Platform.OS === "web" && isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: 12,
              } as any}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Pressable style={styles.thumbnailContainer} onPress={handlePlay}>
              <Image
                source={{ uri: thumbnailUrl }}
                style={styles.thumbnailImage}
                contentFit="cover"
                transition={200}
              />
              <View style={styles.overlayShade}>
                <View style={styles.playButtonBadge}>
                  <Text style={styles.playIcon}>▶</Text>
                </View>
                <Text style={styles.tapToPlayText}>Tap to play clip 🍿</Text>
              </View>
            </Pressable>
          )}
        </View>

        {/* Helpful Fallback / Direct Link */}
        <View style={styles.footerRow}>
          <Pressable onPress={handleOpenExternal} style={({ pressed }) => [pressed && { opacity: 0.7 }]}>
            <Text style={styles.externalLink}>Watch on YouTube ↗</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    marginHorizontal: 16,
    width: "92%",
    maxWidth: 380,
    alignSelf: "center",
  },
  card: {
    backgroundColor: "#FFFDF9",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    shadowColor: "#3D2B1B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  emoji: {
    fontSize: 28,
    marginRight: 8,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "900",
    color: "#2C2219",
  },
  subtitle: {
    fontSize: 12,
    color: "#786B5D",
    fontStyle: "italic",
    marginTop: 2,
  },
  videoBox: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#1C1917",
  },
  thumbnailContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlayShade: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  playButtonBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "rgba(225, 29, 72, 0.9)", // rose red
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  playIcon: {
    color: "#FFFFFF",
    fontSize: 22,
    marginLeft: 3,
  },
  tapToPlayText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  footerRow: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  externalLink: {
    fontSize: 11,
    fontWeight: "800",
    color: "#9A3412",
  },
});

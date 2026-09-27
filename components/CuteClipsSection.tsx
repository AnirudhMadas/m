import { StyleSheet, Text, View } from "react-native";
import CuteClipCard from "./CuteClipCard";

interface CuteClipsSectionProps {
  clips?: Array<{
    id: string;
    title: string;
    subtitle: string;
    youtubeId: string;
    emoji?: string;
  }>;
}

export default function CuteClipsSection({ clips }: CuteClipsSectionProps) {
  if (!clips || clips.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍿✨</Text>
      <Text style={styles.heading}>Cute & Comfort Clips</Text>
      <Text style={styles.subtitle}>
        Little video clips guaranteed to make you smile. Tap play and enjoy!
      </Text>

      {clips.map((clip, idx) => (
        <CuteClipCard
          key={clip.id || idx}
          title={clip.title}
          subtitle={clip.subtitle}
          youtubeId={clip.youtubeId}
          emoji={clip.emoji}
          rotation={idx % 2 === 0 ? "-1deg" : "1.5deg"}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
  },
  emoji: {
    fontSize: 28,
    marginBottom: 4,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2C231B",
    paddingHorizontal: 20,
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 12,
    fontSize: 13,
    lineHeight: 19,
    color: "#786B5D",
    paddingHorizontal: 20,
  },
});

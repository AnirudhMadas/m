import { StyleSheet, Text, View } from "react-native";
import PolaroidCard from "./PolaroidCard";

export default function FavoriteMoments({
  moments = [],
  heading = "Scrapbook Highlights",
  subtitle = "Iconic comfort scenes & memories captured on tape.",
}) {
  const rotations = ["-1.5deg", "2deg", "-2deg", "1deg", "-1deg", "2.5deg"];
  const tapeColors = [
    "#FCD34D", // yellow
    "#FCA5A5", // coral pink
    "#A7F3D0", // soft mint
    "#BAE6FD", // sky blue
    "#FED7AA", // peach
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📸</Text>
      <Text style={styles.heading}>{heading}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

      <View style={styles.polaroidGrid}>
        {moments.map((moment, index) => {
          const rotation = rotations[index % rotations.length];
          const tapeColor = tapeColors[index % tapeColors.length];

          return (
            <PolaroidCard
              key={moment.id || index}
              imageUri={moment.image || moment.gif}
              caption={moment.title}
              subtitle={moment.description}
              rotation={rotation}
              tapeColor={tapeColor}
              sticker={moment.sticker || moment.emoji}
              aspectRatio={moment.aspectRatio || 1.15}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  emoji: {
    fontSize: 28,
    marginBottom: 6,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2b2b2b",
    paddingHorizontal: 20,
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 16,
    color: "#77706a",
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  polaroidGrid: {
    paddingHorizontal: 12,
  },
});

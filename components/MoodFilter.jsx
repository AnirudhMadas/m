import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function MoodFilter({ selectedMood, onSelectMood }) {
  const moods = [
    { id: "all", label: "🌟 All Pages", emoji: "🌟" },
    { id: "comfort", label: "🌧️ Comfort Me", emoji: "🌧️" },
    { id: "laugh", label: "😂 Make Me Laugh", emoji: "😂" },
    { id: "pep", label: "💪 Pep Talk", emoji: "💪" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>HOW ARE YOU FEELING RIGHT NOW?</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollList}
      >
        {moods.map((m) => {
          const isSelected = selectedMood === m.id;
          return (
            <Pressable
              key={m.id}
              style={({ pressed }) => [
                styles.chip,
                isSelected && styles.chipSelected,
                pressed && { opacity: 0.8 },
              ]}
              onPress={() => onSelectMood(m.id)}
            >
              <Text
                style={[
                  styles.chipText,
                  isSelected && styles.chipTextSelected,
                ]}
              >
                {m.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#8B7B6B",
    marginBottom: 8,
  },
  scrollList: {
    gap: 8,
    paddingVertical: 4,
  },
  chip: {
    backgroundColor: "#F4EDE1",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2D5C3",
  },
  chipSelected: {
    backgroundColor: "#D97706",
    borderColor: "#B45309",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#574A3D",
  },
  chipTextSelected: {
    color: "#FFFFFF",
  },
});

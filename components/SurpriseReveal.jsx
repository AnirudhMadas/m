import { useRef, useState } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function SurpriseReveal({
  buttonLabel = "Reveal",
  revealedEmoji = "🎁",
  surpriseText,
  accentColor = "#ffd369",
}) {
  const [revealed, setRevealed] = useState(false);
  const animValue = useRef(new Animated.Value(0)).current;

  const handleReveal = () => {
    setRevealed(true);
    Animated.spring(animValue, {
      toValue: 1,
      friction: 6,
      tension: 60,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    opacity: animValue,
    transform: [
      {
        scale: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.85, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.wrapper}>
      {!revealed ? (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: accentColor }]}
          onPress={handleReveal}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      ) : (
        <Animated.View style={[styles.revealBox, animatedStyle]}>
          <Text style={styles.revealEmoji}>{revealedEmoji}</Text>
          <Text style={styles.revealText}>{surpriseText}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 90,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#1a1a2e",
    letterSpacing: 0.5,
  },
  revealBox: {
    alignItems: "center",
  },
  revealEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  revealText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
});

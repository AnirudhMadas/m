import { StyleSheet, View, ViewStyle } from "react-native";

interface WashiTapeProps {
  color?: string;
  width?: number;
  height?: number;
  rotation?: string;
  style?: ViewStyle;
}

export default function WashiTape({
  color = "#f4d06f",
  width = 90,
  height = 24,
  rotation = "-2deg",
  style,
}: WashiTapeProps) {
  return (
    <View
      style={[
        styles.tape,
        {
          backgroundColor: color,
          width,
          height,
          transform: [{ rotate: rotation }],
        },
        style,
      ]}
    >
      <View style={styles.tapeTexture} />
    </View>
  );
}

const styles = StyleSheet.create({
  tape: {
    position: "absolute",
    top: -12,
    alignSelf: "center",
    zIndex: 10,
    opacity: 0.88,
    borderRadius: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.08)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  tapeTexture: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.35)",
  },
});

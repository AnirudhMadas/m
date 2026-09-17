import { StyleSheet, Text, View } from "react-native";
import SitcomCard from "../components/sitcomCard";
import { sitcoms } from "../data/sitcoms";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        🎬 Pick Your Episode
      </Text>

      {sitcoms.map((sitcom) => (
        <SitcomCard
          key={sitcom.id}
          title={sitcom.title}
          emoji={sitcom.emoji}
          description={sitcom.description}
        />
      ))}

    </View>

  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
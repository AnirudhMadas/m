import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SitcomCard from "../components/sitcomCard";
import { sitcoms } from "../data/sitcoms";

export default function HomeScreen() {

  const [selectedSitcom, setSelectedSitcom] = useState("");
  //const [started, setStarted] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedSitcom(id);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        🎬 Pick Your Episode
      </Text>

      {selectedSitcom ? (
        <Text>
          You selected: {selectedSitcom}
        </Text>
      ) : (<Text>
        Select a sitcom
      </Text>
      )
      }

      <FlatList
        data={sitcoms}
        renderItem={({ item }) => (
          <SitcomCard
            id={item.id}
            title={item.title}
            emoji={item.emoji}
            description={item.description}
            onSelect={handleSelect}
            selected={selectedSitcom === item.id}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
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
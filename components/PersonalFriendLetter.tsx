import { StyleSheet, Text, View } from "react-native";
import { BIRTHDAY_CONFIG } from "../data/birthdayConfig";
import WashiTape from "./WashiTape";

export default function PersonalFriendLetter() {
  const { personalLetter } = BIRTHDAY_CONFIG;

  return (
    <View style={styles.container}>
      <WashiTape color="#FDE68A" width={110} height={22} rotation="-1.5deg" />

      <View style={styles.paper}>
        <View style={styles.stampHeader}>
          <Text style={styles.greeting}>{personalLetter.greeting}</Text>
          <Text style={styles.postmark}>🎈 BIRTHDAY EDITION</Text>
        </View>

        <Text style={styles.body}>{personalLetter.body}</Text>

        <View style={styles.signatureBlock}>
          <Text style={styles.signoff}>{personalLetter.signoff}</Text>
          <Text style={styles.author}>{personalLetter.author} ✨</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    width: "100%",
    maxWidth: 380,
    alignSelf: "center",
  },
  paper: {
    backgroundColor: "#FFFDF9",
    borderRadius: 14,
    padding: 22,
    borderWidth: 1.5,
    borderColor: "#EADCC6",
    shadowColor: "#4A3928",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  stampHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "900",
    color: "#2C2219",
  },
  postmark: {
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    color: "#B45309",
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  body: {
    fontSize: 14,
    lineHeight: 23,
    color: "#4A3E31",
  },
  signatureBlock: {
    marginTop: 18,
    alignItems: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "#F4EDE1",
    paddingTop: 12,
  },
  signoff: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#786B5D",
  },
  author: {
    fontSize: 14,
    fontWeight: "800",
    color: "#2C2219",
    marginTop: 2,
  },
});

import { StyleSheet } from "react-native";

const listRegionsStyles = () =>
  StyleSheet.create({
    container: {
      padding: 50,
    },
    textContainer: {
      padding: 20,
      textAlign: "center",
    },
    listItem: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#1db954",
      borderRadius: 50,
      textAlign: "center",
    },
  });

export { listRegionsStyles };

import { StyleSheet } from "react-native";

const welcomeStyles = () =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
    heading: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 15,
    },
  });

export { welcomeStyles };

import { StyleSheet } from "react-native";

const btnStyles = (disabled) =>
  StyleSheet.create({
    btn: {
      alignSelf: "center",
      padding: 10,
      marginBottom: 10,
      backgroundColor: disabled ? "#535353" : "#1db954",
      borderRadius: 50,
      minWidth: 150,
      maxWidth: 300,
      width: "100%",
    },
    btn__text: {
      color: disabled ? "#b3b3b3" : "#fff",
      textAlign: "center",
    },
  });

export { btnStyles };

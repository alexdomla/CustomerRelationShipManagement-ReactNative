import { StyleSheet } from "react-native";

const customerListStyles = () =>
  StyleSheet.create({
    container: {
      padding: 20,
    },
    sortByContainer: {
      paddingBottom: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    sortByButton: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: "#1db954",
      borderRadius: 50,
      textAlign: "center",
      width: 150,
    },
    activeSortByButton: {
      backgroundColor: "#eee",
    },
    activeSortByButtonText: {
      fontWeight: "bold",
    },
    auxText: {
      textAlign: "center",
      padding: 20,
      paddingTop: 0,
    },
    listItem: {
      padding: 20,
      marginBottom: 10,
      backgroundColor: "#1db954",
      borderRadius: 20,
      textAlign: "center",
    },
    listItemElement: {
      flexDirection: "row",
    },
    listItemElementText: {
      fontWeight: "bold",
      marginRight: 10,
      minWidth: 90,
      textAlign: "left",
      color: "#fff",
    },
    whiteText: {
      color: "#fff",
    },
  });

export { customerListStyles };

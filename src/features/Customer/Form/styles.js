import { StyleSheet } from "react-native";

const ITEM_HEIGHT = 48;

const formStyles = () =>
  StyleSheet.create({
    form: {
      width: "100%",
    },
    textInputContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      marginVertical: 10,
      flexDirection: "column",
    },
    textInput: {
      backgroundColor: "#fff",
      border: "1px solid #1db954",
      borderRadius: 50,
      padding: 10,
      fontSize: 14,
      textAlign: "center",
    },
    labelText: {
      fontWeight: "500",
      marginBottom: 5,
      textAlign: "center",
    },
    errorText: {
      color: "red",
      marginTop: 20,
    },
    listPickerContainer: {
      marginBottom: 16,
    },
    listPicker: {
      marginTop: 4,
      borderRadius: 4,
      borderColor: "#1db954",
      borderWidth: 1,
      maxHeight: ITEM_HEIGHT * 5.1,
      overflow: "scroll",
    },
    listPickerItem: {
      height: ITEM_HEIGHT,
      paddingHorizontal: 16,
      justifyContent: "center",
    },
    listPickerSelectedItem: {
      backgroundColor: "#eee",
    },
    listPickerItemText: {
      fontSize: 14,
      textAlign: "center",
    },
    listPickerSelectedItemText: {
      fontWeight: "bold",
    },
  });

export { formStyles };

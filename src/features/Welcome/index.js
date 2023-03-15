// Import necessary modules
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { welcomeStyles } from "./styles";
import * as actions from "../../features/Customer/reducers";

// Define Welcome component
const Welcome = () => {
  // Get styles object from stylesheet
  const styles = welcomeStyles();

  // Get navigation object from useNavigation hook
  const { navigate } = useNavigation();

  // Get dispatch function from useDispatch hook
  const dispatch = useDispatch();

  // Define function to handle clear storage action
  const handleClearStorage = () => {
    dispatch(actions.clearStorage());
  };

  // Define function to handle button press
  const onPress = (screenName) => {
    navigate(screenName);
  };

  // Return JSX with welcome message, buttons to navigate to different screens, and button to clear storage
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Customer Manager Plus</Text>
      <Button
        buttonText="Click to Continue..."
        onPressHandler={() => onPress("ListRegions")}
      />
      <Button
        buttonText="Clear storage..."
        onPressHandler={handleClearStorage}
      />
      <Button
        buttonText={"Customer of the day..."}
        onPressHandler={() => onPress("CustomerOfTheDay")}
      />
    </View>
  );
};

// Export Welcome component as default
export default Welcome;

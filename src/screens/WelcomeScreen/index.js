import Welcome from "../../features/Welcome";
import { SafeAreaView } from "react-native";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Welcome />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

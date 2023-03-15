// Importing required components and screens
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListRegionsScreen from "../screens/ListRegionsScreen";
import ListByRegionScreen from "../screens/ListByRegionScreen";
import NewScreen from "../screens/NewScreen";
import EditCustomerScreen from "../screens/EditCustomerScreen";
import CustomerOfTheDayScreen from "../screens/CustomerOfTheDayScreen";

// Creating a navigation stack
const Stack = createNativeStackNavigator();

// Defining the Navigation component
const Navigation = () => {
  return (
    // NavigationContainer wraps the stack navigator
    <NavigationContainer>
      <Stack.Navigator
        // Set the initial route name
        initialRouteName="Welcome"
        // Set the default screen options for all screens
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        {/* Define the screens and their components */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ListRegions" component={ListRegionsScreen} />
        <Stack.Screen name="New" component={NewScreen} />
        <Stack.Screen name="ListByRegion" component={ListByRegionScreen} />
        <Stack.Screen name="EditCustomer" component={EditCustomerScreen} />
        <Stack.Screen
          name="CustomerOfTheDay"
          component={CustomerOfTheDayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporting the Navigation component
export default Navigation;

import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { listRegionsStyles } from "./styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import { getRegions } from "../../../utilities/helpers";
import * as actions from "../reducers";

// Get the styles for the component from listRegionsStyles
const styles = listRegionsStyles();

// Define the ListRegions component
const ListRegions = () => {
  // Get the navigation object from useNavigation hook
  const { navigate } = useNavigation();
  // Get the dispatch function from useDispatch hook
  const dispatch = useDispatch();

  // Define an onPressHandler function to navigate to the ListByRegion screen
  const onPressHandler = (value) => {
    navigate("ListByRegion", {
      regionId: value.id,
      regionName: value.name,
    });
  };

  // Call the loadCustomerList action creator from useEffect when the component mounts
  useEffect(() => {
    dispatch(actions.loadCustomerList());
  }, []);

  // Define a ListItem component to display each region in the FlatList
  const ListItem = ({ listItem }) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => onPressHandler(listItem)}
      >
        <Text>{listItem.name}</Text>
      </TouchableOpacity>
    );
  };

  // Render the component's view
  return (
    <View style={styles.container}>
      {/* Render a Button component to navigate to the New screen */}
      <Button
        buttonText={"Create Customer"}
        onPressHandler={() => navigate("New")}
      />
      {/* Render a view to display text */}
      <View style={styles.textContainer}>
        <Text>List of Regions</Text>
        <Text>Select a Region:</Text>
      </View>
      {/* Render a FlatList to display the regions */}
      <FlatList
        data={getRegions()}
        renderItem={({ item }) => <ListItem listItem={item}></ListItem>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListRegions;

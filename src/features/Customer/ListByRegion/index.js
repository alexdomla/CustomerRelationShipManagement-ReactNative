import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { getRegions } from "../../../utilities/helpers";
import { getUserStates } from "../../../utilities/helpers";
import { customerListStyles } from "./styles";
import { useListCustomers } from "../hooks";
import { useState } from "react";

const styles = customerListStyles();

const ListByRegion = () => {
  // Get the region ID and name from the route params and the navigation object
  const route = useRoute();
  const regionId = route.params.regionId;
  const regionName = route.params.regionName;
  const { navigate } = useNavigation();

  // Add a state variable to store the current sort order:
  const [sortBy, setSortBy] = useState("status");

  // Get the list of customers using the useListCustomers hook
  const customers = useListCustomers();

  // Filter the customers list by region ID
  /*const customersByRegion = customers.filter(
    (customer) => customer.region === regionId
  );*/

  // Filter the customers list by region ID
  // Sort the customers based on the sortBy state
  const customersByRegion = customers
    .filter((customer) => customer.region === regionId)
    .sort((a, b) => {
      if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      } else {
        return a.id - b.id;
      }
    });

  // Component that renders each customer item in the FlatList
  const CustomerListItem = ({ listItem: customer }) => {
    // Get the user states and regions lists
    const status = getUserStates();
    const regions = getRegions();

    // Get the name of the customer's state and region from their IDs
    const state = status.find((state) => customer.status === state.id).name;
    const region = regions.find((region) => region.id === customer.region).name;

    // Navigate to the EditCustomer screen when the customer item is pressed
    const onPressHandler = (customer) => {
      navigate("EditCustomer", {
        customerId: customer.id,
      });
    };

    // Render the customer item with their details
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => onPressHandler(customer)}
      >
        <View style={styles.listItemElement}>
          <Text style={styles.listItemElementText}>ID:</Text>
          <Text style={styles.whiteText}>{customer.id}</Text>
        </View>
        <View style={styles.listItemElement}>
          <Text style={styles.listItemElementText}>First Name:</Text>
          <Text style={styles.whiteText}>{customer.firstName}</Text>
        </View>
        <View style={styles.listItemElement}>
          <Text style={styles.listItemElementText}>Last Name:</Text>
          <Text style={styles.whiteText}>{customer.lastName}</Text>
        </View>
        <View style={styles.listItemElement}>
          <Text style={styles.listItemElementText}>Active?:</Text>
          <Text style={styles.whiteText}>{state}</Text>
        </View>
        <View style={styles.listItemElement}>
          <Text style={styles.listItemElementText}>Region:</Text>
          <Text style={styles.whiteText}>{region}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SortByButton = ({ title, sortByKey }) => {
    return (
      <TouchableOpacity
        style={[
          styles.sortByButton,
          sortBy === sortByKey && styles.activeSortByButton,
        ]}
        onPress={() => setSortBy(sortByKey)}
      >
        <Text
          style={[
            styles.sortByButtonText,
            sortBy === sortByKey && styles.activeSortByButtonText,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  // Render the component with the customers in the selected region or a message if there are no customers
  return (
    <View style={styles.container}>
      <View style={styles.sortByContainer}>
        <SortByButton title="Sort by Status" sortByKey="status" />
        <SortByButton title="Sort by ID" sortByKey="id" />
      </View>
      {customersByRegion.length ? (
        <>
          <Text style={styles.auxText}>
            Viewing Customers in the {regionName} Region
          </Text>
          <FlatList
            data={customersByRegion}
            renderItem={({ item }) => (
              <CustomerListItem listItem={item}></CustomerListItem>
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      ) : (
        <Text style={styles.auxText}>No customers in region {regionName}</Text>
      )}
    </View>
  );
};

export default ListByRegion;

import { View, Text } from "react-native";
import Form from "../Form";
import { useNewCustomer, useNewCustomerStatus } from "../hooks";
import { newStyles } from "./styles";

const styles = newStyles();

const New = () => {
  // Calls the custom hook `useNewCustomer` to handle creating a new customer
  const { onSubmit } = useNewCustomer();

  // Calls the custom hook `useNewCustomerStatus` to retrieve the status of creating a new customer
  const status = useNewCustomerStatus();

  return (
    <View style={styles.container}>
      {/* Text displayed to the user */}
      <Text style={styles.auxText}>Fill the form to create a new customer</Text>

      {/* Renders a form to create a new customer */}
      <Form handleSubmit={onSubmit} callStatus={status} />
    </View>
  );
};

export default New;

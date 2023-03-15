import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Form from "../Form";
import { useEditCustomer } from "../hooks";
import { editStyles } from "./styles";

const styles = editStyles();

const EditCustomer = () => {
  // get the route params from the navigation stack
  const { params } = useRoute();
  // extract the customerId from the params
  const { customerId } = params;
  // get the status and onSubmit function from the useEditCustomer hook
  const { status, onSubmit } = useEditCustomer(customerId);

  return (
    <View style={styles.container}>
      {/* display helper text */}
      <Text style={styles.auxText}>
        Edit the fields and save changes to edit the customer
      </Text>
      {/* render the customer form */}
      <Form
        customerId={customerId}
        callStatus={status}
        handleSubmit={onSubmit}
      />
    </View>
  );
};

export default EditCustomer;

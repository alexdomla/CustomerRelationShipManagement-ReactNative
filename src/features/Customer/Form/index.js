import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Button from "../../../components/Button";
import { useCustomerFormFields, useEditCustomerFields } from "../hooks";
import { getRegions } from "../../../utilities/helpers";
import { getUserStates } from "../../../utilities/helpers";
import { states } from "../../../utilities/helpers.js";
import { formStyles } from "./styles";

const styles = formStyles();

const Form = ({ handleSubmit, callStatus, customerId = null }) => {
  // Get form fields and editing fields using custom hooks
  const { fields, setFormField } = useCustomerFormFields(customerId);
  const editingFields = useEditCustomerFields();

  // Destructure callStatus and states
  const { REQUESTING } = states;

  // Define onSubmit function to handle form submission
  const onSubmit = () => {
    handleSubmit();
  };

  // Destructure form fields
  const { firstName, lastName, region, status } = fields;

  // Define hasUserSelection function to check if user has made any changes to form fields
  const hasUserSelection = () => {
    // Check if all fields are non-empty and callStatus is not REQUESTING
    const isActive =
      callStatus !== REQUESTING &&
      firstName.trim() &&
      lastName.trim() &&
      region.trim() &&
      status.trim();

    // If no customerId is provided, return isActive
    if (!customerId) {
      return isActive;
    }

    // Check if any field values have changed from their initial values
    const isEditing =
      firstName.trim() !== editingFields.firstName ||
      lastName.trim() !== editingFields.lastName ||
      status.trim() !== editingFields.status.trim() ||
      region.trim() !== editingFields.region.trim();

    // Return true if both isActive and isEditing are true
    return isActive && isEditing;
  };

  // Define ListPicker component to render TouchableOpacity with dynamic data
  const ListPicker = ({ field, data, selectedItem }) => {
    const onPressItem = (itemValue) => {
      setFormField(field, itemValue);
    };

    return (
      <View style={styles.listPickerContainer}>
        <Text style={styles.labelText}>Select a {field}</Text>
        <View style={styles.listPicker}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onPressItem(item.id)}
              style={[
                styles.listPickerItem,
                selectedItem === item.id && styles.listPickerSelectedItem,
              ]}
            >
              <Text
                style={[
                  styles.listPickerItemText,
                  selectedItem === item.id && styles.listPickerSelectedItemText,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.form}>
      <View style={styles.textInputContainer}>
        <TextInput
          type="text"
          placeholder="First Name"
          style={styles.textInput}
          value={firstName}
          onChangeText={(text) => setFormField("firstName", text)}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          type="text"
          placeholder="Last Name"
          style={styles.textInput}
          value={lastName}
          onChangeText={(text) => setFormField("lastName", text)}
        />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.labelText}>Active?</Text>
        <ListPicker
          data={getUserStates()}
          selectedItem={status}
          field={"status"}
        />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.labelText}>Region</Text>
        <ListPicker
          field={"region"}
          data={getRegions()}
          selectedItem={region}
        />
      </View>
      <Button
        buttonText={"Save Customer"}
        fullWidth={true}
        onPressHandler={onSubmit}
        disabled={!hasUserSelection()}
      />
    </View>
  );
};

export default Form;

// Import necessary modules
import React, { useEffect, useState } from "react";
import { Keyboard, View, Text } from "react-native";
import Button from "../../../components/Button";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { useListCustomers } from "../hooks";
import { customerOfTheDayStyles } from "./styles";

const styles = customerOfTheDayStyles();

const CustomerOfTheDay = () => {
  const [customersOfTheWeek, setCustomersOfTheWeek] = useState([]);

  const listCustomers = useListCustomers();
  useEffect(() => {
    if (listCustomers && listCustomers.length > 0) {
      setCustomersOfTheWeek(listCustomers);
    }
  }, [listCustomers]);

  const onSubmit = (seconds) => {
    Keyboard.dismiss();
    if (customersOfTheWeek && customersOfTheWeek.length > 0) {
      const randomCustomer =
        customersOfTheWeek[
          Math.floor(Math.random() * customersOfTheWeek.length)
        ];
      const schedulingOptions = {
        content: {
          title: `Your customer of the day is ${randomCustomer.firstName} ${randomCustomer.lastName}`,
          body: "Open the app to read more about your customer of the day!",
          sound: true,
          priority: Notifications.AndroidNotificationPriority.HIGH,
          color: "blue",
        },
        trigger: {
          seconds: seconds,
        },
      };
      Notifications.scheduleNotificationAsync(schedulingOptions);
    } else {
      const schedulingOptions = {
        content: {
          title: "No customer of the day today",
          body: "Sorry, there are no customers to choose from today.",
          sound: true,
          priority: Notifications.AndroidNotificationPriority.HIGH,
          color: "blue",
        },
        trigger: {
          seconds: seconds,
        },
      };
      Notifications.scheduleNotificationAsync(schedulingOptions);
    }
  };

  const handleNotification = () => {
    console.warn("Your notification ran, but won't show up in the app!");
  };

  const askNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (Constants.isDevice && status === "granted") {
      console.log("Notification permissions granted.");
    }
  };

  useEffect(() => {
    askNotification();

    const listener = Notifications.addNotificationReceivedListener(
      handleNotification
    );
    return () => listener.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.auxText}>
        Press the button to get your very own customer of the day!
      </Text>
      <Button buttonText="Schedule..." onPressHandler={() => onSubmit(5)} />
    </View>
  );
};

export default CustomerOfTheDay;

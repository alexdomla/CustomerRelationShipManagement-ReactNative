import { Text, TouchableOpacity } from "react-native";
import { btnStyles } from "./styles";

const Button = ({ buttonText, onPressHandler, disabled = false }) => {
  const styles = btnStyles(disabled);
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onPressHandler}
      disabled={disabled}
    >
      <Text style={styles.btn__text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

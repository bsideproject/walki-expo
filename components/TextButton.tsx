import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

const TextButton: React.FC<TouchableOpacityProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{ color: "#333333", fontSize: 14 }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
export default TextButton;

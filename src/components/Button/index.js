import React from "react";

import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const Button = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#001562",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 20,
    borderRadius: 7,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

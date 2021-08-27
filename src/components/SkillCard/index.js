import React from "react";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.9}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#9e1245",
    padding: 18,
    borderRadius: 40,
    alignItems: "center",
    marginVertical: 5,
  },
  textSkill: {
    color: "#eee",
    fontSize: 16,
    fontWeight: "bold",
  },
});

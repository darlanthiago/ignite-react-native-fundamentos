import React from "react";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.9} {...rest}>
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

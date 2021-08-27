import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  // ScrollView,
  FlatList,
} from "react-native";
import { Button } from "./components/Button";
import { SkillCard } from "./components/SkillCard";

const App = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    if (newSkill) {
      setSkills((prevState) => [...prevState, newSkill]);
      setNewSkill("");
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor="#E71562"
        />
        
        <Text style={styles.greeting}>{greeting}</Text>

        <Text style={styles.text}>Welcome, Darlan.</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#ff88b3"
          onChangeText={setNewSkill}
          value={newSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.text, { marginVertical: 25 }]}>My Skills</Text>

        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {skills.map((skill, index) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </ScrollView> */}

        <FlatList
          data={skills}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <SkillCard skill={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E71562",
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#9e1245",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: "#fff",
  },
});

export default App;

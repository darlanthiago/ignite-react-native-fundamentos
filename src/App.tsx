import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import {Button} from './components/Button';
import {SkillCard} from './components/SkillCard';

type SkillData = {
  id: string;
  name: string;
};

const App = () => {
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState<String>();

  function handleAddNewSkill() {
    if (newSkill) {
      const data = {
        id: String(new Date().getTime()),
        name: newSkill,
      };

      setSkills(oldState => [...oldState, data]);

      setNewSkill('');

      return;
    }

    Alert.alert('Ops!', 'Digite uma Skill para poder adicionar', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    return;
  }

  function handleRemoveSkill(id: string) {
    const skillsFiltered = skills.filter(item => item.id !== id);

    setSkills(skillsFiltered);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
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

        <Text style={styles.text}>Welcome, Darlan.</Text>
        <Text style={styles.greeting}>{greeting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#ff88b3"
          onChangeText={setNewSkill}
          value={newSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.text, {marginVertical: 25}]}>My Skills</Text>

        <FlatList
          data={skills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              onPress={() => handleRemoveSkill(item.id)}
              skill={item.name}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E71562',
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#9e1245',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greeting: {
    color: '#fa9cbe',
  },
});

export default App;

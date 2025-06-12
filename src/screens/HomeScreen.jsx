import { StyleSheet, Text, View, Pressable } from 'react-native'

import React, { useState } from 'react';

import AllTasks from './AllTasks'
import CreateScreen from './CreateScreen'





const HomeScreen = ({ navigation }) => {
  const [data, setdata] = useState([
    { id: 1, task: "Study", imp: "7" },
    { id: 2, task: "code", imp: "8" },
    { id: 3, task: "video game", imp: "3" },
    { id: 4, task: "driving", imp: "4" },
    { id: 5, task: "gymming", imp: "4" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoApp</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('AllTasks', { data ,title: 'All Tasks'})}>
          <Text style={styles.btnText}>All tasks</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('AllTasks', { data: data.filter(item => item.imp > 5),  title: 'High Importance Tasks'})}>
          <Text style={styles.btnText}>High Importance</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Create', { data, setdata })}>
          <Text style={styles.btnText}>Create</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: "4%",
        backgroundColor: "#ffffff"

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",

    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10

    },
    button: {
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: "#73C37AFF",
    },
    btnText: {
        color: "#73C37AFF",
        fontSize: 12
    }


})
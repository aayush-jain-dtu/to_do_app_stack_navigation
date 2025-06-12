import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react';



const CreateScreen = ({ route }) => {
    const { data, setdata } = route.params;
  const [taskName, settaskName] = useState('')
  const [impLvl, setimpLvl] = useState('')
  const [isEdit, setisEdit] = useState(false)
  const [editItemId, seteditItemId] = useState(null)

  const addTaskHandler = () => {
    const newTask = {
      id: Date.now(),
      task: taskName,
      imp: impLvl
    }


    setdata([...data, newTask])
    settaskName('')
    setimpLvl('')
    setisEdit(false)
  }
  const deleteTaskHandler = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }
  const editItemHandler = (item) => {
    setisEdit(true);
    settaskName(item.task);
    setimpLvl(item.imp);
    seteditItemId(item.id);

  }

  const updateTaskHandler = () => {
    setdata(data.map((item) =>
      item.id === editItemId
        ? { ...item, task: taskName, imp: impLvl }
        : item
    ));
    settaskName('');
    setimpLvl('');
    setisEdit(false);
    seteditItemId(null);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter a task name...'
        placeholderTextColor="#999"
        style={styles.input}
        value={taskName}
        onChangeText={(item) => settaskName(item)}
      />
      <TextInput
        placeholder='Enter Importance(1 to 10)...'
        placeholderTextColor="#999"
        style={styles.input}
        value={impLvl}
        onChangeText={(item) => setimpLvl(item)}
      />
      <Pressable style={styles.addButton} onPress={() => isEdit ? updateTaskHandler() : addTaskHandler()}>
        <Text style={styles.btnText}>{isEdit ? 'EDIT TASK' : 'ADD TASK'}</Text>
      </Pressable>
      <View style={{ marginTop: 10 }}>

        <Text style={styles.headingText}>ALL Tasks</Text>



        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.taskContainer, { backgroundColor: item.imp > 5 ? "#FFCCCC" : "#D7F68FFF" }]}>
              <Text style={styles.taskText}>{item.task}</Text>

              <View style={{ flexDirection: "row", gap: 20 }}>
                <Text style={styles.taskText}>{item.imp}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.taskText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteTaskHandler(item.id)}>
                  <Text style={styles.taskText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: "4%",
    gap: 10
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D7F68FFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7
  },
  addButton: {
    backgroundColor: "#CABFEEFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },

  headingText: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 15,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7

  },
  taskText: {
    fontWeight: "400",
    fontSize: 15
  },

})
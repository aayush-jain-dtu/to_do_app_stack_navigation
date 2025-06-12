import { StyleSheet, Text, View, FlatList } from 'react-native'


const AllTasks = ( { route } ) => {
      const { data } = route.params;
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Tasks</Text>
                <Text style={styles.headingText}>Importance</Text>

            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>(
                    <View style={[styles.taskContainer,{backgroundColor:item.imp>5?"#FFCCCC":"#D7F68FFF"}]}>
                        <Text style={styles.taskText}>{item.task}</Text>
                        <Text style={styles.taskText}>{item.imp}</Text>
                    </View>
     ) }
    contentContainerStyle={{gap:10}}
            />
        </View>
    )
}

export default AllTasks

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10



    },
    headingText: {
        fontWeight: "500",
        fontSize: 16
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius:7

    },
    taskText: {
        fontWeight: "400",
        fontSize: 15
    },

})
import { useState } from "react"
import { Alert, FlatList, GestureResponderEvent, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ListEmpty } from "../../components/ListEmpty";
import { TaskProps, Task } from "../../components/Task";
import { TaskCompleted } from "../../components/TaskCompleted";
import { styles } from "./styles";

export function Home(){
    const [Tasks, setTask] = useState<TaskProps[]>([])
    const [TasksCompleted, setTasksCompleted] = useState<TaskProps[]>([])
    const [AllTasks, setAllTasks] = useState<TaskProps[]>([])
    const [TaskText, setTaskText] = useState('')

    function AddTask(e: GestureResponderEvent){
        const newTask = {
            task: TaskText,
            id: TaskText + Tasks.length
        }

        setTask((state) => [...state, newTask])
        setAllTasks((state) => [...state, newTask])
        setTaskText('')
    }

    function RemoveTask(id: string){
        Alert.alert("Excluir Tarefa", "Tem certeza que deseja excluir essa tarefa ?", [
            {
                text: "Sim",
                onPress: () => setTask(Tasks.filter((item) => item.id !== id))
            },

            {
                text: "Não",
                style: 'cancel'
            }
        ])
    }

    function RemoveCompletedTask(id: string){
        Alert.alert("Excluir Tarefa", "Tem certeza que deseja excluir essa tarefa ?", [
            {
                text: "Sim",
                onPress: () => setTasksCompleted(TasksCompleted.filter((item) => item.id !== id))
            },

            {
                text: "Não",
                style: 'cancel'
            }
        ])
    }

    function CompleteTask(id: string){
        Tasks.filter((item) => {
            if(item.id === id){
                const taskComplete = {
                    task: item.task,
                    id: TaskText + TasksCompleted
                }
                setTasksCompleted((state) => [...state, taskComplete])
            }
        })

        const newTaskList = Tasks.filter((item) => {
            return item.id !== id
        })

        setTask(newTaskList)
    }

    function UncompleteTask(id: string){
        
    }

    return(
        <View style={styles.global}>
            <View style={styles.header}>
                <Image source={require('../../../assets/Logo.png')}/>
            </View>
           

            <View style={styles.form}>
                <TextInput 
                    onChangeText={setTaskText}
                    style={styles.input}
                    placeholder="Digite sua tarefa"
                    placeholderTextColor='#8C8C8C'
                    value={TaskText}
                />

                <TouchableOpacity style={styles.buttonAddTask} onPress={AddTask}>
                    <Text style={styles.textButtonAddTask}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.progressBarBorder}>
                <View style={styles.progressBar}>
                    <View style={styles.progressBarCounter}>
                        <Text style={styles.createdTaskText}>Criadas</Text>

                        <View style={styles.taskNumber}>
                            <Text style={styles.taskNumberText}>
                                {Tasks.length}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.progressBarCounter}>
                        <Text style={styles.completedTaskText}>Concluídas</Text>

                        <View style={styles.taskNumber}>
                            <Text style={styles.taskNumberText}>
                                {TasksCompleted.length}
                            </Text>
                        </View>
                    </View>

                </View>
            </View>

            {Tasks.length === 0 && TasksCompleted.length === 0 && (
                <ListEmpty />
            )}

            {/* {Tasks.length > 0 && (
                <FlatList
                    data={Tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Task 
                            key={item.id} 
                            id={item.id}
                            task={item.task} 
                            onRemove={() => RemoveTask(item.id)}
                            CompleteTask={() => CompleteTask(item.id)}
                        />
                    )}
                />
            )} */}

            
            {AllTasks.length > 0 && (
                <FlatList
                    data={AllTasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Task 
                            key={item.id} 
                            id={item.id}
                            task={item.task} 
                            onRemove={() => RemoveTask(item.id)}
                            CompleteTask={() => CompleteTask(item.id)}
                        />
                    )}
                />
            )}

            {/* {TasksCompleted.length > 0 && (
                <FlatList
                    data={TasksCompleted}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TaskCompleted 
                            key={item.id} 
                            id={item.id}
                            task={item.task} 
                            UncompleteTask={() => UncompleteTask(item.id)}
                            RemoveCompletedTask={() => RemoveCompletedTask(item.id)}
                        />
                    )}
                />
            )} */}

        </View>
    )
}
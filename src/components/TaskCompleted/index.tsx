import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
import { TaskProps } from "../Task";
import { styles } from "./styles";


export function TaskCompleted({ task, RemoveCompletedTask, CompleteTask }: TaskProps){
    return(
       <View style={styles.container}>
            <View style={styles.taskContainer}> 
                <View style={styles.containerCompleteTask}>
                    <TouchableOpacity onPress={CompleteTask}>
                        <Ionicons style={styles.buttonCompleteTask} name="checkmark-circle" size={20} color='#5E60CE'/>
                    </TouchableOpacity>

                    <Text style={styles.taskTextContent}>
                        {task}
                    </Text>
                </View>

               <View>
                    <TouchableOpacity>
                            <Ionicons 
                                name="trash" 
                                size={18} 
                                color='#808080'
                                onPress={RemoveCompletedTask}
                            />
                    </TouchableOpacity>
               </View>
            </View>
       </View>
    )
}
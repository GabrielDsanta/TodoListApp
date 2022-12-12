import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Ionicons from "@expo/vector-icons/Ionicons"

export type TaskProps = {
    task: string
    id: string
    onRemove?: () => void
    CompleteTask?: () => void
    UncompleteTask?: () => void
    RemoveCompletedTask?: ()=> void
}

export function Task({ task, onRemove, CompleteTask }: TaskProps){
    return(
       <View style={styles.container}>
            <View style={styles.taskContainer}>
                <View style={styles.containerCompleteTask}>
                    <TouchableOpacity onPress={CompleteTask}>
                        <View style={styles.buttonCompleteTask}></View>
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
                                onPress={onRemove}
                            />
                    </TouchableOpacity>
               </View>
            </View>
       </View>
    )
}

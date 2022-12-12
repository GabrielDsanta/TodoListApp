import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function ListEmpty(){
    return(
        <View style={styles.listEmpty}>
            <View style={styles.listEmptyImage}>
                <Image source={require('../../../assets/Clipboard.png')}/>
            </View>
 
            <Text style={styles.listEmptyTextStrong}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.listEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}
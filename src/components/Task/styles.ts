import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },

    taskContainer: {
        flexDirection: 'row',
        backgroundColor: '#262626',
        width: 330,
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: 'rgba(128, 128, 128, 0.3)' ,
        borderRadius: 3,
    },

    containerCompleteTask: {
        flexDirection: 'row',
        flexShrink: 1,
        alignItems: 'center',
        width: 235,
    },

    buttonCompleteTask: {
        height: 20,
        width: 19,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        borderRadius: 50,
        marginRight: 10,
    },

    taskTextContent: {
        color: '#FFF'
    }
})
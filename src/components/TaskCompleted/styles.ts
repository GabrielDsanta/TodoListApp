

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
        borderRadius: 3,
    },

    containerCompleteTask: {
        flexDirection: 'row',
        flexShrink: 1,
        alignItems: 'center',
        width: 235,
    },

    buttonCompleteTask: {
        marginRight: 10,
    },

    taskTextContent: {
        color: '#808080',
        textDecorationLine: 'line-through'
    }
})
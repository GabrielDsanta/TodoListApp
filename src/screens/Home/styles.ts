import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },

    header: {
        backgroundColor: '#0D0D0D',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',

    },

    input: {
        backgroundColor: '#262626',
        height: 56,
        width: 270,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        marginTop: -30,
        borderColor: '#0D0D0D',
        borderWidth: 1.2,
    },

    buttonAddTask: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        marginTop: -30
    },

    textButtonAddTask: {
        color: '#FFF',
        fontSize: 24,
    },

    form: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    listEmpty: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 40,
    },

    listEmptyImage: {
        marginBottom: 10,
    },

    listEmptyTextStrong: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16
    },

    listEmptyText: {
        color: '#808080',
    },

    progressBar: {    
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        width: 330,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 10,
    },

    progressBarBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
    },

    progressBarCounter: {
        flexDirection: 'row',
    },

    createdTaskText: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 30,
    },

    completedTaskText: {
        color: '#8284FA',
        fontWeight: 'bold',
        marginRight: 8,
        marginBottom: 30,
    },

    taskNumber: {
        backgroundColor: '#333333',
        height: 20,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

    taskNumberText: {
        color: '#FFF'
    }


})
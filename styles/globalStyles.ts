import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        display: 'flex'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        color: 'white',
        backgroundColor: 'black',
        margin: 15
    },
    titleText: {
        color: 'white',
        fontWeight: 300,
        marginTop: 10
    },
    subSectionTitle: {
        color: 'white',
        fontWeight: 600,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    addButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        // backgroundColor: '#FF5733',
        backgroundColor: 'black',
        borderRadius: 20,
    },
    workoutContainer: {
        backgroundColor: '#353839',
        borderRadius: 20,
        color: 'white',
        margin: 10
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },

});
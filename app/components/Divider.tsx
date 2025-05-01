import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => {
    return <View style={styles.spacing}>
        <View style={styles.divider} />
    </View>
}

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    spacing: {
        marginTop: 20,
        marginBottom: 20,
    }
})

export default Divider;
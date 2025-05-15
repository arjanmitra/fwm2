import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View, Dimensions } from 'react-native';

interface AuthLoginButtonProps {
    title: string
    onPress: () => void
    width: number
    bgColor: string
}

const screenWidth = Dimensions.get('window').width;

const GenericButton: React.FC<AuthLoginButtonProps> = ({ onPress, title, width, bgColor }) => {

    const styles = StyleSheet.create({
        button: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: bgColor,
            borderRadius: 20,
            paddingVertical: 12,
            paddingHorizontal: 20,
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
            width: width,
            height: 40,
            marginTop: 10,
            marginBottom: 10
        },
        logo: {
            width: 30,
            height: 30,
            marginRight: 10,
        },
        text: {
            color: 'white',
            fontWeight: '500',

        },
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};



export default GenericButton;
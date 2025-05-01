import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View, Dimensions } from 'react-native';

interface AuthLoginButtonProps {
    provider: string
    onPress: () => void
}

const screenWidth = Dimensions.get('window').width;

const AuthLoginButton: React.FC<AuthLoginButtonProps> = ({ onPress, provider }) => {

    const styles = StyleSheet.create({
        button: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingVertical: 12,
            paddingHorizontal: 20,
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 2 },
            width: screenWidth - 100,
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
            color: '#000',
            fontWeight: '500',

        },
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {provider === 'Google' ?
                <Image
                    source={require('../../../assets/images/googleIcon.png')}
                    style={styles.logo}
                /> : provider === 'Facebook' ?
                    <Image
                        source={require('../../../assets/images/facebookIcon.png')}
                        style={styles.logo}
                    /> :
                    <Image
                        source={require('../../../assets/images/instagramIcon.png')}
                        style={styles.logo}
                    />}
            <Text style={styles.text}>Login with {provider}</Text>
        </TouchableOpacity>
    );
};



export default AuthLoginButton;
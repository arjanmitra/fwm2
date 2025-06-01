import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions, ScrollView } from 'react-native';
import Divider from './Divider';
import AuthLoginButton from './buttons/AuthLoginButton';
import { ThemedText } from '@/components/ThemedText';
import CloseButton from '@/components/CloseButton';

interface LoginModalProps {
    visible: boolean;
    onClose: () => void;
    onLogin: (email: string, password: string) => void;
}

const width = Dimensions.get('window').width

const LoginModal: React.FC<LoginModalProps> = ({ visible, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                if (email === user.email) onLogin(email, password);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/user-not-found') {
                    console.log('No user found with this email.');
                } else if (errorCode === 'auth/wrong-password') {
                    console.log('Incorrect password.');
                } else {
                    console.log('Login error:', errorMessage);
                }
            });
    };

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={styles.centeredView}
            >
                <ScrollView style={styles.modalView}>
                    <View style={styles.titleContainer}>
                        <ThemedText type={'title'} style={styles.title}>Login</ThemedText>
                        <CloseButton onPress={onClose} />
                        {/* <Text style={styles.title}>Login</Text> */}
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor='white'
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor='white'
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <Divider />
                    <AuthLoginButton onPress={() => console.log('press')} provider='Google' />
                    <AuthLoginButton onPress={() => console.log('press')} provider='Facebook' />
                    <AuthLoginButton onPress={() => console.log('press')} provider='Instagram' />
                    <Text style={styles.registerTextOuter}>New to fitWithMit? <Text style={styles.registerText}>Register here</Text>.</Text>
                    {/* <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity> */}
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        paddingTop: 80,
        backgroundColor: '#353839',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start"
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300',
        marginBottom: 16,
        textAlign: 'center',
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'white',
        borderRadius: 0,
        marginBottom: 12,
        padding: 10,
        width: width - 120,
        alignSelf: 'center',
        color: 'white'
    },
    closeButton: {
        marginTop: 12,
        alignItems: 'center',
    },
    closeText: {
        color: '#007bff',
    },
    loginButton: {
        backgroundColor: 'purple',
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
        borderRadius: 20,
        width: width - 100,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    loginText: {
        color: 'white',
        fontWeight: '500'
    },
    registerText: {
        textDecorationLine: 'underline'
    },
    registerTextOuter: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 11,
        margin: 10
    }
});

export default LoginModal;

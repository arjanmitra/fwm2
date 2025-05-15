import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import React, { useState } from "react";
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions } from "react-native";
import CloseButton from "@/components/CloseButton";

interface SignupModalProps {
    visible: boolean
    onClose: () => void
}

const width = Dimensions.get('window').width

const SignupModal: React.FC<SignupModalProps> = ({ visible, onClose }) => {
    return (
        <Modal
            animationType='slide'
            transparent
            visible={visible}
            onRequestClose={onClose}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.centeredView}>

            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 30,
        fontWeight: '300',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: 'gray',
        borderRadius: 0,
        marginBottom: 12,
        padding: 10,
        width: width - 120,
        alignSelf: 'center'
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
        alignSelf: 'center',
        fontSize: 11,
        margin: 10
    }
});

export default SignupModal
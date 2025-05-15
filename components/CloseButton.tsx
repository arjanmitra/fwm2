import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

interface CloseButtonProps {
    onPress: () => void
}

const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ alignSelf: 'flex-end', paddingBottom: 30 }}>
            <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
    )
}

export default CloseButton
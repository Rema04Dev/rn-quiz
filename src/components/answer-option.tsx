import { View, Text, StyleSheet, Pressable } from "react-native";

type AnswerOption = {
    option: string;
    isSelected?: boolean;
    onPress: () => void;
};

export function AnswerOption({ option, isSelected, onPress } : AnswerOption) {
    return (
        <Pressable 
            style={[styles.container, isSelected ? styles.active : {} ]}
            onPress={onPress}
            >
            <Text>{option}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 20,
        borderColor: 'lightgray',
        borderRadius: 100,
    },
    active: {
        backgroundColor: '#E1F396',
        borderColor: '#E1F396',
    }
})
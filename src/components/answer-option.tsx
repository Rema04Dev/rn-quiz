import { View, Text, StyleSheet, Pressable } from "react-native";
import { useQuiz } from "../providers/quiz-provider";

type AnswerOption = {
    option: string;
};

export function AnswerOption({ option }: AnswerOption) {
    const { selectedOption, setSelectedOption } = useQuiz();
    const isSelected = option === selectedOption;

    return (
        <Pressable
            style={[styles.container, isSelected ? styles.active : {}]}
            onPress={() => setSelectedOption(option)}
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
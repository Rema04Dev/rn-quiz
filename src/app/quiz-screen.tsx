import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import { QuestionCard } from "../components/question-card";
import Feather from '@expo/vector-icons/Feather';

import { CustomButton } from "../components/custom-button";
import { Card } from "../components/card";
import { useQuiz } from "../providers/quiz-provider";

export function QuizScreen() {
    const { 
        currentQuestion, 
        onNextQuestion, 
        questions, 
        questionIndex,
        score
    } = useQuiz();

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                {/* Header */}
                <View>
                    <Text style={styles.title}>Question {questionIndex + 1}/{questions.length}</Text>
                </View>

                {/* Body */}
                {
                    currentQuestion ? (
                        <View>
                        <QuestionCard question={currentQuestion} />
                        <Text style={styles.time}>20 sec</Text>
                    </View>
                    ) : (<Card title="Game over">
                        <Text>Correct answers: {score}/{questions.length}</Text>
                    </Card>)
                }
               

                {/* Footer */}
                <CustomButton
                    title="Next"
                    onPress={onNextQuestion}
                    rightIcon={
                        <Feather
                            name="arrow-right"
                            size={16}
                            color={'white'}
                        />
                    } />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FDF3F4',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        textAlign: 'center',
        color: '#005055'
    },
    time: {
        textAlign: 'center',
        color: '#005055',
        marginTop: 15,
        fontWeight: 'bold',
    },
})
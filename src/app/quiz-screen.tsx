import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import { QuestionCard } from "../components/question-card";
import Feather from '@expo/vector-icons/Feather';

import { CustomButton } from "../components/custom-button";
import { Card } from "../components/card";
import { useQuiz } from "../providers/quiz-provider";
import { useEffect } from "react";
import { useTimer } from "../hooks/use-timer";
import LottieView from 'lottie-react-native';
import party from '../../assets/party.json';

export function QuizScreen() {
    const {
        currentQuestion,
        onNextQuestion,
        questions,
        questionIndex,
        score,
        bestScore
    } = useQuiz();

    const { time, startTimer, clearTimer } = useTimer(10);

    useEffect(() => {
        startTimer();

        return () => {
            clearTimer();
        };
    }, [currentQuestion]);

    useEffect(() => {
        if (time <= 0) {
            onNextQuestion();
        };
    }, [time])

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
                            <Text style={styles.time}>{time} sec</Text>
                        </View>
                    ) : (
                        <>
                            <LottieView source={party} style={StyleSheet.absoluteFill} autoPlay loop={false} />
                            <Card title="Game over">
                                <Text style={{ textAlign: 'center' }}>Correct answers: {score}/{questions.length}</Text>
                                <Text style={{ textAlign: 'center' }}>Best score: {bestScore}</Text>
                            </Card>
                        </>
                    )
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
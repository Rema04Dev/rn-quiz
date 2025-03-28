import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
import { QuestionCard } from "../components/question-card";
import Feather from '@expo/vector-icons/Feather';

import questions from '../questions';
import { CustomButton } from "../components/custom-button";
import { useState } from "react";
import { Card } from "../components/card";

export function QuizScreen() {
    const [questionIndex, setQuestionIndex] = useState(0);

    const onNext = () => {
        setQuestionIndex((prev) => prev + 1);
    }
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                {/* Header */}
                <View>
                    <Text style={styles.title}>Question {questionIndex + 1}/5</Text>
                </View>

                {/* Body */}
                {
                    questions[questionIndex] ? (
                        <View>
                        <QuestionCard question={questions[questionIndex]} />
                        <Text style={styles.time}>20 sec</Text>
                    </View>
                    ) : (<Card title="Game over" />)
                }
               

                {/* Footer */}
                <CustomButton
                    title="Next"
                    onPress={onNext}
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
import { View } from "react-native";
import { AnswerOption } from "./answer-option";
import { Question } from "../types";
import { Card } from "./card";
import { useQuiz } from "../providers/quiz-provider";

type QuestionCard = {
    question: Question;
};

export function QuestionCard({ question }: QuestionCard) {
    return (
        <Card title={question.title}>
            <View style={{ gap: 5 }}>
                {
                    question.options.map((item) => (
                        <AnswerOption
                            key={item}
                            option={item}
                        />
                    ))
                }
            </View>
        </Card>
    )
};

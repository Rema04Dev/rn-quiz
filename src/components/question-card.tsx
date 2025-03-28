import { View } from "react-native";
import { AnswerOption } from "./answer-option";
import { Question } from "../types";
import { useState } from "react";
import { Card } from "./card";

type QuestionCard = {
    question: Question;
};

export function QuestionCard({ question }: QuestionCard) {
    const [selectedOption, setSelectedOption] = useState<string | null>('');

    const onOptionSelected = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <Card title={question.title}>
            <View style={{ gap: 5 }}>
                {
                    question.options.map((item) => (
                        <AnswerOption
                            key={item}
                            option={item}
                            isSelected={selectedOption === item}
                            onPress={() => onOptionSelected(item)}
                        />
                    ))
                }
            </View>
        </Card>
    )
};

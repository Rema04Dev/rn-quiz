import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { Question } from "../types";
import rawQuestions from "../questions";

type QuizContextData = {
    questions: Question[];
    currentQuestion: Question | undefined;
    onNextQuestion: () => void;
    questionIndex: number;
    selectedOption: string | null,
    setSelectedOption: Dispatch<SetStateAction<string | null>>,
    score: number
}

const QuizContext = createContext<QuizContextData | null>(null);

export function useQuiz() {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuiz should be within QuizProvider')
    };

    return context;
};


export function QuizProvider({ children }: PropsWithChildren) {
    const [questions, setQuestions] = useState(rawQuestions);
    const [questionIndex, setQuestionIndex] = useState(0);
    const currentQuestion = questions[questionIndex] as Question | undefined;
    const [selectedOption, setSelectedOption] = useState<string | null>('');

    const [score, setScore] = useState(0);

    const isFinished = questionIndex >= questions.length;

    const restart = () => {
        setQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
    }
    const onNextQuestion = () => {
        if (isFinished) {
            restart();
            return;
        }

        // check if answer is correct
        if (selectedOption === currentQuestion?.correctAnswer) {
            setScore((prev) => prev + 1);
        }
        setQuestionIndex((prev) => prev + 1);
    };

    return (
        <QuizContext.Provider value={{
            questions,
            onNextQuestion,
            questionIndex,
            currentQuestion,
            selectedOption,
            setSelectedOption,
            score,
        }}>
            {children}
        </QuizContext.Provider>
    )
}
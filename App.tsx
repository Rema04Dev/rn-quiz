import { StatusBar } from 'expo-status-bar';
import { QuizScreen } from './src/app/quiz-screen';
import { QuizProvider } from './src/providers/quiz-provider';

export default function App() {
  return (
    <>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      <StatusBar style="auto" />
    </>
  );
}

import { StatusBar } from 'expo-status-bar';
import { QuizScreen } from './src/app/quiz-screen';

export default function App() {
  return (
    <>
      <QuizScreen />
      <StatusBar style="auto" />
    </>
  );
}

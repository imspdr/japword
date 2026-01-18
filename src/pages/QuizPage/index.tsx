import { FC } from 'react';
import { useQuiz } from '../../hooks/useQuiz';
import QuizStart from '../../components/QuizStart';
import QuizGame from '../../components/QuizGame';
import QuizResult from '../../components/QuizResult';

const QuizPage: FC = () => {
  const { phase, startQuiz, handleAnswer } = useQuiz();

  if (phase === 'start') {
    return <QuizStart onStart={startQuiz} />;
  }

  if (phase === 'result') {
    return <QuizResult onRetry={startQuiz} />;
  }

  return <QuizGame onAnswer={handleAnswer} />;
};

export default QuizPage;

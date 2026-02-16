import { FC } from 'react';
import { useQuiz } from './hooks/useQuiz';
import QuizStart from './components/QuizStart';
import QuizGame from './components/QuizGame';
import QuizResult from './components/QuizResult';

const QuizPage: FC = () => {
  const { phase, questions, currentIndex, score, failedWords, startQuiz, handleAnswer, retryQuiz } = useQuiz();

  if (phase === 'start') {
    return <QuizStart onStart={startQuiz} />;
  }

  if (phase === 'result') {
    return (
      <QuizResult
        onRetry={retryQuiz}
        score={score}
        totalQuestions={questions.length}
        failedWords={failedWords}
      />
    );
  }

  return (
    <QuizGame
      onAnswer={handleAnswer}
      question={questions[currentIndex]}
      currentIndex={currentIndex}
      totalQuestions={questions.length}
      score={score}
    />
  );
};

export default QuizPage;

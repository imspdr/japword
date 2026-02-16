import { FC, useState } from 'react';
import { useQuiz, QuizConfig } from './hooks/useQuiz';
import QuizStart from './components/QuizStart';
import QuizGame from './components/QuizGame';
import QuizResult from './components/QuizResult';
import { useModal, Typography, Button } from '@imspdr/ui';
import {
  ModalContent,
  FormItem,
  Input,
  CheckboxGroup,
  CheckboxLabel
} from './styled';

const QuizPage: FC = () => {
  const { phase, questions, currentIndex, score, failedWords, startQuiz, handleAnswer, retryQuiz } = useQuiz();
  const { openModal, closeModal } = useModal();

  const handleStartClick = () => {
    const SettingModal = () => {
      const [count, setCount] = useState(10);
      const [types, setTypes] = useState<QuizConfig['types']>(['kanji-to-meaning', 'kanji-to-reading', 'reading-to-meaning']);

      const toggleType = (type: QuizConfig['types'][number]) => {
        setTypes(prev =>
          prev.includes(type)
            ? prev.filter(t => t !== type)
            : [...prev, type]
        );
      };

      const handleConfirm = () => {
        if (types.length === 0) {
          alert('최소 하나 이상의 문제 유형을 선택해주세요.');
          return;
        }
        startQuiz({ questionCount: count, types });
        closeModal();
      };

      return (
        <ModalContent>
          <FormItem>
            <Typography variant="body" level={2} bold>문제 수</Typography>
            <Input
              type="number"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 0))}
              min={1}
            />
          </FormItem>
          <FormItem>
            <Typography variant="body" level={2} bold>문제 유형</Typography>
            <CheckboxGroup>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={types.includes('kanji-to-meaning')}
                  onChange={() => toggleType('kanji-to-meaning')}
                />
                <Typography variant="body" level={2}>한자 → 뜻</Typography>
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={types.includes('kanji-to-reading')}
                  onChange={() => toggleType('kanji-to-reading')}
                />
                <Typography variant="body" level={2}>한자 → 읽기</Typography>
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={types.includes('reading-to-meaning')}
                  onChange={() => toggleType('reading-to-meaning')}
                />
                <Typography variant="body" level={2}>요미가나 → 뜻</Typography>
              </CheckboxLabel>
            </CheckboxGroup>
          </FormItem>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <Button variant="outlined" fullWidth onClick={closeModal}>취소</Button>
            <Button variant="contained" fullWidth onClick={handleConfirm}>시작하기</Button>
          </div>
        </ModalContent>
      );
    };

    openModal(<SettingModal />, {
      title: '퀴즈 설정',
    });
  };

  if (phase === 'start') {
    return <QuizStart onStart={handleStartClick} />;
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


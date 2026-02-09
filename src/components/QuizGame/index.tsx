import { FC } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { Typography, Button } from '@imspdr/ui';
import {
  currentQuestionAtom,
  quizCurrentIndexAtom,
  quizScoreAtom,
  quizQuestionsAtom
} from '../../store/quizAtom';
import {
  Container,
  QuizCard,
  Header,
  QuestionSection,
  QuestionLabel,
  QuestionText,
  OptionsGrid,
  QuizOptionButton
} from './styled';

interface QuizGameProps {
  onAnswer: (option: string) => void;
}

const QuizGame: FC<QuizGameProps> = ({ onAnswer }) => {
  const question = useAtomValue(currentQuestionAtom);
  const currentIndex = useAtomValue(quizCurrentIndexAtom);
  const totalQuestions = useAtomValue(quizQuestionsAtom).length;
  const score = useAtomValue(quizScoreAtom);

  if (!question) return null;

  return (
    <Container>
      <QuizCard>
        <Header>
          <Typography variant="body" level={2} color="foreground.2">
            문제 {currentIndex + 1} / {totalQuestions}
          </Typography>
          <Typography variant="body" level={2} bold>
            점수: {score}
          </Typography>
        </Header>

        <QuestionSection>
          <QuestionLabel variant="body" level={2}>
            {question.type === 'kanji-to-meaning' ? '다음 단어의 뜻은?' :
              question.type === 'kanji-to-reading' ? '다음 단어의 읽는 법은?' :
                question.type === 'image-to-meaning' ? '이 단어의 뜻은?' :
                  '다음 단어의 뜻은?'}
          </QuestionLabel>
          <QuestionText variant="title" level={1}>
            {question.question}
          </QuestionText>
        </QuestionSection>

        <OptionsGrid>
          {question.options.map((option, idx) => (
            <QuizOptionButton key={idx} onClick={() => onAnswer(option)} variant="ghost">
              <Typography variant="body" level={1}>
                {option}
              </Typography>
            </QuizOptionButton>
          ))}
        </OptionsGrid>
      </QuizCard>
    </Container>
  );
};

export default QuizGame;

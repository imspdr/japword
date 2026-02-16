import { FC } from 'react';
import { Typography, Button } from '@imspdr/ui';
import { Question } from '../../hooks/useQuiz';
import {
  Container,
  QuizCard,
  Header,
  QuestionSection,
  QuestionLabelWrapper,
  QuestionTextWrapper,
  OptionsGrid,
  OptionItem,
} from './styled';

interface QuizGameProps {
  onAnswer: (option: string) => void;
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  score: number;
}

const QuizGame: FC<QuizGameProps> = ({ onAnswer, question, currentIndex, totalQuestions, score }) => {
  if (!question) return null;

  return (
    <Container>
      <QuizCard>
        <Header>
          <Typography variant="body" level={2} color="foreground.2">
            문제 {currentIndex + 1} / {totalQuestions}
          </Typography>
          <Typography variant="body" level={2} bold color="foreground.1">
            점수: {score}
          </Typography>
        </Header>

        <QuestionSection>
          <QuestionLabelWrapper>
            <Typography variant="body" level={2} color="foreground.2">
              {question.type === 'kanji-to-meaning' ? '다음 단어의 뜻은?' :
                question.type === 'kanji-to-reading' ? '다음 단어의 읽는 법은?' :
                  question.type === 'image-to-meaning' ? '이 단어의 뜻은?' :
                    '다음 단어의 뜻은?'}
            </Typography>
          </QuestionLabelWrapper>
          <QuestionTextWrapper>
            <Typography variant="title" level={1} color="primary.1" bold>
              {question.question}
            </Typography>
          </QuestionTextWrapper>
        </QuestionSection>

        <OptionsGrid>
          {question.options.map((option, idx) => (
            <OptionItem key={idx}>
              <Button
                onClick={() => onAnswer(option)}
                variant="outlined"
                color="primary.1"
                fullWidth
                size="lg"
              >
                <Typography variant="body" level={1} color="foreground.1">
                  {option}
                </Typography>
              </Button>
            </OptionItem>
          ))}
        </OptionsGrid>
      </QuizCard>
    </Container>
  );
};

export default QuizGame;

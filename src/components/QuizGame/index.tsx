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
          <Typography variant="body" level={2} style={{ color: 'var(--imspdr-foreground-fg2)' }}>
            문제 {currentIndex + 1} / {totalQuestions}
          </Typography>
          <Typography variant="body" level={2} style={{ fontWeight: 600 }}>
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
            <Button key={idx} onClick={() => onAnswer(option)} style={{ padding: '20px 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: '12px', border: '1px solid var(--imspdr-border-border1)', background: 'var(--imspdr-background-bg1)' }}>
              <Typography variant="body" level={1}>
                {option}
              </Typography>
            </Button>
          ))}
        </OptionsGrid>
      </QuizCard>
    </Container>
  );
};

export default QuizGame;

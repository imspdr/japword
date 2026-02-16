import { FC, useState } from 'react';
import { Typography, Button } from '@imspdr/ui';
import { QuizConfig } from '../../hooks/useQuiz';
import {
  Container,
  QuizCard,
  StartTitle,
  StartDescription,
  SettingsContainer,
  FormItem,
  Input,
  CheckboxGroup,
  CheckboxLabel,
} from './styled';

interface QuizStartProps {
  onStart: (config: QuizConfig) => void;
}

const QuizStart: FC<QuizStartProps> = ({ onStart }) => {
  const [count, setCount] = useState(10);
  const [types, setTypes] = useState<QuizConfig['types']>(['kanji-to-meaning', 'kanji-to-reading', 'reading-to-meaning']);

  const toggleType = (type: QuizConfig['types'][number]) => {
    setTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleStart = () => {
    if (types.length === 0) {
      alert('최소 하나 이상의 문제 유형을 선택해주세요.');
      return;
    }
    onStart({ questionCount: count, types });
  };

  return (
    <Container>
      <QuizCard>
        <StartTitle variant="title" level={2}>
          단어 퀴즈
        </StartTitle>
        <StartDescription variant="body" level={1}>
          등록된 단어 중 랜덤으로 출제됩니다.<br />
          문제 수와 유형을 설정하고 시작해보세요.
        </StartDescription>

        <SettingsContainer>
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
        </SettingsContainer>

        <Button onClick={handleStart} fullWidth variant="contained" color="primary.1" size="lg">
          시작하기
        </Button>
      </QuizCard>
    </Container>
  );
};

export default QuizStart;


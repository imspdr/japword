import { useState, useCallback } from 'react';
import { useWords, WordWithId } from '@/hooks/useWords';

export interface Question {
  word: WordWithId;
  type: 'kanji-to-meaning' | 'kanji-to-reading' | 'reading-to-meaning' | 'image-to-meaning';
  question: string;
  answer: string;
  options: string[];
}

export type QuizPhase = 'start' | 'quiz' | 'result';

export interface QuizConfig {
  questionCount: number;
  types: ('kanji-to-meaning' | 'kanji-to-reading' | 'reading-to-meaning')[];
}

export const useQuiz = () => {
  const { data: words } = useWords();
  const [phase, setPhase] = useState<QuizPhase>('start');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [failedWords, setFailedWords] = useState<WordWithId[]>([]);
  const [lastConfig, setLastConfig] = useState<QuizConfig | null>(null);

  const startQuiz = useCallback((config: QuizConfig) => {
    if (!words || words.length === 0) return;

    setLastConfig(config);

    // Shuffle and pick requested number of words
    const shuffledWords = [...words]
      .sort(() => 0.5 - Math.random())
      .slice(0, config.questionCount);

    const generatedQuestions: Question[] = shuffledWords.map((word) => {
      // Filter allowed types based on config and word properties
      const wordTypes = !word.char
        ? ['reading-to-meaning'] as const
        : ['kanji-to-meaning', 'kanji-to-reading', 'reading-to-meaning'] as const;

      const allowedTypes = wordTypes.filter(t => config.types.includes(t as any));

      // Fallback if no types are allowed (shouldn't happen with proper config UI, but just in case)
      const finalTypes = allowedTypes.length > 0 ? allowedTypes : wordTypes;
      const type = finalTypes[Math.floor(Math.random() * finalTypes.length)];

      let questionText = '';
      let correctAnswer = '';
      let options: string[] = [];

      // Helper to valid options (ensure no duplicates and include correct answer)
      const generateOptions = (correct: string, source: string[]) => {
        const others = source.filter(s => s !== correct);
        const shuffledOthers = others.sort(() => 0.5 - Math.random()).slice(0, 3);
        const combined = [...shuffledOthers, correct];
        // Ensure we have 4 options even if there are fewer words
        while (combined.length < 4 && source.length > combined.length) {
          const extra = source.filter(s => !combined.includes(s))[Math.floor(Math.random() * source.length)];
          if (extra) combined.push(extra);
        }
        return combined.sort(() => 0.5 - Math.random());
      };

      if (type === 'kanji-to-meaning') {
        questionText = word.char || word.jp;
        correctAnswer = word.ko;
        options = generateOptions(word.ko, words.map(w => w.ko));
      } else if (type === 'kanji-to-reading') {
        questionText = word.char || word.ko;
        correctAnswer = word.jp;
        options = generateOptions(word.jp, words.map(w => w.jp));
      } else { // reading-to-meaning
        questionText = word.jp;
        correctAnswer = word.ko;
        options = generateOptions(word.ko, words.map(w => w.ko));
      }

      return {
        word,
        type: !word.char && type === 'kanji-to-reading' ? 'image-to-meaning' as const : type as Question['type'],
        question: questionText,
        answer: correctAnswer,
        options
      };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setFailedWords([]);
    setPhase('quiz');
  }, [words]);

  const handleAnswer = useCallback((selectedOption: string) => {
    const currentQuestion = questions[currentIndex];
    if (!currentQuestion) return;

    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setFailedWords(prev => [...prev, currentQuestion.word]);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setPhase('result');
    }
  }, [questions, currentIndex]);

  const retryQuiz = useCallback(() => {
    if (lastConfig) {
      startQuiz(lastConfig);
    }
  }, [lastConfig, startQuiz]);

  return {
    phase,
    questions,
    currentIndex,
    score,
    failedWords,
    startQuiz,
    handleAnswer,
    retryQuiz
  };
};


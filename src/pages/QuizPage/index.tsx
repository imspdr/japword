import { FC } from 'react';
import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useWords } from '../../hooks/useWords';
import {
  quizPhaseAtom,
  quizQuestionsAtom,
  quizCurrentIndexAtom,
  quizScoreAtom,
  quizFailedWordsAtom,
  Question
} from '../../store/quizAtom';
import QuizStart from '../../components/QuizStart';
import QuizGame from '../../components/QuizGame';
import QuizResult from '../../components/QuizResult';

const QUESTIONS_PER_QUIZ = 10;

const QuizPage: FC = () => {
  const { data: words } = useWords();
  const [phase, setPhase] = useAtom(quizPhaseAtom);
  const setQuestions = useSetAtom(quizQuestionsAtom);
  const [currentIndex, setCurrentIndex] = useAtom(quizCurrentIndexAtom);
  const setScore = useSetAtom(quizScoreAtom);
  const setFailedWords = useSetAtom(quizFailedWordsAtom);
  const questions = useAtomValue(quizQuestionsAtom);

  const startQuiz = () => {
    if (!words || words.length === 0) return;

    // Shuffle and pick 10 words (or less if not enough)
    const shuffledWords = [...words]
      .sort(() => 0.5 - Math.random())
      .slice(0, QUESTIONS_PER_QUIZ);

    const generatedQuestions: Question[] = shuffledWords.map((word) => {
      // If no char (Kanji), valid types are only meaning related. 
      // 'kanji-to-meaning' will use jp as question, 'reading-to-meaning' uses jp as question.
      const types = !word.char
        ? ['reading-to-meaning'] as const
        : ['kanji-to-meaning', 'kanji-to-reading', 'reading-to-meaning'] as const;

      const type = types[Math.floor(Math.random() * types.length)];

      let questionText = '';
      let correctAnswer = '';
      let options: string[] = [];

      // Helper to valid options (ensure no duplicates and include correct answer)
      const generateOptions = (correct: string, source: string[]) => {
        const others = source.filter(s => s !== correct);
        const shuffledOthers = others.sort(() => 0.5 - Math.random()).slice(0, 3);
        return [...shuffledOthers, correct].sort(() => 0.5 - Math.random());
      };

      if (type === 'kanji-to-meaning') {
        questionText = word.char || word.jp; // Fallback to JP if no char
        correctAnswer = word.ko;
        options = generateOptions(word.ko, words.map(w => w.ko));
      } else if (type === 'kanji-to-reading') {
        questionText = word.char || word.ko; // If no char, maybe this type isn't valid? But most have char.
        correctAnswer = word.jp;
        options = generateOptions(word.jp, words.map(w => w.jp));
      } else { // reading-to-meaning
        questionText = word.jp;
        correctAnswer = word.ko;
        options = generateOptions(word.ko, words.map(w => w.ko));
      }

      return {
        word,
        type: !word.char && type === 'kanji-to-reading' ? 'image-to-meaning' : type,
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
  };

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = questions[currentIndex];
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
  };

  if (phase === 'start') {
    return <QuizStart onStart={startQuiz} />;
  }

  if (phase === 'result') {
    return <QuizResult onRetry={startQuiz} />;
  }

  return <QuizGame onAnswer={handleAnswer} />;
};

export default QuizPage;

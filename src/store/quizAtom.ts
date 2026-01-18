import { atom } from 'jotai';
import { WordWithId } from '../hooks/useWords';

export interface Question {
  word: WordWithId;
  type: 'kanji-to-meaning' | 'kanji-to-reading' | 'reading-to-meaning' | 'image-to-meaning';
  question: string;
  answer: string;
  options: string[];
}

export type QuizPhase = 'start' | 'quiz' | 'result';

// State Atoms
export const quizPhaseAtom = atom<QuizPhase>('start');
export const quizQuestionsAtom = atom<Question[]>([]);
export const quizCurrentIndexAtom = atom<number>(0);
export const quizScoreAtom = atom<number>(0);
export const quizFailedWordsAtom = atom<WordWithId[]>([]);

// Read-only derived atoms (optional, but good for convenience)
export const currentQuestionAtom = atom((get) => {
  const questions = get(quizQuestionsAtom);
  const index = get(quizCurrentIndexAtom);
  return questions[index];
});

export const isLastQuestionAtom = atom((get) => {
  const questions = get(quizQuestionsAtom);
  const index = get(quizCurrentIndexAtom);
  return index === questions.length - 1;
});

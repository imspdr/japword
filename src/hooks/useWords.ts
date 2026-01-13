import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useQuery } from '@tanstack/react-query';

export interface Word {
  jp: string;
  ko: string;
  char: string;
  description: string;
  creator: string;
  createdAt: string;
}

export interface WordWithId extends Word {
  id: string;
}

const MOCK_WORDS: WordWithId[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `mock-${i}`,
  jp: i % 3 === 0 ? "ねこ" : i % 3 === 1 ? "いぬ" : "とり",
  ko: i % 3 === 0 ? "고양이" : i % 3 === 1 ? "개" : "새",
  char: i % 3 === 0 ? "猫" : i % 3 === 1 ? "犬" : "鳥",
  description: "테스트용 예문입니다. 클릭하여 의미를 확인하세요.",
  creator: 'system',
  createdAt: new Date().toISOString(),
}));

const fetchWords = async (): Promise<WordWithId[]> => {
  const q = query(collection(db, "words"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const realWords = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Word),
  }));

  if (realWords.length < 20) {
    return [...realWords, ...MOCK_WORDS.slice(0, 20 - realWords.length)];
  }

  return realWords;
};

export const useWords = () => {
  return useQuery<WordWithId[]>({
    queryKey: ['words'],
    queryFn: fetchWords,
  });
};

export const addWord = async (word: Omit<Word, 'id'>) => {
  const docRef = await addDoc(collection(db, "words"), word);
  return docRef.id;
};
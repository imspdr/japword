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

const fetchWords = async (): Promise<WordWithId[]> => {
  const q = query(collection(db, "words"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const realWords = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Word),
  }));

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
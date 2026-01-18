import { useState, useCallback, useRef } from 'react';

interface GoogleIMEResponse {
  [index: number]: [string, string[]];
}

interface UseGoogleIMEProps {
  onSelect?: (text: string) => void;
}

export const useGoogleIME = ({ onSelect }: UseGoogleIMEProps = {}) => {
  const [candidates, setCandidates] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceTimerInfo = useRef<NodeJS.Timeout | null>(null);

  const fetchSuggestions = useCallback((text: string) => {
    if (debounceTimerInfo.current) {
      clearTimeout(debounceTimerInfo.current);
    }

    if (!text.trim()) {
      setCandidates([]);
      return;
    }

    debounceTimerInfo.current = setTimeout(async () => {
      setLoading(true);
      try {
        // Enforce returning Japanese candidates for the given input
        const url = `https://www.google.com/transliterate?langpair=en|ja&text=${encodeURIComponent(
          text
        )}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch suggestions');
        }

        const data: unknown = await response.json();

        // Response format for en|ja is: [{"ew":"input", "hws": ["candidate1", ...]}]
        // Occasionally might be nested arrays, so we guard against that too.
        if (Array.isArray(data) && data.length > 0) {
          const firstItem = data[0];

          if (typeof firstItem === 'object' && firstItem !== null && 'hws' in firstItem) {
            // Object format: { ew: "...", hws: [...] }
            const hws = (firstItem as { hws: string[] }).hws;
            if (Array.isArray(hws)) {
              setCandidates(hws);
              return;
            }
          } else if (Array.isArray(firstItem) && firstItem.length >= 2) {
            // Array format: [ "input", ["candidate1", ...] ]
            const candidatesList = firstItem[1];
            if (Array.isArray(candidatesList)) {
              setCandidates(candidatesList as string[]);
              return;
            }
          }
        }

        setCandidates([]);
      } catch (error) {
        console.error('Error fetching Google IME suggestions:', error);
        setCandidates([]);
      } finally {
        setLoading(false);
      }
    }, 300); // 300ms debounce
  }, []);

  const clearCandidates = useCallback(() => {
    setCandidates([]);
  }, []);

  return {
    candidates,
    loading,
    fetchSuggestions,
    clearCandidates
  };
};

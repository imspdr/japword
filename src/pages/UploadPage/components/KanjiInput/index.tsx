import { useState, useRef, useEffect, KeyboardEvent, forwardRef, ChangeEvent, InputHTMLAttributes } from 'react';
import { useGoogleIME } from './useGoogleIME';
import {
  Container,
  Input,
  SuggestionsList,
  SuggestionItem
} from './styled';

interface KanjiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const KanjiInput = forwardRef<HTMLInputElement, KanjiInputProps>(
  ({ value, onChange, ...props }, ref) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { candidates, fetchSuggestions, clearCandidates } = useGoogleIME();
    const containerRef = useRef<HTMLDivElement>(null);

    // Close suggestions when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setShowSuggestions(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
      const text = e.target.value;
      if (text) {
        fetchSuggestions(text);
        setShowSuggestions(true);
        setSelectedIndex(0);
      } else {
        clearCandidates();
        setShowSuggestions(false);
      }
    };

    const handleSelect = (candidate: string) => {
      // Create a synthetic event to update the parent form state
      const syntheticEvent = {
        target: {
          name: props.name,
          value: candidate,
        },
      } as ChangeEvent<HTMLInputElement>;

      onChange(syntheticEvent);
      clearCandidates();
      setShowSuggestions(false);
      // Keep focus on input? Or maybe not, depends on UX.
      // Usually after picking, user moves on or continues typing.
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (!showSuggestions || candidates.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % candidates.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + candidates.length) % candidates.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSelect(candidates[selectedIndex]);
      } else if (e.key === 'Escape') {
        setShowSuggestions(false);
      }
    };

    return (
      <Container ref={containerRef}>
        <Input
          {...props}
          ref={ref}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        {showSuggestions && candidates.length > 0 && (
          <SuggestionsList>
            {candidates.map((candidate, index) => (
              <SuggestionItem
                key={`${candidate}-${index}`}
                isSelected={index === selectedIndex}
                onClick={() => handleSelect(candidate)}
              >
                {candidate}
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </Container>
    );
  }
);

KanjiInput.displayName = 'KanjiInput';

export default KanjiInput;

import { useCallback, useEffect, useState } from 'react';
import worlds from './worldList.json';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyborad from './components/Keyborad';

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * worlds.length);
    return worlds[randomIndex];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every((letter) => {
    return guessedLetters.includes(letter);
  });

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((prev) => [...prev, letter]);
    },
    [setGuessedLetters, guessedLetters]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (!key.match('^[a-zA-Z]$')) return;
      event.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [addGuessedLetter]);

  return (
    <div className="wrapper">
      <div className="heading">
        {(isLoser || isWinner) && <h1>{isLoser ? 'You Lose' : 'You Win'}</h1>}
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyborad
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={inCorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}
export default App;

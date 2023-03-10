import { useState } from 'react';
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
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);

  return (
    <div className="wrapper">
      <div className="heading">
        <h1>Hangman</h1>
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyborad />
    </div>
  );
}
export default App;

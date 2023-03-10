import styles from './HangmanWord.module.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord = ({ guessedLetters, wordToGuess }: HangmanWordProps) => {
  return (
    <div className={styles.container}>
      {wordToGuess.split('').map((letter, index) => {
        return (
          <span className={styles.letter} key={index}>
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? 'visible'
                  : 'hidden',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;

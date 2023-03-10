import styles from './HangmanWord.module.css';
type Props = {};

const HangmanWord = (props: Props) => {
  const word = 'test';
  const guessedLetters = ['', 'e'];
  return (
    <div className={styles.container}>
      {word.split('').map((letter, index) => {
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

import styles from './Keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyborad = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div className={styles.container}>
      {KEYS.map((key) => {
        const isActive = activeLetters?.includes(key);
        const isInactive = inactiveLetters?.includes(key);

        return (
          <button
            className={`${styles.key} ${isActive ? styles.active : ''} `}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInactive}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyborad;

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

const Keyborad = () => {
  return (
    <div className={styles.container}>
      {KEYS.map((key) => {
        return (
          <button className={styles.key} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyborad;

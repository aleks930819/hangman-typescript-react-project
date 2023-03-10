import styles from './HangmanDrawing.module.css';

const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  ></div>
);
const BODY = (
  <div
    style={{
      width: '10px',
      height: '150px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '110px',
      right: '0',
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '150px',
      right: '-10px',
      transform: 'rotate(45deg)',
    }}
  ></div>
);
const LEFT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '150px',
      right: '-80px',
      transform: 'rotate(-45deg)',
    }}
  ></div>
);
const LEFT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '285px',
      right: '-10px',
      transform: 'rotate(-45deg)',
    }}
  ></div>
);
const RIGHT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: 'black',
      position: 'absolute',
      top: '285px',
      right: '-80px',
      transform: 'rotate(45deg)',
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className={styles.container}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles['line-horizontal-2']}></div>
      <div className={styles['line-veritcal-2']}></div>
      <div className={styles['line-horizontal']}></div>
      <div className={styles['line-veritcal']}></div>
    </div>
  );
};

export default HangmanDrawing;

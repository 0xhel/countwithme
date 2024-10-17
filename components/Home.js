import { useState } from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  const [counter, setCounter] = useState(0);

  const handleAddClick = () => {
    setCounter(counter + 1);
  };

  const handleRemoveClick = () => {
    counter !== 0 && setCounter(counter - 1);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" />
      <div className={styles.counterContainer}>
        <button className={styles.decrementBtn} id="decrementBtn" onClick={() => handleRemoveClick()}>-</button>
        <span className={styles.counter} id="counter">{counter}</span>
        <button className={styles.incrementBtn} id="incrementBtn" onClick={() => handleAddClick()}>+</button>
      </div>
    </div>
  );
}

export default Home;
import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: "Would you rather have super strength or super speed?",
      optionA: "Super Strength",
      optionB: "Super Speed",
    },
    {
      question: "Would you rather be invisible or be able to fly?",
      optionA: "Invisible",
      optionB: "Fly",
    },
    {
      question: "Would you rather travel to the past or the future?",
      optionA: "Past",
      optionB: "Future",
    },
    {
      question: "Would you rather always have to sing instead of speak or dance everywhere you walk?",
      optionA: "Sing",
      optionB: "Dance",
    },
    {
      question: "Would you rather only be able to whisper or only be able to shout?",
      optionA: "Whisper",
      optionB: "Shout",
    },
    {
      question: "Would you rather live in space or under the sea?",
      optionA: "Space",
      optionB: "Underwater",
    },
    {
      question: "Would you rather never use the internet again or never watch TV again?",
      optionA: "Never Use Internet",
      optionB: "Never Watch TV",
    },
    {
      question: "Would you rather always have wet socks or a rock in your shoe?",
      optionA: "Wet Socks",
      optionB: "Rock in Shoe",
    },
    {
      question: "Would you rather eat only pizza forever or never eat pizza again?",
      optionA: "Only Pizza Forever",
      optionB: "Never Eat Pizza Again",
    },
    {
      question: "Would you rather have a rewind button or a pause button for your life?",
      optionA: "Rewind",
      optionB: "Pause",
    },
    {
      question: "Would you rather be able to talk to animals or speak all human languages?",
      optionA: "Talk to Animals",
      optionB: "Speak All Languages",
    },
    {
      question: "Would you rather be stuck in a zombie apocalypse or a robot uprising?",
      optionA: "Zombie Apocalypse",
      optionB: "Robot Uprising",
    },
    {
      question: "Would you rather never sleep or never eat?",
      optionA: "Never Sleep",
      optionB: "Never Eat",
    },
    {
      question: "Would you rather be allergic to sunlight or allergic to your favorite food?",
      optionA: "Allergic to Sunlight",
      optionB: "Allergic to Favorite Food",
    },
    {
      question: "Would you rather be able to teleport or time travel?",
      optionA: "Teleport",
      optionB: "Time Travel",
    },
    {
      question: "Would you rather fight 100 duck-sized horses or 1 horse-sized duck?",
      optionA: "100 Duck-sized Horses",
      optionB: "1 Horse-sized Duck",
    },
    {
      question: "Would you rather have a third eye or a third arm?",
      optionA: "Third Eye",
      optionB: "Third Arm",
    },
    {
      question: "Would you rather be famous online or in real life?",
      optionA: "Famous Online",
      optionB: "Famous in Real Life",
    },
    {
      question: "Would you rather always be 10 minutes late or 20 minutes early?",
      optionA: "Always 10 Minutes Late",
      optionB: "Always 20 Minutes Early",
    },
    {
      question: "Would you rather be able to breathe underwater or walk through walls?",
      optionA: "Breathe Underwater",
      optionB: "Walk Through Walls",
    },
  ];
  

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const current = questions[index];

  const handleNext = () => {
    setSelected(null);
    setIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎉 Would You Rather?</h1>
        <p style={styles.question}>{current.question}</p>
        <div style={styles.options}>
          <button
            onClick={() => setSelected("A")}
            style={{
              ...styles.button,
              backgroundColor: selected === "A" ? "#ff6b81" : "#ffe0e9",
              color: selected === "A" ? "#fff" : "#ff6b81",
            }}
          >
            {current.optionA}
          </button>
          <button
            onClick={() => setSelected("B")}
            style={{
              ...styles.button,
              backgroundColor: selected === "B" ? "#38bdf8" : "#dbeafe",
              color: selected === "B" ? "#fff" : "#0ea5e9",
            }}
          >
            {current.optionB}
          </button>
        </div>
        {selected && (
          <div style={styles.result}>
            <p style={styles.resultText}>
              You chose: <strong>{selected === "A" ? current.optionA : current.optionB}</strong>
            </p>
            <button onClick={handleNext} style={styles.nextButton}>Next Question ➡️</button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to right, #fceabb, #f8b500)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  card: {
    background: '#fff',
    borderRadius: '20px',
    padding: '3rem',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    color: '#ff6b81',
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  question: {
    fontSize: '1.3rem',
    marginBottom: '2rem',
    color: '#333',
  },
  options: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  button: {
    fontSize: '1rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.2s ease',
  },
  result: {
    marginTop: '1rem',
  },
  resultText: {
    fontSize: '1.1rem',
    color: '#333',
  },
  nextButton: {
    marginTop: '1rem',
    backgroundColor: '#34d399',
    color: '#fff',
    padding: '0.6rem 1.2rem',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.2s',
  },
};

export default App;

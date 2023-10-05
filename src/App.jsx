import { useState } from "react";

const DisplayBest = ({ anecdotes, points, handleVote, handleClick }) => {
  for (let i = 0; i < anecdotes.length; i++) {
    const oldValue = anecdotes[i];
    anecdotes[i] = [oldValue];
    anecdotes[i].push(points[i]);
  }
  anecdotes.sort((a, b) => b[1] - a[1]);
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[0][0]}</p>
      <p>has {anecdotes[0][1]} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * 8));
  };

  const handleVote = (props) => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <DisplayBest anecdotes={anecdotes} points={points} />
    </>
  );
};

export default App;

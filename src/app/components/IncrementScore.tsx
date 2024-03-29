import React, { useState } from 'react';

// Define the type for the player prop
interface IncrementalScoreProps {
  player: string; // Change the type according to your player data structure
}

const IncrementalScore: React.FC<IncrementalScoreProps> = ({ player }) => {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const decrementScore = () => {
    setScore((prevScore) => Math.max(0, prevScore - 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <button onClick={incrementScore} style={{ fontSize: '3.5rem', color: '#fff', marginRight: '5px' }}>+</button>
      <p style={{ margin: '0 10px', fontSize: '1.6rem', color: '#fff' }}>{player}&rsquo;s Score: {score}</p>
      <button onClick={decrementScore} style={{ fontSize: '4.5rem', color: '#fff' }}>-</button>
    </div>
  );
};

export default IncrementalScore;

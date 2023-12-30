// components/AnswerBox.tsx
"use client"

import React from 'react';

interface AnswerBoxProps {
  answer: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ answer }) => {
  return (
    <div
      style={{
        width: '33%', // Set width to 1/3rd of the viewport
        margin: '0 auto', // Center the box horizontally
        backgroundColor: '',
        border: '2px solid #FFD700', // Gold color border
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
        padding: '10px',
        color: 'white',
        display: 'flex', // Enable flexbox
        alignItems: 'center', // Center vertically
        textAlign: 'center',
        justifyContent: 'center', // Center horizontally
        marginTop: '30px', // Add top margin
        marginBottom: '80px',
      }}
    >
      <p style={{ margin: 10, fontSize: '28px' }}>{answer}</p>
    </div>
  );
};

export default AnswerBox;

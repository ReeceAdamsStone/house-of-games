// components/QuestionBox.tsx
"use client"

import React from 'react';

interface QuestionBoxProps {
  question: string;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question }) => {
  return (
    <div
      style={{
        width: '66%', // Set width to 2/3rds of the viewport
        margin: '0 auto', // Center the box horizontally
        backgroundColor: '',
        border: '2px solid #FFD700', // Gold color border
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
        padding: '30px',
        color: 'white',
        display: 'flex', // Enable flexbox
        alignItems: 'center', // Center vertically
        textAlign: 'center',
        justifyContent: 'center', // Center horizontally
        marginTop: '20px', // Add top margin
      }}
    >
      <p style={{ margin: 0, fontSize: '28px' }}>{question}</p>
    </div>
  );
};

export default QuestionBox;

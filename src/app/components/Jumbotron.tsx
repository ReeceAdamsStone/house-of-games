// components/Jumbotron.tsx
"use client"

import React from 'react';

interface JumbotronProps {
  title: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ title }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(209, 6, 14, 0.0)', // Red background with 80% opacity
      color: '#FFFFFF',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '600%' }} dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default Jumbotron;

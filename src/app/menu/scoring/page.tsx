// pages/scoreboard.tsx
"use client"

import React from 'react';
import ScoreboardList from '@/app/components/ScoreboardList';
import IncrementalScore from '@/app/components/IncrementScore';

const ScoreboardPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1> </h1>
      <ScoreboardList />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IncrementalScore player="April and Ben" />
        <IncrementalScore player="Holly and Anthony" />
        <IncrementalScore player="Amy and Luke" />
      </div>
    </div>
  );
};

export default ScoreboardPage;

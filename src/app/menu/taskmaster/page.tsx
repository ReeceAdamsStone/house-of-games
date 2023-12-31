// TaskmasterPage.js
"use client"

import React, { useState } from 'react';
import SpinningWheel from '@/app/components/RandomSpinner';
import SpeechBubble from '@/app/components/SpeechBubble';
import NumberedEnvelope from '@/app/components/NumberedEnvelope';

const TaskmasterPage = () => {
  const [isSpeechBubbleVisible, setSpeechBubbleVisible] = useState(false);
  const [selectedEnvelope, setSelectedEnvelope] = useState(null);

  const handleEnvelopeClick = (envelopeNumber) => {
    setSelectedEnvelope(envelopeNumber);
    setSpeechBubbleVisible(true);
  };

  const handleSpeechBubbleClose = () => {
    setSpeechBubbleVisible(false);
  };

  return (
<div className="flex flex-col items-center justify-center h-screen">
  <h1 className="mb-8 text-white text-3xl font-semibold">TASKMASTER</h1>

      {/* Centered Wheel */}
      <div className="mb-8">
        <SpinningWheel />
      </div>

      {/* Numbered Envelopes arranged in banks of 4 */}
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <NumberedEnvelope
            key={number}
            number={number}
            onClick={() => handleEnvelopeClick(number)}
          />
        ))}
      </div>

      {/* SpeechBubble component */}
      {isSpeechBubbleVisible && (
        <SpeechBubble
          isVisible={isSpeechBubbleVisible}
          onClose={handleSpeechBubbleClose}
        >
          {/* Content for the speech bubble */}
          <p>Envelope {selectedEnvelope} opened!</p>
        </SpeechBubble>
      )}
    </div>
  );
};

export default TaskmasterPage;

// TaskmasterPage.js
"use client"

import React, { useState } from 'react';
import SpinningWheel from '@/app/components/RandomSpinner';
import SpeechBubble from '@/app/components/SpeechBubble';
import NumberedEnvelope from '@/app/components/NumberedEnvelope';

const TaskmasterPage = () => {
  const [isSpeechBubbleVisible, setSpeechBubbleVisible] = useState(false);
  const [selectedEnvelope, setSelectedEnvelope] = useState<number | null>(null);

  const handleEnvelopeClick = (envelopeNumber: number) => {
    setSelectedEnvelope(envelopeNumber);
    setSpeechBubbleVisible(true);
  };
  

  const handleSpeechBubbleClose = () => {
    setSpeechBubbleVisible(false);
  };

  // Define custom text for each envelope
  const envelopesData = [
    { number: 1, text: 'You may have noticed an eclectic collection of animals around the house.\n\nEach player should bring one to the Taskmaster.' },
    { number: 2, text: 'One team member must write down a list of as many obscure animals as you can think of. The other team member will leave the room. When they enter they will get another players list. You must mime the animals on the list to your partner. Most correct wins.' },
    { number: 3, text: 'As a group, you must count to 13. Every time you say an odd number, squat. Every time you say an even number, jump. If you make a mistake you are out. If you hesitate, you will be eliminated. New rules can be introduced if it is too easy...' },
    { number: 4, text: 'Peel your orange. Say a species of bird, eat an orange segment and then shout a competitors name, within five seconds of hearing your own name. If you fail to say a different species or bird, pop a grape in your mouth and shout a competitor’s name within five seconds of hearing your own name, you will be eliminated. You must not say any bird which has previously been said during the task.'},
    { number: 5, text: "Take it in turns to say a five-letter word whenever the music stops. You may not say a word that has previously been said. If you fail to say a word before the music starts again, you are eliminated, and the game continues with different length words" },
    { number: 6, text: 'Stand behind the sofa. Stand on either one or two legs. The Taskmaster will guess whether you are stood on one or two legs. If they guess correctly, you are out.' },
    { number: 7, text: 'Stand up after 100 seconds. Closest to the time wins.' },
    { number: 8, text: 'Stand in a horizontal line. You must all shake hands with the Taskmaster. If the Taskmaster recognises your handshake, you are out. Continue until one player remains.' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8 text-white text-3xl font-semibold">TASKMASTER</h1>

      {/* Centered Wheel */}
      <div className="mb-8">
        <SpinningWheel />
      </div>

      {/* Numbered Envelopes arranged in banks of 4 */}
      <div className="grid grid-cols-4 gap-4">
        {envelopesData.map(({ number, text }) => (
          <NumberedEnvelope
            key={number}
            number={number}
            text={text}
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
  <p>{`Task ${selectedEnvelope} chosen: ${envelopesData?.[selectedEnvelope - 1]?.text}`}</p>
</SpeechBubble>

      )}
    </div>
  );
};

export default TaskmasterPage;

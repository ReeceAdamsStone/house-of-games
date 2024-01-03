"use client"
// Add this import statement at the top
import React, { useState } from 'react';
import anime from 'animejs';

// Define the type for the questions prop
interface AnimatedCardProps {
  questions: string[];
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ questions }) => {
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const animateCard = () => {
    // Randomly select a question from the array
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    // Set the selected question
    setSelectedQuestion(randomQuestion);

    // Animate the card
    anime({
      targets: '.animated-card',
      translateY: [-300, 0],
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  };

  return (
    <div className="animated-card relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700" onClick={animateCard}>
      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/QuestionMark.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative p-6 py-14 px-6 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          {selectedQuestion || 'Click to reveal a question'}
        </h2>
        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
          Mr and Mrs Question
        </h5>
      </div>
    </div>
  );
};

export default AnimatedCard;

// pages/menu/answer-smash.tsx
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Jumbotron from '@/app/components/Jumbotron';
import QuestionBox from '@/app/components/QuestionBox';
import SquareDiamond from '@/app/components/SquareDiamond';
import AnswerBox from '@/app/components/AnswerBox'; // Import the AnswerBox component

const questions = [
  {
    question: "Question: Your question will appear here. The answer will be a 'smash' of the picture and the question. First to buzz gets the points!",
    answer: "Example Answer 1", 
    imageUrl: "/Test1.jpg",
  },
  {
    question: "Example 1: Which London Underground station is represented by the colour grey on a tube map?",
    answer: "Jubilee Mack", 
    imageUrl: "/LeeMack.webp",
  },
  {
    question: "Q1: Name this iconic English Actor, star of Game of Thrones and GoldenEye",
    answer: "Sean Beans on Toast", 
    imageUrl: "/Beans.jpg",
  },
  {
    question: "Q2: What popular 60's flying toy was originally called the Whirlo-Way?",
    answer: "Frisbeefeaters", 
    imageUrl: "/Beefeater.jpg",
  },
  {
    question: "Q3: What is the capial city of Hungary?",
    answer: "Budapesto", 
    imageUrl: "/Pesto.jpg",
  },
  {
    question: "Q4: What was the second Star Wars film to be released in 1980?",
    answer: "The Empire Strikes Backscratcher", 
    imageUrl: "/BackScratcher.webp",
  },
  {
    question: "Q5: A Caribbean island country, lying south of Cuba.",
    answer: "Jamaicamel", 
    imageUrl: "/Camel.webp",
  },
  {
    question: "Q6: England's second largest city.",
    answer: "Birminghamster", 
    imageUrl: "/Hampter.webp",
  },
  {
    question: "Q7: The oldest university in the English-speaking world and the world's second-oldest university in continuous operation.",
    answer: "Cardboard Boxford University", 
    imageUrl: "/Oxford.webp",
  },
  {
    question: "Q8: Which pop singer sang Poker Face, and starred in the 2021 film 'House of Gucci'?",
    answer: "Lady Gagarbage", 
    imageUrl: "/Garbage.png",
  },
  // Add more questions as needed
];

const AnswerSmashPage: React.FC = () => {
  return (
    <div>
      <Jumbotron title="Answer Smash!" />
      {questions.map((q, index) => (
        <QuestionAndAnswerWithAnimation key={index} question={q.question} answer={q.answer} imageUrl={q.imageUrl} />
      ))}
      {/* Rest of the page content */}
    </div>
  );
};

const QuestionAndAnswerWithAnimation: React.FC<{ question: string; answer: string; imageUrl: string }> = ({
  question,
  answer,
  imageUrl,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 2 }}
    >
      <QuestionBox question={question} />
      
      <SquareDiamond imageUrl={imageUrl} />
      <AnswerBox answer={answer} /> {/* Include the AnswerBox component */}
    </motion.div>
  );
};

export default AnswerSmashPage;

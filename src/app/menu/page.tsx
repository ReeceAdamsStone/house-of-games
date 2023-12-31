// pages/menu.tsx
"use client"

import React from 'react';
import Image from 'next/image';
import RevealBox from '../components/RevealBox';
import Jumbotron from '../components/Jumbotron';

const MenuPage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center horizontally
      minHeight: '100vh', // Ensure the container takes the full height of the viewport
      padding: '20px', // Add padding on all sides
    }}>


      {/* Buzzer QR Code */}
      <Image
        src="/frame.png" // Path to the image from the public folder
        alt="Frame Image"
        width={400} // Set the width of the image
        height={300} // Set the height of the image
      />

      {/* Reveal Boxes */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Distribute space between reveal boxes
        width: '100%', // Take the full width of the container
        marginTop: '20px', // Add top margin
      }}>
        <RevealBox imageSrc="/AnswerSmash.PNG" altText="Answer Smash!" url='menu/answer-smash' />
        <RevealBox imageSrc="/MrMrs.PNG" altText="Mr and Mrs!" url='menu/mrandmrs'/>
        <RevealBox imageSrc="/TaskMaster.PNG" altText="Taskmaster!" url='menu/taskmaster' />
        
      </div>
    </div>
  );
};

export default MenuPage;

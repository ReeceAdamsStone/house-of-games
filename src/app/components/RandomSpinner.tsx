import React, { useRef, useState } from 'react';
import anime from 'animejs';

const SpinningWheel = () => {
  const wheelRef = useRef(null);
  const [result, setResult] = useState(null);

  const spinWheel = () => {
    // Spin the wheel 5 times
    anime({
      targets: wheelRef.current,
      rotate: '+=7200', // Rotate 20 times for 5 spins (360 degrees * 20)
      easing: 'easeInOutQuad',
      duration: 5000, // Adjust the duration as needed
      complete: () => {
        // After spinning, display a random number from the range of 1-8
        const randomNumber = Math.floor(Math.random() * 8) + 1;
        setResult(randomNumber);

        // Set the final rotation to ensure the wheel ends in an upright position
        anime.set(wheelRef.current, { rotate: '+=270' });
      },
    });
  };

  return (
    <div>
      <div
        ref={wheelRef}
        style={{
          width: '400px',
          height: '400px',
          background: '#9E1700',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'relative',
          border: '2px solid white', // Add black border
        }}
        onClick={spinWheel}
      >
        {/* Display the symbol in the center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4.5rem',
            marginTop: '60px',
            color: 'white', // Set text color to white
            
          }}
        >
         .
        </div>

        {/* Display the result in the center */}
        {result !== null && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginBottom: '90px',
              transform: 'translate(-50%, -50%)',
              fontSize: '5.2rem',
              color: 'white', // Set text color to white
            }}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinningWheel;

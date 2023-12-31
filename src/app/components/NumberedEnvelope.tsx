import React, { useState } from 'react';

const NumberedEnvelope = ({ number, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true); // Set the envelope to open when clicked
    onClick(); // Invoke the onClick prop

    // Optionally, you can reset the envelope to closed after a delay
    setTimeout(() => {
      setIsOpen(false);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div
      className="flex flex-col items-center gap-2"
      onClick={handleEnvelopeClick}
      style={{ position: 'relative' }}
    >
      <img
        src="/envelope-svgrepo-com.svg"
        alt="Closed Envelope Icon"
        width="120"
        height="120"
        className="text-white"
        style={{ visibility: isOpen ? 'hidden' : 'visible' }}
      />
      <img
        src="/open-envelope-with-letter-svgrepo-com.svg"
        alt="Open Envelope Icon"
        width="120"
        height="120"
        className="text-white"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />
      <span className="text-white">{number}</span>
    </div>
  );
};

export default NumberedEnvelope;

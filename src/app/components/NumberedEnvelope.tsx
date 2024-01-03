import React, { useState, MouseEvent } from 'react';

interface NumberedEnvelopeProps {
  number: number;
  text?: string; // Make text optional
  onClick: (envelopeNumber: number) => void;
}

const NumberedEnvelope: React.FC<NumberedEnvelopeProps> = ({ number, text, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true);
    onClick(number);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div
      className="flex flex-col items-center gap-2 relative"
      onClick={handleEnvelopeClick}
    >
      {isOpen ? (
        <img
          src="/open-envelope-with-letter-svgrepo-com.svg"
          alt="Open Envelope Icon"
          width="120"
          height="120"
          className="text-white transition-opacity duration-500"
          style={{ opacity: isOpen ? 1 : 0 }}
        />
      ) : (
        <img
          src="/envelope-svgrepo-com.svg"
          alt="Closed Envelope Icon"
          width="120"
          height="120"
          className="text-white"
        />
      )}
      <span className="text-white">{number}</span>
      {text && <p className="text-white">{text}</p>}
    </div>
  );
};

export default NumberedEnvelope;

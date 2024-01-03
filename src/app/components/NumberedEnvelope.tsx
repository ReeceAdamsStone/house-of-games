import React, { useState } from 'react';
import Image from 'next/image';

interface NumberedEnvelopeProps {
  number: number;
  onClick: (envelopeNumber: number) => void;
}

const NumberedEnvelope: React.FC<NumberedEnvelopeProps> = ({ number, onClick }) => {
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
        <Image
          src="/open-envelope-with-letter-svgrepo-com.svg"
          alt="Open Envelope Icon"
          width={120}
          height={120}
          className="text-white transition-opacity duration-500"
          style={{ opacity: isOpen ? 1 : 0 }}
        />
      ) : (
        <Image
          src="/envelope-svgrepo-com.svg"
          alt="Closed Envelope Icon"
          width={120}
          height={120}
          className="text-white"
        />
      )}
      <span className="text-white">{number}</span>
    </div>
  );
};

export default NumberedEnvelope;

// components/NumberedEnvelope.js
import React from 'react';

const NumberedEnvelope = ({ number, onClick }) => (
  <button className="flex flex-col items-center gap-2" onClick={onClick}>
    <img
      src="/envelope-svgrepo-com.svg"
      alt="Envelope Icon"
      width="120"
      height="120"
      className="text-white"
    />
    <span className="text-white">{number}</span>
  </button>
);

export default NumberedEnvelope;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const SunsetCard = ({ sunset }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center  rounded-lg">
      <FontAwesomeIcon icon={faMoon} size="2x" className="mb-2" />
      <p className="text-xl font-semibold">{sunset}</p>
      <span className="text-sm">Sunset</span>
    </div>
  );
};

export default SunsetCard;

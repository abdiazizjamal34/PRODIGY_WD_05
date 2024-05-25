import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const WindDirectionCard = ({ windDirection }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center  rounded-lg">
      <FontAwesomeIcon icon={faCompass} size="2x" className="mb-2" />
      <p className="text-xl font-semibold">{windDirection}°</p>
      <span className="text-sm">Wind Direction</span>
    </div>
  );
};

export default WindDirectionCard;

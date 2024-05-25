import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

const HumidityCard = ({ humidity }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center  rounded-lg">
      <FontAwesomeIcon icon={faTint} size="2x" className="mb-2" />
      <p className="text-xl font-semibold">{humidity}%</p>
      <span className="text-sm">Humidity</span>
    </div>
  );
};

export default HumidityCard;

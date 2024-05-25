import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const WindSpeedCard = ({ windSpeed }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center rounded-lg">
      <FontAwesomeIcon icon={faWind} size="2x" className="mb-2" />
      <p className="text-xl font-semibold">{windSpeed.toFixed(2)} mph</p>
      <span className="text-sm">Wind Speed</span>
    </div>
  );
};

export default WindSpeedCard;

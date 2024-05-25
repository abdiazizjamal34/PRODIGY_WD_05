import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

const TemperatureCard = ({ temperature }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center bg-blue-500 rounded-lg">
      <FontAwesomeIcon icon={faTemperatureHigh} size="2x" className="mb-2" />
      <p className="text-xl font-semibold">{temperature.toFixed(2)} °C</p>
      <span className="text-sm">Temperature</span>
    </div>
  );
};

export default TemperatureCard;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const PressureCard = ({ pressure }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center  rounded-lg">
      <FontAwesomeIcon icon={faTachometerAlt} size="2x" className="mb-2" />
      <p className="text-xl font-semibold">{pressure} hPa</p>
      <span className="text-sm">Pressure</span>
    </div>
  );
};

export default PressureCard;

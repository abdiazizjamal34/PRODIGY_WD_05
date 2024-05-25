import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const SunriseCard = ({ sunrise }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center  rounded-lg">
      <FontAwesomeIcon icon={faSun} size="2x" className="mb-2" />
      <p className="text-xl font-semibold">{sunrise}</p>
      <span className="text-sm">Sunrise</span>
    </div>
  );
};

export default SunriseCard;

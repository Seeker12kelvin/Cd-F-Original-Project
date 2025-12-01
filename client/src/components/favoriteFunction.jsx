import React from "react";
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({
  isFavorite = false,
  onToggle = () => {},
  size = 22,
  activeColor = "#FF4C4C",
  inactiveColor = "#D3D3D3",
  className = "",
}) => {
  return (
    <button
      onClick={onToggle}
      className={`transition-all duration-200 ${className}`}
    >
      <FaHeart
        size={size}
        color={isFavorite ? activeColor : inactiveColor}
      />
    </button>
  );
};

export default FavoriteButton;
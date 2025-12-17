import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButton = ({
  isFavorite = false,
  onToggle = () => {},
  size = 22,
  activeColor = "#FF4C4C",
  inactiveColor = "#7065F0",
  className = "",
}) => {
  return (
    <button
      onClick={onToggle}
      className={`transition-all duration-200 ${className}`}
    >
      <FaHeart
        size={size}
        style={{color: isFavorite ? activeColor : inactiveColor}}
        color={isFavorite ? activeColor : inactiveColor}
      />
    </button>
  );
};

export default FavoriteButton;
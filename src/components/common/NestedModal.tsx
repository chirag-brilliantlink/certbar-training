import React from "react";

const CustomModal = ({ content, isVisible, onClose, style }) => {
  if (!isVisible) return null;

  return (
    <div
      className="absolute bg-[#1b1b1b] border-gray-400 p-4 rounded shadow-lg z-10"
      style={style}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      ></button>
      <div>{content}</div>
    </div>
  );
};

export default CustomModal;

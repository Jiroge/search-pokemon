import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AlertProps {
  message: string;
  title?: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message, title = "Notification", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300); // Animation duration
  };

  if (!isVisible) return null;

  return (
    <div
      className={`z-50 fixed top-4 left-1/2 transform -translate-x-1/2 w-80 bg-white rounded-lg shadow-lg transition-all duration-300 ${
        isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">i</span>
            </div>
            <h3 className="ml-2 font-semibold text-gray-800">{title}</h3>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

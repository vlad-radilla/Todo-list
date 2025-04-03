import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full gap-2">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin" /> <span>cargando...</span>
    </div>
  );
};

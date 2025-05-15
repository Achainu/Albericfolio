// src/components/LoadingScreen.jsx
import React from "react";

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        Bonjour <span className="animate-blink ml-1">Alberic</span>
      </div>
      <div className="w-12 h-12 border-4 border-white border-dotted rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400 text-sm">Chargement en cours...</p>
    </div>
  );
};

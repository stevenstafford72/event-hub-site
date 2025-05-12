import React from 'react';

function QuickSettings({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed top-16 right-0 w-64 bg-gray-300 shadow-lg rounded-lg p-4 m-4">
      <button className="absolute top-2 right-2" onClick={onClose}>X</button>
      <h2 className="text-lg font-semibold mb-4">Quick Settings</h2>
      <div className="flex flex-col gap-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Favorites
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Change
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Setting 3
        </button>
      </div>
    </div>
  );
}

export default QuickSettings;
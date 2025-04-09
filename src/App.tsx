import React from 'react';
import { AppleStyleDock } from './components/AppleStyleDock';
export function App() {
  return <div className="relative flex w-full min-h-screen bg-gray-100 dark:bg-neutral-950 flex-col justify-center items-center">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
        </p>
      </div>
      <AppleStyleDock />
    </div>;
}
import React from 'react';
import usePWAInstall from '../hooks/usePWAInstall';

const InstallAppButton = () => {
  const { deferredPrompt, promptInstall } = usePWAInstall();

  return (
    deferredPrompt && (
      <button
        onClick={promptInstall}
        className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
      >
        Install App
      </button>
    )
  );
};

export default InstallAppButton;

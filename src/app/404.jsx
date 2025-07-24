import React, { useEffect } from "react";

const ComingSoonModal = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="bg-[#111827] text-white rounded-xl shadow-lg max-w-sm w-full p-6 text-center space-y-2 animate-fade-in-up">
        <h2 className="text-xl font-semibold">Coming Soon 🚧</h2>
        <p className="text-white/70 text-sm">
          This feature is under development. Please check back later!
        </p>
      </div>
    </div>
  );
};

export default ComingSoonModal;

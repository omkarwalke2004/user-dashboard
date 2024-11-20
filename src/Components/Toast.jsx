import React, { useState, useEffect } from "react";

// Toast Component
const Toast = ({ message, type }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // Auto-hide after 3 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!show) return null;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-md text-white ${bgColor} animate-fadeIn`}
    >
      {message}
    </div>
  );
};

// Toast Functionality
let showToastHandler;
export const showToast = (message, type) => {
  if (showToastHandler) {
    showToastHandler({ message, type });
  }
};

// Toast Container
const ToastContainer = () => {
  const [toast, setToast] = useState(null);
  showToastHandler = setToast;

  if (!toast) return null;
  return <Toast message={toast.message} type={toast.type} />;
};

export default ToastContainer;

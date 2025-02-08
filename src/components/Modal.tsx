import React, { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({
  isVisible,
  onClose,
  children,
  title,
}: ModalProps) {
  const [rendered, setRendered] = useState(isVisible);
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setRendered(true);
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(false);

      const timer = setTimeout(() => setRendered(false), 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    /* Backdrop */
    <div
      className={`
        fixed inset-0 z-50 
        flex items-center justify-center
        bg-black/70 backdrop-blur-sm
        transition-opacity duration-500 ease-in-out
        ${animate ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Close button */}
      <button
        className='px-2 py-0 rounded transition-transform fixed text-3xl top-4 right-4 text-white
         bg-gradient-to-r hover:scale-105 hover:from-blue-500/80 hover:to-teal-500/80
       dark:hover:from-blue-500/80 dark:hover:to-teal-500/80'
        onClick={onClose}
      >
        &times;
      </button>

      {/* Modal */}
      <div
        ref={modalRef}
        className={`
          relative 
          bg-white dark:backdrop-blur-sm dark:bg-neutral-900 
          rounded-lg shadow-2xl
          w-[90vw] md:w-[min(90vw,700px)] lg:w-[min(80vw,700px)]
          h-[85%]
          overflow-y-auto 
          p-4 md:p-6 lg:p-8
          mt-0 md:mt-4 lg:mt-8
          transform 
          transition-transform duration-500 ease-in-out
          ${animate ? 'translate-y-0 scale-100' : 'translate-y-full scale-95'}
        `}
      >
        {/* Title */}
        {title && (
          <h2 className='text-2xl font-extrabold mb-4 text-neutral-800 dark:text-neutral-100 text-center'>
            {title}
          </h2>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}

import React from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

/**
 * A modal component that displays a window with a title and content. The modal
 * can be closed by clicking the close button in the top right corner.
 *
 * @param {boolean} isVisible - Whether the modal should be visible or not.
 * @param {() => void} onClose - A callback function that is called when the modal
 * is closed.
 * @param {React.ReactNode} children - The content of the modal.
 * @param {string} [title] - The title of the modal.
 *
 * @example
 * import React from 'react';
 * import Modal from './Modal';
 *
 * export default function MyModal() {
 *   const [isVisible, setIsVisible] = React.useState(false);
 *
 *   return (
 *     <>
 *       <button onClick={() => setIsVisible(true)}>Show modal</button>
 *       <Modal
 *         isVisible={isVisible}
 *         onClose={() => setIsVisible(false)}
 *       >
 *         <p>This is the content of the modal.</p>
 *       </Modal>
 *     </>
 *   );
 * }
 */
export default function Modal({
  isVisible,
  onClose,
  children,
  title,
}: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`relative bg-white dark:backdrop-blur-sm dark:bg-neutral-900/80 rounded-lg shadow-2xl transition-transform duration-300 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
        style={{
          width: 'min(90vw, 700px)',
          height: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          marginTop: isVisible ? '5vh' : '0',
        }}
      >
        <button
          className='absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-transform transform hover:scale-110'
          onClick={onClose}
        >
          &times;
        </button>
        {title && (
          <h2 className='text-2xl font-extrabold mb-4 text-neutral-800 dark:text-neutral-100 text-center'>
            {title}
          </h2>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}

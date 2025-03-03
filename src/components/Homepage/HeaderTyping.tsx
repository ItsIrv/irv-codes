import { useState, useEffect } from 'react';

/**
 * HeaderTyping Component
 *
 * Animates through an array of taglines with a typing effect.
 */
export default function HeaderTyping() {
  const taglines = [
    '<?php echo "Releasing Scalable Systems"; ?>',
    'console.log("Optimizing Processes");',
    'print("Driving Team Success");',
    'aws s3 sync automating/ workflows/',
    '<div>Crafting Engaging UIs</div>',
    'SELECT innovation FROM passion;',
  ];
  const [currentTagline, setCurrentTagline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopIndex % taglines.length;
      const fullText = taglines[currentIndex];

      if (isDeleting) {
        setCurrentTagline((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentTagline((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentTagline === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentTagline === '') {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentTagline, isDeleting, typingSpeed, loopIndex, taglines]);

  return (
    <code className='text-sm font-mono font-bold bg-gray-600 overflow-hidden h-6 block'>
      {currentTagline}
    </code>
  );
}

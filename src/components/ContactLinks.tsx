export function ContactLinks() {
  return (
    <div className='flex justify-center space-x-6'>
      <a
        href='https://linkedin.com/in/itsirv'
        target='_blank'
        className='text-neutral-light text-xl transition-transform transform hover:scale-110'
      >
        LinkedIn
      </a>

      <a
        href='https://github.com/itsirv'
        target='_blank'
        className='text-neutral-light text-xl transition-transform transform hover:scale-110'
      >
        GitHub
      </a>

      <a
        href='/IrvingGomez-FullStackEnginner.pdf'
        target='_blank'
        className='text-neutral-light text-xl transition-transform transform hover:scale-110'
      >
        Resume
      </a>
    </div>
  );
}

import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      className={clsx(
        'relative flex items-center justify-center h-screen',
        'header-background'
      )}
    >
      <div className='text-center px-4'>
        <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl'>
          Irving Gomez
        </h1>
        <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
          Full Stack Engineer
        </h2>
        <p className='mt-4 text-lg md:text-xl lg:text-2xl'>
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

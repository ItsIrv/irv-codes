import BackgroundParticles from './HomepageHeader/BackgroundParticles';

export default function HomepageHeader() {
  return (
    <header className='header-background relative flex items-center justify-center h-screen text-neutral-light'>
      <BackgroundParticles />

      <div className='max-w-lg text-center px-4 z-10 shadow-lg bg-black/30 backdrop-blur-md rounded-lg p-8'>
        <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl'>
          Irving Gomez
        </h1>
        <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
          Full Stack Engineer
        </h2>
      </div>
    </header>
  );
}

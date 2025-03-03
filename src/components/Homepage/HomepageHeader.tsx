import HeaderBackground from './HeaderBackground';
import HeaderHeading from './HeaderHeading';

/**
 * HomepageHeader Component
 */
export default function HomepageHeader() {
  return (
    <header className='relative flex flex-col items-center justify-center h-[calc(100vh-125px)] text-neutral-light'>
      <HeaderHeading />
      <HeaderBackground />
    </header>
  );
}

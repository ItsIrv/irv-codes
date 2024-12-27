import HeaderBackground from './HomepageHeader/HeaderBackground';
import HeaderButton from './HomepageHeader/HeaderButton';
import HeaderHeading from './HomepageHeader/HeaderHeading';

/**
 * HomepageHeader Component
 */
export default function HomepageHeader() {
  return (
    <header className='relative flex flex-col items-center justify-center h-[calc(100vh-125px)] text-neutral-light'>
      <HeaderHeading />

      <div className='z-10 mt-6 space-x-4'>
        <HeaderButton
          text='Skills'
          target='/skills'
        />

        <HeaderButton
          text='Work'
          target='/work'
        />

        <HeaderButton
          text='Contact'
          target='/contact'
        />
      </div>

      <HeaderBackground />
    </header>
  );
}

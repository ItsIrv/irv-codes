import HeaderBackground from './HomepageHeader/HeaderBackground';
import HeaderButton from './HomepageHeader/HeaderButton';
import HeaderHeading from './HomepageHeader/HeaderHeading';
import HeaderTyping from './HomepageHeader/HeaderTyping';

/**
 * HomepageHeader Component
 */
export default function HomepageHeader() {
  return (
    <header className='relative flex flex-col items-center justify-center h-screen text-neutral-light'>
      <HeaderBackground />

      <HeaderHeading />

      <div className='mt-6 space-x-4'>
        <HeaderButton
          text='Skills'
          target='#skills'
        />
        <HeaderButton
          text='Work'
          target='#work'
        />
        <HeaderButton
          text='Contact'
          target='#contact'
        />
      </div>
    </header>
  );
}

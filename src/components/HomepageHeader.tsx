import HeaderBackground from './HomepageHeader/HeaderBackground';
import HeaderButton from './HomepageHeader/HeaderButton';
import HeaderHeading from './HomepageHeader/HeaderHeading';
import HeaderTyping from './HomepageHeader/HeaderTyping';

/**
 * HomepageHeader Component
 */
export default function HomepageHeader() {
  // useEffect(() => {
  //   const navbar = document.getElementById('__docusaurus');

  //   if (navbar) {
  //     if (location.pathname === '/') {
  //       navbar.classList.add('navbar-fixed');
  //     } else {
  //       navbar.classList.remove('navbar-fixed');
  //     }
  //   }
  // }, [location]);

  return (
    <header className='relative flex flex-col items-center justify-center h-[calc(100vh-125px)] text-neutral-light'>
      <HeaderHeading />

      <div className='mt-6 space-x-4'>
        <HeaderButton
          text='Skills'
          target='/skills'
        />

        <HeaderButton
          text='Work'
          target='/work'
        />
      </div>

      <HeaderBackground />
    </header>
  );
}

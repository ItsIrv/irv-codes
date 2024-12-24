import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';
import HomepageContact from '../components/HomepageContact';
import { useEffect } from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const navbar = document.getElementById('__docusaurus');

    if (navbar) {
      if (location.pathname === '/') {
        navbar.classList.add('navbar-fixed');
      } else {
        navbar.classList.remove('navbar-fixed');
      }
    }
  }, [location]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
      wrapperClassName='index-page'
    >
      <HomepageHeader />

      <main>
        <HomepageContact />
      </main>
    </Layout>
  );
}

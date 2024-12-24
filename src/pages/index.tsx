import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';
import HomepageSkills from '../components/HomepageSkills';
import HomepageWork from '../components/HomepageWork';
import HomepageAbout from '../components/HomepageAbout';
import HomepageContact from '../components/HomepageContact';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />

      <main>
        <HomepageSkills />

        <HomepageWork />

        <HomepageAbout />

        <HomepageContact />
      </main>
    </Layout>
  );
}

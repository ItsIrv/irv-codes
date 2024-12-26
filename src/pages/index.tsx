import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title='Home'
      description='A dedicated Full Stack Engineer with extensive experience in building scalable, secure, and user-centric applications. Proficient in both frontend and backend development, cloud computing, and CI/CD pipelines. Demonstrated success in driving projects independently, mentoring junior developers, and delivering impactful results across multiple industries.'
      wrapperClassName='index-page'
    >
      <HomepageHeader />
    </Layout>
  );
}

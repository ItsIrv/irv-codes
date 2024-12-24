import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title='Home'
      description='Description will go into a meta tag in <head />'
      wrapperClassName='index-page'
    >
      <HomepageHeader />
    </Layout>
  );
}

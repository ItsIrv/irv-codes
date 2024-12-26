import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader';

export default function Home(): JSX.Element {
  return (
    <Layout
      title='Home'
      description='A Full Stack Engineer with extensive experience in building scalable, secure and user-centric applications with state-of-the-art technology.'
      wrapperClassName='index-page'
    >
      <HomepageHeader />
    </Layout>
  );
}

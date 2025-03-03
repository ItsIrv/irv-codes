import WorkItems from '../components/Work/WorkItems';
import PageLayout from '../components/PageLayout';
import PageSection from '../components/PageSection';
import SkillItems from '../components/Skills/SkillItems';
import HomepageHeader from '../components/HomepageHeader';
import HeaderBackground from '../components/HomepageHeader/HeaderBackground';
import ProjectItems from '../components/ProjectItems';
import HeaderHeading from '../components/HomepageHeader/HeaderHeading';

export default function Home(): JSX.Element {
  return (
    <PageLayout
      title='Home'
      description='A Full Stack Engineer with extensive experience in building scalable, secure and user-centric applications with state-of-the-art technology.'
      sectionId='home'
    >
      <div className='space-y-20'>
        <HeaderHeading />

        <PageSection
          sectionId='skills'
          heading='Skills'
          headingDescription='My technical expertise and professional skills.'
        >
          <SkillItems />
        </PageSection>

        <PageSection
          sectionId='work'
          heading='Work'
          headingDescription='My professional experience.'
        >
          <WorkItems />
        </PageSection>

        <PageSection
          sectionId='projects'
          heading='Projects'
          headingDescription='My personal projects.'
        >
          <ProjectItems />
        </PageSection>
      </div>
    </PageLayout>
  );
}

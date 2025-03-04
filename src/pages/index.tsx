import WorkItems from '../components/Work/WorkItems';
import PageLayout from '../components/PageLayout';
import PageSection from '../components/PageSection';
import SkillItems from '../components/Skills/SkillItems';
import ProjectItems from '../components/ProjectItems';
import HeaderHeading from '../components/Homepage/HeaderHeading';
import { ContactLinks } from '../components/ContactLinks';

export default function Home(): JSX.Element {
  return (
    <PageLayout
      title='Home'
      description='A Full Stack Engineer with extensive experience in building scalable, secure and user-centric applications with state-of-the-art technology.'
      sectionId='home'
    >
      <div className='space-y-20'>
        <div className='space-y-8'>
          <HeaderHeading />

          <div className='text-center'>
            <ContactLinks />
          </div>
        </div>

        <PageSection
          sectionId='skills'
          heading='Skills'
        >
          <SkillItems />
        </PageSection>

        <PageSection
          sectionId='work'
          heading='Work'
        >
          <WorkItems />
        </PageSection>

        <PageSection
          sectionId='projects'
          heading='Personal Projects'
        >
          <ProjectItems />
        </PageSection>

        <PageSection
          sectionId='contact'
          heading='Contact'
        >
          {/* Social Links */}
          <div className='mt-12 text-center'>
            <ContactLinks />
          </div>
        </PageSection>
      </div>
    </PageLayout>
  );
}

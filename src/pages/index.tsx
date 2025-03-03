import WorkItems from '../components/Work/WorkItems';
import PageLayout from '../components/PageLayout';
import PageSection from '../components/PageSection';
import SkillItems from '../components/Skills/SkillItems';
import ProjectItems from '../components/ProjectItems';
import HeaderHeading from '../components/Homepage/HeaderHeading';

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
          heading='Projects'
        >
          <ProjectItems />
        </PageSection>

        <PageSection
          sectionId='contact'
          heading='Contact'
        >
          {/* Social Links */}
          <div className='mt-12 text-center'>
            <div className='flex justify-center space-x-6'>
              <a
                href='https://linkedin.com/in/itsirv'
                target='_blank'
                className='text-neutral-light text-xl transition-transform transform hover:scale-110'
              >
                LinkedIn
              </a>

              <a
                href='https://github.com/itsirv'
                target='_blank'
                className='text-neutral-light text-xl transition-transform transform hover:scale-110'
              >
                GitHub
              </a>

              <a
                href='/IrvingGomez-FullStackEnginner.pdf'
                target='_blank'
                className='text-neutral-light text-xl transition-transform transform hover:scale-110'
              >
                Resume
              </a>

              <a
                href='mailto:gomirv.work@gmail.com?subject=Contact%20Request&body=Hi%20Irving%2C%0A%0AI%20would%20like%20to%20reach%20out%20regarding...'
                className='text-neutral-light text-xl transition-transform transform hover:scale-110'
              >
                Send Email
              </a>
            </div>
          </div>
        </PageSection>
      </div>
    </PageLayout>
  );
}

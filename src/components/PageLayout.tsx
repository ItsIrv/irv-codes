import React from 'react';
import Layout from '@theme/Layout';
import PageSection from './PageSection';

interface PageLayoutProps {
  title: string; // SEO title (Docusaurus)
  description?: string; // SEO description (Docusaurus)
  sectionId: string; // Required section ID
  sectionStyle?: string; // Optional section style
  heading?: string; // Visible page heading (optional)
  headingDescription?: string; // Visible page description (optional)
  children: React.ReactNode;
}

/**
 * PageLayout Component
 * A reusable wrapper that provides SEO metadata and optional page headings.
 */
export default function PageLayout({
  title,
  description,
  sectionId,
  sectionStyle,
  heading,
  headingDescription,
  children,
}: PageLayoutProps) {
  return (
    <Layout
      title={title}
      description={description}
    >
      <main className='container mx-auto mt-12'>
        <PageSection
          sectionId={sectionId}
          sectionStyle={sectionStyle}
          heading={heading}
          headingDescription={headingDescription}
        >
          {/* Page-specific content */}
          <div className='mt-6'>{children}</div>
        </PageSection>
      </main>
    </Layout>
  );
}

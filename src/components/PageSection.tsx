import React from 'react';
import Layout from '@theme/Layout';

interface PageLayoutProps {
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
export default function PageSection({
  sectionId,
  sectionStyle,
  heading,
  headingDescription,
  children,
}: PageLayoutProps) {
  return (
    <section
      id={sectionId}
      className={sectionStyle}
    >
      {/* Render heading and description only if provided */}
      {heading && (
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-white'>
          {heading}
        </h1>
      )}
      {headingDescription && (
        <p className='text-lg md:text-xl max-w-xl mx-auto mb-6 text-center text-neutral-light'>
          {headingDescription}
        </p>
      )}

      {/* Page-specific content */}
      <div className='mt-6'>{children}</div>
    </section>
  );
}

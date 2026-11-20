import React from 'react';
import { profileData } from '@/data/profile';

export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    alternateName: profileData.preferredName,
    jobTitle: 'Full-Stack Web Developer and Machine Learning Engineer',
    description:
      'Full-Stack Developer and ML Engineer based in Sri Lanka offering web development, e-commerce with PayHere, and machine learning solutions for businesses.',
    email: profileData.email,
    telephone: '+94760000000',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Sri Lanka',
      addressLocality: 'Badulla / Chavakachcheri',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Uva Wellassa University of Sri Lanka',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'J/Chavakachcheri Hindu College',
      },
    ],
    knowsAbout: [
      'Web Development',
      'Full-Stack Development',
      'Machine Learning',
      'PHP',
      'React.js',
      'Next.js',
      'Java',
      'Python',
      'MySQL',
      'Docker',
      'PayHere Payment Gateway',
      'SEO',
      'Sri Lanka Web Development',
    ],
    sameAs: [
      profileData.linkedinUrl,
      profileData.githubUrl,
      profileData.whatsappUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

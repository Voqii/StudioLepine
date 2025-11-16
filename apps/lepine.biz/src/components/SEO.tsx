import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  author?: string;
}

export default function SEO({
  title = 'Cody Lepine - Studio Lepine | Design, Security, Development & Craftsmanship',
  description = 'Cody Lepine is a multi-disciplinary creator specializing in design, security, development, woodworking, and systems engineering. Based in Saskatchewan, Canada.',
  image = 'https://lepine.biz/studiolepinelogo.png',
  url = 'https://lepine.biz',
  type = 'website',
  keywords = 'Cody Lepine, Studio Lepine, web development, mobile development, security research, woodworking, UI/UX design, Saskatchewan, Canada',
  author = 'Cody Lepine',
}: SEOProps) {
  // Structured data for person/portfolio
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cody Lepine',
    url: 'https://lepine.biz',
    image: 'https://lepine.biz/self.jpeg',
    sameAs: [
      'https://lepine.biz',
    ],
    jobTitle: 'Multi-Disciplinary Creator',
    worksFor: {
      '@type': 'Organization',
      name: 'Studio Lepine',
      url: 'https://lepine.biz',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Saskatchewan',
      addressCountry: 'CA',
    },
    email: 'cody@lepine.biz',
    description: 'Multi-disciplinary creator specializing in design, security, development, woodworking, and systems engineering.',
    knowsAbout: [
      'Web Development',
      'Mobile Development',
      'Security Research',
      'UI/UX Design',
      'Woodworking',
      'Systems Engineering',
      'React',
      'TypeScript',
      'Swift',
      'iOS Development',
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

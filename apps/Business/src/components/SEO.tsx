import { useEffect } from 'react';

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
  useEffect(() => {
    // Guard against SSR or missing document
    if (typeof document === 'undefined') return;

    try {
      // Set title
      document.title = title;

      // Helper function to set or update meta tag
      const setMeta = (name: string, content: string, isProperty = false) => {
        const attr = isProperty ? 'property' : 'name';
        let element = document.querySelector(`meta[${attr}="${name}"]`);

        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attr, name);
          document.head.appendChild(element);
        }

        element.setAttribute('content', content);
      };

      // Helper function to set or update link tag
      const setLink = (rel: string, href: string) => {
        let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

        if (!element) {
          element = document.createElement('link');
          element.setAttribute('rel', rel);
          document.head.appendChild(element);
        }

        element.href = href;
      };

    // Set basic meta tags
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('author', author);
    setLink('canonical', url);

    // Open Graph tags
    setMeta('og:type', type, true);
    setMeta('og:url', url, true);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', image, true);

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:url', url);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

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

    // Add or update structured data script
    let scriptElement = document.querySelector('script[type="application/ld+json"]');

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }

      scriptElement.textContent = JSON.stringify(structuredData);
    } catch (error) {
      console.error('SEO component error:', error);
    }
  }, [title, description, image, url, type, keywords, author]);

  return null;
}

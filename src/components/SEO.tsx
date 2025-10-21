import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

export default function SEO({
  title = 'Studio Lepine - Design, Security, Development & Craftsmanship',
  description = 'Multi-disciplinary creator specializing in design, security, development, woodworking, and systems engineering. Based in Saskatchewan, Canada.',
  image = 'https://lepine.biz/studiolepinelogo.png',
  url = 'https://lepine.biz',
  type = 'website',
  keywords = 'web development, mobile development, security research, woodworking, UI/UX design, Saskatchewan, Canada',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

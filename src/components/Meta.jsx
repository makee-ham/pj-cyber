import { Helmet } from 'react-helmet';

export default function Meta({
  title = Meta.defaultProps.title,
  description = Meta.defaultProps.description,
  keywords = Meta.defaultProps.keywords,
  image = Meta.defaultProps.image,
  url = Meta.defaultProps.url,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: 'CYBER - Curated Design for the Digital Age',
  description:
    'Explore cutting-edge design, tech-inspired products, and curated collections for a modern digital lifestyle. CYBER brings future aesthetics into the now.',
  keywords:
    'cyber, modern design, digital lifestyle, curated products, tech aesthetics, independent brands',
  image: '/og-default.png',
  url: '#',
};

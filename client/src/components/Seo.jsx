import { Helmet } from 'react-helmet-async';
import { baseMeta } from '../utils/seo';

const Seo = ({ title, description, path = '' }) => {
  const canonical = `${baseMeta.siteUrl}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={baseMeta.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${baseMeta.siteUrl}${baseMeta.defaultImage}`} />
    </Helmet>
  );
};

export default Seo;

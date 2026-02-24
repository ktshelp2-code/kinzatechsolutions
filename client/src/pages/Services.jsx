import Seo from '../components/Seo';
import ServicesGrid from '../components/ServicesGrid';
import { pageMeta } from '../utils/seo';

const Services = () => (
  <>
    <Seo {...pageMeta.services} path="/services" />
    <ServicesGrid />
  </>
);

export default Services;

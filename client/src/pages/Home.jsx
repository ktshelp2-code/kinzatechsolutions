import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import Seo from '../components/Seo';
import { pageMeta } from '../utils/seo';

const Home = () => (
  <>
    <Seo {...pageMeta.home} path="/" />
    <Hero />
    <ServicesGrid />
  </>
);

export default Home;

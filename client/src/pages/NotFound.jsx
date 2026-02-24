import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { pageMeta } from '../utils/seo';

const NotFound = () => (
  <section className="section-padding mx-auto max-w-3xl text-center">
    <Seo {...pageMeta.notFound} path="/404" />
    <h1 className="text-6xl font-black">404</h1>
    <p className="mt-4">The page you are looking for does not exist.</p>
    <Link to="/" className="mt-8 inline-block rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white">Back to Home</Link>
  </section>
);

export default NotFound;

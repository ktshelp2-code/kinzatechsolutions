import Seo from '../components/Seo';
import { pageMeta } from '../utils/seo';

const Pricing = () => (
  <section className="section-padding mx-auto max-w-6xl">
    <Seo {...pageMeta.pricing} path="/pricing" />
    <h1 className="text-4xl font-bold">Pricing</h1>
    <p className="mt-5">Choose from fixed-scope, dedicated team, or hybrid engagement models.</p>
  </section>
);

export default Pricing;

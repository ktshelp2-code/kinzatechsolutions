import Seo from '../components/Seo';
import { pageMeta } from '../utils/seo';

const Team = () => (
  <section className="section-padding mx-auto max-w-6xl">
    <Seo {...pageMeta.team} path="/team" />
    <h1 className="text-4xl font-bold">Our Team</h1>
    <p className="mt-5 text-slate-600 dark:text-slate-300">Product engineers, UI specialists, and cloud professionals focused on impact.</p>
  </section>
);

export default Team;

import Seo from '../components/Seo';
import { pageMeta } from '../utils/seo';

const About = () => (
  <section className="section-padding mx-auto max-w-6xl">
    <Seo {...pageMeta.about} path="/about" />
    <h1 className="text-4xl font-bold">About Us</h1>
    <p className="mt-5 text-slate-600 dark:text-slate-300">KinzaTechSolutions is a full-service engineering company delivering mission-critical applications using modern JavaScript technologies.</p>
  </section>
);

export default About;

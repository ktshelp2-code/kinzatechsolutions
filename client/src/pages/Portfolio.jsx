import Seo from '../components/Seo';
import { pageMeta } from '../utils/seo';

const projects = [
  { id: 1, title: 'FinTrack ERP', summary: 'ERP modernization for a regional distributor.' },
  { id: 2, title: 'MediCare Portal', summary: 'Patient workflow dashboard for a healthcare network.' }
];

const Portfolio = () => (
  <section className="section-padding mx-auto max-w-6xl">
    <Seo {...pageMeta.portfolio} path="/portfolio" />
    <h1 className="text-4xl font-bold">Portfolio</h1>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.id} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{project.summary}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Portfolio;

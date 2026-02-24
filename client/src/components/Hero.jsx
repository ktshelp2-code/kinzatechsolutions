import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="section-padding">
    <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
      <div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
          Future-Ready Digital Company
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-bold leading-tight sm:text-5xl">
          Building growth-focused software for modern teams.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-5 max-w-xl text-slate-600 dark:text-slate-300">
          KinzaTechSolutions helps businesses launch premium digital products with secure architecture, smooth UX, and measurable ROI.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-4">
          <Link to="/contact" className="rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white">Start a Project</Link>
          <Link to="/portfolio" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold dark:border-slate-700">View Work</Link>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-500 p-10 text-white shadow-2xl">
        <p className="text-sm uppercase tracking-widest">Trusted by startups & enterprises</p>
        <h2 className="mt-4 text-3xl font-semibold">MERN + Cloud + Product Strategy</h2>
      </motion.div>
    </div>
  </section>
);

export default Hero;

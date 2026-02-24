import { motion } from 'framer-motion';
import { serviceItems } from '../data/services';

const ServicesGrid = () => (
  <section className="section-padding bg-slate-100 dark:bg-slate-900/40">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {serviceItems.map((service, index) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;

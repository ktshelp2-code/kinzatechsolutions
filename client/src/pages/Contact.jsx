import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';
import { pageMeta } from '../utils/seo';

const Contact = () => (
  <section className="section-padding mx-auto max-w-3xl">
    <Seo {...pageMeta.contact} path="/contact" />
    <h1 className="text-4xl font-bold">Contact</h1>
    <p className="mt-3 text-slate-600 dark:text-slate-300">Tell us about your goals and timeline. We'll respond within one business day.</p>
    <div className="mt-8">
      <ContactForm />
    </div>
  </section>
);

export default Contact;

import { useState } from 'react';

const initial = { name: '', email: '', company: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required';
    if (form.message.trim().length < 20) nextErrors.message = 'Message should be at least 20 characters';
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    setStatus('submitting');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      {['name', 'email', 'company'].map((field) => (
        <label key={field} className="text-sm font-medium capitalize">
          {field}
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 outline-none focus:border-brand-500 dark:border-slate-700"
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
          {errors[field] && <span className="mt-1 block text-xs text-rose-500">{errors[field]}</span>}
        </label>
      ))}
      <label className="text-sm font-medium">
        Message
        <textarea
          rows="5"
          className="mt-1 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 outline-none focus:border-brand-500 dark:border-slate-700"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <span className="mt-1 block text-xs text-rose-500">{errors.message}</span>}
      </label>
      <button disabled={status === 'submitting'} className="rounded-lg bg-brand-500 px-4 py-3 font-semibold text-white">
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-sm text-emerald-500">Thanks! We will contact you shortly.</p>}
      {status === 'error' && <p className="text-sm text-rose-500">Failed to send message. Please try again.</p>}
    </form>
  );
};

export default ContactForm;

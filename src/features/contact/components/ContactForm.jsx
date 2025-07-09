import React, { useEffect } from 'react';
import ContactFormField from './ContactFormField';
import SuccessMessage from './SuccessMessage';
import { useContactForm } from '../hooks/useContactForm';
import Button from '../../../ui/Button'

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    submitted,
    successMessage,
    error,
    handleFieldChange,
    handleSubmit,
    clearStatus
  } = useContactForm();

  const handleChange = (e) => {
    handleFieldChange(e.target.name, e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  // Auto-clear success message after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        clearStatus();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted, clearStatus]);

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
        <lord-icon
          src="https://cdn.lordicon.com/rhvddzym.json"
          trigger="hover"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '28px', height: '28px', marginRight: '12px' }}
        />
        Send us a Message
      </h2>

      {submitted && successMessage && (
        <SuccessMessage 
          message={successMessage}
          onClose={clearStatus}
        />
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
          <span className="text-red-700 dark:text-red-300">{error}</span>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <ContactFormField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <ContactFormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <ContactFormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <ContactFormField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <Button type="primary" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <lord-icon
                src="https://cdn.lordicon.com/xjovhxra.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Sending...
            </>
          ) : (
            <>
              <lord-icon
                src="https://cdn.lordicon.com/rhvddzym.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

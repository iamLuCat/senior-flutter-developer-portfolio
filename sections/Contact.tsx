
import React, { useRef, useState } from 'react';
import Reveal from '../components/Reveal';
import { portfolioData } from '../data/portfolioData';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    setStatus('sending');

    // Use environment variables provided in the execution context
    const serviceId = process.env.MAIL_JS_SERVICE_ID || '';
    const templateId = process.env.MAIL_JS_TEMPLATE_ID || '';
    const publicKey = process.env.MAIL_JS_KEY || '';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: portfolioData.hero.name,
    };

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing in environment variables.');
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Error sending message via EmailJS:", error);
      setStatus('error');
    }
  };

  const { email, github, linkedin, phone } = portfolioData.contact;

  const contactItems = [
    { label: 'Email', value: email, icon: 'mail', href: `mailto:${email}` },
    { label: 'Phone', value: phone, icon: 'call', href: `tel:${phone}` },
    { label: 'GitHub', value: 'github.com/iamLuCat', icon: 'code', href: github },
    { label: 'LinkedIn', value: 'linkedin.com/in/vupq06', icon: 'work', href: linkedin }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <Reveal delay={0.1}>
              <span className="text-primary text-sm font-bold tracking-wider uppercase mb-4 block">Contact</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Let's discuss your next project
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
                I'm currently available for freelance work and open to full-time opportunities. If you're interested in building a high-performance Flutter app, let's talk.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactItems.map((item, i) => (
                <Reveal key={i} delay={0.4 + (0.1 * i)}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : "_self"}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{item.label}</h3>
                      <p className="text-sm text-slate-500">{item.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="w-full">
            <Reveal delay={0.5} threshold={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-10 animate-fade-in">
                    <div className="size-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                      Thank you for reaching out. I have received your message and will respond as soon as possible.
                    </p>

                    <button
                      onClick={() => setStatus('idle')}
                      className="h-12 px-8 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm hover:bg-slate-200 transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send me a message</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          disabled={status === 'sending'}
                          className="w-full h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-300 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          disabled={status === 'sending'}
                          className="w-full h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-300 disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                        <textarea
                          rows={5}
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project needs..."
                          disabled={status === 'sending'}
                          className="w-full rounded-xl border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-300 resize-none disabled:opacity-50"
                        ></textarea>
                      </div>

                      <div className="flex justify-center">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={process.env.VITE_RECAPTCHA_SITE_KEY}
                          onChange={(token) => setCaptchaToken(token)}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending' || !captchaToken}
                        className="w-full h-14 rounded-xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/25 hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95 group disabled:bg-slate-400 disabled:shadow-none"
                      >
                        {status === 'sending' ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">send</span>
                          </>
                        )}
                      </button>
                      {status === 'error' && (
                        <p className="text-red-500 text-center text-sm font-medium">
                          Oops! Something went wrong. Check your configuration or try again later.
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

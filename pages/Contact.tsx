import React, { useState } from 'react';
import TransitionWrapper from '../components/TransitionWrapper';
import { Mail, MapPin, Download, Plus, Minus, Briefcase, Beaker, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSent(true), 1000);
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    { q: "What is the maintenance schedule?", a: "PureFlow is designed for low maintenance. The hydrocyclone is self-cleaning, and the ultrasonic emitter requires calibration only once every 6 months." },
    { q: "Can it handle saltwater environments?", a: "Yes, all wetted parts are constructed from marine-grade 316L stainless steel and corrosion-resistant composites." },
    { q: "What is the power consumption?", a: "The unit operates at approximately 300W during active separation cycles, making it compatible with standard solar-battery setups." },
    { q: "Do you offer international shipping?", a: "Yes, we ship units globally. Installation support is provided via remote diagnostics or certified local partners." }
  ];

  return (
    <TransitionWrapper>
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">Partner With Us</h1>
          <p className="text-slate-500 text-lg">
             Whether you are a commercial fishery, a research institute, or a government body, PureFlow scales to meet your ecological goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm border border-slate-100">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700">Email Us</h4>
                    <p className="text-slate-500 text-sm">innovate@pureflow.tech</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm border border-slate-100">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700">Lab Location</h4>
                    <p className="text-slate-500 text-sm">OceanTech Innovation Hub, Seattle, WA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-lg font-semibold text-slate-700 mb-6">Partnership Types</h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-4 hover:border-teal-300 transition-colors cursor-pointer">
                   <Briefcase className="text-slate-400" />
                   <div>
                     <h5 className="font-semibold text-slate-700">Commercial Pilot</h5>
                     <p className="text-xs text-slate-500">For aquaculture farms & fisheries.</p>
                   </div>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-4 hover:border-teal-300 transition-colors cursor-pointer">
                   <Beaker className="text-slate-400" />
                   <div>
                     <h5 className="font-semibold text-slate-700">R&D Collaboration</h5>
                     <p className="text-xs text-slate-500">University & scientific validation.</p>
                   </div>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-4 hover:border-teal-300 transition-colors cursor-pointer">
                   <Landmark className="text-slate-400" />
                   <div>
                     <h5 className="font-semibold text-slate-700">Gov / Municipal</h5>
                     <p className="text-xs text-slate-500">Public water treatment projects.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[100px] -z-0" />
            
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center"
                >
                  <Mail size={36} />
                </motion.div>
                <h3 className="text-2xl font-semibold text-slate-800">Message Sent</h3>
                <p className="text-slate-500">Thank you for contacting PureFlow. We will respond within 24 hours.</p>
                <button 
                  onClick={() => setIsSent(false)} 
                  className="mt-4 text-teal-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <h3 className="text-2xl font-light text-slate-800 mb-6">Send Inquiry</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors shadow-lg"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-center text-slate-800 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-700">{faq.q}</span>
                  {activeAccordion === index ? <Minus size={18} className="text-teal-500" /> : <Plus size={18} className="text-slate-400" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </div>
    </TransitionWrapper>
  );
};

export default Contact;

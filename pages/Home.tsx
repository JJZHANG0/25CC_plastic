import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Activity, ShieldCheck, Cpu, ArrowRight, Layers } from 'lucide-react';
import ParticleWave from '../components/ParticleWave';
import TransitionWrapper from '../components/TransitionWrapper';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Zap size={24} />, title: "Ultrasonic Pre-Treatment", text: "Destabilizes micro-particles for easier capture." },
    { icon: <Activity size={24} />, title: "Hydrocyclone Separation", text: "Iso-vortex dynamics for 96% removal efficiency." },
    { icon: <Cpu size={24} />, title: "Smart Automated Control", text: "AI-driven adjustments for varying water conditions." },
    { icon: <ShieldCheck size={24} />, title: "Compact Design", text: "Fits 1–1.5 m³ footprint for nearshore deployment." },
  ];

  return (
    <TransitionWrapper>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        <ParticleWave />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-[-4rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-light text-slate-800 tracking-tight leading-tight mb-8">
              Intelligent Ultrasound for a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 font-semibold">
                Plastic-Free Tomorrow
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            A next-generation solution for microplastic separation in aquaculture and nearshore waters.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <button 
              onClick={() => navigate('/innovation')}
              className="px-10 py-4 bg-slate-800 text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:bg-slate-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Explore Innovation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/impact')}
              className="px-10 py-4 bg-white/80 backdrop-blur-md text-slate-800 border border-slate-200 rounded-full font-medium shadow-lg hover:shadow-xl hover:border-teal-400 transition-all transform hover:-translate-y-1"
            >
              See Our Impact
            </button>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </motion.div>
      </div>

      {/* SECTION: THE INVISIBLE THREAT */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Interactive Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden shadow-2xl h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974&auto=format&fit=crop" 
                alt="Microplastics in Water" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]">
                <div className="flex items-center gap-3 text-slate-800 mb-2">
                  <Layers size={20} className="text-red-500" />
                  <span className="font-semibold uppercase tracking-wider text-sm">The Invisible Crisis</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">5 Trillion Particles</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Microplastics have infiltrated every level of the marine food chain. Traditional filtration cannot stop particles smaller than 5mm without clogging.
                </p>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-slate-800 mb-8 leading-tight">
                Operating Where <br />
                <span className="font-semibold text-teal-600">Traditional Filters Fail</span>
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Aquaculture industries face a critical challenge: keeping water pure without disrupting flow rates. Chemical treatments are toxic, and physical nets clog instantly.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                PureFlow utilizes high-frequency acoustic standing waves to "push" micro-particles together, creating larger clusters that can be effortlessly removed by our proprietary hydrocyclone vortex.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-3xl font-bold text-slate-800 mb-1">96%</h4>
                  <p className="text-sm text-slate-500">Capture Efficiency</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-3xl font-bold text-slate-800 mb-1">Zero</h4>
                  <p className="text-sm text-slate-500">Filter Replacements</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION: FEATURE HIGHLIGHTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-light text-slate-800">Core Technology</h2>
            <p className="text-slate-500 mt-4">A seamless integration of acoustics and fluid dynamics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-teal-50 text-teal-600 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-700 text-lg mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: PARTNERS / TRUST INDICATORS */}
      <section className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Trusted by Leaders in Marine Innovation
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text Placeholders for Logos */}
             <span className="text-2xl font-bold text-slate-800">AquaTech</span>
             <span className="text-2xl font-bold text-slate-800">OCEAN<span className="text-teal-500">CLEAN</span></span>
             <span className="text-2xl font-bold text-slate-800">BlueHarvest</span>
             <span className="text-2xl font-bold text-slate-800">NORDIC<span className="font-light">SEAFOOD</span></span>
             <span className="text-2xl font-bold text-slate-800">Marine<span className="italic">Lab</span></span>
          </div>
        </div>
      </section>

      {/* SECTION: CALL TO ACTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Ready to secure your water quality?</h2>
          <p className="text-xl text-slate-300 mb-12 font-light">
            Join the pilot program and be among the first to deploy intelligent microplastic removal.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-12 py-5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
          >
            Request Pilot Access
          </button>
        </div>
      </section>

    </TransitionWrapper>
  );
};

export default Home;

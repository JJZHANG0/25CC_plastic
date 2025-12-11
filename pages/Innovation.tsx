import React from 'react';
import { motion } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import InteractiveGallery from '../components/InteractiveGallery';
import { Waves, Wind, Settings, CheckCircle, Sliders, Battery, Maximize } from 'lucide-react';

const Innovation: React.FC = () => {

  const systemImages = [
    {
      id: 1,
      title: "Exploded View",
      subtitle: "Internal component layout showing the acoustic chamber.",
      image: "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Control Panel",
      subtitle: "AI-driven touch interface for real-time monitoring.",
      image: "https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Sensor Array",
      subtitle: "Turbidity and flow sensors located at intake.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <TransitionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light text-slate-800 mb-6">
            Ultrasound + Hydrocyclone
          </h1>
          <p className="text-2xl text-teal-600 font-medium">A New Standard in Microplastic Removal</p>
          <p className="text-slate-500 mt-6 leading-relaxed">
            By combining acoustic standing waves with centrifugal force, we achieve separation efficiencies previously thought impossible for low-density microplastics.
          </p>
        </div>

        {/* The Process Visual */}
        <div className="relative p-8 md:p-16 bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-teal-50/30 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Waves size={36} />
              </div>
              <h3 className="font-bold text-slate-800 mb-3 text-lg">1. Intake</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Contaminated water enters the system via smart pumps regulated by flow sensors.</p>
            </div>
            
            <div className="flex flex-col items-center text-center relative group">
              <div className="hidden md:block absolute top-10 -left-1/2 w-full h-1 bg-slate-200 -z-10" />
              <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-6 ring-8 ring-white shadow-sm group-hover:scale-110 transition-transform">
                <Wind size={36} />
              </div>
              <h3 className="font-bold text-slate-800 mb-3 text-lg">2. Agglomeration</h3>
              <p className="text-sm text-slate-500 leading-relaxed">High-frequency acoustic waves cause particles to cluster, increasing their effective mass.</p>
            </div>

            <div className="flex flex-col items-center text-center relative group">
              <div className="hidden md:block absolute top-10 -left-1/2 w-full h-1 bg-slate-200 -z-10" />
              <div className="w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 ring-8 ring-white shadow-sm group-hover:scale-110 transition-transform">
                <Settings size={36} />
              </div>
              <h3 className="font-bold text-slate-800 mb-3 text-lg">3. Separation</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Iso-vortex hydrocyclone physics flings heavy clusters to the walls for collection.</p>
            </div>

            <div className="flex flex-col items-center text-center relative group">
               <div className="hidden md:block absolute top-10 -left-1/2 w-full h-1 bg-slate-200 -z-10" />
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 ring-8 ring-white shadow-sm group-hover:scale-110 transition-transform">
                <CheckCircle size={36} />
              </div>
              <h3 className="font-bold text-slate-800 mb-3 text-lg">4. Discharge</h3>
              <p className="text-sm text-slate-500 leading-relaxed">96% plastic-free water returns to the ecosystem or recirculation tank.</p>
            </div>
          </div>
        </div>

        {/* SYSTEM GALLERY */}
        <section>
          <div className="mb-10">
            <h2 className="text-3xl font-light text-slate-800">System Architecture</h2>
            <p className="text-slate-500 mt-2">Explore the components that make PureFlow unique.</p>
          </div>
          <InteractiveGallery items={systemImages} />
        </section>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "96%", label: "Removal Efficiency", sub: "For particles >50μm", icon: <CheckCircle /> },
            { value: "4 m³", label: "Max Throughput", sub: "Per hour processing", icon: <Maximize /> },
            { value: "300W", label: "Power Draw", sub: "Energy efficient design", icon: <Battery /> },
            { value: "AI", label: "Adaptive Control", sub: "Self-regulating flow", icon: <Sliders /> }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center h-64"
            >
              <div className="text-teal-500 mb-4">{stat.icon}</div>
              <span className="text-5xl font-bold text-slate-800 mb-2">{stat.value}</span>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide">{stat.label}</span>
              <span className="text-xs text-slate-400 mt-2">{stat.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs Table */}
        <section className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-slate-100 bg-slate-50">
            <h3 className="text-2xl font-light text-slate-800">Technical Specifications</h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-semibold text-teal-600 mb-4 uppercase tracking-wider text-xs">Dimensions & Weight</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Unit Height</span> <span className="font-medium text-slate-900">1.2 meters</span></li>
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Footprint</span> <span className="font-medium text-slate-900">1.5 m²</span></li>
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Dry Weight</span> <span className="font-medium text-slate-900">145 kg</span></li>
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Port Size</span> <span className="font-medium text-slate-900">2 inch (Standard)</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-600 mb-4 uppercase tracking-wider text-xs">Performance & Power</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Input Voltage</span> <span className="font-medium text-slate-900">110-240V AC</span></li>
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Operating Frequency</span> <span className="font-medium text-slate-900">20kHz - 40kHz</span></li>
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Max Particle Size</span> <span className="font-medium text-slate-900">5mm</span></li>
                  <li className="flex justify-between border-b border-slate-100 pb-2"><span>Min Particle Size</span> <span className="font-medium text-slate-900">10μm</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </TransitionWrapper>
  );
};

export default Innovation;

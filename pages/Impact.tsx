import React from 'react';
import TransitionWrapper from '../components/TransitionWrapper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight, Shield, TrendingDown, Globe, Fish, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  { year: '2020', plastics: 100 },
  { year: '2021', plastics: 92 },
  { year: '2022', plastics: 85 },
  { year: '2023', plastics: 60 },
  { year: '2024', plastics: 30 }, 
  { year: '2025', plastics: 10 },
];

const efficiencyData = [
  { time: '0m', removal: 0 },
  { time: '5m', removal: 40 },
  { time: '10m', removal: 75 },
  { time: '15m', removal: 88 },
  { time: '20m', removal: 94 },
  { time: '25m', removal: 96 },
  { time: '30m', removal: 96 },
];

const Impact: React.FC = () => {
  return (
    <TransitionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6">Measured Impact</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            From reducing biological risk in aquaculture to restoring nearshore clarity, our metrics drive our mission.
          </p>
        </div>

        {/* Key Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-teal-50 text-teal-600 rounded-2xl"><TrendingDown size={24} /></div>
              <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">-92%</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Contamination Risk</h3>
            <p className="text-slate-500 text-base leading-relaxed">Drastic reduction in microplastic ingestion within controlled aquaculture environments, ensuring cleaner harvests.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl"><Shield size={24} /></div>
              <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Safe</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Public Health</h3>
            <p className="text-slate-500 text-base leading-relaxed">Preventing plastic-induced bioaccumulation in the human food supply chain by targeting the source.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl"><ArrowUpRight size={24} /></div>
              <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">ROI</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Economic Value</h3>
            <p className="text-slate-500 text-base leading-relaxed">Higher quality yields for fisheries and significantly reduced filtration maintenance costs and downtime.</p>
          </motion.div>
        </div>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-700 mb-6">Projected Concentration Reduction</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorPlastics" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} 
                  />
                  <Area type="monotone" dataKey="plastics" stroke="#0d9488" strokeWidth={2} fillOpacity={1} fill="url(#colorPlastics)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-700 mb-6">Removal Efficiency Over Time</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} domain={[0, 100]} />
                  <Tooltip 
                     contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                  />
                  <Line type="monotone" dataKey="removal" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff'}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Global Case Studies */}
        <section>
          <div className="mb-12 text-center">
             <h2 className="text-3xl font-light text-slate-800">Global Case Studies</h2>
             <p className="text-slate-500 mt-2">Real-world deployments delivering results.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Case Study 1 */}
            <div className="group relative rounded-[2rem] overflow-hidden h-96 shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1516216628259-9475997cb356?q=80&w=2070&auto=format&fit=crop" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 alt="Norway Salmon Farm"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 text-white">
                 <div className="flex items-center gap-2 mb-2">
                    <Globe size={16} className="text-teal-400"/>
                    <span className="text-xs uppercase tracking-widest font-semibold text-teal-400">Norway</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Nordic Salmon Hatchery</h3>
                 <p className="text-slate-300 text-sm max-w-md group-hover:text-white transition-colors">
                   Implemented 3 PureFlow units in intake lines. Resulted in 85% reduction in microplastic load during seasonal coastal runoff events.
                 </p>
               </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative rounded-[2rem] overflow-hidden h-96 shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 alt="Singapore Water Facility"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 text-white">
                 <div className="flex items-center gap-2 mb-2">
                    <Globe size={16} className="text-teal-400"/>
                    <span className="text-xs uppercase tracking-widest font-semibold text-teal-400">Singapore</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Coastal R&D Center</h3>
                 <p className="text-slate-300 text-sm max-w-md group-hover:text-white transition-colors">
                   Used for nearshore water quality monitoring. Successfully identified and removed nano-plastics down to 20μm using ultrasonic agglomeration.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="bg-slate-50 rounded-[2rem] p-12 text-center">
           <h3 className="text-2xl font-light text-slate-800 mb-10">Aligned with UN Sustainable Development Goals</h3>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                 <div className="w-20 h-20 bg-[#00AED9] text-white rounded-2xl flex items-center justify-center shadow-lg mb-4 transform hover:-translate-y-2 transition-transform">
                    <Droplet size={32} />
                 </div>
                 <span className="font-bold text-slate-700">Goal 6</span>
                 <span className="text-xs text-slate-500">Clean Water</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-20 h-20 bg-[#0A97D9] text-white rounded-2xl flex items-center justify-center shadow-lg mb-4 transform hover:-translate-y-2 transition-transform">
                    <Fish size={32} />
                 </div>
                 <span className="font-bold text-slate-700">Goal 14</span>
                 <span className="text-xs text-slate-500">Life Below Water</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-20 h-20 bg-[#BF8B2E] text-white rounded-2xl flex items-center justify-center shadow-lg mb-4 transform hover:-translate-y-2 transition-transform">
                    <Globe size={32} />
                 </div>
                 <span className="font-bold text-slate-700">Goal 12</span>
                 <span className="text-xs text-slate-500">Responsible Consumption</span>
              </div>
           </div>
        </section>

      </div>
    </TransitionWrapper>
  );
};

export default Impact;

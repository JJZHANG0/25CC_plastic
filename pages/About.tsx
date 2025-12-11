import React from 'react';
import { motion } from 'framer-motion';
import TransitionWrapper from '../components/TransitionWrapper';
import InteractiveGallery from '../components/InteractiveGallery';
import { Target, Eye, Clock, Award, Users } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { name: "Dr. Sarah Lin", role: "Environmental Engineering", description: "Expert in water purification systems and ecological impact analysis." },
  { name: "James Thorne", role: "Marine Science", description: "Specializes in nearshore ecosystem health and pollutant tracking." },
  { name: "Elena Rossi", role: "Ultrasonic Systems R&D", description: "Pioneer in acoustic cavitation technologies for particle separation." },
  { name: "David Chen", role: "Fluid Dynamics", description: "Lead engineer for hydrocyclone vortex optimization." },
  { name: "Michael O'Connell", role: "Intelligent Automation", description: "Architect of the AI-driven control systems." },
  { name: "Dr. Aris Thorne", role: "Sustainability Strategy", description: "Former NGO director focusing on ocean policy implementation." },
];

const galleryItems = [
  {
    id: 1,
    title: "Research & Design",
    subtitle: "Our Seattle-based acoustic simulation lab.",
    image: "https://images.unsplash.com/photo-1581093458791-9f302e683800?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Prototype Testing",
    subtitle: "Live tank trials with high-density particle flows.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Field Operations",
    subtitle: "Deployment in nearshore aquaculture facilities.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Data Analysis",
    subtitle: "Real-time monitoring of removal efficiency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

const About: React.FC = () => {
  return (
    <TransitionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-light text-slate-800 mb-6">Engineered for Ecology</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We are a team of scientists, engineers, and ocean advocates united by a single goal: 
              <span className="text-teal-600 font-medium"> to remove the invisible pollutants shaping our future.</span>
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[2rem] glass border border-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-light text-slate-800 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Enhancing microplastic governance capacity to protect ecosystems and human health. We bridge the gap between industrial necessity and ecological preservation by providing scalable, energy-efficient tools.
              </p>
            </div>
            <div className="mt-8 h-1 w-24 bg-teal-200 rounded-full"></div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[2rem] glass border border-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-light text-slate-800 mb-6">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Zero microplastic discharge for future aquaculture and coastal habitats. We envision a world where water quality standards proactively address nano-pollutants before they enter the food chain.
              </p>
            </div>
            <div className="mt-8 h-1 w-24 bg-blue-200 rounded-full"></div>
          </motion.div>
        </div>

        {/* TIMELINE SECTION */}
        <section className="relative border-l-2 border-slate-200 ml-6 md:ml-0 md:border-l-0">
           <div className="text-center mb-16 hidden md:block">
              <h3 className="text-3xl font-light text-slate-800">Our Journey</h3>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between gap-8 relative">
              {[
                { year: "2019", title: "Concept Proven", desc: "Lab-scale ultrasonic agglomeration validated at 85% efficiency." },
                { year: "2021", title: "Seed Funding", desc: "Secured $2M for prototype development and hydrocyclone integration." },
                { year: "2023", title: "Pilot Alpha", desc: "First deployment in closed-loop salmon farm in Norway." },
                { year: "2025", title: "Global Launch", desc: "Commercial units available for coastal and offshore facilities." }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0 md:w-1/4 group">
                  {/* Dot */}
                  <div className="absolute left-[-9px] top-0 md:left-0 md:right-0 md:mx-auto md:top-[-9px] w-4 h-4 rounded-full bg-white border-4 border-teal-500 z-10 group-hover:scale-125 transition-transform" />
                  
                  {/* Line for desktop */}
                  <div className="hidden md:block absolute top-[-1px] left-0 w-full h-0.5 bg-slate-200 -z-0" />

                  <div className="md:text-center pt-1 md:pt-8">
                    <span className="text-4xl font-bold text-slate-200 group-hover:text-teal-100 transition-colors">{item.year}</span>
                    <h4 className="text-lg font-bold text-slate-800 mt-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* INTERACTIVE GALLERY */}
        <section>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-light text-slate-800">Inside The Lab</h2>
              <p className="text-slate-500 mt-2">Where fluid dynamics meets acoustic physics.</p>
            </div>
          </div>
          <InteractiveGallery items={galleryItems} />
        </section>

        {/* TEAM SECTION */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800">Meet The Innovators</h2>
            <p className="text-slate-500 mt-4">Merging fluid dynamics, acoustics, and ecology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-6 mx-auto overflow-hidden relative">
                   {/* Placeholder avatar effect */}
                   <div className="absolute inset-0 bg-slate-300 opacity-20 group-hover:opacity-0 transition-opacity"></div>
                   <Users className="absolute inset-0 m-auto text-slate-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 text-center">{member.name}</h3>
                <p className="text-teal-600 font-medium text-center text-sm mb-4">{member.role}</p>
                <p className="text-slate-500 text-center text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </TransitionWrapper>
  );
};

export default About;

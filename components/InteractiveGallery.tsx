import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

interface InteractiveGalleryProps {
  items: GalleryItem[];
}

const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<number | null>(items[0].id);

  return (
    <div className="w-full h-[500px] flex gap-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ease-in-out ${
            activeId === item.id ? 'flex-[3]' : 'flex-[1]'
          }`}
          onMouseEnter={() => setActiveId(item.id)}
          initial={false}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80 transition-opacity duration-300 ${activeId === item.id ? 'opacity-100' : 'opacity-60'}`} />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <div className="flex justify-between items-end">
              <div>
                <motion.h3 
                  className={`text-xl font-bold mb-1 ${activeId === item.id ? 'text-teal-300' : 'text-white'}`}
                  layout
                >
                  {item.title}
                </motion.h3>
                {activeId === item.id && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-slate-200 font-light"
                  >
                    {item.subtitle}
                  </motion.p>
                )}
              </div>
              {activeId !== item.id && (
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <Plus size={20} className="text-white" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveGallery;

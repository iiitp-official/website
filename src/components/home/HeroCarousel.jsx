import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  { id: 1, image: '/carousel/slide_1.jpg' },
  { id: 2, image: '/carousel/slide_2.jpeg' },
  { id: 3, image: '/carousel/slide_3.jpeg' },
  { id: 4, image: '/carousel/slide_4.jpeg' },
  { id: 5, image: '/carousel/slide_5.jpeg' },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh] overflow-hidden bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4 shadow-sm"
        >
          Indian Institute of Information Technology Pune
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl font-medium"
        >
          Empowering Innovation, Shaping Tomorrow
        </motion.p>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/academics" className="px-8 py-3 bg-accent text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200">
            Explore Programs
          </Link>
          <Link to="/academics" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-all duration-200">
            Admissions 2025-26
          </Link>
        </motion.div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm">
        <ChevronLeft size={32} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors backdrop-blur-sm">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

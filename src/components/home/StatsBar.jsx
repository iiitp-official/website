import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { id: 1, label: 'Students', value: 2000, suffix: '+' },
  { id: 2, label: 'Faculty', value: 80, suffix: '+' },
  { id: 3, label: 'Research Papers', value: 150, suffix: '+' },
  { id: 4, label: 'Placement', value: 95, suffix: '%' },
];

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      // calculate increment per frame (assuming 60fps ~ 16ms per frame)
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white font-serif mb-2">
      {count}{suffix}
    </div>
  );
};

const StatsBar = () => {
  return (
    <div className="bg-primary dark:bg-gray-900 py-12 relative z-10 -mt-2 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-blue-800/50 dark:divide-gray-800">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center text-center px-4 md:first:border-l-0 border-blue-800/50 dark:border-gray-800">
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="text-blue-200 dark:text-gray-400 font-medium text-sm md:text-base uppercase tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;

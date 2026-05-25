import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PlacementPage = () => {
  const chartData = [
    { year: '2020-21', average: 14.5, highest: 36 },
    { year: '2021-22', average: 16.8, highest: 53 },
    { year: '2022-23', average: 18.2, highest: 53 },
    { year: '2023-24', average: 17.5, highest: 55 },
  ];

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-200">
      <PageHeader title="Training & Placement Cell" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Highest Package', value: '55 LPA' },
            { label: 'Average Package', value: '17.5 LPA' },
            { label: 'Placement Percentage', value: '95%' },
            { label: 'Total Recruiters', value: '120+' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-primary text-white dark:bg-surface-dark p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold font-serif mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-blue-200 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Chart Section */}
          <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-6">Placement Trends (LPA)</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#fff', borderRadius: '8px' }} />
                  <Legend />
                  <Bar dataKey="average" name="Average Package" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="highest" name="Highest Package" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* About Placements */}
          <div>
            <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-800">Why Recruit from IIIT Pune?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              IIIT Pune follows a rigorous curriculum that is constantly updated to meet industry demands. Our students are well-versed in the latest technologies including AI/ML, Cloud Computing, VLSI, and Full Stack Development.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              A strong focus on practical implementation, hackathons, and a mandatory 6-month industry internship ensures that our graduates are industry-ready from day one.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <h4 className="font-bold text-primary dark:text-white mb-2">Contact Placement Cell</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Email: placement@iiitp.ac.in</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +91-20-24xxxxxx</p>
            </div>
          </div>
        </div>

        {/* Recruiters Grid */}
        <section>
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white mb-8 border-b pb-2 border-gray-200 dark:border-gray-800 text-center">
            Our Prominent Recruiters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((logo) => (
              <div key={logo} className="h-24 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-gray-400 font-medium">Logo {logo}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default PlacementPage;

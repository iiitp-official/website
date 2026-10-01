import React, { useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';

const ReservationPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    ['Scheduled Caste (SC)', 'As per applicable Government of India norms'],
    ['Scheduled Tribe (ST)', 'As per applicable Government of India norms'],
    ['Other Backward Classes (OBC-NCL)', 'As per applicable Government of India norms'],
    ['Economically Weaker Sections (EWS)', 'As per applicable Government of India norms'],
    ['Persons with Benchmark Disabilities (PwBD)', 'As per applicable Government of India norms'],
    ['Other applicable categories', 'As prescribed by the Government of India from time to time'],
  ];

  const liaisonOfficers = [
    ['OBC', 'Dr. Sonam Maurya', 'Assistant Professor'],
    ['SC & ST', 'Dr. Shrikant Salve', 'Assistant Professor'],
    ['EWS & PwBD', 'Dr. Priyank Jain', 'Assistant Professor'],
  ];

  return (
    <div className="min-h-screen transition-colors duration-200 pb-16 bg-slate-200 dark:bg-bg-dark">
      <PageHeader title="Reservation Policy" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <section className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          <p>
            The Indian Institute of Information Technology Pune (IIIT Pune), an Institute of National Importance under the Ministry of Education, Government of India, follows the reservation policy of the Government of India, as applicable from time to time, in matters of admissions, recruitment and other applicable areas.
          </p>
          <p>
            Reservation benefits are provided to eligible candidates belonging to the Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), Economically Weaker Sections (EWS), Persons with Benchmark Disabilities (PwBD) and other categories, as applicable under prevailing Government of India rules and regulations.
          </p>
          <p>
            The implementation of reservation provisions at the Institute is subject to the relevant Government of India orders, notifications, guidelines and amendments issued from time to time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-3">
            Reservation Categories
          </h2>
          <div className="overflow-x-auto bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Category</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Reservation / Provision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                {categories.map(([category, provision]) => (
                  <tr key={category}>
                    <th scope="row" className="px-5 py-3 font-medium text-gray-900 dark:text-gray-100">{category}</th>
                    <td className="px-5 py-3">{provision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-3">
            Liaison Officers
          </h2>
          <div className="overflow-x-auto bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-lg">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Category</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Liaison Officer</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                {liaisonOfficers.map(([category, name, designation]) => (
                  <tr key={category}>
                    <th scope="row" className="px-5 py-3 font-semibold text-gray-900 dark:text-gray-100">{category}</th>
                    <td className="px-5 py-3">{name}</td>
                    <td className="px-5 py-3">{designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-3">
            Government of India Guidelines
          </h2>
          <blockquote className="border-l-4 border-primary pl-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            The reservation policy of the Institute shall be implemented in accordance with the applicable rules, orders, notifications and guidelines issued by the Government of India from time to time.
          </blockquote>
        </section>
      </main>
    </div>
  );
};

export default ReservationPolicyPage;

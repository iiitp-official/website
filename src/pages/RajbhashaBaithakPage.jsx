import React from 'react';
import PageHeader from '../components/shared/PageHeader';

const RajbhashaBaithakPage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="राजभाषा अनुभाग" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          <h2 className="text-3xl font-bold font-serif text-primary dark:text-blue-400 mb-6">
            बैठक
          </h2>

          <hr className="border-gray-200 dark:border-gray-700 mb-8" />

          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6">
            <p>
              1. <strong>नराकास बैठक</strong> – सी-डैक के सभी केंद्र अपने-अपने नगर में नगर राजभाषा कार्यान्वयन समिति के सदस्य हैं। हर केंद्र के वरिष्ठ/ मनोनीत पदाधिकारी नियमित रुप से बैठकों में भाग लेते हैं।
              <br />
              <strong>विशेष</strong> – सी-डैक पुणे केंद्र 'नगर राजभाषा कार्यान्वयन समिति, पुणे-1' का सदस्य सचिव है और सार्थक रुप से बैठकों के साथ ही अन्य राजभाषा कार्यक्रम करने/कराने में महती भूमिका निभाता है।
            </p>

            <p>
              2. <strong>राकास बैठक</strong> – हर केंद्र में नियमित रुप से हर तिमाही राकास बैठकों का आयोजन किया जाता है और लिए गए निर्णयों को लागू किया जाता है।
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RajbhashaBaithakPage;

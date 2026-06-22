import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';

const RajbhashaPage = () => {
  const cards = [
    {
      title: "प्रोत्साहन योजनाएँ",
      desc: "संस्थान स्तरीय राजभाषा शील्ड (प्रोत्साहन) पुरस्कार - संस्थान द्वारा प्रतिवर्ष हिंदी पखवाड़ा के अवसर पर हिंदी में श्रेष्ठ कार्य करने वाले समूह को पुरस्कृत किया जाता है।",
      link: "#"
    },
    {
      title: "प्रशिक्षण कार्यक्रम",
      desc: "संस्थान के कर्मचारियों को राजभाषा में कार्य करने में निपुणता को प्राप्त करने के लिए, राजभाषा विभाग, गृह मंत्रालय, भारत सरकार द्वारा संचालित प्रशिक्षण कार्यक्रमों में भेजा जाता है।",
      link: "/rajbhasha/prashikshan"
    },
    {
      title: "कार्यान्वयन समिति की बैठक",
      desc: "संस्थान नगर राजभाषा कार्यान्वयन समिति के सदस्य हैं। वरिष्ठ/नामित पदाधिकारी नियमित रूप से बैठकों में भाग लेते हैं।",
      link: "/rajbhasha/baithak"
    },
    {
      title: "प्रमुख लिंक",
      desc: "संस्था में राजभाषा के क्रियान्वयन एवं विस्तार के लिए राजभाषा विभाग, गृहमंत्रालय, भारत सरकार के नियम, प्रावधान, वार्षिक रिपोर्ट आदि की जानकारी के लिए त्वरित लिंक दिए गए हैं।",
      link: "#"
    },
    {
      title: "चित्र दीर्घा",
      desc: "कार्यालयीन कार्यों में हिंदी के प्रोत्साहन हेतु कई कार्यक्रम आयोजित होते रहते हैं। इनमें से कुछ कार्यक्रमों की चित्रवीथी अवलोकनार्थ प्रस्तुत है।",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="राजभाषा अनुभाग" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Introduction Section */}
        <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          <h2 className="text-3xl font-bold font-serif text-primary dark:text-blue-400 mb-6">परिचय</h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-6">
            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify flex-1">
              <p>
                भारत के संविधान के भाग 17 में अनुच्छेद 343 से 351 तक राजभाषा संबंधी प्रावधान किए गए हैंI संविधान के अनुच्छेद 343 के खंड (1) में हिंदी को संघ की राजभाषा के रूप में मान्यता प्रदान की गयी है, जिसकी लिपि देवनागरी होगी । संघ के शासकीय प्रयोजनों के लिए होने वाले अंकों का रूप भारतीय अंकों का अंतरराष्ट्रीय रूप होगा । अनुच्छेद 351 में उल्लेख किया गया हैं कि संघ का यह कर्तव्य होगा कि वह हिंदी भाषा का प्रसार बढाए, उसका विकास करे, जिससे वह भारत की सामासिक संस्कृति के सभी तत्वों की अभिव्यक्ति का माध्यम बन सके । राजभाषा हिन्दी को संघ के शासकीय कार्यो में प्रभावी रूप से क्रियान्वित करने के लिए राजभाषा अधिनियम, 1963 (समय-समय पर यथा संशोधित) को प्रख्यापित किया गया हैं तथा तत्संबंधी राजभाषा (संघ के शासकीय प्रयोजनों के लिए प्रयोग) नियम, 1976 (समय-समय पर यथा संशोधित) को भी प्रख्यापित किया गया हैं । उपर्युक्त के अतिरिक्त राजभाषा हिन्दी प्रभावी रूप से क्रियान्वयन के लिए राष्ट्रपति के आदेश, 1960 तथा संसद के दोनों सदनों (राज्यसभा और लोकसभा) द्वारा 1968 में राजभाषा संकल्प पारित किया गया हैं ।
              </p>
            </div>
            
            <div className="w-full lg:w-1/3 shrink-0">
              <img 
                src="/rajbhasha/RajbhashaImage.jpeg" 
                alt="Rajbhasha Anubhag" 
                className="w-full h-auto rounded-xl shadow-md border border-gray-100 dark:border-gray-700 object-cover"
              />
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            <p>
              राजभाषा संबंधी कार्यों के क्रियान्वयन हेतु भारतीय सूचना प्रौद्योगिकी संस्थान (IIIT) पुणे में राजभाषा अनुभाग कार्यरत है। यह अनुभाग राजभाषा द्वारा निर्धारित लक्ष्यों की प्राप्ति में अनवरत कार्यरत है। राजभाषा हिंदी के प्रचार-प्रसार के अनुक्रम में विशेष गतिविधियों का आयोजन भी समय-समय पर किया जाता है, जिससे हिंदी का प्रयोग सहजता और सरलता के साथ कार्यालयीन प्रयोजन में किया जा सके।
            </p>
          </div>
        </section>

        {/* Cards Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow flex flex-col h-full group"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-bold font-serif text-primary dark:text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                {card.desc}
              </p>
              <Link 
                to={card.link}
                className="mt-auto inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                अधिक जानें 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default RajbhashaPage;

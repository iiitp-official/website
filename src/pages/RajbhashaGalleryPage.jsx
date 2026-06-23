import React, { useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';

const RajbhashaGalleryPage = () => {
  // Update document title for SEO purposes
  useEffect(() => {
    document.title = "चित्र दीर्घा | राजभाषा अनुभाग - IIIT Pune";
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="राजभाषा अनुभाग" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          <h2 className="text-3xl font-bold font-serif text-primary dark:text-blue-400 mb-6">
            चित्र दीर्घा
          </h2>

          <hr className="border-gray-200 dark:border-gray-700 mb-8" />

          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-justify space-y-6">
            <p className="text-lg">
              संस्थान में आयोजित राजभाषा पखवाड़ा, हिंदी दिवस, विश्व हिंदी दिवस आदि अवसरों पर आयोजित विभिन्न कार्यक्रमों एवं प्रतियोगिताओं की झलकियाँ “चित्र दीर्घा” अनुभाग में उपलब्ध कराई जाएंगी।
            </p>
            <p className="text-lg">
              इस अनुभाग के माध्यम से आगंतुकों को संस्थान में आयोजित राजभाषा संबंधी गतिविधियों का दृश्य अवलोकन प्राप्त होगा, जिससे हिंदी के प्रति जागरूकता एवं प्रेरणा में वृद्धि होगी।
            </p>
            <p className="text-lg">
              भारतीय सूचना प्रौद्योगिकी संस्थान, पुणे प्रशासनिक, अकादमिक और सामाजिक गतिविधियों में हिंदी के प्रयोग को बढ़ावा देने के लिए सतत् प्रयासरत है।
            </p>
            <p className="text-lg">
              संस्थान का उद्देश्य है कि हिंदी केवल एक राजभाषा न रहकर, संस्थान की कार्य संस्कृति, शिक्षण पद्धति और संवाद का अभिन्न अंग बने।
            </p>
            <p className="text-lg">
              भारत सरकार की नीति —<br />
              “राजभाषा के माध्यम से सुशासन, पारदर्शिता और सहभागिता को सशक्त बनाना”<br />
              — के अनुरूप IIIT Pune राजभाषा हिंदी को राष्ट्र की एकता, समरसता और प्रशासनिक दक्षता के माध्यम के रूप में स्थापित करने के लिए निरंतर कार्य कर रहा है।
            </p>
          </div>

          {/* Google Photos Galleries Section */}
          <div className="mt-10 border-t border-gray-100 dark:border-gray-800 pt-8">
            <h3 className="text-2xl font-bold font-serif text-primary dark:text-blue-400 mb-6">
              कार्यक्रमों की झलकियाँ (Photo Galleries)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://photos.google.com/share/AF1QipMHwRCWOH1lEduerOV_G7Kv-GRgZcXk9FrBklTuVslyuoHXcPiOmoS6ERPbG0qecw?key=eWswZUo1QmthaDhQbWRSNUhrbDducGVUVWw1NVR3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-6 bg-gradient-to-br from-blue-50 to-white hover:from-blue-100/50 hover:to-white dark:from-slate-900/50 dark:to-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-900 transition-all hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-serif">
                    राजभाषा गतिविधियाँ चित्र दीर्घा (एल्बम - १)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    संस्थान में आयोजित राजभाषा कार्यक्रमों, प्रतियोगिताओं एवं हिंदी दिवस समारोहों के चित्रों का संग्रह।
                  </p>
                </div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center group-hover:translate-x-1 transition-transform">
                  एल्बम देखें <span className="ml-1">&rarr;</span>
                </div>
              </a>

              <a
                href="https://photos.google.com/share/AF1QipNn4esXGNTrx5ytF93jN7AbJvsoCreFi-U2ilLVM9ZttmpVPwTVmEciHbw3BLp3rw?key=M2xIckVoLVBaR3FoSW5mcGltY1dWS21tWmlJNFdn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-6 bg-gradient-to-br from-blue-50 to-white hover:from-blue-100/50 hover:to-white dark:from-slate-900/50 dark:to-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-900 transition-all hover:shadow-md"
              >
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-serif">
                    राजभाषा गतिविधियाँ चित्र दीर्घा (एल्बम - २)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    संस्थान में हिंदी पखवाड़ा एवं राजभाषा कार्यान्वयन समिति से जुड़े आयोजनों के चित्रों का संग्रह।
                  </p>
                </div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center group-hover:translate-x-1 transition-transform">
                  एल्बम देखें <span className="ml-1">&rarr;</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RajbhashaGalleryPage;

import PageHeader from "../components/shared/PageHeader";

const EceDepartmentPage = () => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <PageHeader title="Department of Electronics & Communication Engineering" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-800 p-12 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold font-serif text-primary dark:text-white">
            Under Development
          </h2>
          <p className="text-gray-650 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            We are currently updating the department portal for Electronics and Communication Engineering. Check back soon for comprehensive course info, HOD message, and faculty directory!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EceDepartmentPage;

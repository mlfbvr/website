export default function Portfolio() {
  return (
    <section id="portfolio" className="flex flex-col items-center justify-center min-h-screen py-10">
      <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
      <p className="text-lg text-center max-w-2xl">
        Here are some of my recent projects showcasing my skills and expertise in software development. Each project reflects my commitment to quality and innovation.
      </p>
      <div className="mt-6 gap-6 w-1/2 mw-1/2">
        {/* Example Project Cards */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full h-full">
          <h3 className="text-2xl font-semibold mb-2">Project One</h3>
          <p className="text-base">
            A brief description of Project One, highlighting its features and technologies used.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full h-full">
          <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
          <p className="text-base">
            A brief description of Project Two, highlighting its features and technologies used.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full h-full">
          <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
          <p className="text-base">
            A brief description of Project Three, highlighting its features and technologies used.
          </p>
        </div>
      </div>
    </section>
  );
}
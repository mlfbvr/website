export default function Resume() {
  return (
    <section id="resume" className="flex flex-col items-center justify-center min-h-screen py-10">
      <h2 className="text-4xl font-bold mb-4">Resume</h2>
      <p className="text-lg text-center max-w-2xl">
        Download my resume to learn more about my professional experience, skills, and accomplishments in the field of software development.
      </p>
      <div className="mt-6">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume (.pdf)
       </a>
       <a href="/resume.docx"
          download
          className="ml-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Download Resume (.docx)
       </a>
      </div>
    </section>
  );
}
import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";
import { UserIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

const ContactPage = () => {
  // LinkedIn SVG Icon Component
  const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );

  // GitHub SVG Icon Component
  const GithubIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.85c.85.004 1.7.114 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Fade triggerOnce duration={800}>
          <div className="text-center mb-16">
            <Slide direction="down" triggerOnce>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Ahmad Abdelaziz
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                General Surgeon & Front-End Software Engineer
              </p>
            </Slide>
          </div>
        </Fade>

        {/* Story Section */}
        <div className="space-y-12">
          <Fade triggerOnce delay={200} duration={800}>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start gap-6">
                <UserIcon className="h-12 w-12 text-indigo-600 flex-shrink-0" />
                <div>
                  <Slide direction="right" triggerOnce>
                    <h2 className="text-2xl font-semibold mb-4">
                      My Dual Passion
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      As a medical doctor with a deep fascination for
                      technology, I've cultivated parallel expertise in both
                      fields. My clinical practice has honed skills in
                      analytical thinking and precision, while software
                      development satisfies my passion for creative
                      problem-solving and building digital solutions.
                    </p>
                  </Slide>
                </div>
              </div>
            </div>
          </Fade>

          <Fade triggerOnce delay={400} duration={800}>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="flex items-start gap-6">
                <BuildingOfficeIcon className="h-12 w-12 text-green-600 flex-shrink-0" />
                <div>
                  <Slide direction="left" triggerOnce>
                    <h2 className="text-2xl font-semibold mb-4">
                      Bridging Worlds
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      While maintaining my medical practice, I've immersed
                      myself in software development, discovering remarkable
                      parallels:
                      <ul className="mt-4 space-y-2 pl-4">
                        <li className="flex items-center">
                          <span className="text-indigo-600 mr-2">•</span>
                          Diagnostic precision ↔ Debugging rigor
                        </li>
                        <li className="flex items-center">
                          <span className="text-green-600 mr-2">•</span>
                          Patient care ↔ User-centered design
                        </li>
                        <li className="flex items-center">
                          <span className="text-blue-600 mr-2">•</span>
                          Medical research ↔ Technical documentation
                        </li>
                      </ul>
                    </p>
                  </Slide>
                </div>
              </div>
            </div>
          </Fade>

          {/* Contact Section */}
          <Fade triggerOnce delay={600} duration={800}>
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="mb-8">
                <Slide direction="up" triggerOnce>
                  <h2 className="text-2xl font-semibold mb-4">
                    Connect With Me
                  </h2>
                  <p className="text-gray-600 max-w-xl mx-auto">
                    I'm always open to new connections and interesting
                    collaborations.
                  </p>
                </Slide>
              </div>

              <div className="flex justify-center gap-6 flex-wrap">
                <AttentionSeeker effect="pulse" delay={1000} triggerOnce>
                  <a
                    href="https://www.linkedin.com/in/ahmadabdelaziz8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                    LinkedIn
                  </a>
                </AttentionSeeker>

                <AttentionSeeker effect="pulse" delay={1200} triggerOnce>
                  <a
                    href="https://github.com/AhmadAbdelaziz8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                    GitHub
                  </a>
                </AttentionSeeker>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

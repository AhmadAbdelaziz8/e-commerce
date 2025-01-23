import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";
import {
  GlobeAltIcon,
  CodeBracketIcon,
  CommandLineIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <Fade triggerOnce duration={1000}>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About CandLeaf
            </h1>
            <Slide triggerOnce direction="up" duration={800}>
              <p className="text-xl text-gray-600 mb-8">
                A modern e-commerce experience crafted with passion and
                precision
              </p>
            </Slide>
            <Fade triggerOnce delay={300} duration={1000}>
              <div className="relative h-64 bg-gradient-to-r from-green-100 to-indigo-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <GlobeAltIcon className="h-12 w-12 text-gray-700 mx-auto" />
                    <p className="text-lg font-medium text-gray-700">
                      Portfolio Project by Ahmad Abdelaziz
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>

        {/* Project Overview */}
        <div className="mb-16">
          <Fade triggerOnce direction="up" duration={800}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Project Overview
            </h2>
          </Fade>
          <div className="grid md:grid-cols-2 gap-8">
            <Slide triggerOnce direction="left" duration={800}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <CodeBracketIcon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">
                  Development Journey
                </h3>
                <p className="text-gray-600">
                  CandLeaf was created as a showcase of modern web development
                  practices, focusing on clean architecture and user-centric
                  design. This project demonstrates full-stack capabilities with
                  features including:
                </p>
                <Fade triggerOnce cascade damping={0.1} duration={500}>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Responsive UI/UX Design</li>
                    <li>• Cart & Checkout System</li>
                    <li>• Product Management</li>
                    <li>• State Management</li>
                  </ul>
                </Fade>
              </div>
            </Slide>

            <Slide triggerOnce direction="right" duration={800}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <CommandLineIcon className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Technical Stack</h3>
                <Fade triggerOnce cascade damping={0.05} duration={300}>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Firebase
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      React Router
                    </span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                      Vite
                    </span>
                  </div>
                </Fade>
              </div>
            </Slide>
          </div>
        </div>

        {/* Developer Section */}
        <Fade triggerOnce delay={300} duration={1000}>
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
            <div className="text-center">
              <AcademicCapIcon className="h-12 w-12 text-gray-700 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Developer Note
              </h2>
              <Slide triggerOnce direction="up" duration={800}>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  "CandLeaf represents my journey in mastering modern web
                  development. While this is a mock e-commerce platform, every
                  component was carefully crafted to demonstrate
                  professional-grade development practices. The project
                  emphasizes clean code, performance optimization, and attention
                  to user experience details."
                </p>
              </Slide>
              <AttentionSeeker effect="pulse" delay={1500} triggerOnce>
                <div className="mt-8">
                  <a
                    href="https://github.com/AhmadAbdelaziz8/e-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  >
                    View Source Code
                  </a>
                </div>
              </AttentionSeeker>
            </div>
          </div>
        </Fade>

        {/* Project Disclaimer */}
        <Fade triggerOnce delay={500} duration={1000}>
          <div className="text-center text-sm text-gray-500">
            <p>
              Note: CandLeaf is a portfolio project and not an actual commercial
              platform. All product information and images are for demonstration
              purposes only.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutPage;

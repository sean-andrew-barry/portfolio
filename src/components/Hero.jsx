import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { identity } from '../data/identity';
import Portrait from '/src/assets/images/sean-barry-portrait-transparent-bg-1x1.png';

export default function Hero() {
  const resumeID = "1cTJwaL0CsbM_A018sYk4Kg9mBOwbsbD_MDJiT3T0IGo";
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 md:w-64 md:h-64 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full p-1 shadow-2xl">
              <img
                src={Portrait}
                alt="Sean Barry portrait"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {identity.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto">
          Full-stack Developer & Computer Scientist
        </p>

        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm a programmer with 10 years of experience innovating with software. I live for the joy of finding a simple and elegant solution to a complex problem. If there is a better way to do something, I have an obsessive need to find it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Get In Touch
          </Link>
          
          <a
            href={`https://docs.google.com/document/d/${resumeID}/export?format=pdf`}
            className="group text-gray-300 px-6 py-4 rounded-lg font-medium inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
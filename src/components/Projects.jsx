import { ExternalLink, Github, ArrowRight, Code, Dumbbell, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      title: 'Be Fit Beyond Fifty',
      description: 'A comprehensive fitness platform designed specifically for users over 50. Built and maintained over 7 years, serving thousands of users with personalized workout plans, health monitoring, and progress tracking.',
      icon: Dumbbell,
      tags: ['7 Years Development', 'Production Website', 'Health & Fitness'],
      link: '/projects/be-fit-beyond-fifty',
      external: 'https://befitbeyondfifty.com',
      github: '#',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      featured: true
    },
    {
      title: 'Taggly',
      description: 'A full-stack JavaScript web development framework that I created as an alternative to React and Vue. Focuses on simplicity, performance, and developer experience with innovative approaches to component architecture.',
      icon: Code,
      tags: ['Custom Framework', 'JavaScript', 'Web Development'],
      link: '/projects/taggly',
      external: '#',
      github: '#',
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      featured: true
    },
    {
      title: 'Warble',
      description: 'A precompiled programming language I\'m building that combines the performance of languages like C++ and Rust with the flexibility and ease of use found in scripting languages.',
      icon: Zap,
      tags: ['Programming Language', 'Compiler', 'Systems Programming'],
      link: '/projects/warble',
      external: '#',
      github: '#',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      featured: true
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Major Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`relative group overflow-hidden rounded-2xl shadow-2xl ${project.bgColor} p-12`}>
                  <div className="text-center">
                    <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center`}>
                      <project.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.external !== '#' && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
                      >
                        <ExternalLink size={20} className="text-gray-800" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
                    >
                      <Github size={20} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={project.link}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                  
                  {project.external !== '#' && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                      Visit Site
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
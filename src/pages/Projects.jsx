import { useState } from 'react';
import { ExternalLink, Github, Search, Code, Dumbbell, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: 'Be Fit Beyond Fifty',
      description: 'A comprehensive fitness platform I\'ve built and maintained for over 7 years, specifically designed for users over 50. This has been my primary focus, serving thousands of users with personalized workout plans, health monitoring, and progress tracking.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Dumbbell,
      tags: ['7 Years Development', 'Production Website', 'Health & Fitness', 'PHP', 'MySQL'],
      link: '/projects/be-fit-beyond-fifty',
      external: 'https://befitbeyondfifty.com',
      github: '#',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      years: '2017-Present'
    },
    {
      title: 'Taggly',
      description: 'A full-stack JavaScript web development framework I created as an alternative to React and Vue. Focuses on simplicity, performance, and developer experience with innovative approaches to component architecture and state management.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code,
      tags: ['Custom Framework', 'JavaScript', 'Web Development', 'Performance'],
      link: '/projects/taggly',
      external: '#',
      github: '#',
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      years: '2022-Present'
    },
    {
      title: 'Warble',
      description: 'A precompiled programming language I\'m building that combines the performance of languages like C++ and Rust with the flexibility and ease of use found in scripting languages. An ambitious project exploring the future of programming language design.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Zap,
      tags: ['Programming Language', 'Compiler', 'Systems Programming', 'LLVM'],
      link: '/projects/warble',
      external: '#',
      github: '#',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      years: '2023-Present'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Rather than spreading my efforts across many small projects, I've focused deeply on three 
            significant endeavors. Each represents years of dedicated development, continuous iteration, 
            and real-world impact. This approach has allowed me to truly master the technologies and 
            solve complex problems that matter.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="space-y-20">
              {filteredProjects.map((project, index) => (
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
                        <div className="text-sm text-gray-600 mb-4 font-medium">{project.years}</div>
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
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms to find what you're looking for.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Deep Focus Over Breadth
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-World Impact</h3>
              <p className="text-gray-600">
                Each project serves actual users and solves real problems, not just portfolio pieces.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Mastery</h3>
              <p className="text-gray-600">
                Years of iteration and refinement have led to deep expertise in each technology stack.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Building custom frameworks and languages demonstrates ability to innovate beyond existing tools.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-600 leading-relaxed">
              While many developers showcase numerous small projects, I believe in going deep. 
              This approach has allowed me to truly understand complex systems, build production-ready 
              software, and create innovative solutions that push the boundaries of what's possible. 
              Each project represents not just technical skills, but years of dedication and real-world experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            These projects demonstrate my ability to build, maintain, and innovate on complex systems. 
            Let's discuss how this experience can benefit your next project.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
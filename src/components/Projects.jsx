import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      title: 'Taggly',
      description: 'A smart note-taking application with AI-powered tagging system. Built with React, Node.js, and machine learning algorithms to automatically categorize and organize notes.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Warble',
      description: 'A minimalist social platform experiment focusing on meaningful connections. Features real-time messaging, content sharing, and privacy-first design principles.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Be Fit Beyond Fifty',
      description: 'Comprehensive fitness tracking application designed specifically for users over 50. Includes workout plans, health monitoring, and progress tracking.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Health APIs'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Portfolio Dashboard',
      description: 'A modern dashboard for tracking investment portfolios with real-time data visualization and analytics.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Task Flow',
      description: 'Team collaboration tool with advanced project management features and intuitive workflow automation.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Prisma', 'tRPC', 'Tailwind'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Weather Insights',
      description: 'Advanced weather application with predictive analytics and personalized recommendations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Weather APIs', 'Chart.js'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web 
            technologies and problem-solving through code.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Github size={20} className="text-gray-800" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={20} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    View Live
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <Github size={16} className="text-gray-800" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-800" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: 'Taggly',
      description: 'A smart note-taking application with AI-powered tagging system. Built with React, Node.js, and machine learning algorithms to automatically categorize and organize notes for maximum productivity.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB', 'Express'],
      category: 'web',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Warble',
      description: 'A minimalist social platform experiment focusing on meaningful connections. Features real-time messaging, content sharing, and privacy-first design principles with end-to-end encryption.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
      category: 'web',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Be Fit Beyond Fifty',
      description: 'Comprehensive fitness tracking application designed specifically for users over 50. Includes personalized workout plans, health monitoring, progress tracking, and integration with wearable devices.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Health APIs', 'TypeScript'],
      category: 'mobile',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Portfolio Dashboard',
      description: 'A modern dashboard for tracking investment portfolios with real-time data visualization, analytics, and automated reporting features for financial advisors.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'web',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Task Flow',
      description: 'Team collaboration tool with advanced project management features, workflow automation, time tracking, and integration with popular development tools.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Prisma', 'tRPC', 'Tailwind', 'TypeScript'],
      category: 'web',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Weather Insights',
      description: 'Advanced weather application with predictive analytics, personalized recommendations, and beautiful data visualizations for weather enthusiasts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Weather APIs', 'Chart.js', 'PWA'],
      category: 'web',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking app with portfolio management, price alerts, and market analysis tools for crypto investors.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Redux', 'CoinGecko API', 'SQLite'],
      category: 'mobile',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Recipe Finder',
      description: 'AI-powered recipe recommendation app that suggests meals based on available ingredients, dietary preferences, and nutritional goals.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Firebase', 'ML Kit', 'Spoonacular API'],
      category: 'mobile',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Code Snippet Manager',
      description: 'Developer tool for organizing, searching, and sharing code snippets with syntax highlighting, tagging, and team collaboration features.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Electron', 'React', 'Monaco Editor', 'SQLite'],
      category: 'desktop',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'desktop', label: 'Desktop Apps' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills, creativity, and passion 
            for building exceptional digital experiences. Each project represents a 
            unique challenge and learning opportunity.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveFilter(category.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === category.key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Projects
            </h2>
            
            <div className="space-y-20">
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
                          className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                        >
                          <Github size={20} className="text-gray-800" />
                        </a>
                        <a
                          href={project.live}
                          className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
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
          </div>
        </section>
      )}

      {/* Other Projects Grid */}
      {otherProjects.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Other Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-105"
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
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <section className="py-24 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchTerm('');
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and bring innovative ideas to life. 
            Let's discuss your next project.
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
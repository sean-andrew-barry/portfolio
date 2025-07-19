import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Project({ project, index }) {
  return (
    <div
      key={project.title}
      className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
        }`}
    >
      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
        <div className={`relative group overflow-hidden rounded-2xl shadow-2xl ${project.bgColor} p-12`}>
          <div className="text-center">
            <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center`}>
              {project.image ? <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full rounded-2xl object-cover"
              /> : <project.icon className="w-12 h-12 text-white" />}
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
            {project.external && (
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
              >
                <ExternalLink size={20} className="text-gray-800" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
              >
                <Github size={20} className="text-gray-800" />
              </a>
            )}
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

          {project.external && project.external !== '#' && (
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
  );
}
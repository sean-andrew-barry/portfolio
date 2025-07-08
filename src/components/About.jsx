import { developerValues } from '../data/developerValues';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a self-taught full-stack developer with over a decade of experience crafting high-performance web applications and custom software solutions. My journey began by making Lua addons in World of Warcraft and quickly grew into creating my own frameworks and tools, including Taggly and the Warble language.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When I'm not immersed in personal coding projects, you'll find me spending time with my budgies, gaming, or exploring ideas about neuroscience. My passion for learning and curiosity about the world continuously drive me to understand things at a deeper level.
            </p>

            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python', 'AWS'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {developerValues.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
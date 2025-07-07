import { Code, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description: "Creating beautiful interfaces with attention to user experience"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional results"
    }
  ];

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
              I'm a passionate full-stack developer with over 5 years of experience 
              building web applications that make a difference. My journey started with 
              curiosity about how things work on the web, and it's evolved into a career 
              focused on creating exceptional digital experiences.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in continuous learning and staying 
              ahead of the curve in this ever-evolving field.
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
            {highlights.map((item, index) => (
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
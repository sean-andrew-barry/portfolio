import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      subtitle: 'Frontend Technologies',
      skills: [
        { name: 'JavaScript', level: 98 },
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML & CSS', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bulma CSS', level: 85 },
        { name: 'WebSockets', level: 90 },
        { name: 'Accessibility', level: 80 },
      ],
    },
    backend: {
      title: 'Backend',
      subtitle: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 92 },
        { name: 'REST APIs', level: 90 },
        { name: 'Server Management', level: 85 },
        { name: 'C++', level: 95 },
        { name: 'C#', level: 75 },
        { name: 'PHP', level: 40 },
        { name: 'Java', level: 40 },
        { name: 'Python', level: 65 },
        { name: 'SQL', level: 55 },
      ],
    },
    tools: {
      title: 'Tools & Others',
      subtitle: 'Tools & Other Skills',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'DigitalOcean', level: 85 },
        { name: 'Linux (Ubuntu)', level: 85 },
        { name: 'Optimization & Performance', level: 95 },
        { name: 'Testing & Debugging', level: 90 },
        { name: 'Compiler Design', level: 90 },
        { name: 'Kit.com (Email Marketing)', level: 90 },
        { name: 'AWS', level: 75 },
        { name: 'Security', level: 87 },
        { name: 'Facebook Ads', level: 75 },
        { name: 'API Integrations', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'Stripe', level: 80 },
      ],
    },
  };


  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning in modern web development.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {skillCategories[activeCategory].subtitle}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.sort((a, b) => b.level - a.level).map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
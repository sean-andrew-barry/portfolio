import { Code, Palette, Zap, Users, Coffee } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '∞', label: 'Cups of Coffee' }
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing code that is not only functional but also maintainable, readable, and scalable. Every line of code should serve a purpose and be crafted with care.'
    },
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Great functionality deserves great design. I approach every project with a design-first mindset, ensuring that user experience is at the forefront of development.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Speed matters. I optimize every aspect of my applications to ensure they load fast, run smooth, and provide an exceptional user experience across all devices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'The best projects come from great teamwork. I thrive in collaborative environments and believe that diverse perspectives lead to better solutions.'
    }
  ];

  const journey = [
    {
      year: 2011,
      title: 'Started My Journey',
      description: 'Began learning web development through online courses and building personal projects.'
    },
    {
      year: 2020,
      title: 'First Professional Role',
      description: 'Joined a startup as a junior developer, working on React applications and learning from senior developers.'
    },
    {
      year: 2021,
      title: 'Full-Stack Development',
      description: 'Expanded skills to backend development with Node.js and database management.'
    },
    {
      year: 2022,
      title: 'Freelance Success',
      description: 'Started freelancing and successfully delivered projects for clients across various industries.'
    },
    {
      year: 2023,
      title: 'Technical Leadership',
      description: 'Led development teams and mentored junior developers while continuing to build innovative solutions.'
    },
    {
      year: 2024,
      title: 'Continuous Growth',
      description: 'Focusing on emerging technologies and building products that make a real impact.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer who loves turning complex problems 
            into simple, beautiful, and intuitive solutions. When I'm not coding, 
            you'll find me exploring new technologies or sharing knowledge with the community.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  My journey into web development started with curiosity. I was fascinated 
                  by how websites worked and wanted to understand the magic behind the screen. 
                  What began as a hobby quickly became a passion, and eventually, a career.
                </p>
                <p>
                  Over the years, I've had the privilege of working with amazing teams, 
                  learning from brilliant minds, and contributing to projects that have 
                  made a real impact. Each project has taught me something new and pushed 
                  me to grow as both a developer and a problem solver.
                </p>
                <p>
                  Today, I'm focused on building applications that not only solve problems 
                  but also provide delightful user experiences. I believe that technology 
                  should be accessible, intuitive, and empowering for everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-300 to-pink-300 p-1">
                <img
                  src="/src/assets/images/sean-barry-portrait-transparent-bg-1x1.png"
                  alt="Sean Barry portrait"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl">
                <Coffee className="w-12 h-12 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide every project I work on and every decision I make 
              as a developer and collaborator.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Journey</h2>
            <p className="text-lg text-gray-600">
              A timeline of key milestones in my development career
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
            
            <div className="space-y-12">
              {journey.sort((a, b) => a.year - b.year).map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with 
            passionate people. Let's turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
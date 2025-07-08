import { ExternalLink, Github, Calendar, Users, TrendingUp, Shield, Smartphone, Globe } from 'lucide-react';
import { projects } from '../../data/projects';

export default function BeFitBeyondFifty() {
  const project = projects.find(p => p.title == "Be Fit Beyond Fifty");

  const features = [
    {
      icon: Users,
      title: 'Personalized Programs',
      description: 'Customized workout plans based on individual fitness levels, health conditions, and goals'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and reporting to monitor fitness improvements over time'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Age-appropriate exercises with built-in safety guidelines and modifications'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Responsive design ensuring great experience across all devices'
    },
  ];

  const stats = [
    { number: '7+', label: 'Years in Production' },
    { number: '1000+', label: 'Active Users' },
    { number: '50+', label: 'Exercise Programs' },
    { number: '99.9%', label: 'Uptime' },
  ];

  const techStack = [
    'HTML5 & CSS3',
    'JavaScript (ES6+)',
    'PHP',
    'MySQL',
    'Responsive Design',
    'Progressive Web App',
    'Payment Integration',
    'Content Management',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Be Fit Beyond Fifty
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://befitbeyondfifty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Visit Live Site
                  <ExternalLink size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Seven Years of Dedicated Development
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Be Fit Beyond Fifty isn't just a website—it's been my life's work for the past seven years. 
                  What started as a simple fitness site has evolved into a comprehensive platform serving 
                  thousands of users worldwide.
                </p>
                <p>
                  This project has taught me everything about building and maintaining production software: 
                  from handling real user data and payments to optimizing for performance and accessibility. 
                  Every feature has been battle-tested in the real world.
                </p>
                <p>
                  The platform has grown organically based on user feedback, market demands, and my own 
                  learning journey as a developer. It represents not just technical skills, but deep 
                  understanding of user needs and business requirements.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Calendar className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Evolution</h3>
                <p className="text-gray-600">
                  Regular updates and feature additions based on user feedback and industry trends
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Users, Real Impact</h3>
                <p className="text-gray-600">
                  Serving actual customers with real fitness goals and health considerations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for the unique needs and challenges of fitness after 50
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Built with a focus on reliability and performance, the platform uses a carefully 
                  chosen tech stack that prioritizes stability and user experience over trendy frameworks.
                </p>
                <p>
                  The architecture has evolved over seven years to handle increasing traffic, 
                  new feature requirements, and changing web standards while maintaining 
                  backward compatibility and data integrity.
                </p>
                <p>
                  Special attention has been paid to accessibility, mobile responsiveness, 
                  and performance optimization to serve users who may not be as tech-savvy 
                  or may have slower internet connections.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center font-medium text-gray-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 99.9% uptime over 7 years</li>
                  <li>• Secure payment processing</li>
                  <li>• GDPR and accessibility compliant</li>
                  <li>• Mobile-first responsive design</li>
                  <li>• SEO optimized for organic growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What This Project Taught Me</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centric Development</h3>
              <p className="text-gray-600">
                Real users with real needs taught me to prioritize functionality and usability over flashy features.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">
                Building for growth while maintaining performance and reliability at every stage.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Mindset</h3>
              <p className="text-gray-600">
                Security, data protection, and reliability aren't optional—they're fundamental requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience It Yourself</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Visit the live site to see seven years of development and iteration in action.
          </p>
          <a
            href="https://befitbeyondfifty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Visit Be Fit Beyond Fifty
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
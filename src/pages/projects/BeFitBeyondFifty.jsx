import { ExternalLink, Github, Calendar, Users, TrendingUp, Shield, Smartphone, DollarSign, Zap, Lock, Globe, Server, Database } from 'lucide-react';
import { projects } from '../../data/projects';

export default function BeFitBeyondFifty() {
  const project = projects.find(p => p.title == "Be Fit Beyond Fifty");

  const challenges = [
    {
      icon: DollarSign,
      title: 'Unsustainable SaaS Costs',
      description: 'External tools like Teachable, Stealth Seminar, and managed hosting were financially unsustainable for a two-person startup',
    },
    {
      icon: Globe,
      title: 'Fragmented User Experience',
      description: 'Users bouncing between multiple platforms created branding inconsistencies and unprofessional experiences',
    },
    {
      icon: Shield,
      title: 'Limited Customization',
      description: 'Third-party platforms restricted our ability to create the exact user experience we envisioned',
    },
  ];

  const solutions = [
    {
      icon: Lock,
      title: 'Custom Course & Membership CMS',
      description: 'Secure, members-only access with drip content system for gradual lesson release',
    },
    {
      icon: DollarSign,
      title: 'Integrated Payments',
      description: 'Seamless Stripe integration directly embedded into pages for smooth checkout experiences',
    },
    {
      icon: Users,
      title: 'Secure User Management',
      description: 'Fully encrypted authentication and user management using bcrypt for maximum security',
    },
    {
      icon: Globe,
      title: 'In-house Webinar System',
      description: 'Custom webinar platform eliminating the need for expensive third-party hosting',
    },
    {
      icon: Database,
      title: 'Blog and Podcast Platform',
      description: 'Centralized content management for diverse offerings and improved SEO',
    },
    {
      icon: Zap,
      title: 'Rich API Integrations',
      description: 'Stripe, AWS, Monday.com, Kit.com, Facebook Ads, Google Docs, and Calendly integrations',
    },
  ];

  const results = [
    { metric: '$2,500+', label: 'Annual Savings', description: 'Compared to equivalent SaaS platforms' },
    { metric: '$7/month', label: 'Infrastructure Cost', description: 'Total hosting and operational expenses' },
    { metric: '99.99%', label: 'Historical Uptime', description: 'Ensuring uninterrupted service reliability' },
    { metric: '7,000+', label: 'Email Subscribers', description: 'Captured through web traffic/ads' },
  ];

  const techStack = [
    'Taggly.js Framework',
    'Node.js Backend',
    'MongoDB Database',
    'Stripe Payments',
    'AWS Integration',
    'bcrypt Security',
    'Single Page Application',
    'RESTful APIs',
    'Responsive Design',
    'SEO Optimization',
  ];

  const integrations = [
    { name: 'Stripe', purpose: 'Payment Processing' },
    { name: 'AWS', purpose: 'Cloud Services' },
    { name: 'Monday.com', purpose: 'Project Management' },
    { name: 'Kit.com', purpose: 'Email Marketing' },
    { name: 'Facebook Ads', purpose: 'Marketing Analytics' },
    { name: 'Google Docs', purpose: 'Content Management' },
    { name: 'Calendly', purpose: 'Appointment Scheduling' },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Be Fit Beyond Fifty
              </h1>
              <p className="text-xl text-green-100 mb-6 leading-relaxed">
                Custom Membership & Course Platform
              </p>
              <p className="text-lg text-green-200 mb-8 leading-relaxed">
                Since 2018, I've served as the sole full-stack engineer and DevOps specialist for this health and fitness startup, building a comprehensive custom platform from scratch to replace expensive SaaS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://befitbeyondfifty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Visit Live Platform
                  <ExternalLink size={20} />
                </a>
                <a
                  href="#technical-details"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Technical Details
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

      {/* Results Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-900 font-semibold mb-1">{result.label}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A complete custom solution built to address the financial and operational challenges of a small health and fitness startup.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Early on, relying on external SaaS tools like Teachable for course hosting, Stealth Seminar for webinars, and managed hosting solutions quickly proved financially unsustainable for a tiny two-person team. Additionally, fragmented user experiences from bouncing between multiple platforms posed challenges in branding consistency and professionalism.
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{challenge.title}</h4>
                      <p className="text-sm text-gray-600">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I created a custom Single Page Application (SPA) built using my Taggly.js framework, Node.js, and MongoDB. This comprehensive platform integrates all necessary functionality into a single, cohesive system.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Architecture</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Taggly.js Framework</span> - Custom SPA framework
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Node.js Backend</span> - Server-side processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">MongoDB Database</span> - Flexible data storage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Stripe Integration</span> - Secure payments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Integrated Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive platform that replaces multiple expensive SaaS tools with custom-built functionality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section id="technical-details" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Built with a focus on reliability, performance, and cost-effectiveness, the platform uses a carefully chosen tech stack that prioritizes stability and user experience over trendy frameworks.
                </p>
                <p>
                  The architecture leverages my custom Taggly.js framework for the frontend, providing a smooth Single Page Application experience while maintaining excellent SEO and performance characteristics.
                </p>
                <p>
                  Special attention has been paid to security, with bcrypt encryption for user authentication, secure payment processing through Stripe, and comprehensive data protection measures throughout the platform.
                </p>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>99.99% historical uptime over 6+ years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>$2,500+ annual savings vs SaaS alternatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>$7/month total infrastructure costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>6,900+ email subscribers via organic traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Seamless user experience across all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automated workflows and integrations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
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
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">API Integrations</h3>
                <div className="space-y-3">
                  {integrations.map((integration, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{integration.name}</span>
                      <span className="text-sm text-gray-600">{integration.purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The custom platform delivered significant cost savings, improved user experience, and operational efficiency for the business.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 basis-1/3 min-w-80 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Financial Impact</h3>
              </div>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Over $2,500 saved annually compared to SaaS alternatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Infrastructure costs reduced to just $7/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Eliminated dependency on expensive third-party tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Scalable architecture supporting business growth</span>
                </li>
              </ul>
            </div>

            <div className="flex-1 basis-1/3 min-w-80 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">User Experience</h3>
              </div>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional, cohesive brand experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fast, responsive Single Page Application</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Seamless payment and course access</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mobile-optimized for all devices</span>
                </li>
              </ul>
            </div>

            <div className="flex-1 basis-1/3 min-w-80 bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-800">Operational Excellence</h3>
              </div>
              <ul className="space-y-3 text-purple-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>99.99% historical uptime ensuring reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated workflows reducing manual tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated analytics and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Secure user data management and compliance</span>
                </li>
              </ul>
            </div>

            <div className="flex-1 basis-1/3 min-w-80 bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-800">Growth & Marketing</h3>
              </div>
              <ul className="space-y-3 text-orange-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>6,900+ email subscribers captured</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>SEO-optimized content management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated marketing automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Analytics-driven optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What This Project Demonstrates */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What This Project Demonstrates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            This project showcases my ability to deliver high-quality, reliable, and cost-effective 
            solutions as a solo developer across the entire technology stack.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full-Stack Expertise</h3>
              <p className="text-gray-600">
                Complete ownership of front-end, back-end, database design, DevOps, and security implementation.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Impact</h3>
              <p className="text-gray-600">
                Delivering measurable cost savings and operational efficiency improvements for real business needs.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Reliability</h3>
              <p className="text-gray-600">
                Building and maintaining production systems with 99.99% uptime and robust security measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Platform</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Visit the live platform to see seven years of development, iteration, and real-world business impact in action.
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
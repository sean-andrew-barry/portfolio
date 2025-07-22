import { ExternalLink, Users, TrendingUp, Shield, Smartphone, DollarSign, Zap, Lock, Globe, Server, Database, Code, Lightbulb, Wrench, Heart } from 'lucide-react';
import { projects } from '../../data/projects';
import usePageTitle from '../../hooks/usePageTitle';

export default function BeFitBeyondFifty() {
  usePageTitle('Be Fit Beyond Fifty');
  const project = projects.find(p => p.title == "Be Fit Beyond Fifty");
  const savings = "$3,000";
  const email_subscribers = "7,000";
  const years = new Date().getUTCFullYear() - 2018;
  const bfbf_url = "https://befitbeyondfifty.com";

  const results = [
    { metric: `${savings}+`, label: 'Annual Savings', description: 'Compared to SaaS platforms like Teachable' },
    { metric: '$7/month', label: 'Infrastructure Cost', description: 'Total hosting on DigitalOcean droplet' },
    { metric: '99.99%', label: 'Historical Uptime', description: `Reliable service for ${years} years` },
    { metric: `${email_subscribers}+`, label: 'Email Subscribers', description: 'Captured through platform' },
  ];

  const responsibilities = [
    {
      icon: Code,
      title: 'Technical Translation',
      description: 'Converting non-technical business ideas into fully functioning technical solutions',
    },
    {
      icon: Shield,
      title: 'Security & Authentication',
      description: 'Implementing secure user management with bcrypt and payment processing with Stripe',
    },
    {
      icon: Database,
      title: 'Data Architecture',
      description: 'Designing complex MongoDB structures for dripped course content and user management',
    },
    {
      icon: Globe,
      title: 'Infrastructure Management',
      description: 'Setting up and maintaining entire infrastructure, SSL certificates, and API integrations',
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'Creating seamless, unified experiences that avoid platform fragmentation',
    },
    {
      icon: Zap,
      title: 'Rapid Problem Solving',
      description: 'Quickly pivoting and adapting to new requirements and technical challenges',
    },
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

  const story = [
    {
      title: "The Beginning",
      years: "2018",
      icon: Heart,
      colors: { from: "from-green-500", to: "to-emerald-600", text: "text-green-600", bg: "bg-green-100", line: "to-blue-500" },
      prose: `In 2018, when my mom approached me about developing a website for her health coaching startup, Be Fit Beyond Fifty (BFBF), we initially considered simple, off-the-shelf solutions like WordPress templates. However, given my nature as an inventive, deeply curious developer, I quickly realized that a generic solution wouldn't satisfy either of us. I thrive on innovation and crafting solutions tailored exactly to specific needs, so I proposed developing something entirely custom.`,
    },
    {
      title: "Technical Evolution",
      years: "2018-2019",
      icon: Code,
      colors: { from: "from-blue-500", to: "to-indigo-600", text: "text-blue-600", bg: "bg-blue-100", line: "to-purple-500" },
      prose: `My initial experiments with traditional approaches like C# quickly revealed their constraints, prompting me to explore Single Page Applications (SPAs). Existing frameworks such as React and Vue.js, despite their popularity, felt overly abstract and opaque to me. I prefer solutions that are transparent, intuitive, and easy to reason about, with minimal "behind-the-scenes magic." This philosophy led me to build my own JavaScript framework, Taggly, which prioritized simplicity, customizability, and clarity, minimizing hidden complexity while maximizing flexibility.`,
    },
    {
      title: "Expanding Responsibilities",
      years: "2019-2020",
      icon: Users,
      colors: { from: "from-purple-500", to: "to-pink-600", text: "text-purple-600", bg: "bg-purple-100", line: "to-orange-500" },
      prose: `As the sole developer on the BFBF project, my responsibilities quickly expanded beyond mere programming. I handled every layer of the operation, from initial idea translation to final deployment. My role involved listening to my mom's non-technical business ideas—such as a new landing page or automated email marketing campaign—and quickly translating these concepts into fully functioning technical solutions. Whether integrating Stripe payments securely, building a robust user authentication system with bcrypt, or designing complex database structures in MongoDB to manage dripped course content, I consistently delivered robust solutions rapidly.`,
    },
    {
      title: "Full-Stack Mastery",
      years: "2020-Present",
      icon: Wrench,
      colors: { from: "from-orange-500", to: "to-red-600", text: "text-orange-600", bg: "bg-orange-100", line: "to-transparent" },
      prose: `Working alone meant wearing many hats: web developer, QA specialist, graphic designer, DevOps engineer, and more. I designed and set up our entire infrastructure on a single, cost-effective $7/month DigitalOcean droplet, maintained secure SSL certifications, managed integration with third-party APIs (Stripe, AWS, Monday.com, Kit.com, Facebook Ads, Google Docs, Calendly), and created comprehensive content management tools to simplify administrative also tremendous adaptability, creativity, and practical problem-solving.`,
    },
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
              <p className="text-lg text-green-200 mb-8 leading-relaxed">
                What began as a simple website request from my mom evolved into a {years}-year exercise in rapid problem-solving and relentless adaptability.
              </p>
              <p className="text-lg text-green-200 mb-8 leading-relaxed">
                As the sole developer behind Be Fit Beyond Fifty, I've handled every aspect of development—front-end, back-end, infrastructure, security, and more—without ever hitting a wall. This experience has proven that I can quickly grasp and overcome any technical challenge, delivering reliable solutions that work, no matter what's thrown my way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={bfbf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Visit Live Platform
                  <ExternalLink size={20} />
                </a>
                <a
                  href="#the-story"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Read the Story
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {result.label}
                </div>
                <div className="text-sm text-gray-600">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section id="the-story" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
          </div>

          {story.map((item, index) => {
            return (
              <div className="relative" key={item.title}>
                {/* Line */}
                <div className={`absolute left-8 top-0 bottom-0 w-2 bg-gradient-to-b ${item.colors.from} ${item.colors.line} hidden lg:block -translate-x-1/2${index === 0 ? " rounded-t-full" : ""}${index === story.length - 1 ? " rounded-b-full" : ""}`}></div>

                <div className="flex items-start flex-col md:flex-row gap-8  pb-16">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.colors.from} ${item.colors.to} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg z-10 place-self-center md:place-self-start`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-between md:justify-normal gap-3">
                      {item.title}
                      <span className={`text-sm font-medium ${item.colors.text} ${item.colors.bg} px-3 py-1 rounded-full text-nowrap`}>
                        {item.years}
                      </span>
                    </h3>
                    <p className="prose prose-lg text-gray-700 leading-relaxed">
                      {item.prose}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The diverse skills and responsibilities required to build and maintain a comprehensive platform solo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <responsibility.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{responsibility.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{responsibility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                My approach has saved BFBF more than <strong className="text-green-700">{savings} a year</strong> in
                subscription costs that would have otherwise gone to third-party SaaS solutions like Teachable and
                Stealth Seminar. That is a big deal to a tiny two person startup where everything is paid out of pocket.
              </p>

              <p className="text-lg mb-6">
                It provided a seamless, unified user experience, avoiding the fragmented feel of bouncing between different platforms. Our platform reliably maintained <strong className="text-green-700">99.99% uptime</strong>, and I personally ensured every aspect—from database security and user experience to automated integrations and dynamic content management—ran smoothly and efficiently.
              </p>

              <p className="text-lg">
                More than just a technical exercise, this project highlighted my ability to rapidly pivot, translating non-technical ideas into concrete, actionable solutions. It taught me invaluable lessons about iteration, responsiveness, and the critical importance of understanding every piece of the system intimately. Ultimately, Be Fit Beyond Fifty demonstrates not just technical capability, but my relentless determination to find practical, elegant solutions to real-world problems—qualities I bring to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Foundation</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Built on my custom Taggly framework with Node.js and MongoDB, the platform represents years of iteration and refinement. Every technical decision was made with purpose: prioritizing transparency over abstraction, simplicity over complexity.
                </p>
                <p>
                  The architecture handles everything from secure user authentication and payment processing
                  to complex content management and automated workflows—all running efficiently on minimal infrastructure.
                </p>
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Technologies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Taggly.js Framework', 'Node.js Backend', 'MongoDB Database', 'Stripe Integration', 'bcrypt Security', 'DigitalOcean Hosting'].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
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

              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Platform Features</h4>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Custom course & membership CMS",
                    "Drip content system for gradual lesson release",
                    "Integrated payment processing",
                    "Secure user authentication",
                    "In-house webinar system",
                    "Blog and podcast platform",
                    "Automated email marketing workflows",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Demonstrates */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What This Project Demonstrates</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Beyond technical skills, this project showcases adaptability, business acumen, and the ability
            to deliver real-world value as a solo developer.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full-Stack Mastery</h3>
              <p className="text-gray-600">
                Complete ownership from frontend to infrastructure, demonstrating deep technical versatility.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation & Adaptability</h3>
              <p className="text-gray-600">
                Building custom solutions when existing tools don't fit, showing creative problem-solving.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Impact</h3>
              <p className="text-gray-600">
                Delivering measurable cost savings and operational efficiency for real business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Be Fit Beyond Fifty</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            It's not made to look flashy—just practical, reliable, and exactly what the business needed. Take a look.
          </p>
          <a
            href={bfbf_url}
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
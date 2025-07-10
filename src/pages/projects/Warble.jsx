import { Github, Zap, Cpu, Code2, Layers, Terminal, Rocket, Clock, Shield, Lock, Gauge, Brain } from 'lucide-react';
import { projects } from '../../data/projects';

// Commentary/Fun Fact Component
const Commentary = ({ children, type = 'fun-fact' }) => {
  const styles = {
    'fun-fact': {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-800',
      icon: '💡'
    },
    'insight': {
      bg: 'bg-purple-50 border-purple-200',
      text: 'text-purple-800',
      icon: '🤔'
    },
    'warning': {
      bg: 'bg-amber-50 border-amber-200',
      text: 'text-amber-800',
      icon: '⚠️'
    },
    'note': {
      bg: 'bg-gray-50 border-gray-200',
      text: 'text-gray-800',
      icon: '📝'
    }
  };

  const style = styles[type] || styles['fun-fact'];

  return (
    <div className={`${style.bg} border-l-4 ${style.text} p-4 my-6 rounded-r-lg`}>
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">{style.icon}</span>
        <div className="text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Warble() {
  const project = projects.find(p => p.title == "Warble");

  const coreInnovations = [
    {
      icon: Clock,
      title: 'Lightning-Fast Compilation',
      description: 'Fully concurrent compilation with minimalist syntax dramatically reduces build times, keeping developers in flow state.',
      details: 'Meticulously engineered compiler and module system for ultra-fast compile times'
    },
    {
      icon: Zap,
      title: 'Dual Execution Model',
      description: 'Seamlessly transitions between JIT compilation for development and optimized binaries for production.',
      details: 'Hot-reloading modules with a tiny 4MB compiler perfect for embedding'
    },
    {
      icon: Cpu,
      title: 'Native Concurrency',
      description: 'Advanced runtime with sophisticated scheduling ensures safe, efficient concurrency with zero overhead.',
      details: 'Lock-free scheduling with adaptive thread management and intelligent execution ordering'
    },
    {
      icon: Shield,
      title: 'Sandboxed Security',
      description: 'Modules are sandboxed by default with explicit, allow-list-based permissions for external interactions.',
      details: 'Transparent dependency management prevents hidden vulnerabilities and privilege escalation'
    }
  ];

  const technicalHighlights = [
    {
      title: 'Compiler Intelligence',
      description: 'Complete code structure awareness enables deeper optimizations and robust safety guarantees',
      icon: Brain
    },
    {
      title: 'Module-Based Concurrency',
      description: 'Independent "tick" functions with automatic dependency resolution ensure data safety',
      icon: Layers
    },
    {
      title: 'Embeddable Runtime',
      description: '4MB compiler enables runtime scripting for games, tools, and user customization',
      icon: Code2
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Warble
              </h1>
              <p className="text-xl text-purple-100 mb-6 leading-relaxed">
                A New Vision for Modern Programming
              </p>
              <p className="text-lg text-purple-200 mb-8 leading-relaxed">
                Warble revolutionizes software development by prioritizing speed, concurrency, security,
                and developer experience. Its powerful compiler, innovative runtime, and thoughtful design
                address the pain points commonly encountered in existing programming languages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/sean-andrew-barry/warble/blob/main/docs/spec.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Full Specification
                  <Terminal size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  <Github size={20} />
                  View Source
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Innovations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Innovations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four revolutionary approaches that set Warble apart from existing programming languages
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreInnovations.map((innovation, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <innovation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{innovation.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{innovation.description}</p>
                <p className="text-sm text-purple-700 font-medium">{innovation.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concurrency Deep Dive */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Concurrency Revolution
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Concurrency is notoriously challenging yet critically important. Far too many modern
                  applications, especially games, fail to utilize available hardware fully, relying on
                  just a fraction of the CPU's potential.
                </p>
                <p>
                  Warble solves this with an advanced, fully concurrent runtime system. Its sophisticated
                  scheduler ensures safe, efficient concurrency with virtually zero overhead.
                </p>
                <p>
                  Warble's concurrency is built around modules, each containing independent "tick" functions
                  that automatically execute only after their dependencies have ticked. This approach
                  guarantees data safety without cumbersome synchronization.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <Cpu className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lock-Free Scheduling</h3>
                <p className="text-gray-600">
                  Intelligent algorithms optimize thread utilization and minimize contention
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Gauge className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adaptive Threading</h3>
                <p className="text-gray-600">
                  One thread per logical core by default, with intelligent load balancing
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Layers className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dependency Resolution</h3>
                <p className="text-gray-600">
                  Automatic execution ordering ensures data safety without manual synchronization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Model */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sandboxed by Default</h3>
                <p className="text-gray-600">
                  Modules cannot cause harm beyond consuming CPU cycles&nbsp;
                  {<a
                    href="https://en.wikipedia.org/wiki/Halting_problem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (Halting problem)
                  </a>}
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Lock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Explicit Permissions</h3>
                <p className="text-gray-600">
                  External interactions occur through allow-list-based import system
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Terminal className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Dependencies</h3>
                <p className="text-gray-600">
                  Every package declares permissions upfront—no hidden vulnerabilities
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Unmatched Security
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Security is a fundamental aspect of Warble's design. Unlike the unchecked dependency
                  chains common in ecosystems like Node.js—where one trusted package can bring along
                  hundreds of unknown, unverified dependencies—Warble's permission model prevents
                  packages from escalating privileges or introducing hidden vulnerabilities.
                </p>
                <p>
                  Every third-party package explicitly declares its permissions upfront. This transparency
                  means you can confidently integrate external code without fear of hidden security risks.
                </p>
                <p>
                  This approach brings clarity, simplicity, and trustworthiness to your dependency management.
                </p>
                
                <Commentary type="fun-fact">
                  <strong>Fun fact:</strong> This website currently has 565 dependency packages. 
                  I have no idea what 95% of them are.
                </Commentary>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced compiler technology and runtime innovations that make Warble uniquely powerful
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technicalHighlights.map((highlight, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Syntax */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Beyond the Syntax</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Warble's vision is not just about elegant syntax or efficient code; it's about reimagining
            how software is built, executed, and secured. It offers a solution to deeply-rooted issues
            that have long plagued developers: slow iteration cycles, difficult concurrency management,
            and opaque, insecure package ecosystems.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-300" />
              <h3 className="text-lg font-semibold mb-2">Fast Iteration</h3>
              <p className="text-purple-200 text-sm">
                Lightning-fast compilation keeps developers in flow state
              </p>
            </div>
            <div className="p-6">
              <Cpu className="w-12 h-12 mx-auto mb-4 text-purple-300" />
              <h3 className="text-lg font-semibold mb-2">Effortless Concurrency</h3>
              <p className="text-purple-200 text-sm">
                Built-in runtime makes parallel programming natural and safe
              </p>
            </div>
            <div className="p-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-300" />
              <h3 className="text-lg font-semibold mb-2">Trustworthy Ecosystem</h3>
              <p className="text-purple-200 text-sm">
                Transparent security model eliminates hidden vulnerabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Warble's Future</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Dive deeper into Warble's technical specification and discover how it's reshaping
            the future of programming language design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sean-andrew-barry/warble/blob/main/docs/spec.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Full Specification
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Follow Development
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
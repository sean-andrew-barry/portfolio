import { ExternalLink, Github, Code, Zap, Layers, Puzzle, Cpu, Gauge, Globe, Database, Wrench, FileCode, Rocket, Shield } from 'lucide-react';
import { projects } from '../../data/projects';
import { ShikiHighlighter } from 'react-shiki';

const example1 = `import {Body, Div, A} from "/js/Tags.js";

Body.Get().Append(
  new Div()
    .Class("my-class")
    .ID("my-id")
    .Append(
      new A()
        .HRef("/my-page")
        .Append("Click me!")
    )
);

// Or using template literals:
Body.Get().Append(
  P.Append\`Here's some \${Strong.Append\`bold\`} text.\`
);`;

const example2 = `// public/js/Tags/Div.js
import {Div as Base} from "/js/Tags/Div.js?next=/your-project/";

export class Div extends Base {
  // Add custom methods
  Blue() { 
    return this
      .BackgroundColor("blue")
      .Color("white"); 
  }
  
  // Override framework behavior
  ConvertString(string) {
    string = string.replace("&nbsp;", "\\u00A0");
    return super.ConvertString(string);
  }
}`;

export default function Taggly() {
  const project = projects.find(p => p.title == "Taggly");

  const coreGoals = [
    {
      icon: Wrench,
      title: 'Easy Development',
      description: 'Greatly reduces web development complexity by unifying all different systems into a common design'
    },
    {
      icon: Cpu,
      title: 'Client-Side Computing',
      description: 'The client\'s computer does most computational work, with servers handling minimal processing'
    },
    {
      icon: Zap,
      title: 'Blazing Fast',
      description: 'Static content renders in under 30ms with optimized data fetching for dynamic content'
    },
    {
      icon: Database,
      title: 'Efficient Data',
      description: 'Fetch exactly the data needed with minimal overhead - no wasted bandwidth or unused data'
    }
  ];

  const keyFeatures = [
    {
      icon: Code,
      title: 'No Build Tools Required',
      description: '100% native standard JavaScript - no weird complicated build tools necessary'
    },
    {
      icon: Layers,
      title: 'Powerful Layer System',
      description: 'Near unlimited customization of the framework through an innovative file resolution system'
    },
    {
      icon: Puzzle,
      title: 'Automatic Type Conversion',
      description: 'Add strings, functions, promises, dates, errors, etc as children and they\'re automatically converted to Tags'
    },
    {
      icon: Rocket,
      title: 'Hot Reloading',
      description: 'Partial reload (10-40ms), full reload (200ms), or hard reload - choose your speed'
    },
    {
      icon: Globe,
      title: 'Unified Codebase',
      description: 'Client and server use the same code files, reducing redundancy and complexity'
    },
    {
      icon: Database,
      title: 'Dynamic Queries',
      description: 'No API functions needed - write queries directly and the server handles them via WebSocket'
    }
  ];

  const performanceStats = [
    { metric: 'Page Load Time', value: '~10ms', description: 'Typical page load performance' },
    { metric: 'Partial Reload', value: '10-40ms', description: 'Hot reload of edited files only' },
    { metric: 'Full Reload', value: '~200ms', description: 'Complete file refresh' },
    { metric: 'Server Throughput', value: '100x', description: 'Improvement with WebSockets vs HTTP' }
  ];

  const advancedFeatures = [
    {
      title: 'Binary Data Format',
      description: 'Custom format as fast as JSON but extremely compressed, with class instance support',
      icon: FileCode
    },
    {
      title: 'Built-in Clustering',
      description: 'Run multiple instances for better performance on multi-core systems',
      icon: Cpu
    },
    {
      title: 'WebSocket by Default',
      description: 'Extremely high performance for small packets - 100x server throughput improvement',
      icon: Zap
    },
    {
      title: 'Auto SSL Management',
      description: 'Automatically generates certificates for development and handles SSL complexity',
      icon: Shield
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
                Taggly
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                A Powerful JavaScript Web Development Framework
              </p>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                A complete solution for Single Page Applications that unifies client and server development, dramatically reduces complexity, and delivers exceptional performance through innovative architecture and design principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try Taggly
                  <ExternalLink size={20} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Github size={20} />
                  View Source
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                <Code className="w-32 h-32 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Goals */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Design Goals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Taggly was built with four fundamental goals that drive every design decision
              and architectural choice in the framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreGoals.map((goal, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance by the Numbers</h2>
            <p className="text-lg text-gray-600">Real-world performance metrics that matter</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceStats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{stat.metric}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative approaches that make web development faster, simpler, and more enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tag System Deep Dive */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Tag System
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At the heart of Taggly is the <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">Tag</code> concept -
                  a powerful wrapper around HTML nodes that provides an intuitive, chainable API for DOM manipulation.
                </p>
                <p>
                  Tags automatically convert JavaScript types (strings, functions, promises, dates, errors)
                  into DOM nodes, eliminating the tedious conversion work that plagues other frameworks.
                </p>
                <p>
                  The system supports both method chaining and template literal syntax, giving developers
                  flexibility in how they structure their code while maintaining readability.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tag Example</h3>
              <ShikiHighlighter
                language="js"
                theme="one-dark-pro"
                className="rounded-xl text-sm"
              >
                {example1}
              </ShikiHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* Layer System */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Layer System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The most powerful feature of Taggly - a file resolution system that allows
              near unlimited customization of the framework itself.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Layer Resolution</h4>
                  <p className="text-sm">Framework searches through layers (directories) in order: your project first, then Taggly framework</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Domain Checking</h4>
                  <p className="text-sm">Within each layer, checks domains (private, public) for the requested file</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Override Capability</h4>
                  <p className="text-sm">Your files automatically override framework files - even framework code uses your customizations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Custom Div Example</h3>
              <ShikiHighlighter
                code={`console.log("Hello Shiki!")`}
                language="js"
                theme="one-dark-pro"
                className="rounded-xl text-sm"
              >
                {example2}
              </ShikiHighlighter>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade features that set Taggly apart from other frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Taggly */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Taggly?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Taggly represents a rethinking of web development. Instead of adding complexity,
            it removes it. Instead of fighting the platform, it embraces it. Instead of limiting customization, it makes everything customizable.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <Gauge className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Unmatched Performance</h3>
              <p className="text-blue-200 text-sm">
                10ms page loads and 100x server throughput improvements
              </p>
            </div>
            <div className="p-6">
              <Layers className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Ultimate Flexibility</h3>
              <p className="text-blue-200 text-sm">
                Layer system allows customization of any framework component
              </p>
            </div>
            <div className="p-6">
              <Code className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Developer Experience</h3>
              <p className="text-blue-200 text-sm">
                Intuitive APIs, hot reloading, and unified client-server development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-24 bg-gradient-to-r ${project.gradient} text-white`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Development?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the future of web development with Taggly's revolutionary approach
            to building fast, maintainable, and highly customizable applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started with Taggly
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
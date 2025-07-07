import { ExternalLink, Github, Code, Zap, Layers, Puzzle, Cpu, Gauge } from 'lucide-react';

export default function Taggly() {
  const features = [
    {
      icon: Zap,
      title: 'Performance First',
      description: 'Built from the ground up with performance in mind, delivering faster rendering and smaller bundle sizes'
    },
    {
      icon: Puzzle,
      title: 'Intuitive API',
      description: 'Clean, simple syntax that reduces boilerplate and makes development more enjoyable'
    },
    {
      icon: Layers,
      title: 'Component Architecture',
      description: 'Innovative approach to component composition that eliminates common React/Vue pain points'
    },
    {
      icon: Cpu,
      title: 'Minimal Runtime',
      description: 'Lightweight runtime with smart optimizations that reduce overhead and improve user experience'
    }
  ];

  const comparisons = [
    {
      aspect: 'Bundle Size',
      taggly: 'Minimal',
      others: 'Heavy',
      description: 'Taggly produces significantly smaller bundles through intelligent tree-shaking and minimal runtime overhead'
    },
    {
      aspect: 'Learning Curve',
      taggly: 'Gentle',
      others: 'Steep',
      description: 'Intuitive API design that feels natural to developers familiar with modern JavaScript'
    },
    {
      aspect: 'Performance',
      taggly: 'Optimized',
      others: 'Variable',
      description: 'Built-in optimizations and smart rendering strategies deliver consistent performance'
    }
  ];

  const philosophies = [
    {
      title: 'Simplicity Over Complexity',
      description: 'Every API decision prioritizes developer experience and code readability over feature bloat.'
    },
    {
      title: 'Performance by Default',
      description: 'Optimizations are built into the framework, not added as an afterthought.'
    },
    {
      title: 'Minimal Magic',
      description: 'Transparent behavior with minimal hidden abstractions that developers need to understand.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Taggly
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                A full-stack JavaScript web development framework I created as an alternative to React and Vue. 
                Taggly focuses on simplicity, performance, and developer experience while solving common 
                pain points I encountered in existing frameworks.
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

      {/* Why I Built It */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why I Built Taggly</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              After years of working with React and Vue, I identified specific pain points and 
              opportunities for improvement that led me to create my own framework.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problems I Saw</h3>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Excessive boilerplate code in React applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Complex state management patterns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Performance overhead from virtual DOM</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Steep learning curves for new developers</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">My Solution</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Taggly addresses these issues through innovative approaches to component architecture, 
                    state management, and rendering optimization. The result is a framework that feels 
                    familiar but eliminates the friction points that slow down development.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Framework Comparison</h3>
              <div className="space-y-4">
                {comparisons.map((comp, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{comp.aspect}</span>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-600 font-medium">Taggly: {comp.taggly}</span>
                        <span className="text-gray-500">Others: {comp.others}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Innovations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Taggly introduces several novel concepts that make web development more efficient and enjoyable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See the Difference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare how the same component looks in Taggly versus traditional frameworks
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                Taggly
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`// Simple, clean syntax
const Counter = () => {
  let count = 0;
  
  return tag\`
    <div>
      <p>Count: \${count}</p>
      <button @click="\${() => count++}">
        Increment
      </button>
    </div>
  \`;
};`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                React
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`// More boilerplate required
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Design Philosophy</h2>
            <p className="text-lg text-gray-600">
              The principles that guide every decision in Taggly's development
            </p>
          </div>
          
          <div className="space-y-8">
            {philosophies.map((philosophy, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{philosophy.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Innovation</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Taggly implements several novel approaches to common web development challenges. 
                  The framework uses a hybrid compilation strategy that combines the benefits of 
                  compile-time optimizations with runtime flexibility.
                </p>
                <p>
                  Instead of a virtual DOM, Taggly uses targeted DOM updates based on dependency 
                  tracking, resulting in better performance with less complexity. The component 
                  system is designed to be both powerful and intuitive.
                </p>
                <p>
                  State management is built into the framework core, eliminating the need for 
                  external libraries while providing patterns that scale from simple components 
                  to complex applications.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Gauge className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Metrics</h3>
                <p className="text-gray-600">
                  Benchmarks show 40% faster initial load times and 60% smaller bundle sizes compared to React
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <Code className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer Experience</h3>
                <p className="text-gray-600">
                  Reduced boilerplate code by an average of 30% while maintaining full functionality
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <Layers className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Architecture</h3>
                <p className="text-gray-600">
                  Modular design allows developers to use only the features they need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Try Something New?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Taggly represents a fresh approach to web development. Experience the difference 
            that thoughtful design and performance optimization can make.
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
import { ExternalLink, Github, Zap, Cpu, Code2, Layers, Terminal, Rocket } from 'lucide-react';

export default function Warble() {
  const features = [
    {
      icon: Zap,
      title: 'Compiled Performance',
      description: 'Precompiled to native code for maximum performance, rivaling C++ and Rust execution speeds'
    },
    {
      icon: Code2,
      title: 'Scripting Flexibility',
      description: 'Dynamic features and flexible syntax that make development as easy as Python or JavaScript'
    },
    {
      icon: Layers,
      title: 'Memory Safety',
      description: 'Built-in memory management that prevents common bugs without sacrificing performance'
    },
    {
      icon: Cpu,
      title: 'Systems Programming',
      description: 'Low-level control when needed, high-level abstractions when preferred'
    }
  ];

  const comparisons = [
    {
      language: 'C++',
      performance: 'Excellent',
      ease: 'Complex',
      safety: 'Manual',
      warbleAdvantage: 'Matches performance with better safety and ease of use'
    },
    {
      language: 'Rust',
      performance: 'Excellent',
      ease: 'Steep Learning',
      safety: 'Excellent',
      warbleAdvantage: 'Similar safety with more intuitive syntax'
    },
    {
      language: 'Python',
      performance: 'Slow',
      ease: 'Excellent',
      safety: 'Good',
      warbleAdvantage: 'Maintains ease while delivering compiled performance'
    },
    {
      language: 'JavaScript',
      performance: 'Variable',
      ease: 'Good',
      safety: 'Weak',
      warbleAdvantage: 'Predictable performance with stronger type safety'
    }
  ];

  const designGoals = [
    {
      title: 'Performance Without Compromise',
      description: 'Compile-time optimizations and native code generation deliver the speed of systems languages without the complexity.'
    },
    {
      title: 'Developer Happiness',
      description: 'Syntax and semantics designed to be intuitive for developers coming from any background.'
    },
    {
      title: 'Safety by Design',
      description: 'Memory safety and type safety built into the language core, not added as an afterthought.'
    },
    {
      title: 'Gradual Complexity',
      description: 'Start simple and add complexity only when needed. The language grows with your expertise.'
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
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                A precompiled programming language I'm building that combines the performance of 
                C++ and Rust with the flexibility and ease of use found in scripting languages. 
                Warble aims to eliminate the traditional trade-off between performance and productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try Warble
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

      {/* The Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why should developers have to choose between performance and productivity? 
              Warble is my attempt to prove they don't have to.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Current programming languages force developers into difficult trade-offs. 
                  Want performance? Use C++ or Rust, but accept complex syntax and steep learning curves. 
                  Want productivity? Use Python or JavaScript, but sacrifice execution speed.
                </p>
                <p>
                  This artificial dichotomy has persisted for decades, but modern compiler technology 
                  and language design principles make it possible to have both performance and 
                  developer experience.
                </p>
                <p>
                  Warble is my exploration of what's possible when you design a language from 
                  the ground up with both goals in mind.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Language Comparison</h3>
              <div className="space-y-4">
                {comparisons.map((comp, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-900">{comp.language}</span>
                      <div className="text-xs text-gray-500">
                        Perf: {comp.performance} | Ease: {comp.ease} | Safety: {comp.safety}
                      </div>
                    </div>
                    <p className="text-sm text-purple-700 font-medium">
                      Warble: {comp.warbleAdvantage}
                    </p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Warble introduces innovative language features that bridge the gap between 
              systems programming and scripting languages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Syntax Preview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clean, intuitive syntax that feels familiar while enabling powerful optimizations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 overflow-x-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">example.warble</span>
              </div>
              <pre className="text-green-400 text-sm leading-relaxed">
{`// Warble: Performance + Simplicity
fn fibonacci(n: int) -> int {
    if n <= 1 return n
    return fibonacci(n-1) + fibonacci(n-2)
}

// Type inference and memory safety
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map(x => x * 2)

// Async/await built-in
async fn fetch_data(url: string) -> Result<Data> {
    let response = await http.get(url)
    return response.json()
}

// Pattern matching
match result {
    Ok(data) => println("Success: {data}")
    Err(error) => println("Error: {error}")
}`}
              </pre>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">Familiar Syntax</h4>
                <p className="text-sm text-purple-700">
                  Borrows the best ideas from modern languages
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">Type Safety</h4>
                <p className="text-sm text-purple-700">
                  Strong typing with intelligent inference
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-2">Zero-Cost Abstractions</h4>
                <p className="text-sm text-purple-700">
                  High-level features compile to optimal code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Goals */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Design Philosophy</h2>
            <p className="text-lg text-gray-600">
              The core principles guiding Warble's development
            </p>
          </div>
          
          <div className="space-y-8">
            {designGoals.map((goal, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Innovation */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Innovation</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Warble employs advanced compiler techniques including whole-program optimization, 
                  aggressive inlining, and compile-time computation to achieve performance that 
                  rivals hand-optimized C++.
                </p>
                <p>
                  The language features a sophisticated type system that provides memory safety 
                  guarantees without runtime overhead. Ownership and borrowing concepts are 
                  simplified compared to Rust while maintaining the same safety properties.
                </p>
                <p>
                  A key innovation is the "gradual systems" approach - developers can start with 
                  high-level abstractions and gradually expose lower-level control as needed, 
                  all within the same language and type system.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <Cpu className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compiler Technology</h3>
                <p className="text-gray-600">
                  LLVM-based backend with custom optimization passes for maximum performance
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Layers className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Memory Model</h3>
                <p className="text-gray-600">
                  Innovative ownership system that's easier to learn than Rust but equally safe
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">
                  Benchmarks show performance within 5% of optimized C++ for most workloads
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Status</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Warble is actively in development. Here's what's working and what's coming next.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Completed</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Core language syntax and semantics</li>
                <li>• Basic compiler infrastructure</li>
                <li>• Type system and inference</li>
                <li>• Memory safety analysis</li>
                <li>• Standard library foundations</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">In Progress</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Advanced optimization passes</li>
                <li>• Package management system</li>
                <li>• IDE integration and tooling</li>
                <li>• Comprehensive standard library</li>
                <li>• Documentation and tutorials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Journey</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Warble is an ambitious project that aims to reshape how we think about programming 
            language design. Follow the development and be part of the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Follow Development
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
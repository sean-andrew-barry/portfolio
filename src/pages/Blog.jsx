import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Coffee } from 'lucide-react';
import { posts } from '../data/posts';
import FormattedDate from '../components/FormattedDate';

export default function Blog() {
  const hasPosts = posts.length > 0;

  return (
    <div className="">
      <section className="pt-48 pb-24 text-white">
        {hasPosts ? (
          <ul className="space-y-6">
            {posts.sort((a, b) => b.date - a.date).map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block bg-white dark:bg-gray-700 p-6 rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600 hover:underline">
                    {post.title}
                  </h2>
                  <FormattedDate date={post.date} className="text-sm text-gray-500 mb-2" />
                  <p className="text-gray-700 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-16">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm working on some exciting blog posts about web development, programming languages,
                and the projects I'm building. Check back soon for insights into Taggly, Warble,
                and my journey as a developer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-6 bg-gray-50 rounded-xl">
                <PenTool className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Technical Deep Dives</h3>
                <p className="text-sm text-gray-600">
                  Exploring compiler design, web frameworks, and performance optimization
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Coffee className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Development Stories</h3>
                <p className="text-sm text-gray-600">
                  Behind-the-scenes looks at building Taggly, Warble, and other projects
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Learning & Growth</h3>
                <p className="text-sm text-gray-600">
                  Lessons learned from years of self-taught development and experimentation
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-500 mb-4">Want to stay updated?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

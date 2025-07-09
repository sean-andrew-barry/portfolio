import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow overflow-hidden">
            {post.image && (
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">
              <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300">
              {post.content.substring(0, 120)}{post.content.length > 120 ? '...' : ''}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import FormattedDate from '../components/FormattedDate';
import usePageTitle from '../hooks/usePageTitle';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  usePageTitle(post ? post.title : 'Post Not Found');

  if (!post) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="p-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <FormattedDate date={post.date} className="text-sm text-gray-500" />
      {post.image && (
        <img
          src={post.image}
          alt={post.imageAlt || post.title}
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      )}
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{post.content}</p>
      <Link to="/blog" className="text-blue-600 hover:underline block mt-8">Back to blog</Link>
    </article>
  );
}

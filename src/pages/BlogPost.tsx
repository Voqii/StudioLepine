import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <PageTransition>
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Back button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-sky-dark hover:text-sky transition-colors group"
          >
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
            >
              ←
            </motion.span>
            Back to Blog
          </Link>
        </motion.div>

        {/* Post header */}
        <motion.header
          className="mb-12 pb-8 border-b border-sky/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <time className="font-mono text-sky-dark">
              {formatDate(post.date)}
            </time>
            {post.readTime && (
              <>
                <span className="text-black/30">•</span>
                <span className="font-mono text-black/60">{post.readTime}</span>
              </>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs px-3 py-2 bg-sky/20 text-sky-dark border border-sky/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Post content */}
        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="font-sans text-lg text-black/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Back button at bottom */}
        <motion.div
          className="mt-16 pt-8 border-t border-sky/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-sky-dark hover:text-sky transition-colors group"
          >
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
            >
              ←
            </motion.span>
            Back to Blog
          </Link>
        </motion.div>
      </article>
    </PageTransition>
  );
}

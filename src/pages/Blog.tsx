import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { blogPosts } from '../data/blogPosts';
import { staggerContainer, staggerItem } from '../utils/animations';

export default function Blog() {
  // Sort posts by date, newest first
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-mono text-5xl font-bold tracking-tight mb-4">Blog</h1>
          <div className="w-24 h-1 bg-sky mb-6"></div>
          <p className="font-sans text-xl text-black/70 leading-relaxed">
            Thoughts on design, development, security, and craftsmanship.
          </p>
        </motion.div>

        {/* Blog Posts List */}
        {sortedPosts.length > 0 ? (
          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {sortedPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={staggerItem}
                className="border-l-4 border-sky border-2 border-black/10 p-8 transition-all duration-300 hover:border-sky-dark hover:shadow-lg group"
                whileHover={{ y: -4 }}
              >
                <Link to={`/blog/${post.id}`} className="block">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
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

                  {/* Title */}
                  <h2 className="font-mono text-3xl font-bold mb-4 tracking-tight group-hover:text-sky-dark transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-sans text-lg text-black/70 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-xs px-3 py-2 bg-sky/20 text-sky-dark border border-sky/30 group-hover:bg-sky/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more indicator */}
                  <div className="mt-6 flex items-center gap-2 font-mono text-sm text-sky-dark group-hover:gap-4 transition-all">
                    Read more
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-sans text-lg text-black/50">
              No blog posts yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
}

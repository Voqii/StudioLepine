import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import Breadcrumbs from '../components/Breadcrumbs';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);
  const [copied, setCopied] = useState(false);

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

  // Auto-format content: convert line breaks to paragraphs
  const formatContent = (content: string) => {
    // Split by double line breaks to get paragraphs
    const paragraphs = content.split('\n\n');

    return paragraphs
      .map((para) => {
        const trimmed = para.trim();
        if (!trimmed) return '';

        // If it already has HTML tags, return as is
        if (trimmed.startsWith('<')) {
          return trimmed;
        }

        // Otherwise wrap in <p> tag
        return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
      })
      .join('\n');
  };

  // Share functionality
  const shareTitle = post.title;
  const shareText = `${post.title}\n${formatDate(post.date)} - ${post.readTime}\n\n${post.excerpt}`;

  const currentUrl = `https://lepine.biz/blog/${id}`;

  const handleShare = (platform: 'twitter' | 'linkedin' | 'native') => {
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
          '_blank',
          'width=550,height=420'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
          '_blank',
          'width=550,height=420'
        );
        break;
      case 'native':
        if (navigator.share) {
          navigator.share({
            title: shareTitle,
            text: shareText,
            url: currentUrl,
          }).catch(() => {
            // User cancelled or error occurred
          });
        }
        break;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{post.title} - Studio Lepine</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://lepine.biz/studiolepinelogo.png" />
        <meta property="article:published_time" content={post.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>
      <Breadcrumbs />
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

          {/* Share buttons */}
          <div className="mt-8 pt-6 border-t border-sky/20">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="font-mono text-sm text-black/60 font-semibold">Share this post:</span>
              <div className="flex flex-wrap gap-2">
                {/* Twitter */}
                <motion.button
                  onClick={() => handleShare('twitter')}
                  className="group flex items-center gap-2 font-mono text-xs px-4 py-2.5 bg-white border border-sky/30 hover:border-sky hover:bg-sky/5 transition-all duration-200 shadow-sm hover:shadow"
                  aria-label="Share on Twitter"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4 text-sky-dark group-hover:text-sky transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-sky-dark group-hover:text-sky transition-colors">Twitter</span>
                </motion.button>

                {/* LinkedIn */}
                <motion.button
                  onClick={() => handleShare('linkedin')}
                  className="group flex items-center gap-2 font-mono text-xs px-4 py-2.5 bg-white border border-sky/30 hover:border-sky hover:bg-sky/5 transition-all duration-200 shadow-sm hover:shadow"
                  aria-label="Share on LinkedIn"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-4 h-4 text-sky-dark group-hover:text-sky transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sky-dark group-hover:text-sky transition-colors">LinkedIn</span>
                </motion.button>

                {/* Copy Link */}
                <motion.button
                  onClick={copyToClipboard}
                  className="group flex items-center gap-2 font-mono text-xs px-4 py-2.5 bg-white border border-sky/30 hover:border-sky hover:bg-sky/5 transition-all duration-200 shadow-sm hover:shadow relative overflow-hidden"
                  aria-label="Copy link"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 text-sky-dark group-hover:text-sky transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sky-dark group-hover:text-sky transition-colors">Copy Link</span>
                    </>
                  )}
                </motion.button>

                {/* Native Share (only on supported devices) */}
                {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                  <motion.button
                    onClick={() => handleShare('native')}
                    className="group flex items-center gap-2 font-mono text-xs px-4 py-2.5 bg-white border border-sky/30 hover:border-sky hover:bg-sky/5 transition-all duration-200 shadow-sm hover:shadow"
                    aria-label="Share"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 text-sky-dark group-hover:text-sky transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-sky-dark group-hover:text-sky transition-colors">Share</span>
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.header>

        {/* Post content */}
        <motion.div
          className="blog-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
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

import type { BlogPost } from '../types';

// This is where you add your blog posts
// Each post should have: id, title, date, excerpt, content, tags, and optionally readTime
export const blogPosts: BlogPost[] = [
  {
    id: 'example-post',
    title: 'Example Blog Post',
    date: '2025-01-15',
    excerpt: 'This is an example blog post to demonstrate the structure. Replace this with your actual content.',
    content: `
# Example Blog Post

This is an example blog post. You can write your content here using markdown-style formatting.

## Section Heading

You can add multiple paragraphs, headings, and structure your content however you like.

## Another Section

Add your thoughts, technical insights, project updates, or whatever you want to share.
    `.trim(),
    tags: ['Example', 'Getting Started'],
    readTime: '2 min read',
  },
];

'use client';

import { use } from 'react';
import { blogPosts} from '@/libs/blogPosts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPostPageProps {
params: Promise<{
id: string;
}>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
const resolvedParams = use(params);
const post = blogPosts.find(p => p.slug === resolvedParams.id);

if (!post) {
notFound();
}

const getCategoryColor = (category: string) => {
switch (category) {
case 'Achievement': return 'bg-green-900/50 text-green-300 border-green-700';
case 'Project': return 'bg-blue-900/50 text-blue-300 border-blue-700';
case 'Learning': return 'bg-purple-900/50 text-purple-300 border-purple-700';
default: return 'bg-gray-900/50 text-gray-300 border-gray-700';
}
};

return (
<div className="bg-black min-h-screen py-12">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
{/* Back Navigation */}
<Link 
href="/blog" 
className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
>
← Back to Blog
</Link>

{/* Blog Post */}
<article className="bg-neutral-900 rounded-lg p-8">
<div className="flex flex-wrap items-center gap-3 mb-6">
<span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
{post.category}
</span>
<time className="text-sm text-gray-500">
{new Date(post.date).toLocaleDateString('en-US', {
year: 'numeric',
month: 'long',
day: 'numeric'
})}
</time>
</div>

<h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
{post.title}
</h1>

<div className="text-gray-300 leading-relaxed mb-8">
{post.content.split('\n\n').map((paragraph, index) => (
<div key={index} className="mb-4">
{paragraph.split('\n').map((line, lineIndex) => (
<div key={lineIndex} className={line.trim() ? "mb-1" : "mb-2"}>
{line.trim() || <br />}
</div>
))}
</div>
))}
</div>

{/* Links */}
{(post.certificateUrl || post.githubUrl || post.announcementUrl) && (
<div className="mb-8 p-4 bg-black rounded-lg border border-gray-800">
<h3 className="text-white font-medium mb-4">Related Links</h3>
<div className="flex flex-wrap gap-3">
{post.certificateUrl && (
<a 
href={post.certificateUrl} 
target="_blank" 
rel="noopener noreferrer"
className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
>
View Certificate
</a>
)}
{post.githubUrl && (
<a 
href={post.githubUrl} 
target="_blank" 
rel="noopener noreferrer"
className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
>
View on GitHub
</a>
)}
{post.announcementUrl && (
<a 
href={post.announcementUrl} 
target="_blank" 
rel="noopener noreferrer"
className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
>
Official Announcement
</a>
)}
</div>
</div>
)}

{/* Tags */}
<div className="flex flex-wrap gap-2">
{post.tags.map((tag) => (
<span 
key={tag} 
className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
>
#{tag}
</span>
))}
</div>
</article>
</div>
</div>
);
}

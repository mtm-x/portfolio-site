'use client';

import { useState } from 'react';
import { blogPosts} from '@/libs/blogPosts';
import Link from 'next/link';

export default function BlogSection() {
	const [selectedCategory, setSelectedCategory] = useState<string>('All');

	const categories = ['All', 'Achievement', 'Project', 'Learning'];

	const filteredPosts = selectedCategory === 'All' 
		? blogPosts 
		: blogPosts.filter(post => post.category === selectedCategory);

	const getCategoryColor = (category: string) => {
		switch (category) {
			case 'Achievement': return 'bg-green-900/50 text-green-300 border-green-700';
			case 'Project': return 'bg-blue-900/50 text-blue-300 border-blue-700';
			case 'Learning': return 'bg-purple-900/50 text-purple-300 border-purple-700';
			default: return 'bg-gray-900/50 text-gray-300 border-gray-700';
		}
	};

	return (
		<section className="bg-black py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Blog & Journey
					</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Sharing my learning experiences, project insights, and achievements in embedded systems, 
						IoT, and software development.
					</p>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-3 mb-8">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
								selectedCategory === category
									? 'bg-white text-black'
									: 'bg-neutral-900 text-gray-400 hover:text-white hover:bg-neutral-800'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Blog Posts */}
				<div className="space-y-6">
					{filteredPosts.map((post) => (
						<article 
							key={post.id} 
							className="bg-neutral-900 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-500/20 transition-all"
						>
							<div className="flex flex-wrap items-center justify-between mb-4">
								<div className="flex items-center gap-3 mb-2 sm:mb-0">
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
							</div>

							<Link href={`/blog/${post.slug}`}>
								<h3 className="text-xl font-bold text-white mb-3 hover:text-gray-300 transition-colors cursor-pointer">
									{post.title}
								</h3>
							</Link>

							<p className="text-gray-400 mb-4 leading-relaxed">
								{post.excerpt}
							</p>

							<div className="flex flex-wrap items-center justify-between">
								<div className="flex flex-wrap gap-2 mb-3 sm:mb-0">
									{post.tags.map((tag) => (
										<span 
											key={tag} 
											className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded"
										>
											#{tag}
										</span>
									))}
								</div>
								
								<Link
									href={`/blog/${post.slug}`}
									className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
								>
									View Full Post →
								</Link>
							</div>
						</article>
					))}
				</div>

				{filteredPosts.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500">No posts found in this category.</p>
					</div>
				)}
			</div>
		</section>
	);
}

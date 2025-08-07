'use client';

import { useState } from 'react';
import { blogPosts} from '@/libs/blogPosts';

export default function BlogSection() {
	const [selectedCategory, setSelectedCategory] = useState<string>('All');
	const [expandedPost, setExpandedPost] = useState<number | null>(null);

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

							<h3 className="text-xl font-bold text-white mb-3 hover:text-gray-300 transition-colors">
								{post.title}
							</h3>

							<p className="text-gray-400 mb-4 leading-relaxed">
								{post.excerpt}
							</p>

							{expandedPost === post.id && (
								<div className="mb-4 p-4 bg-black rounded-lg border border-gray-800">
									<div className="text-gray-300 leading-relaxed">
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
									
									{/* Certificate, GitHub, and Announcement links */}
									{(post.certificateUrl || post.githubUrl || post.announcementUrl) && (
										<div className="mt-4 pt-4 border-t border-gray-800">
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
								</div>
							)}

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
								
								<button
									onClick={() => setExpandedPost(
										expandedPost === post.id ? null : post.id
									)}
									className="text-sm text-white hover:text-gray-300 transition-colors font-medium"
								>
									{expandedPost === post.id ? 'Read Less' : 'Read More'} →
								</button>
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

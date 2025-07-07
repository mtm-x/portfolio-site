// components/ProjectsSection.tsx
'use client';

import Image from 'next/image';
// Adjust the path below to where your projects array is actually exported from
import { projects } from '../../libs/projects'; // Example: adjust as needed

export default function ProjectsSection() {
    return (
        <section className="bg-black py-12 sm:py-20"> {/* Ensure this section background is black if you want it */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Hobby Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Map over your projects array */}
                    {projects.map((project) => (
                        <div key={project.id || project.title} className="bg-neutral-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                {/* Use Next.js Image component */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill	
                                    className="object-cover"
                                    // Optional: Add `sizes` prop for better performance/responsiveness
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                                <div className="flex gap-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank" // Open link in new tab
                                        rel="noopener noreferrer" // Security best practice
                                        className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
// components/ProjectsSection.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../libs/projects'; // Fixed import path

export default function ProjectsSection() {
  return (
    <section className="bg-black py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Hobby Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-700 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Optional: Display technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3">
                  {/* Prioritize blog link if available */}
                  {project.blogSlug ? (
                    <Link
                      href={`/blog/${project.blogSlug}`}
                      className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                    >
                      Read More →
                    </Link>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                    >
                      View Project →
                    </a>
                  )}
                  
                  {/* Always show GitHub link, but as secondary if blog exists */}
                  {project.blogSlug && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 font-medium text-sm sm:text-base"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
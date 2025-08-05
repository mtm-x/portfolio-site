'use client';

import Image from 'next/image';

export default function AboutSection() {
	return (
		<section className="bg-black py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Profile Image */}
					<div className="flex justify-center lg:justify-start">
						<div className="relative">
							<Image 
								src="/portfolio/myself.png" 
								alt="Thamaraimanalan M" 
								width={300} 
								height={300} 
								className="rounded-2xl shadow-lg border-4 border-gray-700"
							/>
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-transparent to-white/10"></div>
						</div>
					</div>

					{/* About Content */}
					<div className="text-center lg:text-left">
						<h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
							About Me
						</h1>
						<h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
							Embedded Systems & IoT Enthusiast
						</h2>
						
						<div className="space-y-4 text-gray-400 leading-relaxed">
							<p>
								I'm passionate about the intersection of hardware and software, specializing in 
								embedded systems, IoT devices, and edge AI applications. My journey in technology 
								is driven by curiosity and the desire to create innovative solutions that bridge 
								the digital and physical worlds.
							</p>
							
							<p>
								With expertise in Python, C, and various embedded platforms like Raspberry Pi, 
								I enjoy building projects that solve real-world problems. Whether it's developing 
								IoT sensors, creating automation systems, or exploring robotics with ROS2, 
								I'm always excited to learn and experiment with new technologies.
							</p>
							
							<p>
								When I'm not coding, you'll find me tinkering with hardware, exploring the latest 
								in edge computing, or sharing my learning journey through blog posts and project 
								documentation. I believe in continuous learning and open-source collaboration.
							</p>
						</div>

						{/* Quick Stats */}
						<div className="grid grid-cols-2 gap-4 mt-8">
							<div className="bg-neutral-900 p-4 rounded-lg text-center">
								<div className="text-2xl font-bold text-white">5+</div>
								<div className="text-sm text-gray-400">Projects Completed</div>
							</div>
							<div className="bg-neutral-900 p-4 rounded-lg text-center">
								<div className="text-2xl font-bold text-white">2+</div>
								<div className="text-sm text-gray-400">Years Learning</div>
							</div>
						</div>
					</div>
				</div>

				{/* Experience Section */}
				<div className="mt-16 sm:mt-20">
					<div className="text-center mb-8">
						<h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
							Experience
						</h2>
						<div className="w-16 h-1 bg-white mx-auto rounded"></div>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="bg-neutral-900 rounded-lg p-6 shadow-lg border border-gray-800 hover:shadow-gray-500/20 transition-shadow">
							{/* Header with Logo */}
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
								<div className="mb-3 sm:mb-0">
									<h3 className="text-xl font-bold text-white mb-1">
										Project Intern
									</h3>
									<div className="flex flex-col sm:flex-row sm:items-center text-gray-300">
										<span className="font-medium">FOSSEE, IIT Bombay</span>
										<span className="hidden sm:inline mx-2">•</span>
										<span className="text-gray-400 text-sm">Feb 2025 - May 2025</span>
									</div>
								</div>
								{/* Logo placeholder - you can add the actual logo later */}
								<div className="flex-shrink-0">
									<div className="w-16 h-8 bg-gray-700 rounded flex items-center justify-center">
										<span className="text-xs text-gray-400">FOSSEE</span>
									</div>
								</div>
							</div>

							{/* Responsibilities */}
							<div className="mb-4">
								<ul className="space-y-2 text-gray-400">
									<li className="flex items-start">
										<span className="text-white mr-2 mt-1">•</span>
										<span>Developing GUI for OpenModelica using Qt and Python</span>
									</li>
									<li className="flex items-start">
										<span className="text-white mr-2 mt-1">•</span>
										<span>Collaborating with FOSSEE team to improve software usability and performance</span>
									</li>
									<li className="flex items-start">
										<span className="text-white mr-2 mt-1">•</span>
										<span>Implementing new features for model simulation interface</span>
									</li>
									<li className="flex items-start">
										<span className="text-white mr-2 mt-1">•</span>
										<span>Conducting user testing and feedback analysis</span>
									</li>
									<li className="flex items-start">
										<span className="text-white mr-2 mt-1">•</span>
										<span>Maintaining documentation for GUI components</span>
									</li>
								</ul>
							</div>

							{/* Technologies */}
							<div className="border-t border-gray-800 pt-4">
								<div className="flex flex-wrap gap-2 mb-3">
									<span className="text-sm text-gray-500 mr-2">Technologies:</span>
									{['Qt', 'Python', 'OpenModelica', 'Git'].map((tech) => (
										<span 
											key={tech}
											className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
										>
											{tech}
										</span>
									))}
								</div>
								<div>
									<a 
										href="https://drive.google.com/file/d/1YqlK5mc7CTMnWeUnZrt620LRFD6vvG4-/view?usp=sharing" 
										target="_blank" 
										rel="noopener noreferrer"
										className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
									>
										<span className="mr-2">📄</span>
										View Internship Certificate
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

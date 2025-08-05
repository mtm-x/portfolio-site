'use client';

import { useState } from 'react';

interface BlogPost {
	id: number;
	title: string;
	date: string;
	category: 'Achievement' | 'Project' | 'Learning';
	excerpt: string;
	content: string;
	tags: string[];
}

const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: "NXP AIM 2025 - Regional Finalist in AI Mobility Challenge",
		date: "2025-01-20",
		category: "Achievement",
		excerpt: "Selected as regional finalist in NXP's Artificial Intelligence in Mobility competition, competing in robotic treasure hunt challenges using ROS2, SLAM, and computer vision.",
		content: `I recently took part in NXP AIM 2025 (Artificial Intelligence in Mobility) and managed to reach the regional finals. Though I didn't win, just getting selected from all the participants felt pretty amazing.

AIM is basically a competition where engineering students get to work with AI and robotics for mobility applications. We had to build mobile robot prototypes using technologies like AI/ML, object recognition, sensors, computer vision, and obstacle avoidance.

The Challenge:
The main task was a robotic treasure hunt that tested both simulation and real-world robotics skills. Our robots had to navigate through complex environments, detect objects, avoid obstacles, and complete autonomous missions on their own.

What I worked with:
- ROS2 for the robot operating system and distributed robotics
- Gazebo for 3D robotics simulation
- Python for writing the main algorithms
- Foxglove for visualizing data and debugging
- Shell scripting for automation and system integration
- OpenCV for computer vision and image processing
- SLAM for simultaneous localization and mapping
- Nav2 for autonomous navigation

This experience really pushed my robotics and AI knowledge forward. Working with SLAM to map unknown environments and using Nav2 for autonomous navigation was tough but really rewarding. Getting to work with both simulation in Gazebo and real hardware gave me a much better understanding of how mobile robotics actually works.

Even though I didn't win the regional finals, I learned a ton about AI applications in mobility and it definitely strengthened my interest in robotics and autonomous systems.`,
		tags: ["NXP AIM", "Robotics", "ROS2", "SLAM", "Computer Vision", "Nav2", "AI/ML", "Regional Finalist"]
	},
	{
		id: 2,
		title: "Currently Learning: Comprehensive Embedded Systems Course",
		date: "2025-01-15",
		category: "Learning",
		excerpt: "Enrolled in an intensive embedded systems course from Pyjamabrah, taught by Google engineers Piyush Itankar and Mahmad Bharmal.",
		content: `Currently taking an embedded systems course from Pyjamabrah, taught by Piyush Itankar and Mahmad Bharmal who both work at Google. It's been a solid learning experience so far.

The course covers the fundamentals you need for embedded systems development, which is exactly what I was looking for.

Progress so far:

C Programming - Completed :)
Just finished the C fundamentals section and got my certification. The low-level programming concepts are starting to click, which feels great. [View my certificate here](https://drive.google.com/file/d/1BJ3lXz0yCHVueuUFquB8Hi46MNUon50J/view?usp=sharing)

Currently working on:
- C Pointers - Getting into memory management and pointer arithmetic
- Python - Learning how to use it for embedded applications
- AArch64 Architecture - ARM 64-bit processor stuff
- FPGA Development - Hardware description and programmable logic

Having instructors from Google is pretty cool because they bring real industry perspective. The course builds up from basics to practical implementation, which works well for me.

The C certification was a good milestone. Now diving into pointers, which is where things get interesting. The combination of all these topics should give me a solid foundation for embedded projects.`,
		tags: ["Embedded Systems", "C Programming", "C Certification", "Python", "AArch64", "FPGA", "Pyjamabrah"]
	},
	{
		id: 3,
		title: "Qt Champion 2024 - 3rd Place in Global Qt-athon Competition",
		date: "2024-10-25",
		category: "Achievement",
		excerpt: "Recognized by Qt Group as one of the top 3 performers among 100+ international teams in the global Qt-athon 2024 competition.",
		content: `Thrilled to announce that I achieved 3rd place in the Qt-athon 2024 competition! This global event organized by Qt Group brought together developers from around the world to showcase their Qt framework expertise.

🏆 Competition Highlights:
- Competed against 100+ international teams
- Officially recognized in Qt Group's winners announcement
- Demonstrated advanced Qt framework architecture skills
- Showcased QML development expertise
- Global ranking achievement

The competition challenged participants to build innovative applications using Qt framework, pushing the boundaries of what's possible with cross-platform development. My project focused on creating a sophisticated GUI application that demonstrated both technical prowess and user experience design.

This achievement validates my expertise in Qt development and opens up new opportunities in the Qt ecosystem. The recognition from Qt Group is particularly meaningful as it comes from the creators of the framework themselves.

You can view my official certificate and the competition details through the Qt Group's announcement. [Download my Qt-athon 2024 certificate](https://drive.google.com/file/d/10yc-ymNhzj3aUN3YqxHb3NGKw4bioexQ/view?usp=sharing). This experience has motivated me to continue contributing to the Qt community and exploring advanced framework capabilities.`,
		tags: ["Qt Framework", "Competition", "QML", "GUI Development", "Global Recognition"]
	},
	{
		id: 4,
		title: "WiFi Jammer - Linux Application",
		date: "2024-11-10",
		category: "Project",
		excerpt: "A simple Linux application for WiFi access point jamming using network security techniques.",
		content: `Built a WiFi jammer application for Linux that can jam WiFi access points. This was a learning project to understand network security concepts and how wireless networks can be disrupted.

The application targets WiFi access points and disrupts their normal operation. It taught me a lot about network protocols, wireless security, and how networks can be vulnerable to certain types of attacks.

Key features:
- Linux-based WiFi jamming functionality
- Simple command-line interface
- Network security research tool
- Educational purposes only

This project helped me understand the importance of network security and how to protect against such attacks. It's important to note this should only be used for educational purposes and on networks you own or have permission to test.`,
		tags: ["Linux", "Network Security", "WiFi", "C++"]
	},
	{
		id: 5,
		title: "WiFi Jammer Python Script",
		date: "2024-10-30",
		category: "Project",
		excerpt: "A Python implementation of WiFi jamming functionality for network security research and learning.",
		content: `Created a Python script version of my WiFi jammer project. This was part of exploring different programming approaches to network security tools.

The Python version offers:
- Clean, readable code structure
- Easy to modify and extend
- Cross-platform compatibility
- Good for learning network programming concepts

Working with Python for network operations taught me about socket programming, packet manipulation, and how different programming languages handle low-level network operations differently than C++.

This project reinforced my understanding of both Python programming and network security fundamentals. It's designed purely for educational use and understanding how wireless networks operate.`,
		tags: ["Python", "Network Security", "WiFi", "Scripting"]
	},
	{
		id: 6,
		title: "WiFi Jammer Shell Script",
		date: "2024-10-25",
		category: "Project",
		excerpt: "A shell script implementation for WiFi jamming, exploring bash scripting and system administration.",
		content: `Wrote a shell script version of the WiFi jammer to explore bash scripting and system-level network operations. This was interesting because it showed how much you can accomplish with simple shell commands.

The shell script approach taught me:
- Advanced bash scripting techniques
- System administration concepts
- How to interact with network interfaces from command line
- Linux networking tools and utilities

It's fascinating how different tools can achieve similar results. The shell script version is probably the most lightweight of all my WiFi jammer implementations, requiring minimal dependencies and running efficiently on any Linux system.

This project improved my Linux system administration skills and deepened my understanding of how network tools work at the command line level.`,
		tags: ["Shell Script", "Bash", "Linux", "Network Security"]
	},
	{
		id: 7,
		title: "Android Debloater Python Script",
		date: "2024-10-15",
		category: "Project",
		excerpt: "A Python script to remove system apps from Android devices using ADB commands and automation.",
		content: `Developed a Python script that automates the removal of system apps from Android devices. This was born out of frustration with bloatware on Android phones and wanting to clean them up programmatically.

The script uses ADB (Android Debug Bridge) to communicate with Android devices and remove unwanted system applications that can't normally be uninstalled through the regular interface.

Features implemented:
- Automated ADB command execution
- Safe app removal with backups
- Device detection and connection handling
- Batch processing of multiple apps
- User-friendly command line interface

This project taught me about Android's system architecture, ADB protocol, and how to build useful automation tools. It also reinforced my Python skills, especially working with subprocess management and command-line tools.

The script has been helpful for cleaning up personal devices and understanding how Android package management works under the hood.`,
		tags: ["Python", "Android", "ADB", "Automation", "Mobile"]
	},
	{
		id: 8,
		title: "Building a WiFi Jammer Detection System",
		date: "2024-12-15",
		category: "Project",
		excerpt: "Developed a comprehensive WiFi security tool using Python and shell scripting for network monitoring and protection.",
		content: `Recently completed a WiFi jammer detection and mitigation system that combines Python automation with shell scripting. This project taught me a lot about network security protocols and real-time monitoring systems.

Key features implemented:
- Real-time WiFi signal monitoring
- Automated threat detection algorithms  
- Cross-platform compatibility (Python + Shell)
- User-friendly interface with Qt Framework

The most challenging part was optimizing the detection algorithms to minimize false positives while maintaining quick response times. This project really expanded my understanding of network protocols and security implementations.`,
		tags: ["Python", "Network Security", "Qt Framework", "Shell Scripting"]
	},
	{
		id: 9,
		title: "First Steps with ROS2 and Robotics",
		date: "2024-11-28",
		category: "Learning",
		excerpt: "Started my journey into robotics with ROS2. Here's what I learned in my first month of exploring robot operating systems.",
		content: `Diving into ROS2 has been an exciting challenge! Coming from embedded systems background, the distributed nature of ROS2 nodes was initially confusing but incredibly powerful once understood.

What I've learned so far:
- Node communication through topics and services
- Launch files and parameter management
- Integration with Gazebo for simulation
- Basic navigation and mapping concepts

Currently working on a simple autonomous navigation project using a simulated robot. The learning curve is steep but rewarding - every small milestone feels like a major achievement!`,
		tags: ["ROS2", "Robotics", "Gazebo", "Learning"]
	},
	{
		id: 10,
		title: "Completed Advanced Python Certification",
		date: "2024-10-20",
		category: "Achievement",
		excerpt: "Successfully completed an advanced Python certification focusing on embedded systems and IoT applications.",
		content: `Just finished an intensive Python certification program that focused specifically on embedded systems and IoT applications. This wasn't your typical Python course - it dove deep into hardware interfacing, real-time systems, and optimization for resource-constrained environments.

Key topics covered:
- GPIO programming and hardware interfaces
- Concurrent programming for embedded systems
- Memory optimization techniques
- Integration with C libraries for performance-critical sections
- IoT protocol implementations (MQTT, CoAP)

The final project involved creating a complete IoT sensor network with data visualization dashboard. Really proud of how it turned out and excited to apply these skills to future projects!`,
		tags: ["Python", "Certification", "IoT", "Embedded Systems"]
	},
	{
		id: 11,
		title: "STM32 Development Environment Setup",
		date: "2024-09-15",
		category: "Learning",
		excerpt: "Setting up a complete development environment for STM32 microcontrollers on Linux - challenges and solutions.",
		content: `Recently set up a complete STM32 development environment on my Linux system. It was more involved than expected, but the learning experience was valuable.

Challenges faced:
- Toolchain installation and configuration
- Debugger setup with ST-Link
- Integration with VS Code for a smooth workflow
- Managing different STM32 families and their specific requirements

Final setup includes:
- STM32CubeIDE for complex projects
- PlatformIO extension for VS Code
- OpenOCD for debugging
- Custom build scripts for automation

Now I can seamlessly switch between embedded C development and Python scripting, which opens up interesting possibilities for hybrid projects!`,
		tags: ["STM32", "Embedded C", "Linux", "Development Setup"]
	}
];

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
									<div className="text-gray-300 leading-relaxed whitespace-pre-line">
										{/* Clean content without embedded buttons */}
										{post.id === 1 ? (
											// NXP AIM 2025 post
											<div>
												I recently took part in NXP AIM 2025 (Artificial Intelligence in Mobility) and managed to reach the regional finals. Though I didn't win, just getting selected from all the participants felt pretty amazing.
												<br /><br />
												AIM is basically a competition where engineering students get to work with AI and robotics for mobility applications. We had to build mobile robot prototypes using technologies like AI/ML, object recognition, sensors, computer vision, and obstacle avoidance.
												<br /><br />
												The Challenge:
												<br />
												The main task was a robotic treasure hunt that tested both simulation and real-world robotics skills. Our robots had to navigate through complex environments, detect objects, avoid obstacles, and complete autonomous missions on their own.
												<br /><br />
												What I worked with:
												<br />
												- ROS2 for the robot operating system and distributed robotics
												<br />
												- Gazebo for 3D robotics simulation
												<br />
												- Python for writing the main algorithms
												<br />
												- Foxglove for visualizing data and debugging
												<br />
												- Shell scripting for automation and system integration
												<br />
												- OpenCV for computer vision and image processing
												<br />
												- SLAM for simultaneous localization and mapping
												<br />
												- Nav2 for autonomous navigation
												<br /><br />
												This experience really pushed my robotics and AI knowledge forward. Working with SLAM to map unknown environments and using Nav2 for autonomous navigation was tough but really rewarding. Getting to work with both simulation in Gazebo and real hardware gave me a much better understanding of how mobile robotics actually works.
												<br /><br />
												Even though I didn't win the regional finals, I learned a ton about AI applications in mobility and it definitely strengthened my interest in robotics and autonomous systems.
											</div>
										) : post.id === 2 ? (
											// C Programming Course post
											<div>
												Currently taking an embedded systems course from Pyjamabrah, taught by Piyush Itankar and Mahmad Bharmal who both work at Google. It's been a solid learning experience so far.
												<br /><br />
												The course covers the fundamentals you need for embedded systems development, which is exactly what I was looking for.
												<br /><br />
												Progress so far:
												<br /><br />
												C Programming - Completed ✅
												<br />
												Just finished the C fundamentals section and got my certification. The low-level programming concepts are starting to click, which feels great.
												<br /><br />
												Currently working on:
												<br />
												- C Pointers - Getting into memory management and pointer arithmetic
												<br />
												- Python - Learning how to use it for embedded applications
												<br />
												- AArch64 Architecture - ARM 64-bit processor stuff
												<br />
												- FPGA Development - Hardware description and programmable logic
												<br /><br />
												Having instructors from Google is pretty cool because they bring real industry perspective. The course builds up from basics to practical implementation, which works well for me.
												<br /><br />
												The C certification was a good milestone. Now diving into pointers, which is where things get interesting. The combination of all these topics should give me a solid foundation for embedded projects.
											</div>
										) : post.id === 3 ? (
											// Qt Champion post
											<div>
												Really excited to share that I got 3rd place in the Qt-athon 2024 competition! This was a global event organized by Qt Group that brought together developers from around the world to show off their Qt framework skills.
												<br /><br />
												Competition Highlights:
												<br />
												- Competed against 100+ international teams
												<br />
												- Got officially recognized in Qt Group's winners announcement
												<br />
												- Showed off advanced Qt framework architecture skills
												<br />
												- Demonstrated QML development expertise
												<br />
												- Achieved global ranking
												<br /><br />
												The competition challenged us to build innovative applications using Qt framework, really pushing what's possible with cross-platform development. My project focused on creating a sophisticated GUI application that showed both technical skills and good user experience design.
												<br /><br />
												This achievement feels really good because it validates my Qt development skills and opens up new opportunities in the Qt ecosystem. Getting recognition from Qt Group is especially meaningful since they're the ones who created the framework.
												<br /><br />
												You can check out my official certificate and the competition details through Qt Group's announcement. This whole experience has motivated me to keep contributing to the Qt community and explore more advanced framework capabilities.
											</div>
										) : (
											// Default content rendering for other posts
											post.content
										)}
									</div>
									
									{/* Certificate buttons and GitHub links at the bottom */}
									{(post.id === 1 || post.id === 2 || post.id === 3 || post.id === 4 || post.id === 5 || post.id === 6 || post.id === 7) && (
										<div className="mt-4 pt-4 border-t border-gray-800">
											<div className="flex flex-wrap gap-3">
												{/* Certificate links */}
												{post.id === 1 && (
													<a 
														href="https://drive.google.com/file/d/1K9f_vX-XXlP34EO03iPNR43R37R-Xxt2/view?usp=sharing" 
														target="_blank" 
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
													>
														NXP AIM 2025 Certificate
													</a>
												)}
												{post.id === 2 && (
													<a 
														href="https://drive.google.com/file/d/1BJ3lXz0yCHVueuUFquB8Hi46MNUon50J/view?usp=sharing" 
														target="_blank" 
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
													>
														C Programming Certificate
													</a>
												)}
												{post.id === 3 && (
													<a 
														href="https://drive.google.com/file/d/10yc-ymNhzj3aUN3YqxHb3NGKw4bioexQ/view?usp=sharing" 
														target="_blank" 
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
													>
														Qt-athon 2024 Certificate
													</a>
												)}
												
												{/* GitHub links for project posts */}
												{post.id === 4 && (
													<a 
														href="https://github.com/mtm-x/wifijammer" 
														target="_blank" 
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
													>
														View on GitHub
													</a>
												)}
												{post.id === 5 && (
													<a 
														href="https://github.com/mtm-x/wifijammer-python-script" 
														target="_blank" 
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
													>
														View on GitHub
													</a>
												)}
												{post.id === 6 && (
													<a 
														href="https://github.com/mtm-x/wifi-jammer-script" 
														target="_blank" 
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
													>
														View on GitHub
													</a>
												)}
												{post.id === 7 && (
													<a 
														href="https://github.com/mtm-x/android-debloater" 
														target="_blank" 
														rel="noopener noreferrer"
														className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
													>
														View on GitHub
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

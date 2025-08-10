export interface BlogPost {
	id: number;
	slug: string;
	title: string;
	date: string;
	category: 'Achievement' | 'Project' | 'Learning';
	excerpt: string;
	content: string;
	tags: string[];
	certificateUrl?: string;
	githubUrl?: string;
	announcementUrl?: string;
}

export const blogPosts: BlogPost[] = [
	{
		id: 1,
		slug: "nxp-aim-2025-regional-finalist",
		title: "NXP AIM 2025 - Regional Finalist in AI Mobility Challenge",
		date: "2025-07-28",
		category: "Achievement",
		excerpt: "Selected as regional finalist in NXP's Artificial Intelligence in Mobility competition, competing in robotic treasure hunt challenges using ROS2, SLAM, and computer vision.",
		content: `I recently took part in NXP AIM 2025 (Artificial Intelligence in Mobility) and managed to reach the regional finals. Though I didn't win, just getting selected from all the participants felt pretty amazing.

The regional finale took place at M.S. Ramaiah Institute of Technology, Bengaluru, which was an exciting experience competing alongside other talented teams from across the region.

AIM is basically a competition where engineering students get to work with AI and robotics for mobility applications. We had to build mobile robot prototypes using technologies like AI/ML, object recognition, sensors, computer vision, and obstacle avoidance.

The Challenge:
The main task was a robotic treasure hunt that tested both simulation and real-world robotics skills. Our robots had to navigate through complex environments, detect objects, avoid obstacles, and complete autonomous missions on their own.

What I worked with:
• ROS2 for the robot operating system and distributed robotics
• Gazebo for 3D robotics simulation
• Python for writing the main algorithms
• Foxglove for visualizing data and debugging
• Shell scripting for automation and system integration
• OpenCV for computer vision and image processing
• SLAM for simultaneous localization and mapping
• Nav2 for autonomous navigation

This experience really pushed my robotics and AI knowledge forward. Working with SLAM to map unknown environments and using Nav2 for autonomous navigation was tough but really rewarding. Getting to work with both simulation in Gazebo and real hardware gave me a much better understanding of how mobile robotics actually works.

Even though I didn't win the regional finals, I learned a ton about AI applications in mobility and it definitely strengthened my interest in robotics and autonomous systems.`,
		tags: ["NXP AIM", "Robotics", "ROS2", "SLAM", "Computer Vision", "Nav2", "AI/ML", "Regional Finalist"],
		certificateUrl: "https://drive.google.com/file/d/1K9f_vX-XXlP34EO03iPNR43R37R-Xxt2/view?usp=sharing"
	},
	{
		id: 2,
		slug: "embedded-systems-course-learning",
		title: "Currently Learning: Comprehensive Embedded Systems Course",
		date: "2025-04-15",
		category: "Learning",
		excerpt: "Enrolled in an intensive embedded systems course from Pyjamabrah, taught by Google engineers Piyush Itankar and Mahmad Bharmal.",
		content: `Currently taking an embedded systems course from Pyjamabrah, taught by Piyush Itankar and Mahmad Bharmal who both work at Google. It's been a solid learning experience so far.

The course covers the fundamentals you need for embedded systems development, which is exactly what I was looking for.

Progress so far:

C Programming - Completed
Just finished the C fundamentals section and got my certification. The low-level programming concepts are starting to click, which feels great.

Currently working on:
• C Pointers - Getting into memory management and pointer arithmetic
• Python - Learning how to use it for embedded applications
• AArch64 Architecture - ARM 64-bit processor stuff
• FPGA Development - Hardware description and programmable logic

Having instructors from Google is pretty cool because they bring real industry perspective. The course builds up from basics to practical implementation, which works well for me.

The C certification was a good milestone. Now diving into pointers, which is where things get interesting. The combination of all these topics should give me a solid foundation for embedded projects.`,
		tags: ["Embedded Systems", "C Programming", "C Certification", "Python", "AArch64", "FPGA", "Pyjamabrah"],
		certificateUrl: "https://drive.google.com/file/d/1BJ3lXz0yCHVueuUFquB8Hi46MNUon50J/view?usp=sharing"
	},
	{
		id: 3,
		slug: "qt-champion-2024-third-place",
		title: "Qt Champion 2024 - 3rd Place in Global Qt-athon Competition",
		date: "2024-10-25",
		category: "Achievement",
		excerpt: "Recognized by Qt Group as one of the top 3 performers among 100+ international teams in the global Qt-athon 2024 competition.",
		content: `Thrilled to announce that I achieved 3rd place in the Qt-athon 2024 competition! This global event organized by Qt Group brought together developers from around the world to showcase their Qt framework expertise.

The competition challenged participants to build innovative applications using Qt framework, pushing the boundaries of what's possible with cross-platform development. My project focused on creating a sophisticated GUI application that demonstrated both technical prowess and user experience design.

This achievement validates my expertise in Qt development and opens up new opportunities in the Qt ecosystem. The recognition from Qt Group is particularly meaningful as it comes from the creators of the framework themselves.

You can view my official certificate and read more about the competition winners in Qt Group's official announcement.

This experience has motivated me to continue contributing to the Qt community and exploring advanced framework capabilities.`,
		tags: ["Qt Framework", "Competition", "QML", "GUI Development", "Global Recognition"],
		certificateUrl: "https://drive.google.com/file/d/10yc-ymNhzj3aUN3YqxHb3NGKw4bioexQ/view?usp=sharing",
		announcementUrl: "https://www.qt.io/blog/qtathon-2024-winners"
	},
	{
		id: 4,
		slug: "wifi-jammer-linux-application",
		title: "WiFi Jammer - Linux Application",
		date: "2024-11-10",
		category: "Project",
		excerpt: "A simple Linux application for WiFi access point jamming using network security techniques.",
		content: `Built a WiFi jammer application for Linux that can jam WiFi access points. This was a learning project to understand network security concepts and GUI Development.

The application targets WiFi access points and disrupts their normal operation. It taught me a lot about network protocols, wireless security, and how networks can be vulnerable to certain types of attacks.

Key features:
• Linux-based WiFi jamming functionality
• Easy GUI with Qt Framework

This project helped me understand the importance of network security and how to protect against such attacks. It's important to note this should only be used for educational purposes and on networks you own or have permission to test.`,
		tags: ["Linux", "Network Security", "WiFi", "Python", "PySide6", "Qt Framework"],
		githubUrl: "https://github.com/mtm-x/wifijammer"
	},
	{
		id: 5,
		slug: "wifi-jammer-python-script",
		title: "WiFi Jammer Python Script",
		date: "2024-10-30",
		category: "Project",
		excerpt: "A Python implementation of WiFi jamming functionality for network security research and learning.",
		content: `Created a Python script version of my WiFi jammer project. This was part of exploring different programming approaches to network security tools.

The Python version offers:
• Clean, readable code structure
• CLI based and more interactive and beautiful 

Working with Python was fun and easy.

This project reinforced my understanding of both Python programming. It's designed purely for educational use and understanding how wireless networks operate.`,
		tags: ["Python", "Network Security", "WiFi", "Scripting"],
		githubUrl: "https://github.com/mtm-x/wifijammer-python-script"
	},
	{
		id: 6,
		slug: "wifi-jammer-shell-script",
		title: "WiFi Jammer Shell Script",
		date: "2024-10-25",
		category: "Project",
		excerpt: "A shell script implementation for WiFi jamming, exploring bash scripting and system administration.",
		content: `Wrote a shell script version of the WiFi jammer to explore bash scripting and system-level network operations. This was interesting because it showed how much you can accomplish with simple shell commands.

The shell script approach taught me:
• Intial script to apply my shell scripting knowledge
• Linux networking tools and utilities

It's fascinating how different tools can achieve similar results. The shell script version is probably the most lightweight of all my WiFi jammer implementations, requiring minimal dependencies and running efficiently on any Linux system.

This project improved my Linux system administration skills and deepened my understanding of how network tools work at the command line level.`,
		tags: ["Shell Script", "Bash", "Linux", "Network Security"],
		githubUrl: "https://github.com/mtm-x/wifi-jammer-script"
	},
	{
		id: 7,
		slug: "android-debloater-python-script",
		title: "Android Debloater Python Script",
		date: "2024-10-15",
		category: "Project",
		excerpt: "A Python script to remove system apps from Android devices using ADB commands and automation.",
		content: `Developed a Python script that automates the removal of system apps from Android devices. This was born out of frustration with bloatware on Android phones and wanting to clean them up programmatically.

The script uses ADB (Android Debug Bridge) to communicate with Android devices and remove unwanted system applications that can't normally be uninstalled through the regular interface.

This project taught me about ADB protocol, and how to build useful automation tools. It also reinforced my Python skills, especially working with subprocess management and command-line tools.

The script has been helpful for cleaning up personal devices and understanding how Android package management works under the hood.`,
		tags: ["Python", "Android", "ADB", "Automation", "Mobile"],
		githubUrl: "https://github.com/mtm-x/android-debloater"
	},
	{
		id: 8,
		slug: "first-steps-ros2-robotics",
		title: "First Steps with ROS2 and Robotics",
		date: "2025-04-28",
		category: "Learning",
		excerpt: "Started my journey into robotics with ROS2. Here's what I learned in my first month of exploring robot operating systems.",
		content: `Diving into ROS2 has been an exciting challenge! Coming from embedded systems background, the distributed nature of ROS2 nodes was initially confusing but incredibly powerful once understood.

What I've learned so far:
• Node communication through topics and services
• URDF and XACRO
• Integration with Gazebo for simulation and debugging with foxglove and rviz2
• Basic navigation and mapping concepts

Currently working on a simple autonomous navigation project using a simulated robot. The learning curve is steep but rewarding - every small milestone feels like a major achievement!`,
		tags: ["ROS2", "Robotics", "Gazebo", "Learning"]
	},
	{
		id: 9,
		slug: "learning-cpp-with-the-cherno",
		title: "Learning C++ with The Cherno",
		date: "2025-01-10",
		category: "Learning",
		excerpt: "Started learning C++ from The Cherno's YouTube series to strengthen my programming fundamentals.",
		content: `Recently started diving into C++ by following The Cherno's YouTube series.

The Cherno's teaching style is really clear and practical. He breaks down complex concepts into digestible parts, which makes learning much easier.

What I'm covering:
• Basic syntax and language fundamentals
• Memory management and pointers
• Object-oriented programming concepts
• Understanding how C++ works under the hood

Still early in my C++ journey, but I'm already seeing how powerful the language is for system-level programming. Planning to apply this knowledge to future embedded projects and potentially game development down the line.

The series is well-structured and perfect for someone like me who wants to understand not just the "how" but also the "why" behind C++ concepts.`,
		tags: ["C++", "Programming", "Learning", "The Cherno", "YouTube"]
	},
	{
		id: 10,
		slug: "smart-traffic-management-techforsociety-hackathon",
		title: "Smart Traffic Management - TechForSociety Hackathon by Siemens & NASSCOM Foundation",
		date: "2024-10-01",
		category: "Achievement",
		excerpt: "Developing an intelligent traffic management system for emergency vehicle prioritization using deep learning and IoT integration in the TechForSociety hackathon.",
		content: `Currently working on an exciting project as part of the TechForSociety hackathon conducted by Siemens and NASSCOM Foundation. This initiative focuses on developing technology solutions for social impact.

Project Overview:
Our Smart Traffic Management system is designed to revolutionize traffic control at junctions by automatically detecting emergency vehicles and prioritizing their movement through intelligent signal control.

Key features being developed:
• Emergency vehicle detection using YOLO deep learning models
• Real-time traffic density analysis for optimal flow control
• Automated signal control integration with Raspberry Pi
• Sensor-based traffic monitoring and data collection
• Manual override capability for traffic authorities

Technical Implementation:
• Deep Learning: YOLO algorithm implementation on Hailo 8L for ambulance detection
• Hardware Integration: Raspberry Pi for signal control and sensor management
• Frontend: QML-based application for authority interface
• Backend: Python-powered system for real-time processing
• IoT Integration: Multiple sensors for comprehensive traffic monitoring

The project timeline spans from October 2024 to April 2025, giving us ample time to develop, test, and refine the system. This hackathon is providing valuable experience in developing technology solutions that can make a real difference in emergency response times and urban traffic management.

Working on this project has deepened my understanding of computer vision, IoT systems, and the challenges of real-world deployment of AI solutions.`,
		tags: ["Deep Learning", "YOLO", "IoT", "Raspberry Pi", "QML", "Python", "Computer Vision", "Hackathon"],
		githubUrl: "https://github.com/mtm-x/STM"
	},
	{
		id: 11,
		slug: "droid-debloat-qt-desktop-application",
		title: "Droid Debloat - Qt Desktop Application",
		date: "2024-09-20",
		category: "Project",
		excerpt: "A desktop application built with Qt Framework to remove bloatware from Android devices, making device management easier and more efficient.",
		content: `Droid Debloat is a desktop application I built using the Qt Framework to help users remove unwanted system apps (bloatware) from their Android devices. This project was born out of my own frustration with the amount of pre-installed apps that come with Android devices and can't be easily removed through normal means.

The Problem:
Most Android devices come pre-loaded with numerous system apps that users might not want or need. These apps often can't be uninstalled through the regular interface, leading to cluttered devices and wasted storage space.

My Solution:
I created a user-friendly desktop application that uses ADB (Android Debug Bridge) commands to safely remove these unwanted system applications. The Qt Framework provided the perfect foundation for creating a clean, intuitive interface.

Key Features:
• Clean Qt-based graphical user interface
• Safe removal of Android system applications
• ADB integration for device communication
• User-friendly design with clear instructions
• Cross-platform compatibility (Windows, Linux, macOS)

Technical Implementation:
• Qt Framework for the desktop application interface
• C++ for core application logic
• ADB command integration for Android device communication
• Safe app removal procedures to prevent system damage

What I Learned:
This project taught me a lot about desktop application development with Qt, Android system architecture, and ADB protocols. It also reinforced the importance of creating tools that solve real-world problems that I and others face daily.

The application has been helpful for cleaning up personal devices and understanding how Android package management works at a deeper level. It's satisfying to create a tool that makes device management more accessible to regular users.`,
		tags: ["Qt Framework", "C++", "Android", "ADB", "Desktop Application", "System Administration"],
		githubUrl: "https://github.com/mtm-x/DroidDebloat"
	},
	{
		id: 12,
		slug: "project-eye-ai-assistive-system",
		title: "Project Eye - AI-Powered Assistive System",
		date: "2024-08-15",
		category: "Project",
		excerpt: "An innovative AI-powered assistive system designed to help people who are blind navigate and interact with their surroundings using computer vision and artificial intelligence.",
		content: `Project Eye is an AI-powered assistive system I developed to help people who are blind navigate and interact with their surroundings more independently. This project represents my commitment to using technology for social good and making AI accessible to those who need it most.

The Vision:
The goal was to create an intelligent system that could serve as digital eyes for visually impaired individuals, helping them understand their environment and navigate safely through the world.

Project Overview:
Project Eye uses advanced computer vision and AI technologies to analyze the user's surroundings in real-time and provide audio feedback about objects, obstacles, people, and important environmental information.

Key Features Being Developed:
• Real-time object detection and recognition
• Obstacle detection and path navigation assistance
• Text reading capabilities for signs and documents
• Person recognition and tracking
• Distance estimation for detected objects
• Audio feedback system for hands-free interaction

Technical Implementation:
• Computer Vision: Advanced object detection algorithms
• AI/ML: Machine learning models for scene understanding
• Audio Processing: Text-to-speech for user feedback
• Real-time Processing: Optimized for low-latency response
• Accessibility Design: Built with accessibility principles in mind

Impact and Purpose:
This project addresses a real need in the accessibility space. By leveraging AI and computer vision, Project Eye aims to provide greater independence and confidence to visually impaired users in their daily activities.

What I'm Learning:
Working on Project Eye has deepened my understanding of computer vision, accessibility design principles, and the importance of inclusive technology. It's also taught me about the challenges of real-time AI processing and user experience design for assistive technologies.

This project continues to evolve as I learn more about the needs of the visually impaired community and advance my skills in AI and computer vision technologies.`,
		tags: ["AI", "Computer Vision", "Accessibility", "Assistive Technology", "Machine Learning", "Social Impact"],
		githubUrl: "https://github.com/mtm-x/Project.Eye"
	},
	
];

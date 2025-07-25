// data/projects.ts
export const projects = [
  {
    id: 1,
    title: "Smart Traffic Management (STM)",
    description: "Uses deep learning for real-time ambulance detection and IoT for traffic light automation.",
    image: "/portfolio/stm.png", // Fixed: removed dot, starts with /
    githubUrl: "https://github.com/mtm-x/STM",
    technologies: ['Python', 'IoT', 'Deep Learning']
  },
  {
    id: 2,
    title: "Project.Eye",
    description: "An AI-powered assistive system that helps people who are blind navigate and interact with their surroundings.",
    image: "/portfolio/projectEye.png",
    githubUrl: "https://github.com/mtm-x/Project.Eye",
    technologies: ['AI', 'Computer Vision', 'Accessibility']
  },
  {
    id: 3,
    title: "Droid Debloat",
    description: "A Simple Desktop application to remove Android system apps built with Qt.",
    image: "/portfolio/droiddebloat.png",
    githubUrl: "https://github.com/mtm-x/DroidDebloat",
    technologies: ['Qt', 'C++', 'Android']
  },
  {
    id: 4,
    title: "QT Communicator",
    description: "A simple, user-friendly chatting application built with Qt Quick (QML) and C++.",
    image: "/portfolio/qtcom.png",
    githubUrl: "https://github.com/mtm-x/yeagerists-round2",
    technologies: ['Qt', 'QML', 'C++']
  },
  {
    id: 5,
    title: "WiFi Jammer",
    description: "Wifi jammer is a simple linux application to jam the wifi access point.",
    image: "/portfolio/wifijam.png",
    githubUrl: "https://github.com/mtm-x/wifijammer",
    technologies: ['Linux', 'Network Security']
  },
  {
    id: 6,
    title: "WIFI-Jammer.py",
    description: "A simple Python script to jam WiFi.",
    image: "/portfolio/WiFI Jammerpy.png",
    githubUrl: "https://github.com/mtm-x/wifijammer-python-script",
    technologies: ['Python', 'Network Security']
  },
  {
    id: 7,
    title: "WIFI-Jammer.sh",
    description: "A simple shell script to jam WiFi.",
    image: "/portfolio/WiFI Jammersh.png",
    githubUrl: "https://github.com/mtm-x/wifi-jammer-script",
    technologies: ['Shell Script', 'Network Security']
  },
  {
    id: 8,
    title: "debloater.py",
    description: "A simple Python script to remove system apps from Android devices.",
    image: "/portfolio/debloaterscript.png",
    githubUrl: "https://github.com/mtm-x/android-debloater",
    technologies: ['Python', 'Android', 'ADB']
  },
];

// TypeScript interface for better type safety
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies?: string[];
}
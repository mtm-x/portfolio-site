import type { Metadata } from 'next';
import AboutSection from '@/app/components/AboutSection';
import Navigation from '@/app/components/Navigation';
// import UnderConstruction from '@/app/components/UnderConstruction';

export const metadata: Metadata = {
	title: "About - Thamaraimanalan's Portfolio",
	description: "Learn more about Thamaraimanalan M, his passion for embedded systems, IoT, Edge AI, and robotics development.",
	keywords: [
		'About Thamaraimanalan',
		'Embedded Systems Developer',
		'IoT Engineer',
		'Python Developer',
		'ROS2 Developer',
		'Hardware Projects',
		'Robotics Engineer'
	],
	openGraph: {
		title: 'About - Thamaraimanalan',
		description: 'Learn about my background in embedded systems, IoT, and robotics development.',
	},
};

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-black">
			<Navigation />
			<div className="pt-12">
				<AboutSection />
			</div>
		</main>
	);
}

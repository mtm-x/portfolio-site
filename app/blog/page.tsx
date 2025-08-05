import type { Metadata } from 'next';
// import BlogSection from '@/app/components/BlogSection';
import Navigation from '@/app/components/Navigation';
import UnderConstruction from '@/app/components/UnderConstruction';

export const metadata: Metadata = {
	title: "Blog - Thamaraimanalan's Portfolio",
	description: "Follow Thamaraimanalan's journey in embedded systems, IoT, and software development through his blog posts about projects, achievements, and learning experiences.",
	keywords: [
		'Thamaraimanalan Blog',
		'Embedded Systems Blog',
		'IoT Learning Journey',
		'Python Developer Blog',
		'ROS2 Learning',
		'Hardware Projects Blog',
		'Technical Blog',
		'Developer Journey'
	],
	openGraph: {
		title: 'Blog - Thamaraimanalan',
		description: 'Follow my journey in embedded systems, IoT, and robotics. Read about my projects, achievements, and learning experiences.',
	},
};

export default function BlogPage() {
	return (
		<main className="min-h-screen bg-black">
			<Navigation />
			<UnderConstruction />
			{/* Temporarily hidden - will reveal later
			<div className="pt-12">
				<BlogSection />
			</div>
			*/}
		</main>
	);
}

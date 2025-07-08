import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "Thamaraimanalan's Portfolio",
	icons: {
        icon: './portfolio/lotus_crop.png',
    },
	description:
		'Welcome to my portfolio! I am passionate about learning Embedded systems, IoT, Edge AI, and Robotics. If it runs Python, I can make it do something cool.',
	keywords: [
		'Software Developer',
		'Qt',
		'Qt Framework',
		'Simple Design',
		'Python',
		'C++',
		'ROS2',
		'Gazebo',
		'C',
		'Problem Solving',
		'Effective Solutions',
		'Python GUI',
		'Raspberry Pi',
		'Linux',
		'Thamaraimanalan',
	],
	authors: [{ name: 'Thamaraimanalan M' }],
	creator: 'Thamaraimanalan M',
	openGraph: {
		title: 'Thamaraimanalan - Portfolio',
		description: 'I am passionate about learning Embedded systems, IoT, Edge AI, and Robotics. Explore my projects and development approach.',
		url: 'https://thamaraimanalan.tech',
		siteName: 'Thamaraimanalan - Portfolio',
		images: [
			{
				url: './portfolio/og.png',
				width: 1200,
				height: 630,
				alt: 'Thamaraimanalan - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>{children}</body>
		</html>			
	);
}

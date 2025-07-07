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
	title: 'Thamaraimanalan',
	icons: {
        icon: '/portfolio/lotus_crop.png',
    },
	description:
		'Welcome to my portfolio! I am passionate about learning Embedded systems, IoT, Edge AI, and Robotics. If it runs Python, I can make it do something cool.',
	keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Thamaraimanalan',
	],
	authors: [{ name: 'Thamaraimanalan' }],
	creator: 'Thamaraimanalan',
	openGraph: {
		title: 'Thamaraimanalan - Portfolio',
		description: 'I am passionate about learning Embedded systems, IoT, Edge AI, and Robotics. Explore my projects and development approach.',
		url: 'https://thamaraimanalan.tech',
		siteName: 'Thamaraimanalan - Portfolio',
		images: [
			{
				url: '/portfolio/myself.png',
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

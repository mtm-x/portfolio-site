'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<Link href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors">
						Thamaraimanalan M
					</Link>
					<div className="flex space-x-6">
						<Link 
							href="/" 
							className={`text-sm font-medium transition-colors ${
								pathname === '/' 
									? 'text-white border-b-2 border-white pb-1' 
									: 'text-gray-400 hover:text-white'
							}`}
						>
							Home
						</Link>
						<Link 
							href="/about" 
							className={`text-sm font-medium transition-colors ${
								pathname === '/about' 
									? 'text-white border-b-2 border-white pb-1' 
									: 'text-gray-400 hover:text-white'
							}`}
						>
							About
						</Link>
						<Link 
							href="/blog" 
							className={`text-sm font-medium transition-colors ${
								pathname === '/blog' 
									? 'text-white border-b-2 border-white pb-1' 
									: 'text-gray-400 hover:text-white'
							}`}
						>
							Blog
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

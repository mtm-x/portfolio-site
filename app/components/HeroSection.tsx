'use client';

export default function HeroSection() {
	return (
		<section className="bg-black max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				{/* <div className="mb-6 sm:mb-8">
					<Image src="/portfolio/myself.png" alt="Profile Picture" width={230} height={230} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div> */}
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Thamaraimanalan M</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">	</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I am passionate about learning Embedded systems, IoT, Edge AI, and Robotics. If it runs Python, I can make it do something cool.
				</p>
			</div>
		</section>
	);
}

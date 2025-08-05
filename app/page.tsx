'use client';

import HeroSection from '@/app/components/HeroSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ContactSection from '@/app/components/ContactSection';
import Navigation from '@/app/components/Navigation';
// import UnderConstruction  from '@/app/components/UnderConstruction';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-black">
			<Navigation />
			<div className="pt-12">
				<HeroSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
				{/* <UnderConstruction /> */}
			</div>
		</main>
	);
}

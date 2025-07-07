'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
// import UnderConstruction  from './components/UnderConstruction';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-black pt-12">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
			{/* <UnderConstruction /> */}
		</main>
	);
}

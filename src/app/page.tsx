import { BackgroundSystem } from '@/animations/background-system';
import { Navbar } from '@/components/navigation/navbar';
import { AboutSection } from '@/sections/about-section';
import { HeroSection } from '@/sections/hero-section';
import { VisionMissionSection } from '@/sections/vision-mission-section';
import { UpcomingEventsSection } from '@/sections/upcoming-events-section';
import { DomainsSection } from '@/sections/domains-section';
import { AchievementsSection } from '@/sections/achievements-section';
import { LegacyTimelineSection } from '@/sections/legacy-timeline-section';
import { Trisquadathon1Section } from '@/sections/trisquadathon-1-section';
import { Trisquadathon2Section } from '@/sections/trisquadathon-2-section';
import { TechTalksSection } from '@/sections/tech-talks-section';
import { HallOfFameSection } from '@/sections/hall-of-fame-section';
import { ExecutiveBoardsArchiveSection } from '@/sections/executive-boards-archive-section';
import { StaffCoordinatorsSection } from '@/sections/staff-coordinators-section';
import { GallerySection } from '@/sections/gallery-section';
import { ContactSection } from '@/sections/contact-section';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-white">
      <BackgroundSystem />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.28),_transparent_36%),radial-gradient(circle_at_right,_rgba(56,189,248,0.18),_transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-30" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <UpcomingEventsSection />
      <AchievementsSection />
      <DomainsSection />
      <LegacyTimelineSection />
      <Trisquadathon1Section />
      <Trisquadathon2Section />
      <TechTalksSection />
      <HallOfFameSection />
      <ExecutiveBoardsArchiveSection />
      <StaffCoordinatorsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}

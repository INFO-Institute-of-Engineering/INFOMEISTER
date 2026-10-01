import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'INFOMEISTER 2.0',
  description: 'Premium technology community platform for INFOMEISTER, the Computer Science & Engineering Association of INFO Institute of Engineering.',
  keywords: ['INFOMEISTER', 'CSE Association', 'Technology Community', 'Hackathon', 'Innovation'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export type EventItem = {
  id: string;
  title: string;
  date: string;
  month: string;
  description: string;
  category: 'Hackathon' | 'Workshop' | 'Talk' | 'Community';
  featured?: boolean;
};

export const events: EventItem[] = [
  {
    id: 'trisquadathon-2',
    title: 'Trisquadathon 2.0',
    date: '2026',
    month: 'Coming Soon',
    description: 'A more competitive, larger, and more impactful hackathon experience built for ambitious builders.',
    category: 'Hackathon',
    featured: true,
  },
  {
    id: 'ai-bootcamp',
    title: 'AI Foundations Bootcamp',
    date: '18 Sep',
    month: 'September',
    description: 'Hands-on learning in intelligent systems, prompting, and applied AI workflows.',
    category: 'Workshop',
  },
  {
    id: 'cyber-sprint',
    title: 'Cyber Security Awareness Sprint',
    date: '05 Oct',
    month: 'October',
    description: 'A practical sprint focused on digital safety, threat awareness, and secure engineering habits.',
    category: 'Talk',
  },
];

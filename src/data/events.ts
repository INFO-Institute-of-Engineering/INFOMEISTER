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

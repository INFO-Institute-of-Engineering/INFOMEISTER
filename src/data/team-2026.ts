export type TeamMember = {
  name: string;
  role: string;
  year: string;
  category: 'Leadership' | 'Technical' | 'Events' | 'Creative' | 'Media' | 'Outreach';
  linkedin?: string;
};

export const team2026: TeamMember[] = [
  { name: 'Srivarshini V', role: 'President', year: 'III Year', category: 'Leadership' },
  { name: 'Ganga Sri S', role: 'Vice President', year: 'III Year', category: 'Leadership' },
  { name: 'Harrshini S', role: 'Secretary', year: 'III Year', category: 'Leadership' },
  { name: 'Priyadarshan S', role: 'Joint Secretary', year: 'III Year', category: 'Leadership' },
  { name: 'Viveka S', role: 'Treasurer', year: 'III Year', category: 'Leadership' },
  { name: 'Kadher Batsha S', role: 'Technical Lead', year: 'III Year', category: 'Technical' },
  { name: 'Sivanesh R', role: 'Technical Lead', year: 'III Year', category: 'Technical' },
  { name: 'Nithish R', role: 'Technical Coordinator', year: 'III Year', category: 'Technical' },
  { name: 'Sharan N K', role: 'Technical Coordinator', year: 'III Year', category: 'Technical' },
  { name: 'V M Balamurugan', role: 'Event Management Lead', year: 'III Year', category: 'Events' },
  { name: 'Srihari J', role: 'Event Management Lead', year: 'III Year', category: 'Events' },
  { name: 'Nhivedha E', role: 'Event Management Lead', year: 'III Year', category: 'Events' },
  { name: 'V Annapoorani', role: 'Creative Head', year: 'III Year', category: 'Creative' },
  { name: 'Sivagnana Subha', role: 'Creative Head', year: 'III Year', category: 'Creative' },
  { name: 'Ramesh P', role: 'Editorial Chair', year: 'III Year', category: 'Creative' },
  { name: 'Manisha S', role: 'PRO Lead', year: 'III Year', category: 'Outreach' },
  { name: 'Sushma', role: 'PRO Lead', year: 'III Year', category: 'Outreach' },
  { name: 'Udhaya Thara K', role: 'Social Media Outreach', year: 'III Year', category: 'Media' },
  { name: 'Madhumitha M', role: 'Social Media Outreach', year: 'III Year', category: 'Media' },
  { name: 'Vignesh A S', role: 'Photography Team', year: 'III Year', category: 'Media' },
  { name: 'Abishek Joseph J', role: 'Videography Team', year: 'III Year', category: 'Media' },
];

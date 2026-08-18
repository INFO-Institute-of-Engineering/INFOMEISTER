export type TeamMember = {
  name: string;
  role: string;
  year: string;
  category: 'Leadership' | 'Technical' | 'Events' | 'Creative' | 'Media' | 'Outreach';
  linkedin?: string;
};

export const team2025: TeamMember[] = [
  { name: 'Gururaja Y', role: 'President', year: 'III Year', category: 'Leadership' },
  { name: 'Thamu S', role: 'Vice President', year: 'III Year', category: 'Leadership' },
  { name: 'Srivarshini V', role: 'Secretary', year: 'III Year', category: 'Leadership' },
  { name: 'Harrshini S', role: 'Joint Secretary', year: 'III Year', category: 'Leadership' },
  { name: 'Vanipriya R', role: 'Treasurer', year: 'III Year', category: 'Leadership' },
  { name: 'Alphin V T', role: 'Technical Lead', year: 'III Year', category: 'Technical' },
  { name: 'Gowtham V', role: 'Technical Lead', year: 'III Year', category: 'Technical' },
  { name: 'Ramesh M', role: 'Technical Lead', year: 'III Year', category: 'Technical' },
  { name: 'Ramana A', role: 'Technical Lead', year: 'III Year', category: 'Technical' },
  { name: 'Sriram S', role: 'Event Coordinator', year: 'III Year', category: 'Events' },
  { name: 'Kadher Batsha S', role: 'Event Coordinator', year: 'III Year', category: 'Events' },
  { name: 'Naveen Bala R', role: 'Event Coordinator', year: 'III Year', category: 'Events' },
  { name: 'Rohith S', role: 'Chief Editor', year: 'III Year', category: 'Creative' },
  { name: 'Krishnakumar M', role: 'Chief Editor', year: 'III Year', category: 'Creative' },
  { name: 'Yeshwanth V', role: 'Photography Team', year: 'III Year', category: 'Media' },
  { name: 'Ajesh A', role: 'Photography Team', year: 'III Year', category: 'Media' },
  { name: 'Sivagnana Subha G', role: 'Social Media Outreach', year: 'III Year', category: 'Outreach' },
  { name: 'Santhosh S E', role: 'Social Media Outreach', year: 'III Year', category: 'Outreach' },
];

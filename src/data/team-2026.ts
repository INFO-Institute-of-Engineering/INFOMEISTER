export type TeamMember = {
  name: string;
  role: string;
  year: string;
  category: 'Leadership' | 'Technical' | 'Events' | 'Creative' | 'Media' | 'Outreach';
  linkedin?: string;
  image?: string;
};

export const team2026: TeamMember[] = [
  { name: 'Srivarshini V', role: 'President', year: 'III Year', category: 'Leadership', image: '/sri varshini V.png' },
  { name: 'Ganga Sri S', role: 'Vice President', year: 'III Year', category: 'Leadership', image: '/ganga sri S.png' },
  { name: 'Harrshini S', role: 'Secretary', year: 'III Year', category: 'Leadership', image: '/harshini S.png' },
  { name: 'Priyadarshan S', role: 'Joint Secretary', year: 'III Year', category: 'Leadership', image: '/priyadarshan  S.png' },
  { name: 'Viveka S', role: 'Treasurer', year: 'III Year', category: 'Leadership', image: '/viveka S.png' },
  { name: 'Kadher Batsha S', role: 'Technical Lead', year: 'III Year', category: 'Technical', image: '/kadher batsha S.png' },
  { name: 'Sivanesh R', role: 'Technical Lead', year: 'III Year', category: 'Technical', image: '/sivanesh R.png' },
  { name: 'Nithish R', role: 'Technical Coordinator', year: 'III Year', category: 'Technical' },
  { name: 'Sharan N K', role: 'Technical Coordinator', year: 'III Year', category: 'Technical', image: '/saran NK.png' },
  { name: 'V M Balamurugan', role: 'Event Management Lead', year: 'III Year', category: 'Events', image: '/bala murugan VM.png' },
  { name: 'Srihari J', role: 'Event Management Lead', year: 'III Year', category: 'Events', image: '/sri hari J.png' },
  { name: 'Nhivedha E', role: 'Event Management Lead', year: 'III Year', category: 'Events', image: '/nhivedha E.png' },
  { name: 'V Annapoorani', role: 'Creative Head', year: 'III Year', category: 'Creative', image: '/anna poorani V.png' },
  { name: 'Sivagnana Subha', role: 'Creative Head', year: 'III Year', category: 'Creative', image: '/sivagnana suba G.png' },
  { name: 'Ramesh P', role: 'Editorial Chair', year: 'III Year', category: 'Creative', image: '/ramesh P.png' },
  { name: 'Manisha S', role: 'PRO Lead', year: 'III Year', category: 'Outreach', image: '/manisha S.png' },
  { name: 'Sushma', role: 'PRO Lead', year: 'III Year', category: 'Outreach', image: '/sushma R.png' },
  { name: 'Udhaya Thara K', role: 'Social Media Outreach', year: 'III Year', category: 'Media', image: '/udhaya thara K.png' },
  { name: 'Madhumitha M', role: 'Social Media Outreach', year: 'III Year', category: 'Media', image: '/madhumitha M.png' },
  { name: 'Vignesh A S', role: 'Photography Team', year: 'III Year', category: 'Media', image: '/vignesh AS.png' },
  { name: 'Abishek Joseph J', role: 'Videography Team', year: 'III Year', category: 'Media', image: '/abhishek joseph J.png' },
];

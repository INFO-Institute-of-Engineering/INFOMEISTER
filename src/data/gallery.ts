export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475', alt: 'Tech collaboration', category: 'Community' },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', alt: 'Student team', category: 'Events' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', alt: 'Hackathon setup', category: 'Innovation' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935', alt: 'Product design', category: 'Creative' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', alt: 'Workshop session', category: 'Learning' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', alt: 'Coding podium', category: 'Technology' },
];

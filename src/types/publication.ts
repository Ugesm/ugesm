export interface Publication {
  id: string;
  title: string;
  author: {
    name: string;
    university: string;
    image: string;
  };
  date: {
    day: string;
    month: string;
    year: string;
  };
  content: string;
  excerpt: string;
  category: string;
  image: string;
  tags: string[];
  pdfUrl?: string;
  videoUrl?: string;
}

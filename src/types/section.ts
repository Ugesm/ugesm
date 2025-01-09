export interface University {
  name: string;
  description: string;
  location: string;
}

export interface BureauMember {
  name: string;
  role: string;
  image?: string;
  email?: string;
  phone?: string;
  isMainMember?: boolean;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  telegram?: string;
}

export interface Section {
  id: string;
  city: string;
  slogan: string;
  description: string;
  bureau: BureauMember[];
  universities: University[];
  image: string;
  heroImage: string;
  studentCount: number;
  address?: string;
  email?: string;
  phone?: string;
  socialMedia?: SocialMedia;
  committees?: {
    name: string;
    members: BureauMember[];
  }[];
}

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
  isMainMember: boolean;
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
  image: string;
  heroImage: string;
  studentCount: number;
  bureau: BureauMember[];
  universities: University[];
  address?: string;
  email?: string;
  phone?: string;
  socialMedia?: SocialMedia;
}

export const sections: Section[] = [
  {
    id: 'rabat',
    city: 'Rabat',
    slogan: 'Excellence et Leadership au cœur de la capitale',
    description: 'La section de Rabat est l\'une des plus grandes sections de l\'UGESM, regroupant les étudiants de la capitale administrative du Royaume.',
    image: '/images/sections/rabat.jpg',
    heroImage: '/images/sections/rabat.jpg',
    studentCount: 450,
    bureau: [
      {
        name: 'Youssra Barada',
        role: 'Secrétaire Général',
        image: '/images/bureau/rabat-sg.jpg',
        email: 'barradayouss@gamail.com',
        phone: '+212 700634882',
        isMainMember: true
      },
      {
        name: 'Nabiyoulahi Sall',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/rabat-sga.jpg',
        email: 'sallnaby55@gmail.com',
        phone: '+212 781928671',
        isMainMember: true
      },
      {
        name: 'Adji Bineta Niang',
        role: 'Trésorière',
        isMainMember: true
      },
      {
        name: 'Anta Dicke Dieng',
        role: 'Trésorière Adjointe',
        isMainMember: false
      },
      {
        name: 'Maimouna Tandjigora',
        role: 'Chargé de la Communication',
        isMainMember: false
      },
      {
        name: 'Yacine D Thiam',
        role: 'Adjoint Chargé de la Communication',
        isMainMember: false
      },
      {
        name: 'Rokhaya Dial',
        role: 'Chargé de l\'Organisation',
        isMainMember: false
      },
      {
        name: 'Dieynaba Dia',
        role: 'Chargé des Relations Extérieures',
        isMainMember: false
      },
      {
        name: 'Alioune Badara Diaw',
        role: 'Chargé des Affaires Académiques et Sociales',
        isMainMember: false
      },
      {
        name: 'Yaye Khady Alpha Sow',
        role: 'Chargé des Affaires Culturelles',
        isMainMember: false
      },
      {
        name: 'Mouhamadou Fadilou Cisse',
        role: 'Chargé des Affaires Sportives',
        isMainMember: false
      },
      {
        name: 'Idrissa Wade',
        role: 'Adjoint Chargé des Affaires Sportives',
        isMainMember: false
      },
      {
        name: 'Amy Khouma',
        role: 'Commissaire aux Comptes',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Mohammed V',
        description: 'Une des plus prestigieuses universités du Maroc',
        location: 'Avenue Nations Unies, Agdal, Rabat'
      },
      {
        name: 'ENSIAS',
        description: 'École Nationale Supérieure d\'Informatique et d\'Analyse des Systèmes',
        location: 'Madinat Al Irfane, Rabat'
      }
    ],
    address: 'Cité Universitaire Internationale, Avenue Allal El Fassi, Rabat',
    email: 'barradayouss@gamail.com',
    phone: '+212 690-035988',
    socialMedia: {
      facebook: 'https://www.facebook.com/UgesmRabat/',
      instagram: 'https://www.instagram.com/ugesmrabat/',
      twitter: 'https://twitter.com/ugesmc',
    }
  },
  {
    id: 'casablanca',
    city: 'Casablanca',
    slogan: 'Unis pour réussir dans la capitale économique',
    description: 'La section de Casablanca représente les étudiants de la capitale économique du Maroc.',
    image: '/images/sections/casablanca.jpg',
    heroImage: '/images/sections/casa.jpg',
    studentCount: 380,
    bureau: [
      {
        name: 'Karim Bennani',
        role: 'Secrétaire Général',
        image: '/images/bureau/casa-sg.jpg',
        email: 'sg.casa@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Salma Tazi',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/casa-sga.jpg',
        email: 'sga.casa@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Omar Alaoui',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Leila Berrada',
        role: 'Responsable Communication',
        isMainMember: false
      },
      {
        name: 'Mehdi Chraibi',
        role: 'Responsable Événements',
        isMainMember: false
      },
      {
        name: 'Sofia El Fassi',
        role: 'Responsable Relations Externes',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Hassan II',
        description: 'Plus grande université de Casablanca',
        location: 'Route El Jadida, Casablanca'
      }
    ],
    address: 'Cité Universitaire, Boulevard Moulay Ismail, Casablanca',
    email: 'contact.casa@ugesm.org',
    phone: '+212 5XX XX XX XX',
    socialMedia: {
      facebook: 'https://facebook.com/ugesm.casa',
      instagram: 'https://instagram.com/ugesm.casa'
    }
  },
  {
    id: 'fes',
    city: 'Fès',
    slogan: 'L\'excellence dans la cité spirituelle',
    description: 'La section de Fès rassemble les étudiants sénégalais de la capitale spirituelle du Royaume.',
    image: '/images/sections/fes.jpg',
    heroImage: '/images/sections/fes.jpg',
    studentCount: 180,
    bureau: [
      {
        name: 'Bassirou Ndiaye',
        role: 'Secrétaire Général',
        image: '/images/bureau/fes-sg.jpg',
        email: 'bassiroundiaye086@gmail.com',
        phone: '+212 774-478252',
        isMainMember: true
      },
      {
        name: 'Mouhamadou Moustapha Fall',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/fes-sga.jpg',
        email: 'Mistofall221@gmail.com',
        phone: '+212 710-928562',
        isMainMember: true
      },
      {
        name: 'Fadoum Malick Bale',
        role: 'Trésorière',
        isMainMember: true
      },
      {
        name: 'Mariam Colon Diallo',
        role: 'Trésorière Adjointe',
        isMainMember: false
      },
      {
        name: 'Abdoulaye Diallo',
        role: 'Commissaire aux Comptes',
        isMainMember: false
      },
      {
        name: 'Pape Ousmane Ndiaye',
        role: 'Commissaire aux Comptes Adjoint',
        isMainMember: false
      },
      {
        name: 'Youssoupha Gaye Gueye',
        role: 'Commissaire aux Comptes Adjoint',
        isMainMember: false
      },
      {
        name: 'Aïda Rose',
        role: 'Chargé des Affaires Culturelles',
        isMainMember: false
      },
      {
        name: 'Saliou Dieye',
        role: 'Chargé des Affaires Culturelles Adjoint',
        isMainMember: false
      },
      {
        name: 'Moustapha Mbengue',
        role: 'Chargé Académique et Social',
        isMainMember: false
      },
      {
        name: 'Oulimata Ba',
        role: 'Chargé Académique et Social Adjoint',
        isMainMember: false
      },
      {
        name: 'Mouhamadou Fadilou Cisse',
        role: 'Chargé Académique et Social Adjoint',
        isMainMember: false
      },
      {
        name: 'Mame Marième Sall',
        role: 'Chargé des Relations Extérieures',
        isMainMember: false
      },
      {
        name: 'Rahim Niang',
        role: 'Chargé des Relations Extérieures Adjoint',
        isMainMember: false
      },
      {
        name: 'Khoudjèdji Dramè',
        role: 'Chargé des Relations Extérieures Adjoint',
        isMainMember: false
      },
      {
        name: 'Cheikh Ahmed Sow',
        role: 'Chargé des Affaires Sportives',
        isMainMember: false
      },
      {
        name: 'Boucary Sy',
        role: 'Chargé des Affaires Sportives Adjoint',
        isMainMember: false
      },
      {
        name: 'Adama Gueye',
        role: 'Chargé d\'Organisation',
        isMainMember: false
      },
      {
        name: 'Diariata Oumar Mbaye',
        role: 'Chargé d\'Organisation Adjoint',
        isMainMember: false
      },
      {
        name: 'Serigne Mansour Dieye',
        role: 'Chargé de Communication',
        isMainMember: false
      },
      {
        name: 'Arouna Diakhaté',
        role: 'Chargé de Communication Adjoint',
        isMainMember: false
      },
      {
        name: 'Talla Dieng',
        role: 'Chargé de Communication Adjoint',
        isMainMember: false
      },
      {
        name: 'Amadou Aliou Gadio',
        role: 'Chargé Suivi des Activités',
        isMainMember: false
      },
      {
        name: 'Baye Alioune Gueye',
        role: 'Chargé Suivi des Activités',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Sidi Mohammed Ben Abdellah',
        description: 'Une des plus anciennes universités du Maroc',
        location: 'Fès'
      }
    ],
    address: 'Campus Universitaire, Fès',
    email: 'bassiroundiaye086@gmail.com',
    phone: '+212 625-611191'
  },
  {
    id: 'marrakech',
    city: 'Marrakech',
    slogan: 'L\'excellence au cœur de la ville ocre',
    description: 'La section de Marrakech représente les étudiants de la ville ocre, capitale touristique du Maroc.',
    image: '/images/sections/marrakech-hero.jpg',
    heroImage: '/images/sections/marrakech-hero.jpeg',
    studentCount: 218,
    bureau: [
      {
        name: 'Rokhaya CISS',
        role: 'Secrétaire Général',
        image: '/images/bureau/marrakech-sg.jpg',
        email: 'rokinalaqueen@gmail.com',
        phone: '+221 77 855 57 94',
        isMainMember: true
      },
      {
        name: 'Youssoufa NIANG',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/marrakech-sga.jpg',
        email: 'y.niang0011@uca.ac.ma',
        phone: '+221 70 630 39 25',
        isMainMember: true
      },
      {
        name: 'Gora THIOUNE',
        role: 'Chargé académique et social',
        isMainMember: false
      },
      {
        name: 'Amadou Diallo',
        role: 'Adjoint Chargé académique et social',
        isMainMember: false
      },
      {
        name: 'Mamadou DIALLO',
        role: 'Chargé des relations extérieures',
        isMainMember: false
      },
      {
        name: 'M. Mansour SEYDI',
        role: 'Chargé des relations extérieures adjoint',
        isMainMember: false
      },
      {
        name: 'Marieme Soda TANDIANG',
        role: 'Chargée des relations extérieures adjointe',
        isMainMember: false
      },
      {
        name: 'Ibrahima SEYDI',
        role: 'Chargé de la communication',
        isMainMember: false
      },
      {
        name: 'Saliou THIANE',
        role: 'Chargé de la communication adjoint',
        isMainMember: false
      },
      {
        name: 'Khadim SENE',
        role: 'Chargé de la communication adjoint',
        isMainMember: false
      },
      {
        name: 'Sokhna Astou DIA',
        role: 'Chargée de finance',
        isMainMember: false
      },
      {
        name: 'Serigne Abdoulaye TOURE',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Amadou SARR',
        role: 'Commissaire aux comptes',
        isMainMember: false
      },
      {
        name: 'Delphine Diouma DIOUF',
        role: 'Chargée culturel',
        isMainMember: false
      },
      {
        name: 'Jean François MALOU',
        role: 'Chargé culturel adjoint',
        isMainMember: false
      },
      {
        name: 'Khadija CISS',
        role: 'Chargée culturel adjointe',
        isMainMember: false
      },
      {
        name: 'Malika DIOUF',
        role: 'Chargée culturel adjointe',
        isMainMember: false
      },
      {
        name: 'Rokhy CISSE',
        role: 'Présidente de la commission féminine',
        isMainMember: false
      },
      {
        name: 'Mouhamed NIASSE',
        role: 'Chargé du Sport',
        isMainMember: false
      },
      {
        name: 'Fallou DIOUF',
        role: 'Chargé du Sport Adjoint',
        isMainMember: false
      },
      {
        name: 'Alssane GUEYE',
        role: 'Chargé d\'Organisation',
        isMainMember: false
      },
      {
        name: 'Cheikh Tidiane THIAW',
        role: 'Chargé d\'Organisation adjoint',
        isMainMember: false
      },
      {
        name: 'Khadim DIOUF',
        role: 'Chargé d\'Organisation adjoint',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Cadi Ayyad',
        description: 'Une des plus grandes universités du Maroc',
        location: 'Avenue Abdelkrim Khattabi, Marrakech'
      },
      {
        name: 'ENSA Marrakech',
        description: 'École Nationale des Sciences Appliquées de Marrakech',
        location: 'Avenue Abdelkrim Khattabi, Marrakech'
      }
    ],
    address: 'Cité Universitaire, Avenue Prince Moulay Abdellah, Marrakech',
    email: 'ugesmmarrakech@gmail.com',
    phone: '+212 629-534697',
    socialMedia: {
      facebook: 'https://www.facebook.com/UgesmMarrakech/',
      instagram: 'https://www.instagram.com/ugesm_marrakechii/',
      telegram: 'https://t.me/+W2HXrfdQB3Q4NWM0'
    }
  },
  {
    id: 'agadir',
    city: 'Agadir',
    slogan: 'L\'excellence au sud du Royaume',
    description: 'La section d\'Agadir rassemble les étudiants sénégalais de la région Souss-Massa.',
    image: '/images/sections/agadir.jpg',
    heroImage: '/images/sections/agadir.jpg',
    studentCount: 200,
    bureau: [
      {
        name: 'Mame Thierno Ka',
        role: 'Secrétaire Général',
        image: '/images/bureau/agadir-sg.jpg',
        email: 'mamthiernoka221@gmail.com',
        phone: '+212 627036343',
        isMainMember: true
      },
      {
        name: 'Bintou Touré',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/agadir-sga.jpg',
        email: 'soxnabintou46@gmail.com',
        phone: '+212 620939473',
        isMainMember: true
      },
      {
        name: 'Dame Selane',
        role: 'Trésorier',
        isMainMember: true
      },
      {
        name: 'Mor Thiam',
        role: 'Trésorier Adjoint',
        isMainMember: false
      },
      {
        name: 'Pape Sarakh Fall',
        role: 'Chargé Académique et Social',
        isMainMember: false
      },
      {
        name: 'Aïcha Wane',
        role: 'Chargé Académique et Social Adjoint',
        isMainMember: false
      },
      {
        name: 'Mbaye Babacar Samb',
        role: 'Chargé de Communication',
        isMainMember: false
      },
      {
        name: 'Cheikh Ahmadoul Khadim Ndiaye',
        role: 'Chargé de Communication Adjoint',
        isMainMember: false
      },
      {
        name: 'Ngagne Mbaye',
        role: 'Chargé d\'Organisation',
        isMainMember: false
      },
      {
        name: 'Serigne Modou Abdou Khadre Fall',
        role: 'Chargé d\'Organisation Adjoint',
        isMainMember: false
      },
      {
        name: 'Abdou Sene',
        role: 'Commissaire aux Comptes',
        isMainMember: false
      },
      {
        name: 'Mouhamed Moukhtar Ba',
        role: 'Chargé des Affaires Culturelles',
        isMainMember: false
      },
      {
        name: 'Babacar Gueye',
        role: 'Chargé des Relations Extérieures',
        isMainMember: false
      },
      {
        name: 'Cheikh Diadhiou',
        role: 'Chargé Sportif',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Ibn Zohr',
        description: 'Principale université de la région Souss-Massa',
        location: 'Agadir'
      }
    ],
    address: 'Campus Universitaire, Agadir',
    email: 'mamthiernoka221@gmail.com',
    phone: '+212 646-776452'
  },
  {
    id: 'beni-mellal-khouribga',
    city: 'Beni Mellal-Khouribga',
    slogan: 'Unis pour l\'excellence dans la région de Béni Mellal-Khénifra',
    description: 'La section UGESM Beni Mellal-Khouribga regroupe les étudiants des villes de Beni Mellal et Khouribga, représentant une forte présence estudiantine dans la région de Béni Mellal-Khénifra.',
    image: '/images/sections/beni.jpg',
    heroImage: '/images/sections/beni.jpg',
    studentCount: 250,
    bureau: [
      {
        name: 'Babacar Faye',
        role: 'Secrétaire général',
        image: '/images/bureau/bm-sg.jpg',
        email: 'bf322003@gmail.com',
        phone: '+212619336478',
        isMainMember: true
      },
      {
        name: 'Makhtar Sall',
        role: 'Secrétaire général adjoint',
        image: '/images/bureau/bm-sga.jpg',
        email: 'makhtarsall630@gmail.com',
        phone: '+221783580042',
        isMainMember: true
      },
      {
        name: 'Aïcha Ndong',
        role: 'Trésorière',
        isMainMember: false
      },
      {
        name: 'Boubacar Bâ',
        role: 'Chargé académique',
        isMainMember: false
      },
      {
        name: 'Thione Diop',
        role: 'Chargé sportif',
        isMainMember: false
      },
      {
        name: 'Mamadou Bâ',
        role: 'Chargé communication',
        isMainMember: false
      },
      {
        name: 'C.A.Bamba Diané',
        role: 'Chargé des affaires étrangères',
        isMainMember: false
      },
      {
        name: 'M.Diabel Mbao',
        role: 'Chargé culturel',
        isMainMember: false
      },
      {
        name: 'Abdoulahi Ndiaye',
        role: 'Chargé organisation',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Sultan Moulay Slimane',
        description: 'Université publique offrant une formation diversifiée',
        location: 'Beni Mellal'
      },
      {
        name: 'École Supérieure de Technologie de Khouribga',
        description: 'École d\'ingénierie et de technologie',
        location: 'Khouribga'
      },
      {
        name: 'Faculté Polydisciplinaire de Khouribga',
        description: 'Faculté offrant des formations variées',
        location: 'Khouribga'
      }
    ],
    address: 'Campus Universitaire, Beni Mellal',
    email: 'bf322003@gmail.com',
    phone: '+212 619 336 478',
    socialMedia: {
      instagram: 'https://www.instagram.com/ugesm_bm/'
    }
  },
  {
    id: 'el-jadida',
    city: 'El Jadida',
    slogan: 'Excellence sur la côte atlantique',
    description: 'La section d\'El Jadida représente les étudiants de la ville portuaire.',
    image: '/images/sections/El-Jadida.jpg',
    heroImage: '/images/sections/El-Jadida.jpg',
    studentCount: 200,
    bureau: [
      {
        name: 'Assane Thiam',
        role: 'Secrétaire Général',
        image: '/images/bureau/el-jadida-sg.jpg',
        email: 'assanet207@gmail.com',
        phone: '+212 618-887326',
        isMainMember: true
      },
      {
        name: 'Sokhna Diop Seye',
        role: 'Secrétaire Général Adjoint et Chargé des Relations Extérieures',
        image: '/images/bureau/el-jadida-sga.jpg',
        email: 'Seyesokhnadiop2@gmail.com',
        phone: '+212 632-012173',
        isMainMember: true
      },
      {
        name: 'Adama Diop',
        role: 'Trésorière',
        isMainMember: false
      },
      {
        name: 'Alphonse Simon Moussa Ndiaye',
        role: 'Commissaire aux Comptes',
        isMainMember: false
      },
      {
        name: 'Ndeye Hadjarah Faye',
        role: 'Chargé d\'Organisation',
        isMainMember: false
      },
      {
        name: 'Yaye Fatou Diop',
        role: 'Adjoint Chargé Culturel et d\'Organisation',
        isMainMember: false
      },
      {
        name: 'Mouhamed Moujtaba Kane',
        role: 'Adjoint Chargé Culturel et d\'Organisation',
        isMainMember: false
      },
      {
        name: 'Mouhamadou El Bachir Gaye',
        role: 'Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'Khadi Mbengue',
        role: 'Chargé Académique',
        isMainMember: false
      },
      {
        name: 'Ibrahima Sène',
        role: 'Chargé à la Communication',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Chouaib Doukkali',
        description: 'Université principale d\'El Jadida',
        location: 'Route Nationale 1, El Jadida'
      }
    ],
    address: 'Campus Universitaire, El Jadida',
    email: 'assanet207@gmail.com',
    phone: '+212 681-391707',
    socialMedia: {
      facebook: 'https://www.facebook.com/share/KmqQRVochNLJ3hTD/?mibextid=LQQJ4d',
      instagram: 'https://www.instagram.com/ugesm_eljadida/'
    }
  },
  {
    id: 'errachidia',
    city: 'Errachidia',
    slogan: 'L\'excellence aux portes du désert',
    description: 'La section d\'Errachidia représente les étudiants de la région Drâa-Tafilalet.',
    image: '/images/sections/errachidia.jpg',
    heroImage: '/images/sections/errachidia-hero.jpg',
    studentCount: 150,
    bureau: [
      {
        name: 'Ali El Mansouri',
        role: 'Secrétaire Général',
        image: '/images/bureau/errachidia-sg.jpg',
        email: 'sg.errachidia@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Fatima Zahra Alaoui',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/errachidia-sga.jpg',
        email: 'sga.errachidia@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Omar El Fassi',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Nadia Benjelloun',
        role: 'Responsable Communication',
        isMainMember: false
      },
      {
        name: 'Karim Tazi',
        role: 'Responsable Événements',
        isMainMember: false
      },
      {
        name: 'Amina El Idrissi',
        role: 'Responsable Relations Externes',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Moulay Ismail - Annexe Errachidia',
        description: 'Campus universitaire d\'Errachidia',
        location: 'Boulevard Mohammed V, Errachidia'
      }
    ],
    address: 'Campus Universitaire, Errachidia',
    email: 'contact.errachidia@ugesm.org',
    phone: '+212 5XX XX XX XX',
    socialMedia: {
      facebook: 'https://facebook.com/ugesm.errachidia',
      instagram: 'https://instagram.com/ugesm.errachidia'
    }
  },
  {
    id: 'kenitra',
    city: 'Kénitra',
    slogan: 'L\'excellence au cœur du Gharb',
    description: 'La section de Kénitra représente les étudiants de la région du Gharb.',
    image: '/images/sections/kenitra.jpg',
    heroImage: '/images/sections/kenitra.jpg',
    studentCount: 280,
    bureau: [
      {
        name: 'Mohammed Chraibi',
        role: 'Secrétaire Général',
        image: '/images/bureau/kenitra-sg.jpg',
        email: 'sg.kenitra@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Salma El Amrani',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/kenitra-sga.jpg',
        email: 'sga.kenitra@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Youssef Berrada',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Laila Alaoui',
        role: 'Responsable Communication',
        isMainMember: false
      },
      {
        name: 'Hassan Mansouri',
        role: 'Responsable Événements',
        isMainMember: false
      },
      {
        name: 'Ghita El Fassi',
        role: 'Responsable Relations Externes',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Ibn Tofail',
        description: 'Université principale de Kénitra',
        location: 'Campus Universitaire, Kénitra'
      }
    ],
    address: 'Cité Universitaire, Avenue de l\'Université, Kénitra',
    email: 'contact.kenitra@ugesm.org',
    phone: '+212 5XX XX XX XX',
    socialMedia: {
      facebook: 'https://facebook.com/ugesm.kenitra',
      instagram: 'https://instagram.com/ugesm.kenitra'
    }
  },
  {
    id: 'laayoune',
    city: 'Laâyoune',
    slogan: 'L\'excellence dans les provinces du Sud',
    description: 'La section de Laâyoune représente les étudiants des provinces du Sud.',
    image: '/images/sections/laayoune.jpg',
    heroImage: '/images/sections/laayoune-hero.jpg',
    studentCount: 120,
    bureau: [
      {
        name: 'Hassan El Alaoui',
        role: 'Secrétaire Général',
        image: '/images/bureau/laayoune-sg.jpg',
        email: 'sg.laayoune@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Samira El Fassi',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/laayoune-sga.jpg',
        email: 'sga.laayoune@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Youssef Tazi',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Amira Benjelloun',
        role: 'Responsable Communication',
        isMainMember: false
      },
      {
        name: 'Karim El Mansouri',
        role: 'Responsable Événements',
        isMainMember: false
      },
      {
        name: 'Nadia Chraibi',
        role: 'Responsable Relations Externes',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'École Nationale de Commerce et de Gestion',
        description: 'ENCG Laâyoune',
        location: 'Boulevard Mohammed V, Laâyoune'
      }
    ],
    address: 'Campus Universitaire, Laâyoune',
    email: 'contact.laayoune@ugesm.org',
    phone: '+212 5XX XX XX XX',
    socialMedia: {
      facebook: 'https://facebook.com/ugesm.laayoune',
      instagram: 'https://instagram.com/ugesm.laayoune'
    }
  },
  {
    id: 'meknes',
    city: 'Meknès',
    slogan: 'Excellence et Innovation au cœur de l\'histoire',
    description: 'La section de Meknès est une section dynamique qui regroupe les étudiants de la ville historique de Meknès.',
    image: '/images/sections/meknes.jpg',
    heroImage: '/images/sections/meknes.jpg',
    studentCount: 350,
    bureau: [
      {
        name: 'Omar Ndiaye',
        role: 'Secrétaire Général',
        email: 'ondiaye@enameknes.ac.ma',
        phone: '+212 688097970',
        image: '/images/bureau/meknes-sg.jpg',
        isMainMember: true
      },
      {
        name: 'Djibril SALL',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/meknes-sga.jpg',
        phone: '+221 785689814',
        isMainMember: true
      },
      {
        name: 'Ciré Elimane SALL',
        role: 'Secrétaire à la communication',
        isMainMember: false
      },
      {
        name: 'Sadikh NDIAYE',
        role: 'Adjoint Secrétaire à la communication',
        isMainMember: false
      },
      {
        name: 'Ndeye Nogaye Mbaye',
        role: 'Trésorière',
        isMainMember: false
      },
      {
        name: 'Bouna Diambera',
        role: 'Trésorier Adjoint',
        isMainMember: false
      },
      {
        name: 'BOYE DIAWO',
        role: 'Commissaire aux comptes',
        isMainMember: false
      },
      {
        name: 'Bineta NDOUR',
        role: 'Chargée d\'organisation',
        isMainMember: false
      },
      {
        name: 'Birame FAYE',
        role: 'Chargé d\'organisation Adjoint',
        isMainMember: false
      },
      {
        name: 'Boubacar SOW',
        role: 'Chargé des affaires académiques et sociales',
        isMainMember: false
      },
      {
        name: 'Khadim Diop DIONE',
        role: 'Chargé des affaires académiques et sociales Adjoint',
        isMainMember: false
      },
      {
        name: 'Pape Momar NDIAYE',
        role: 'Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'Adama THIAM',
        role: 'Chargé Sportif Adjoint',
        isMainMember: false
      },
      {
        name: 'Alima FALL',
        role: 'Chargée Culturelle',
        isMainMember: false
      },
      {
        name: 'Ramatoulaye SEYE',
        role: 'Chargée Culturelle Adjointe',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Moulay Ismail',
        description: 'Une des plus grandes universités du Maroc',
        location: 'Marjane 2, Meknès'
      },
      {
        name: 'ENA Meknès',
        description: 'École Nationale d\'Agriculture de Meknès',
        location: 'Route Haj Kaddour, Meknès'
      }
    ],
    address: 'Cité Universitaire, Avenue de l\'Université, Meknès',
    email: 'ondiaye@enameknes.ac.ma',
    phone: '+212 688-097970',
    socialMedia: {
      facebook: 'https://www.facebook.com/public/Ugesm-Meknes?locale=fr_CA',
      instagram: 'https://www.instagram.com/ugesm_meknes/'
    }
  },
  {
    id: 'mohammedia',
    city: 'Mohammedia',
    slogan: 'L\'excellence entre mer et industrie',
    description: 'La section de Mohammedia représente les étudiants de la ville des fleurs.',
    image: '/images/sections/mohammedia.jpg',
    heroImage: '/images/sections/mohammedia-hero.jpg',
    studentCount: 220,
    bureau: [
      {
        name: 'Hamid El Mansouri',
        role: 'Secrétaire Général',
        image: '/images/bureau/mohammedia-sg.jpg',
        email: 'sg.mohammedia@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Amina Chraibi',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/mohammedia-sga.jpg',
        email: 'sga.mohammedia@ugesm.org',
        phone: '+212 6XX XX XX XX',
        isMainMember: true
      },
      {
        name: 'Karim El Fassi',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Nadia Alaoui',
        role: 'Responsable Communication',
        isMainMember: false
      },
      {
        name: 'Hassan Tazi',
        role: 'Responsable Événements',
        isMainMember: false
      },
      {
        name: 'Salma Benjelloun',
        role: 'Responsable Relations Externes',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Hassan II - Campus Mohammedia',
        description: 'Campus universitaire de Mohammedia',
        location: 'Avenue Hassan II, Mohammedia'
      },
      {
        name: 'ENSET Mohammedia',
        description: 'École Normale Supérieure de l\'Enseignement Technique',
        location: 'Boulevard Hassan II, Mohammedia'
      }
    ],
    address: 'Campus Universitaire, Mohammedia',
    email: 'contact.mohammedia@ugesm.org',
    phone: '+212 5XX XX XX XX',
    socialMedia: {
      facebook: 'https://facebook.com/ugesm.mohammedia',
      instagram: 'https://instagram.com/ugesm.mohammedia'
    }
  },
  {
    id: 'oujda',
    city: 'Oujda',
    slogan: 'L\'excellence à l\'Orient du Royaume',
    description: 'La section d\'Oujda représente les étudiants de la capitale de l\'Oriental.',
    image: '/images/sections/oujda.jpg',
    heroImage: '/images/sections/oujda.jpg',
    studentCount: 270,
    bureau: [
      {
        name: 'Awa Mbath',
        role: 'Secrétaire Générale',
        image: '/images/bureau/oujda-sg.jpg',
        email: 'mbathieawa8@gmail.com',
        phone: '+212 618-419432',
        isMainMember: true
      },
      {
        name: 'Mamadou Gueye',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/oujda-sga.jpg',
        email: 'momo774186169@gmail.com',
        phone: '+221 774186169',
        isMainMember: true
      },
      {
        name: 'Mouhamadou Khalifa Diop',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Ibrahima Niass',
        role: 'Chargé de la communication',
        isMainMember: false
      },
      {
        name: 'Babacar Gueye',
        role: 'Commissaire aux comptes adjoint',
        isMainMember: false
      },
      {
        name: 'Dieynaba Sy',
        role: 'Chargée des affaires culturelles',
        isMainMember: false
      },
      {
        name: 'Ndeye Mary Gningue',
        role: 'Commissaire aux comptes',
        isMainMember: false
      },
      {
        name: 'Cheikh Ahmadou Bamba',
        role: 'Chargé des relations extérieures',
        isMainMember: false
      },
      {
        name: 'Awa Ndiaye',
        role: 'Chargée des relations extérieures adjointe',
        isMainMember: false
      },
      {
        name: 'Moukhtar Diop',
        role: 'Chargé des affaires religieuses',
        isMainMember: false
      },
      {
        name: 'Mamour Mbow',
        role: 'Chargé des affaires académiques et sociales',
        isMainMember: false
      },
      {
        name: 'Bassirou Diatta',
        role: 'Chargé des activités sportives',
        isMainMember: false
      },
      {
        name: 'El Hadji Thiam',
        role: 'Chargé de l\'organisation',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Mohammed Premier',
        description: 'Université principale de la région de l\'Oriental',
        location: 'Boulevard Mohammed VI, Oujda'
      }
    ],
    address: 'Campus Universitaire, Oujda',
    email: 'mbathieawa8@gmail.com',
    phone: '+212 618-419432',
    socialMedia: {
      facebook: 'https://www.facebook.com/p/UGESM-Oujda-100075310851520/',
      instagram: 'https://www.instagram.com/ugesm_oujda/'
    }
  },
  {
    id: 'settat',
    city: 'Settat',
    slogan: 'Unis pour l\'excellence académique',
    description: 'La section de Settat regroupe les étudiants sénégalais de la région, créant une communauté dynamique et solidaire.',
    image: '/images/sections/settat.jpg',
    heroImage: '/images/sections/settat.jpg',
    studentCount: 150,
    bureau: [
      {
        name: 'Serigne Modou Kara Mbackè',
        role: 'Secrétaire Général',
        image: '/images/bureau/settat-sg.jpg',
        email: 'serignemodoukara12@gmail.com',
        phone: '+221 77 192 80 01',
        isMainMember: true
      },
      {
        name: 'Awa Gueye',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/settat-sga.jpg',
        email: 'gueyeawa645@gmail.com',
        phone: '+212 702-601777',
        isMainMember: true
      },
      {
        name: 'Thierno Gueye',
        role: 'Trésorier',
        isMainMember: true
      },
      {
        name: 'Ibrahima Sakho',
        role: 'Trésorier Adjoint',
        isMainMember: false
      },
      {
        name: 'Baytir Ibrahima Junior Seck',
        role: 'Commissaire aux Comptes',
        isMainMember: false
      },
      {
        name: 'Assane Sonko Diouf',
        role: 'Chargé de la Communication',
        isMainMember: false
      },
      {
        name: 'Abib Seck',
        role: 'Chargé Académique',
        isMainMember: false
      },
      {
        name: 'Yaye Fatou Fall',
        role: 'Adjoint Chargé Académique',
        isMainMember: false
      },
      {
        name: 'Seydou Sall',
        role: 'Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'Alioune Badara Badiane',
        role: 'Adjoint Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'Issa Ndiaye',
        role: 'Adjoint Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'El Hadji Pedre Sidibe',
        role: 'Adjoint Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'Aïda Khoudia Sall',
        role: 'Responsable Section Féminine',
        isMainMember: false
      },
      {
        name: 'Seynabou Diallo',
        role: 'Responsable Section Féminine',
        isMainMember: false
      },
      {
        name: 'Mouhamed Diallo',
        role: 'Chargé des Relations Extérieures',
        isMainMember: false
      },
      {
        name: 'Dibor Diouf',
        role: 'Chargé des Relations Extérieures',
        isMainMember: false
      },
      {
        name: 'Ousseynou Goumbala Diouf',
        role: 'Chargé Organisation',
        isMainMember: false
      },
      {
        name: 'Maty Seydi',
        role: 'Chargé Culturel',
        isMainMember: false
      },
      {
        name: 'Amy Fall',
        role: 'Adjoint Chargé Culturel',
        isMainMember: false
      },
      {
        name: 'Bamba Cissé',
        role: 'Conseil des Sages',
        isMainMember: false
      },
      {
        name: 'Fatou Sakho',
        role: 'Conseil des Sages',
        isMainMember: false
      },
      {
        name: 'Serigne Sydi Ndack',
        role: 'Conseil des Sages',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Hassan 1er',
        description: 'Une université publique majeure de la région',
        location: 'Settat'
      }
    ],
    address: 'Cité Universitaire, Settat',
    email: 'serignemodoukara12@gmail.com',
    phone: '+212 702-601777',
    socialMedia: {
      instagram: 'https://www.instagram.com/ugesm_settat/',
    }
  },
  {
    id: 'tanger',
    city: 'Tanger-Tétouan',
    slogan: 'Excellence et Innovation dans la région du Nord',
    description: 'La section de Tanger-Tétouan représente les étudiants de la région du Nord du Maroc, regroupant les villes de Tanger et Tétouan.',
    image: '/images/sections/tanger.jpg',
    heroImage: '/images/sections/tétouan.jpg',
    studentCount: 320,
    bureau: [
      {
        name: 'Cheikh Amadou Tidiane Ndiaye',
        role: 'Secrétaire Général',
        image: '/images/bureau/tanger-sg.jpg',
        email: 'cheikhtidiane860@gmail.com',
        phone: '+212 774-476607',
        isMainMember: true
      },
      {
        name: 'Oumar Mamadou KA',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/tanger-sga.jpg',
        email: 'sga.tanger@ugesm.org',
        phone: '+212 625-777101',
        isMainMember: true
      },
      {
        name: 'Salimata BA',
        role: 'Secrétaire Général Adjoint',
        isMainMember: true
      },
      {
        name: 'Cheikh Oumar Fall',
        role: 'Chargé Académique et Social',
        isMainMember: false
      },
      {
        name: 'Amadou Yoro Sall',
        role: 'Chargé Académique et Social',
        isMainMember: false
      },
      {
        name: 'Zeynabou Bousso',
        role: 'Chargée d\'organisation',
        isMainMember: false
      },
      {
        name: 'Mourtada Bousso',
        role: 'Chargé d\'organisation',
        isMainMember: false
      },
      {
        name: 'Samba Sène',
        role: 'Trésorier',
        isMainMember: false
      },
      {
        name: 'Mariama Sow',
        role: 'Trésorière',
        isMainMember: false
      },
      {
        name: 'Ousmane Hane',
        role: 'Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'Mansour Ba',
        role: 'Chargé Sportif',
        isMainMember: false
      },
      {
        name: 'Rassoul Niang',
        role: 'Chargé de la communication',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Abdelmalek Essaâdi - Tanger',
        description: 'Principale université de Tanger',
        location: 'Route de Rabat, Tanger'
      },
      {
        name: 'Université Abdelmalek Essaâdi - Tétouan',
        description: 'Campus principal de Tétouan',
        location: 'Avenue de Fès, Tétouan'
      },
      {
        name: 'ENCGT',
        description: 'École Nationale de Commerce et de Gestion de Tanger',
        location: 'Route de l\'Aéroport, Tanger'
      }
    ],
    address: 'Campus Universitaire de Tanger, Route de l\'Aéroport, Tanger',
    email: 'cheikhtidiane860@gmail.com',
    phone: '+212 774-476607',
    socialMedia: {
      instagram: 'https://www.instagram.com/ugesmtta/',
    }
  },
  {
    id: 'benguerir',
    city: 'Ben Guerir',
    slogan: 'L\'excellence dans la région de Ben Guerir',
    description: 'La section de Ben Guerir représente les étudiants de la région.',
    image: '/images/sections/benguerir.jpg',
    heroImage: '/images/sections/benguerir.jpg',
    studentCount: 100,
    bureau: [
      {
        name: 'Khadidiatou DEME',
        role: 'Secrétaire Générale',
        image: '/images/bureau/benguerir-sg.jpg',
        email: 'dkhadidiatou5@gmail.com',
        phone: '+212 610-144377',
        isMainMember: true
      },
      {
        name: 'Khadim Ndiaye',
        role: 'Secrétaire Général Adjoint',
        image: '/images/bureau/benguerir-sga.jpg',
        email: 'bambandiaye1908@gmail.com',
        phone: '+212 608-685961',
        isMainMember: true
      },
      {
        name: 'Khadidiatou Top',
        role: 'Trésorière',
        isMainMember: false
      },
      {
        name: 'Moustapha GAYE',
        role: 'Commissaire aux Comptes',
        isMainMember: false
      },
      {
        name: 'Abdou Lahat MBAYE',
        role: 'Responsable Activités Culturelles et Sportives',
        isMainMember: false
      },
      {
        name: 'Khady DIAGNE',
        role: 'Responsable Activités Culturelles et Sportives Adjoint',
        isMainMember: false
      },
      {
        name: 'Mouhamadou Taha Thiam',
        role: 'Chargé des Activités Académiques',
        isMainMember: false
      },
      {
        name: 'Yaya SANE',
        role: 'Adjoint Chargé des Activités Académiques',
        isMainMember: false
      },
      {
        name: 'Adama DIOUF',
        role: 'Responsable Organisation',
        isMainMember: false
      },
      {
        name: 'MOUHAMED DIOP',
        role: 'Adjoint Responsable Organisation',
        isMainMember: false
      }
    ],
    universities: [
      {
        name: 'Université Mohammed VI Polytechnique (UM6P)',
        description: 'Principale université de la région',
        location: 'Ben Guerir'
      }
    ],
    address: 'Université Mohammed VI Polytechnique, Ben Guerir',
    socialMedia: {
      instagram: 'https://www.instagram.com/ugesmbenguerir/'
    }
  },
];

// Note: Toutes les sections doivent suivre ce même modèle avec les champs requis

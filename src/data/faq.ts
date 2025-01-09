interface FAQCategory {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const faqData: FAQCategory[] = [
  {
    title: "À propos de l'UGESM",
    questions: [
      {
        question: "Qu'est-ce que l'UGESM ?",
        answer: "L'Union Générale des Étudiants et Stagiaires Sénégalais au Maroc (UGESM) est la plus grande organisation estudiantine sénégalaise au Maroc. Fondée pour représenter et défendre les intérêts des étudiants sénégalais, elle joue un rôle crucial dans leur intégration et leur réussite académique. Notre mission englobe l'accompagnement administratif, le soutien social, et la promotion de l'excellence académique."
      },
      {
        question: "Comment l'UGESM peut-elle m'aider ?",
        answer: "L'UGESM vous accompagne à travers plusieurs services essentiels : aide aux démarches administratives (inscription, logement, carte de séjour), soutien académique (tutorat, ressources d'études), intégration sociale (événements culturels, rencontres), assistance médicale en cas de besoin, et mise en relation avec les institutions marocaines et sénégalaises. Nous organisons également des formations professionnelles et facilitons l'accès aux stages."
      },
      {
        question: "Comment puis-je devenir membre de l'UGESM ?",
        answer: "Pour devenir membre, vous devez être un étudiant ou stagiaire sénégalais au Maroc. Le processus d'adhésion est simple : 1) Contactez la section UGESM de votre ville, 2) Fournissez une copie de votre carte d'étudiant et votre passeport, 3) Participez à la réunion d'intégration. L'adhésion est gratuite et vous donne accès à tous nos services et activités."
      }
    ]
  },
  {
    title: "Études au Maroc",
    questions: [
      {
        question: "Comment s'inscrire dans une université marocaine ?",
        answer: "Pour les étudiants sénégalais, l'inscription se fait principalement via l'AMCI (Agence Marocaine de Coopération Internationale). Les étapes sont : 1) Postuler via l'AMCI dans votre pays, 2) Attendre la lettre d'admission, 3) Obtenir le visa étudiant, 4) Effectuer l'inscription définitive à l'université. L'UGESM vous guide dans toutes ces démarches et organise des sessions d'information pour les nouveaux étudiants."
      },
      {
        question: "Quelles sont les options de logement disponibles ?",
        answer: "Au Maroc, vous avez plusieurs options : 1) Les cités universitaires (via l'AMCI), 2) Les résidences privées, 3) La colocation entre étudiants. L'UGESM vous aide à trouver un logement adapté à votre budget et localisation. Nous disposons d'une base de données de logements fiables et pouvons vous accompagner dans les visites et la signature du contrat."
      },
      {
        question: "Comment obtenir et renouveler sa carte de séjour ?",
        answer: "Pour la carte de séjour au Maroc : 1) Rassemblez les documents (passeport, attestation d'inscription, photos, etc.), 2) Faites la demande à la préfecture de police, 3) Suivez le processus de renouvellement annuel. L'UGESM organise des campagnes de renouvellement groupé et vous accompagne dans toutes les démarches administratives."
      }
    ]
  },
  {
    title: "Vie Pratique",
    questions: [
      {
        question: "Comment fonctionne la couverture médicale ?",
        answer: "Les étudiants sénégalais bénéficient d'une assurance maladie via l'AMO (Assurance Maladie Obligatoire). L'UGESM vous aide pour : 1) L'inscription à la couverture médicale, 2) L'accès aux soins médicaux, 3) Le remboursement des frais. En cas d'urgence, nous disposons d'un réseau de médecins partenaires et d'une assistance téléphonique 24/7."
      },
      {
        question: "Comment gérer son budget étudiant au Maroc ?",
        answer: "La gestion du budget est essentielle. Voici nos conseils : 1) Planifiez vos dépenses mensuelles (loyer, nourriture, transport), 2) Profitez des réductions étudiantes (restaurants universitaires, transport), 3) Utilisez les services bancaires adaptés aux étudiants. L'UGESM organise des ateliers de gestion financière et peut vous conseiller sur les meilleures options d'épargne."
      },
      {
        question: "Quelles sont les activités proposées par l'UGESM ?",
        answer: "L'UGESM organise régulièrement : 1) Des événements culturels (célébrations nationales, festivals), 2) Des activités sportives (tournois, matchs amicaux), 3) Des formations professionnelles, 4) Des sorties et excursions découvertes, 5) Des conférences et débats. Ces activités favorisent l'intégration et créent des liens entre les étudiants sénégalais au Maroc."
      }
    ]
  }
];

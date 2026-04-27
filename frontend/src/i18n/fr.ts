const fr = {
  // Navigation
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    academics: 'Académique',
    news: 'Actualités & Événements',
    admissions: 'Admissions',
    gallery: 'Galerie',
    contact: 'Contact',
    portal: 'Portail',
    login: 'Se Connecter',
    logout: 'Se Déconnecter',
    dashboard: 'Tableau de Bord',
    applyNow: 'Postuler Maintenant',
    visitSchool: "Visiter l'École",
  },

  // Hero
  hero: {
    badge: 'École Internationale Américaine',
    title: "L'Excellence dans l'Éducation,",
    titleHighlight: 'Enracinée dans la Foi',
    subtitle: "Former la prochaine génération de leaders africains grâce à une éducation américaine de classe mondiale, des valeurs chrétiennes et une technologie innovante.",
    cta1: 'Postuler Maintenant',
    cta2: 'Explorer les Programmes',
    stats: {
      students: 'Élèves',
      teachers: 'Enseignants',
      years: "Années d'Excellence",
      nationalities: 'Nationalités',
    },
  },

  // About
  about: {
    title: 'À Propos de KCS',
    subtitle: "Un Héritage d'Excellence depuis 1967",
    mission: {
      title: 'Notre Mission',
      text: "Offrir une éducation américaine exceptionnelle ancrée dans les valeurs chrétiennes, permettant aux élèves de Kinshasa et du Congo de devenir des leaders serviteurs qui transforment leurs communautés et le monde.",
    },
    vision: {
      title: 'Notre Vision',
      text: "Être l'école internationale de référence en Afrique centrale, reconnue pour l'excellence académique, la profondeur spirituelle et le développement de leaders à vision mondiale.",
    },
    values: {
      title: 'Valeurs Fondamentales',
      faith: { title: 'Foi', desc: 'Ancrés dans les principes et valeurs chrétiens' },
      excellence: { title: 'Excellence', desc: 'Viser les plus hauts standards académiques' },
      integrity: { title: 'Intégrité', desc: "Honnêteté et caractère dans tout ce que nous faisons" },
      community: { title: 'Communauté', desc: 'Construire des relations significatives' },
      innovation: { title: 'Innovation', desc: 'Embrasser la technologie et les nouvelles idées' },
      leadership: { title: 'Leadership', desc: "Développer des leaders serviteurs pour l'Afrique" },
    },
  },

  // Academics
  academics: {
    title: 'Programmes Académiques',
    subtitle: 'Programme Mondial, Cœur Africain',
    programs: {
      elementary: {
        title: 'École Primaire',
        grades: 'Classes K–5',
        desc: "Construire une base solide grâce à un apprentissage engageant et intégré à la foi.",
      },
      middle: {
        title: 'Collège',
        grades: 'Classes 6–8',
        desc: "Naviguer l'adolescence avec défi académique et croissance spirituelle.",
      },
      high: {
        title: 'Lycée',
        grades: 'Classes 9–12',
        desc: "Préparer les élèves aux meilleures universités mondiales avec des cours AP et honors.",
      },
    },
    curriculum: 'Programme Américain',
    accreditation: 'Accrédité par ACSI',
  },

  // News
  news: {
    title: 'Actualités & Événements',
    subtitle: 'Restez connectés avec la communauté KCS',
    readMore: 'Lire la Suite',
    viewAll: 'Tout Voir',
    categories: {
      all: 'Tout',
      news: 'Actualités',
      events: 'Événements',
      announcements: 'Annonces',
      achievements: 'Réalisations',
    },
  },

  // Admissions
  admissions: {
    title: 'Admissions',
    subtitle: 'Rejoignez la Famille KCS',
    steps: {
      title: "Processus d'Admission",
      apply: { title: 'Soumettre la Demande', desc: 'Remplir le formulaire en ligne' },
      docs: { title: 'Télécharger les Documents', desc: 'Soumettre les dossiers académiques requis' },
      interview: { title: 'Entretien', desc: "Rencontrer notre équipe d'admissions" },
      decision: { title: 'Décision', desc: "Recevoir votre décision d'admission" },
    },
    requirements: 'Conditions',
    applyOnline: 'Postuler en Ligne',
    trackApplication: 'Suivre ma Candidature',
  },

  // Portal
  portal: {
    student: {
      title: 'Portail Étudiant',
      welcome: 'Bienvenue',
      dashboard: 'Tableau de Bord',
      grades: 'Mes Notes',
      assignments: 'Devoirs',
      timetable: 'Emploi du Temps',
      aiTutor: 'Tuteur IA',
    },
    parent: {
      title: 'Portail Parent',
      dashboard: 'Tableau de Bord',
      performance: 'Performance',
      messages: 'Messages',
      notifications: 'Notifications',
    },
    admin: {
      title: 'Panneau Admin',
      students: 'Élèves',
      teachers: 'Enseignants',
      courses: 'Cours',
      admissions: 'Admissions',
      analytics: 'Analytiques',
      settings: 'Paramètres',
    },
  },

  // AI
  ai: {
    chat: {
      title: 'Assistant KCS',
      subtitle: 'Posez-moi des questions sur KCS',
      placeholder: 'Posez une question...',
      thinking: 'En train de réfléchir...',
      greeting: "Bonjour ! Je suis l'Assistant IA de KCS. Comment puis-je vous aider aujourd'hui ? Je peux répondre aux questions sur les admissions, les programmes, les horaires, et plus encore.",
    },
    tutor: {
      title: 'Tuteur IA',
      subtitle: 'Soutien personnalisé à l\'apprentissage',
      start: 'Démarrer une Session',
      subject: 'Choisir une Matière',
    },
  },

  // Contact
  contact: {
    title: 'Contactez-Nous',
    subtitle: 'Nous serions ravis de vous entendre',
    address: 'Adresse',
    phone: 'Téléphone',
    email: 'Email',
    hours: 'Heures de Bureau',
    form: {
      name: 'Nom Complet',
      email: 'Adresse Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer le Message',
      success: 'Message envoyé avec succès !',
    },
  },

  // Auth
  auth: {
    signIn: 'Se Connecter',
    signUp: "S'inscrire",
    email: 'Adresse Email',
    password: 'Mot de Passe',
    forgotPassword: 'Mot de passe oublié ?',
    rememberMe: 'Se souvenir de moi',
    orContinueWith: 'Ou continuer avec',
    google: 'Continuer avec Google',
    noAccount: "Vous n'avez pas de compte ?",
    hasAccount: 'Vous avez déjà un compte ?',
  },

  // Common
  common: {
    loading: 'Chargement...',
    error: 'Une erreur est survenue',
    retry: 'Réessayer',
    save: 'Enregistrer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    edit: 'Modifier',
    view: 'Voir',
    search: 'Rechercher',
    filter: 'Filtrer',
    sort: 'Trier',
    download: 'Télécharger',
    upload: 'Importer',
    submit: 'Soumettre',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    close: 'Fermer',
    confirm: 'Confirmer',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    language: 'Langue',
    notifications: 'Notifications',
    profile: 'Profil',
    settings: 'Paramètres',
    noData: 'Aucune donnée disponible',
    seeAll: 'Voir Tout',
  },
}

export default fr

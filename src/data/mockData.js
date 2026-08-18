export const GABON_MINISTRY_ROLES = [
  { id: 'ministre', title: 'Monsieur le Ministre', subtitle: 'Légitimité politique & Arbitrage ultime' },
  { id: 'dircab', title: 'Directeur de Cabinet', subtitle: 'Triage, Coordination & Relances' },
  { id: 'conseiller', title: 'Conseiller Technique', subtitle: 'Expertise, Notes & Préparation' },
  { id: 'sg', title: 'Secrétaire Général', subtitle: 'Exécution administrative & Régularité' },
  { id: 'dg', title: 'Directeur Général', subtitle: 'Déploiement chantiers & KPIs' },
];

export const MOCK_DECISION_OBJECTS = [
  {
    id: 'DEC-2026-089',
    title: 'Déploiement du Cluster Souverain au Data Center National de Libreville',
    dossierRef: 'DOS-NUM-2026-042',
    classification: 'CONFIDENTIEL',
    urgency: 'HAUTE',
    deadline: '2026-08-25',
    department: 'Direction Générale des Infrastructures Numériques',
    responsible: 'Dr. Marc ONDO (Directeur Général DIN)',
    facts: [
      'Le premier niveau de baies souveraines au Data Center de Libreville est opérationnel.',
      'Les API gouvernementales actuelles sont hébergées de manière hybride avec des dépendances transfrontalières.',
      'La directive d’accréditation de sécurité du Secrétariat Général exige une migration avant le 1er septembre.'
    ],
    sources: [
      { name: 'Audit Souveraineté DIN 2026', type: 'PDF Interne', date: '2026-08-10' },
      { name: 'Rapport ANINF / Sécurité Numérique', type: 'Document Confidentiel', date: '2026-08-14' }
    ],
    options: [
      {
        id: 'opt-1',
        title: 'Option A : Migration immédiate du noyau Identité & Santé',
        advantages: 'Garantit la souveraineté complète des données citoyennes avant la fin du trimestre.',
        risks: 'Interruption de service possible de 4 heures durant le basculement.',
        impact: 'Fort impact de souveraineté (+35% sur le Contrat de Performance).'
      },
      {
        id: 'opt-2',
        title: 'Option B : Basculement progressif en 3 phases sur 90 jours',
        advantages: 'Zéro risque d’interruption des guichets publics actuels.',
        risks: 'Surcoût temporaire de double hébergement (14 millions FCFA/mois).',
        impact: 'Retard de 60 jours sur la feuille de route des 100 Jours.'
      },
      {
        id: 'opt-3',
        title: 'Option C : Hybridation conservatrice sous contrôle ANINF',
        advantages: 'Complexité technique minimale à court terme.',
        risks: 'Maintien d’un risque de dépendance juridique fournisseur tierce.',
        impact: 'Non conforme à la Directive Présidentielle N°04-2026.'
      }
    ],
    status: 'A_ARBITRER',
    recommendation: 'Option A (Migration immédiate du noyau sous réserve de maintenance nocturne).',
    budgetImpact: '45,000,000 FCFA',
    proofRequirement: 'Procès-verbal de basculement réseau & certificat d’isolation ANINF.'
  },
  {
    id: 'DEC-2026-092',
    title: 'Extension de la Fibre Optique Souveraine (Axe Libreville - Port-Gentil)',
    dossierRef: 'DOS-FO-2026-104',
    classification: 'INTERNE',
    urgency: 'CRITIQUE',
    deadline: '2026-08-20',
    department: 'Direction Générale des Télécommunications',
    responsible: 'Mme Paulina NZANG (DG Télécoms)',
    facts: [
      'Le tronçon maritime a atteint 88% de déploiement effectif.',
      'Un blocage administratif sur l’autorisation de raccordement portuaire retarde l’atterrissage.',
      'Le Ministère des Transports Maritimes exige une convention interministérielle spécifique.'
    ],
    sources: [
      { name: 'Procuration Maritime N°77', type: 'Note Interministérielle', date: '2026-08-01' }
    ],
    options: [
      {
        id: 'opt-201',
        title: 'Option 1 : Signature immédiate de la convention tripartite d’urgence',
        advantages: 'Déblocage des travaux sous 48 heures.',
        risks: 'Nécessite arbitrage ministériel direct avec le Ministère des Transports.',
        impact: 'Reprise immédiate du calendrier 100 Jours.'
      }
    ],
    status: 'BLOQUE_INTERMINISTERIEL',
    blockingEntity: 'Ministère des Transports et de la Marine Marchande',
    recommendation: 'Demander un arbitrage en Conseil Interministériel jeudi matin.',
    budgetImpact: '120,000,000 FCFA',
    proofRequirement: 'Arrêté d’atterrissage signé par les deux Ministres.'
  }
];

export const MOCK_100_DAYS_ROADMAP = {
  currentDay: 42,
  totalDays: 100,
  targetDate: '2026-10-15',
  stats: {
    totalEngagements: 14,
    onTrack: 9,
    watchNeeded: 3,
    atRisk: 2
  },
  items: [
    {
      id: 'ENG-01',
      title: 'Lancement du Portail Souverain du Citoyen Gabonais',
      progress: 78,
      status: 'ON_TRACK',
      owner: 'Direction du Numérique',
      deadline: 'Jour 55',
      proof: 'Rapport de pré-recette technique validé le 12 août.'
    },
    {
      id: 'ENG-02',
      title: 'Raccordement des 10 premiers centres de santé ruraux à l’IA Médicale',
      progress: 45,
      status: 'AT_RISK',
      owner: 'Direction Santé Numérique',
      deadline: 'Jour 60',
      blocker: 'Retard de fourniture des kits solaires par le prestataire.',
      proof: 'Factures d’équipement en attente de déblocage budgétaire.'
    },
    {
      id: 'ENG-03',
      title: 'Numérisation du Registre National du Commerce',
      progress: 62,
      status: 'WATCH_NEEDED',
      owner: 'DG Commerce & Numérique',
      deadline: 'Jour 70',
      proof: 'Base de données nettoyée à 85%.'
    }
  ]
};

export const MOCK_PERFORMANCE_CONTRACT = {
  year: 2026,
  scoreGlobal: '81.4%',
  objectives: [
    {
      id: 'OBJ-1',
      code: 'PERF-2026-A',
      title: 'Taux de souveraineté des hébergements publics',
      target: '85%',
      achieved: '68%',
      variance: '-17%',
      confidence: 'ÉLEVÉE (Donnée audité ANINF)',
      riskLevel: 'MOYEN',
      owner: 'SG / DIN',
      budgetConsumed: '71%',
      anomaly: 'Le budget est consommé à 71% alors que l’objectif n’est atteint qu’à 68%.'
    },
    {
      id: 'OBJ-2',
      code: 'PERF-2026-B',
      title: 'Délai moyen de délivrance des habilitations numériques',
      target: '24 heures',
      achieved: '14 heures',
      variance: '+41%',
      confidence: 'TRÈS ÉLEVÉE (Automatisation complète)',
      riskLevel: 'FAIBLE',
      owner: 'Direction de la Cybersécurité',
      budgetConsumed: '48%',
      anomaly: null
    },
    {
      id: 'OBJ-3',
      code: 'PERF-2026-C',
      title: 'Taux d’exécution des directives ministérielles signées',
      target: '90%',
      achieved: '64%',
      variance: '-26%',
      confidence: 'MOYENNE (Mise à jour manquante depuis 12 jours sur 2 DGs)',
      riskLevel: 'ÉLEVÉ',
      owner: 'Secrétariat Général',
      budgetConsumed: '82%',
      anomaly: 'Retard d’exécution structurel sur les directives dépendant du Ministère du Budget.'
    }
  ]
};

export const MOCK_INTERMINISTERIAL_MAP = [
  {
    from: 'Ministère de l’Économie Numérique',
    to: 'Ministère du Budget & des Comptes Publics',
    project: 'Financement du Programme Souverain IA',
    status: 'EN_ATTENTE_FINANCIERE',
    lagDays: 14,
    impact: 'Blocage des commandes de serveurs GPU souverains.'
  },
  {
    from: 'Ministère de l’Économie Numérique',
    to: 'Ministère de la Justice',
    project: 'Projet de Loi sur la Protection des Données Souveraines',
    status: 'AVIS_JURIDIQUE_REQUIS',
    lagDays: 8,
    impact: 'Passage en Conseil des Ministres différé.'
  },
  {
    from: 'Ministère de l’Économie Numérique',
    to: 'Ministère des Transports',
    project: 'Atterrissage Fibre Optique Port-Gentil',
    status: 'CONVENTION_PORTUAIRE',
    lagDays: 19,
    impact: 'Arrêt temporaire du chantier maritime.'
  }
];

export const MOCK_PREPARE_ME = {
  meetingTitle: 'Session d’Arbitrage Interministériel sur la Souveraineté Données',
  time: 'Aujourd’hui à 10:30 (dans 35 minutes)',
  location: 'Cabinet du Ministre — Salle du Conseil',
  participants: [
    { name: 'Dr. Marc ONDO', role: 'DG Infrastructures Numériques', stance: 'Favorable Option A' },
    { name: 'M. Jean-Luc MBOUMBA', role: 'Conseiller Juridique SGG', stance: 'Prudent sur le délai' },
    { name: 'Mme Paulina NZANG', role: 'DG Télécoms', stance: 'Demande budget additionnel' }
  ],
  context60s: 'Cette réunion doit trancher le basculement définitif du noyau de données de l’état-civil sur l’infrastructure du Data Center National de Libreville.',
  pastCommitments: [
    { text: 'Finalisation du dossier de sécurité avant le 10 août', status: 'TENU' },
    { text: 'Avis du Secrétariat Général du Gouvernement', status: 'NON_TENU (Retard 48h)' }
  ],
  pointsOfDisagreement: [
    'Le Ministère du Budget souhaite reporter l’engagement financier au trimestre T4.',
    'L’ANINF exige la migration immédiate pour des raisons de cybersécurité.'
  ],
  keyQuestionsToAsk: [
    '« M. le Conseiller, quel est l’impact juridique exact d’un report de 30 jours sur notre conformité ? »',
    '« M. le DG, pouvez-vous garantir qu’aucun guichet citoyen ne sera indisponible lundi matin ? »',
    '« Quelle est l’alternative si le Ministère du Budget ne valide pas la dérogation cet après-midi ? »'
  ],
  possibleDecisions: [
    'Signer l’Arrêté de Migration Immédiate avec clause de sauvegarde.',
    'Accorder une dérogation temporaire de 15 jours sous réserve d’audit hebdomadaire.'
  ]
};

export const MOCK_INSTRUCTIONS = [
  {
    id: 'INST-2026-11',
    ref: 'DIR-2026-04',
    title: 'Audit de sécurité des serveurs ministériels secondaires',
    assignedTo: 'Inspection Générale des Services',
    issuedDate: '2026-08-12',
    dueDate: '2026-08-22',
    progress: 70,
    status: 'IN_PROGRESS'
  },
  {
    id: 'INST-2026-12',
    ref: 'DIR-2026-05',
    title: 'Mise en conformité du registre d’habilitation des conseillers',
    assignedTo: 'Directeur de Cabinet',
    issuedDate: '2026-08-15',
    dueDate: '2026-08-18',
    progress: 100,
    status: 'COMPLETED'
  },
  {
    id: 'INST-2026-13',
    ref: 'DIR-2026-06',
    title: 'Plan de réversibilité des contrats clouds étrangers actuels',
    assignedTo: 'Direction des Affaires Juridiques',
    issuedDate: '2026-08-01',
    dueDate: '2026-08-14',
    progress: 40,
    status: 'OVERDUE'
  }
];

export const MOCK_AGENDA = [
  { time: '08:30', title: 'Point d’alignement avec le Directeur de Cabinet', type: 'INTERNE', location: 'Bureau du Ministre' },
  { time: '10:30', title: 'Session d’Arbitrage Interministériel Souveraineté Données', type: 'ARBITRAGE', prepareAvailable: true },
  { time: '14:00', title: 'Audience Ambassadeur & Partenaires Numériques', type: 'DIPLOMATIE', location: 'Salon d’Honneur' },
  { time: '16:30', title: 'Revue de la Feuille de Route 100 Jours avec les DGs', type: 'PILOTAGE', location: 'Salle de Conférence' }
];

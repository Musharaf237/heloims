import { IconHeart, IconBrain, IconBone, IconEye, IconActivity, IconMicroscope, IconBaby, IconTooth } from './icons';

export const SERVICES = [
  { icon: <IconHeart />, titre: 'Cardiologie', desc: 'Bilan cardiovasculaire, ECG, Holter, suivi des pathologies cardiaques et de l\'hypertension.', details: ['Électrocardiogramme (ECG)', 'Holter ECG 24h et tensionnel', 'Échographie cardiaque', 'Test d\'effort', 'Suivi insuffisance cardiaque'], slug: 'cardiologie' },
  { icon: <IconBrain />, titre: 'Neurologie', desc: 'Céphalées, troubles du sommeil, suivi neurologique complet et maladies neurodégénératives.', details: ['Consultation céphalées et migraines', 'Bilan troubles du sommeil', 'Suivi Parkinson et SEP', 'Électroencéphalogramme (EEG)', 'Neurostimulation'], slug: 'neurologie' },
  { icon: <IconBone />, titre: 'Rhumatologie', desc: 'Arthrose, lombalgies, maladies articulaires inflammatoires et rééducation fonctionnelle.', details: ['Infiltrations articulaires', 'Bilan ostéoporose', 'Suivi polyarthrite rhumatoïde', 'Rééducation fonctionnelle', 'Traitement lombalgies chroniques'], slug: 'rhumatologie' },
  { icon: <IconEye />, titre: 'Ophtalmologie', desc: 'Contrôle de la vue, fond d\'œil, prescription optique et chirurgie réfractive.', details: ['Examen de la réfraction', 'Fond d\'œil numérisé', 'Dépistage glaucome', 'Traitement DMLA', 'Prescription verres et lentilles'], slug: 'ophtalmologie' },
  { icon: <IconActivity />, titre: 'Médecine générale', desc: 'Consultations, prévention, certificats médicaux, vaccination et médecine du travail.', details: ['Consultations sans rendez-vous', 'Suivi maladies chroniques', 'Vaccinations adulte et enfant', 'Certificats médicaux', 'Médecine du voyage'], slug: 'medecine-generale' },
  { icon: <IconMicroscope />, titre: 'Biologie médicale', desc: 'Prélèvements sur site, analyses complètes et résultats sécurisés en ligne sous 24h.', details: ['Prise de sang sur rendez-vous', 'Bilan lipidique et diabétique', 'Sérologies et microbiologie', 'Bilan hormonal', 'Résultats via espace patient'], slug: 'biologie' },
  { icon: <IconBaby />, titre: 'Pédiatrie', desc: 'Suivi de croissance, vaccinations, consultations nourrissons et adolescents.', details: ['Consultations nourrissons', 'Suivi courbe de croissance', 'Vaccinations calendrier officiel', 'Bilan développement psychomoteur', 'Consultations adolescents'], slug: 'pediatrie' },
  { icon: <IconTooth />, titre: 'Dentisterie', desc: 'Soins conservateurs, implantologie, orthodontie adulte et urgences dentaires.', details: ['Détartrage et soins conservateurs', 'Pose d\'implants dentaires', 'Orthodontie aligneurs adulte', 'Blanchiment dentaire', 'Prothèses et bridges'], slug: 'dentisterie' },
];

export const MEDECINS = [
  { nom: 'Dr. Sophie Mercier', specialite: 'Cardiologue', experience: '18 ans d\'expérience', formation: 'CHU de Paris — Hôpital Lariboisière', langues: ['Français', 'Anglais'], disponible: true, photo: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=400&h=480&fit=crop&auto=format', alt: 'Dr. Sophie Mercier, cardiologue', bio: 'Spécialiste des cardiopathies ischémiques et de l\'insuffisance cardiaque, le Dr Mercier accompagne ses patients avec rigueur et bienveillance.' },
  { nom: 'Dr. Antoine Roussel', specialite: 'Médecin généraliste', experience: '12 ans d\'expérience', formation: 'Université Paris Descartes', langues: ['Français', 'Espagnol'], disponible: true, photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=480&fit=crop&auto=format', alt: 'Dr. Antoine Roussel, médecin généraliste', bio: 'Médecin de famille engagé, le Dr Roussel assure le suivi global de ses patients.' },
  { nom: 'Dr. Isabelle Fontaine', specialite: 'Neurologue', experience: '15 ans d\'expérience', formation: 'CHU de Lyon — Neurologie', langues: ['Français', 'Anglais', 'Italien'], disponible: false, photo: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=400&h=480&fit=crop&auto=format', alt: 'Dr. Isabelle Fontaine, neurologue', bio: 'Experte en épilepsie et troubles du sommeil, le Dr Fontaine propose une prise en charge pluridisciplinaire.' },
  { nom: 'Dr. Marc Lefebvre', specialite: 'Pédiatre', experience: '20 ans d\'expérience', formation: 'Hôpital Necker — Enfants malades', langues: ['Français'], disponible: true, photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=480&fit=crop&auto=format', alt: 'Dr. Marc Lefebvre, pédiatre', bio: 'Pédiatre passionné, le Dr Lefebvre accompagne les enfants et leurs familles.' },
  { nom: 'Dr. Camille Aubert', specialite: 'Rhumatologue', experience: '10 ans d\'expérience', formation: 'CHU de Bordeaux — Rhumatologie', langues: ['Français', 'Anglais'], disponible: true, photo: 'https://images.unsplash.com/photo-1607990281513-7c21a0b71a94?w=400&h=480&fit=crop&auto=format&crop=face', alt: 'Dr. Camille Aubert, rhumatologue', bio: 'Spécialisée dans les maladies inflammatoires articulaires.' },
  { nom: 'Dr. Thomas Girard', specialite: 'Ophtalmologue', experience: '9 ans d\'expérience', formation: 'Clinique des 15-20 — Paris', langues: ['Français', 'Anglais'], disponible: true, photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=480&fit=crop&auto=format', alt: 'Dr. Thomas Girard, ophtalmologue', bio: 'Formé à la chirurgie réfractive et au traitement de la DMLA.' },
];

export const TEMOIGNAGES = [
  { nom: 'Marie-Claire D.', note: 5, date: 'Septembre 2026', service: 'Cardiologie', texte: 'Accueil chaleureux, équipe très professionnelle. Je recommande vivement.' },
  { nom: 'Pierre G.', note: 5, date: 'Août 2026', service: 'Médecine générale', texte: 'Un centre de santé comme on en voit peu : locaux modernes et personnel attentionné.' },
  { nom: 'Sylvie M.', note: 5, date: 'Juillet 2026', service: 'Urgences', texte: 'L\'efficacité et la bienveillance de l\'équipe m\'ont vraiment rassurée.' },
  { nom: 'Jean-Paul B.', note: 5, date: 'Juin 2026', service: 'Pédiatrie', texte: 'Le Dr Lefebvre est formidable avec notre fils.' },
];
export const HORAIRES = [
  { jour: 'Lundi – Vendredi', heures: '08h00 – 20h00' }, { jour: 'Samedi', heures: '09h00 – 17h00' }, { jour: 'Dimanche', heures: 'Fermé (urgences uniquement)' }, { jour: 'Urgences', heures: '7j/7, 24h/24' },
];
export const NAV_LINKS = [
  { label: 'Accueil', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Nos médecins', href: '/medecins' }, { label: 'Prendre RDV', href: '/rendez-vous' }, { label: 'Contact', href: '/contact' },
];

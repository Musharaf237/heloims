import {
  IconActivity,
  IconBaby,
  IconHospital,
  IconMicroscope,
  IconPill,
  IconScalpel,
  IconStethoscope,
  IconSyringe,
  IconUsers,
} from './icons';

export const CONTACT_INFO = {
  location: 'Douala, Nyalla Pariso',
  phones: [
    { label: '+237 699 803 324', href: 'tel:+237699803324' },
    { label: '+237 676 358 484', href: 'tel:+237676358484' },
  ],
  email: 'contact@heloimsante.fr',
};

export const SERVICES = [
  { icon: <IconStethoscope />, titre: 'Consultations générales et prénatales', desc: 'Consultations médicales courantes et suivi prénatal pour accompagner les futures mamans.', details: ['Consultations générales', 'Consultations prénatales'], slug: 'consultations' },
  { icon: <IconUsers />, titre: 'Planning familial', desc: 'Un espace d’écoute et de conseil autour de la santé reproductive et de la vie familiale.', details: ['Conseils en planning familial', 'Accompagnement et information'], slug: 'planning-familial' },
  { icon: <IconScalpel />, titre: 'Petite chirurgie', desc: 'Prise en charge de petites interventions chirurgicales.', details: ['Petites interventions chirurgicales'], slug: 'petite-chirurgie' },
  { icon: <IconSyringe />, titre: 'Circoncision', desc: 'Service de circoncision proposé par notre établissement.', details: ['Prise de rendez-vous pour une circoncision'], slug: 'circoncision' },
  { icon: <IconSyringe />, titre: 'Vaccinations', desc: 'Vaccinations pour vous accompagner dans la prévention et la protection de votre santé.', details: ['Consultation de vaccination'], slug: 'vaccinations' },
  { icon: <IconActivity />, titre: 'Kinésithérapie', desc: 'Séances de kinésithérapie pour vous accompagner dans votre rééducation.', details: ['Séances de kinésithérapie'], slug: 'kinesitherapie' },
  { icon: <IconMicroscope />, titre: 'Laboratoire', desc: 'Un laboratoire pour vos examens et analyses médicales.', details: ['Examens de laboratoire', 'Analyses médicales'], slug: 'laboratoire' },
  { icon: <IconHospital />, titre: 'Hospitalisation', desc: 'Accueil et prise en charge des patients nécessitant une hospitalisation.', details: ['Accueil pour hospitalisation'], slug: 'hospitalisation' },
  { icon: <IconPill />, titre: 'Parapharmacie', desc: 'Des produits de parapharmacie pour vous accompagner au quotidien.', details: ['Produits de parapharmacie'], slug: 'parapharmacie' },
  { icon: <IconBaby />, titre: 'Accouchement', desc: 'Accompagnement des futures mamans pour leur accouchement.', details: ['Accompagnement à l’accouchement'], slug: 'accouchement' },
];

export const MEDECINS = [
  { nom: 'TPMS-AM', specialite: 'Responsable du laboratoire', experience: '', formation: '', langues: [], disponible: true, photo: '/images/responsable-laboratoire.jpeg', alt: 'TPMS-AM, responsable du laboratoire', bio: 'Responsable du laboratoire du centre Heloimsanté.' },
  { nom: 'Infirmière supérieure', specialite: 'Infirmière supérieure', experience: '', formation: '', langues: [], disponible: true, photo: '/images/infirmiere-superieure.jpeg', alt: 'Infirmière supérieure du centre Heloimsanté', bio: 'Infirmière supérieure du centre Heloimsanté.' },
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

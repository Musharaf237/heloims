import { Link } from 'react-router';
import { CONTACT_INFO, MEDECINS, SERVICES, TEMOIGNAGES } from '../lib/data';
import {
  IconAlertCircle,
  IconArrowRight,
  IconAward,
  IconCalendar,
  IconCheck,
  IconClock,
  IconPhone,
  IconShield,
  IconStar,
  IconUsers,
} from '../lib/icons';

const stats = [
  { icon: <IconUsers />, value: '12 000+', label: 'Patients suivis' },
  { icon: <IconAward />, value: '15 ans', label: "D'excellence médicale" },
  { icon: <IconShield />, value: '24 spécialistes', label: 'Médecins certifiés' },
  { icon: <IconClock />, value: '48h', label: 'Délai de RDV moyen' },
];

const commitments = [
  'Sans dépassement d’honoraires',
  'Accessible PMR',
  'Tiers payant accepté',
];

const certifications = [
  { icon: <IconShield />, label: 'Certifié HAS — Haute Autorité de Santé' },
  { icon: <IconCheck />, label: 'ISO 15189 — Biologie médicale' },
  { icon: <IconAward />, label: 'Secteur 1 — Tarifs maîtrisés' },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-royal-deep text-white">
        <img
          src="/images/heloimsante-consultation.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="home-hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-50">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Centre conventionné · Consultations disponibles
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Votre santé,
              <br />
              <span className="text-blue-200">notre priorité</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-blue-100">
              Un centre de santé pluridisciplinaire à taille humaine. Des médecins engagés, des soins de qualité, et une équipe dédiée à votre bien-être depuis 2008.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/rendez-vous"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-royal shadow-lg transition hover:bg-blue-50"
              >
                <IconCalendar />
                Prendre rendez-vous
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Découvrir nos services
                <IconArrowRight />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100">
              {commitments.map((commitment) => (
                <li key={commitment} className="inline-flex items-center gap-2">
                  <IconCheck />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14" aria-label="Le centre en chiffres">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-3 flex justify-center text-royal">{stat.icon}</div>
              <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-4 border-t border-slate-100 px-4 pt-8 text-sm font-medium text-slate-600 sm:px-6 lg:px-8">
          {certifications.map((certification) => (
            <div key={certification.label} className="inline-flex items-center gap-2">
              <span className="text-royal">{certification.icon}</span>
              {certification.label}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-royal">Nos services</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Des soins pour toute la famille
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-royal hover:text-royal-light">
              Voir tous les services
              <IconArrowRight />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 6).map((service) => (
              <Link
                to="/services"
                key={service.titre}
                className="surface-card rounded-2xl bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-royal-soft text-royal">
                  {service.icon}
                </div>
                <h3 className="mb-2 font-display font-bold text-slate-900">{service.titre}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-royal">Notre équipe</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Nos spécialistes à votre écoute
              </h2>
            </div>
            <Link to="/medecins" className="inline-flex items-center gap-2 font-semibold text-royal hover:text-royal-light">
              Voir toute l’équipe
              <IconArrowRight />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEDECINS.slice(0, 3).map((medecin) => (
              <article key={medecin.nom} className="surface-card overflow-hidden rounded-2xl bg-white">
                <img
                  src={medecin.photo}
                  alt={medecin.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <p className="text-sm font-medium text-royal">{medecin.specialite}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-slate-900">{medecin.nom}</h3>
                  <Link
                    to="/rendez-vous"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-royal hover:text-royal-light"
                  >
                    Prendre RDV
                    <IconArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-royal-deep py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex gap-5">
            <div className="hidden shrink-0 text-red-300 sm:block"><IconAlertCircle /></div>
            <div>
              <span className="mb-2 inline-flex rounded-full bg-red-400/15 px-3 py-1 text-xs font-semibold text-red-200">
                Urgences 24h/7j
              </span>
              <h2 className="font-display text-2xl font-bold">Une situation d’urgence médicale ?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100">
                Notre équipe est disponible 7j/7, 24h/24. En cas de doute, n’attendez pas. Pour toute urgence vitale, composez le{' '}
                <strong className="text-white">15 (SAMU)</strong> ou le <strong className="text-white">18 (Pompiers)</strong>.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            {CONTACT_INFO.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-royal transition hover:bg-blue-50"
              >
                <IconPhone />
                {phone.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-royal">Témoignages</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Ce que disent nos patients
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex text-amber-400" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }, (_, index) => <IconStar key={index} />)}
              </div>
              <span className="text-sm font-medium text-slate-600">4.9/5 — 847 avis Google</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {TEMOIGNAGES.slice(0, 3).map((temoignage) => (
              <article key={temoignage.nom} className="surface-card rounded-2xl bg-white p-6">
                <div className="mb-4 flex text-amber-400" aria-label={`${temoignage.note} étoiles sur 5`}>
                  {Array.from({ length: temoignage.note }, (_, index) => <IconStar key={index} />)}
                </div>
                <blockquote className="text-sm leading-relaxed text-slate-700">“{temoignage.texte}”</blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal-soft font-bold text-royal">
                    {temoignage.nom.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{temoignage.nom}</p>
                    <p className="text-xs text-slate-500">{temoignage.service} · {temoignage.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-royal px-4 py-14 text-center text-white sm:py-16">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Prêt à prendre soin de vous ?</h2>
        <p className="mt-3 text-blue-100">Prenez rendez-vous en ligne en moins de 2 minutes, 7j/7.</p>
        <Link
          to="/rendez-vous"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-royal shadow-lg transition hover:bg-blue-50"
        >
          <IconCalendar />
          Prendre rendez-vous maintenant
        </Link>
      </section>
    </>
  );
}

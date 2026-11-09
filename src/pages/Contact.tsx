import { Link } from 'react-router';
import { CONTACT_INFO, HORAIRES } from '../lib/data';
import { IconChevronRight, IconClock, IconMail, IconMapPin, IconPhone } from '../lib/icons';

export default function Contact() {
  return (
    <>
      <section className="page-hero py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
            <Link to="/">Accueil</Link><IconChevronRight /><span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Nous contacter</h1>
          <p className="text-blue-200 text-lg">Notre équipe vous accueille et répond à toutes vos questions.</p>
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 surface-card">
              <div className="text-royal mb-4"><IconMapPin /></div>
              <h2 className="font-bold mb-2">Adresse</h2>
              <p className="text-sm text-slate-500">{CONTACT_INFO.location}</p>
            </div>
            {CONTACT_INFO.phones.map((phone, index) => (
              <div key={phone.href} className="bg-white rounded-2xl p-6 surface-card">
                <div className="text-royal mb-4"><IconPhone /></div>
                <h2 className="font-bold mb-2">{index === 0 ? 'Téléphone' : 'Téléphone secondaire'}</h2>
                <a className="text-sm text-slate-500 hover:text-royal" href={phone.href}>{phone.label}</a>
              </div>
            ))}
            <div className="bg-white rounded-2xl p-6 surface-card">
              <div className="text-royal mb-4"><IconMail /></div>
              <h2 className="font-bold mb-2">E-mail</h2>
              <a className="text-sm text-slate-500 hover:text-royal" href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </div>
          </div>
          <form className="bg-white rounded-3xl p-8 surface-card" onSubmit={event => event.preventDefault()}>
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <div className="space-y-4">
              <input required placeholder="Nom complet" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
              <input required type="email" placeholder="E-mail" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
              <input placeholder="Sujet" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
              <textarea required rows={5} placeholder="Votre message" className="w-full border border-slate-200 rounded-xl px-4 py-3" />
              <button className="w-full bg-royal text-white font-bold py-4 rounded-xl">Envoyer le message</button>
            </div>
          </form>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Horaires d'ouverture</h2>
          <div className="rounded-2xl border overflow-hidden">
            {HORAIRES.map((horaire, index) => (
              <div key={horaire.jour} className={`flex justify-between p-5 ${index ? 'border-t' : ''}`}>
                <span className="font-semibold">{horaire.jour}</span>
                <span className={horaire.jour === 'Urgences' ? 'text-red-600 font-bold' : 'text-slate-600'}>{horaire.heures}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

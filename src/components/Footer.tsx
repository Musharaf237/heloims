import { Link } from 'react-router';
import { SERVICES, NAV_LINKS } from '../lib/data';
import { IconMapPin, IconPhone, IconMail, IconClock } from '../lib/icons';

export default function Footer() {
  return <footer className="bg-royal-deep text-blue-200"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
      <div><Link to="/" className="flex items-center gap-2 mb-5"><div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center"><span className="text-white text-sm font-bold">+</span></div><span className="text-white font-bold text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>Centre Santé Lumière</span></Link><p className="text-sm leading-relaxed mb-5">Un centre de santé pluridisciplinaire engagé pour votre bien-être depuis 2008. Conventionné Secteur 1.</p></div>
      <div><h4 className="text-white font-semibold mb-4 text-sm">Spécialités</h4><ul className="space-y-2.5">{SERVICES.slice(0, 6).map((s) => <li key={s.titre}><Link to="/services" className="text-sm hover:text-white transition-colors">{s.titre}</Link></li>)}</ul></div>
      <div><h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4><ul className="space-y-2.5">{NAV_LINKS.map((l) => <li key={l.href}><Link to={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link></li>)}</ul></div>
      <div><h4 className="text-white font-semibold mb-4 text-sm">Nous contacter</h4><ul className="space-y-3 mb-5"><li className="flex items-start gap-2.5 text-sm"><IconMapPin /><span>47 rue de la Paix, 75002 Paris</span></li><li className="flex items-center gap-2.5 text-sm"><IconPhone /><a href="tel:+33142000000">01 42 00 00 00</a></li><li className="flex items-center gap-2.5 text-sm"><IconMail /><a href="mailto:contact@centrelumiere.fr">contact@centrelumiere.fr</a></li><li className="flex items-start gap-2.5 text-sm"><IconClock /><span>Lun–Ven : 08h–20h<br />Sam : 09h–17h</span></li></ul></div>
    </div><div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"><p>© 2026 Centre Santé Lumière. Tous droits réservés.</p><div className="flex flex-wrap justify-center gap-5">{['Mentions légales', 'Politique de confidentialité', 'Cookies', 'RGPD'].map((link) => <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>)}</div></div>
  </div></footer>;
}

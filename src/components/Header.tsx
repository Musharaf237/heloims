import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router';
import { NAV_LINKS } from '../lib/data';
import { IconCalendar, IconMenu, IconX, IconPhone } from '../lib/icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  const primaryNavLinks = NAV_LINKS.filter((link) => link.href !== '/rendez-vous');
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="bg-royal-deep text-white text-xs py-1.5 px-4 text-center hidden sm:flex items-center justify-center gap-4">
        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block" />Urgences 24h/7j</span>
        <a href="tel:+33142000000" className="font-semibold hover:text-blue-200 flex items-center gap-1"><IconPhone />01 42 00 00 00</a><span className="text-blue-300">·</span><span>47 rue de la Paix, 75002 Paris</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-16 lg:h-18">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Centre Santé Lumière — Accueil"><div className="relative w-10 h-10 rounded-xl bg-royal flex items-center justify-center shadow-sm shadow-blue-900/20"><span className="absolute w-4 h-1 rounded-full bg-white" /><span className="absolute h-4 w-1 rounded-full bg-white" /></div><div className="leading-tight"><span className="block text-base font-display font-bold text-royal">Centre Santé</span><span className="block text-xs font-light text-slate-500 tracking-wider uppercase">Lumière</span></div></Link>
        <nav className="hidden lg:flex items-center gap-1">{primaryNavLinks.map((link) => <NavLink key={link.href} to={link.href} end={link.href === '/'} className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-royal-soft text-royal' : 'text-slate-600 hover:text-royal hover:bg-slate-50'}`}>{link.label}</NavLink>)}</nav>
        <div className="flex items-center gap-3"><Link to="/rendez-vous" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-royal text-white text-sm font-semibold rounded-xl hover:bg-royal-dark active:scale-95 transition-all duration-150 shadow-md shadow-blue-900/15"><IconCalendar />Prendre rendez-vous</Link><button className="lg:hidden p-2 text-slate-600 hover:text-[#1E3A8A]" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} aria-controls="navigation-mobile">{menuOpen ? <IconX /> : <IconMenu />}</button></div>
      </div></div>
      {menuOpen && <div id="navigation-mobile" className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-2 shadow-lg">{primaryNavLinks.map((link) => <NavLink key={link.href} to={link.href} end={link.href === '/'} className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-[#1E3A8A]' : 'text-slate-700 hover:bg-slate-50'}`} onClick={() => setMenuOpen(false)}>{link.label}</NavLink>)}<Link to="/rendez-vous" className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-[#1E3A8A] text-white text-sm font-semibold rounded-xl" onClick={() => setMenuOpen(false)}><IconCalendar />Prendre rendez-vous</Link><a href="tel:+33142000000" className="flex items-center justify-center gap-2 px-5 py-3 bg-red-50 text-[#DC2626] text-sm font-semibold rounded-xl border border-red-100"><IconPhone />Urgences : 01 42 00 00 00</a></div>}
    </header>
  );
}

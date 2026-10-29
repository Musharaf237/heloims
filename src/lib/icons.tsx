import type { ReactNode } from 'react';

function Icon({ children, className = 'w-6 h-6', fill = 'none' }: { children?: ReactNode; className?: string; fill?: string }) {
  return <svg viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>{children ?? <><circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/></>}</svg>;
}
export const IconHeart = () => <Icon><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/></Icon>;
export const IconBrain = () => <Icon/>;
export const IconBone = () => <Icon/>;
export const IconEye = () => <Icon><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></Icon>;
export const IconActivity = () => <Icon><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></Icon>;
export const IconMicroscope = () => <Icon/>;
export const IconBaby = () => <Icon><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.4 8.4 0 0 1 13 0"/></Icon>;
export const IconTooth = () => <Icon/>;
export const IconPhone = () => <Icon className="w-5 h-5"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 4.7 12a19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.9 8.7a16 16 0 0 0 6.3 6.3l1-1a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.9 2.6z"/></Icon>;
export const IconMapPin = () => <Icon className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></Icon>;
export const IconClock = () => <Icon className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></Icon>;
export const IconMail = () => <Icon className="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></Icon>;
export const IconStar = () => <Icon className="w-4 h-4" fill="currentColor"><polygon points="12 2 15 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.3"/></Icon>;
export const IconMenu = () => <Icon><path d="M3 6h18M3 12h18M3 18h18"/></Icon>;
export const IconX = () => <Icon><path d="m18 6-12 12M6 6l12 12"/></Icon>;
export const IconShield = () => <Icon className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Icon>;
export const IconAward = () => <Icon className="w-7 h-7"><circle cx="12" cy="8" r="6"/><path d="m15.5 12.9 1.5 9.1-5-3-5 3 1.5-9.1"/></Icon>;
export const IconUsers = () => <Icon className="w-7 h-7"><circle cx="9" cy="7" r="4"/><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M16 3a4 4 0 0 1 0 8M23 21v-2a4 4 0 0 0-3-3.9"/></Icon>;
export const IconCalendar = () => <Icon className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></Icon>;
export const IconAlertCircle = () => <Icon className="w-8 h-8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></Icon>;
export const IconChevronRight = () => <Icon className="w-4 h-4"><path d="m9 18 6-6-6-6"/></Icon>;
export const IconCheck = () => <Icon className="w-3 h-3"><path d="m20 6-11 11-5-5"/></Icon>;
export const IconArrowRight = () => <Icon className="w-5 h-5"><path d="M5 12h14M12 5l7 7-7 7"/></Icon>;

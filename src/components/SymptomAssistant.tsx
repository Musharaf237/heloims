import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';

type Guidance = {
  title: string;
  message: string;
  href?: string;
  linkLabel?: string;
  urgent?: boolean;
};

function normalize(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getGuidance(symptoms: string): Guidance {
  const text = normalize(symptoms);

  if (
    /\b(douleur.{0,20}(poitrine|thoracique)|poitrine.{0,20}(serree|oppression)|difficulte a respirer|mal a respirer|respire plus|ne respire plus|etouffement|perte de connaissance|inconscient|saignement abondant|hemorragie|convulsion|paralysie|visage.{0,20}(deforme|paralyse))\b/.test(text)
  ) {
    return {
      title: 'Une prise en charge urgente peut être nécessaire',
      message:
        'N’attendez pas une réponse en ligne : contactez immédiatement les services d’urgence locaux ou rendez-vous au service d’urgence le plus proche. Si possible, demandez à quelqu’un de vous accompagner.',
      urgent: true,
    };
  }

  if (/\b(enfant|bebe|nourrisson|pediatrie|pediatre)\b/.test(text)) {
    return {
      title: 'Orientation : pédiatrie',
      message:
        'Pour un symptôme concernant un enfant, le service de pédiatrie est le plus adapté pour demander une évaluation.',
      href: '/rendez-vous',
      linkLabel: 'Demander un rendez-vous',
    };
  }

  if (/\b(grossesse|enceinte|prenatal|accouchement|femme enceinte)\b/.test(text)) {
    return {
      title: 'Orientation : consultations prénatales',
      message:
        'Le service de consultations prénatales peut vous orienter. En cas de douleur intense, de saignement important ou de malaise, contactez immédiatement les urgences locales.',
      href: '/rendez-vous',
      linkLabel: 'Demander un rendez-vous',
    };
  }

  if (/\b(contraception|pilule|implant|sterilet|planning familial|regles|menstruation)\b/.test(text)) {
    return {
      title: 'Orientation : planning familial',
      message:
        'Le service de planning familial pourra répondre à vos questions et vous orienter selon votre situation.',
      href: '/services',
      linkLabel: 'Voir les services',
    };
  }

  if (/\b(analyse|prise de sang|laboratoire|resultat|examen biologique)\b/.test(text)) {
    return {
      title: 'Orientation : laboratoire',
      message:
        'Le laboratoire pourra vous renseigner sur les examens. Pour savoir quels examens sont adaptés à vos symptômes, demandez d’abord conseil à un professionnel de santé.',
      href: '/services',
      linkLabel: 'Voir les services',
    };
  }

  if (/\b(kinesitherapie|kine|reeducation|douleur musculaire|articulation|mal au dos)\b/.test(text)) {
    return {
      title: 'Orientation : kinésithérapie',
      message:
        'Le service de kinésithérapie peut vous renseigner sur la prise en charge. Si la douleur est intense, nouvelle ou s’aggrave, demandez d’abord un avis médical.',
      href: '/services',
      linkLabel: 'Voir les services',
    };
  }

  return {
    title: 'Orientation : consultation générale',
    message:
      'Je ne peux pas déterminer la cause de vos symptômes. L’équipe de consultation générale pourra évaluer votre situation et vous orienter vers le service approprié.',
    href: '/rendez-vous',
    linkLabel: 'Demander un rendez-vous',
  };
}

export default function SymptomAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [symptoms, setSymptoms] = useState('');
  const [guidance, setGuidance] = useState<Guidance | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const description = symptoms.trim();
    if (!description) return;
    setGuidance(getGuidance(description));
  }

  function startOver() {
    setSymptoms('');
    setGuidance(null);
  }

  return (
    <>
      {isOpen && (
        <section
          aria-label="Assistant d’orientation santé"
          className="fixed bottom-36 right-4 z-50 flex max-h-[min(34rem,calc(100dvh-11rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 sm:right-6"
        >
          <div className="flex items-start justify-between gap-4 bg-royal px-5 py-4 text-white">
            <div>
              <h2 className="font-bold">Assistant d’orientation</h2>
              <p className="mt-1 text-xs text-blue-100">Une première indication, sans diagnostic</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer l’assistant"
              className="rounded-lg px-2 py-1 text-xl leading-none hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
            >
              ×
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto p-5">
            <p className="rounded-xl bg-slate-100 p-3 text-sm leading-relaxed text-slate-700">
              Décrivez brièvement ce que vous ressentez. Je vous orienterai vers un service du centre. En cas d’urgence, contactez immédiatement les services d’urgence locaux.
            </p>

            {guidance && (
              <div
                role="status"
                className={`rounded-xl p-4 text-sm ${guidance.urgent ? 'bg-red-50 text-red-900 ring-1 ring-red-200' : 'bg-blue-50 text-slate-800'}`}
              >
                <h3 className="font-bold">{guidance.title}</h3>
                <p className="mt-2 leading-relaxed">{guidance.message}</p>
                {guidance.href && guidance.linkLabel && (
                  <Link
                    to={guidance.href}
                    className="mt-4 inline-flex rounded-lg bg-royal px-4 py-2 font-semibold text-white hover:bg-royal-light"
                  >
                    {guidance.linkLabel}
                  </Link>
                )}
                <button
                  type="button"
                  onClick={startOver}
                  className="mt-4 block font-semibold text-royal underline underline-offset-2"
                >
                  Décrire un autre symptôme
                </button>
              </div>
            )}

            {!guidance && (
              <form onSubmit={handleSubmit} className="space-y-3">
                <label htmlFor="symptom-description" className="block text-sm font-semibold text-slate-800">
                  Quels symptômes ressentez-vous ?
                </label>
                <textarea
                  id="symptom-description"
                  value={symptoms}
                  onChange={(event) => setSymptoms(event.target.value)}
                  rows={3}
                  maxLength={500}
                  required
                  placeholder="Ex. : j’ai de la fièvre depuis hier…"
                  className="w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-royal px-4 py-3 text-sm font-bold text-white hover:bg-royal-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
                >
                  Trouver le service adapté
                </button>
              </form>
            )}
          </div>

          <p className="border-t border-slate-100 px-5 py-3 text-xs leading-relaxed text-slate-500">
            Votre texte reste dans cette page et n’est pas enregistré ni transmis. Cet outil ne remplace pas l’avis d’un professionnel de santé.
          </p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Fermer l’assistant santé' : 'Ouvrir l’assistant santé'}
        className="fixed bottom-24 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-royal-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal sm:right-6"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h10M7 14h6m8-2a9 9 0 0 1-13.6 7.7L3 21l1.3-4.4A9 9 0 1 1 21 12Z" />
        </svg>
        Assistant santé
      </button>
    </>
  );
}

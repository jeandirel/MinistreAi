import React from 'react';
import { ArrowRight, CheckCircle2, FileCheck, ShieldCheck, UserCheck } from 'lucide-react';

export function DecisionToActionPage() {
  const steps = [
    { step: '1. Dossier & Sources', title: 'Note d’Évaluation DIN N°077', detail: 'Sources vérifiées ANINF', done: true },
    { step: '2. Options & Risques', title: 'Arbitrage 3 Options', detail: 'Matrice de risque validée par Conseillers', done: true },
    { step: '3. Décision Signée', title: 'Signature Ministérielle N°26-089', detail: '2026-08-18 à 08:45', done: true },
    { step: '4. Instruction Émise', title: 'Directive transmise au SG & DIN', detail: 'Délai de rigueur 7 jours', done: true },
    { step: '5. Exécution Terrain', title: 'Migration du noyau de données', detail: 'Progression 65% (En cours)', current: true },
    { step: '6. Preuve & Audit', title: 'Procès-verbal de basculement', detail: 'Attendu pour le 25 août', done: false }
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded uppercase">Traçabilité Inaltérable</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Decision → Action Engine</h1>
        <p className="text-xs text-slate-500 mt-1">Chaîne complète d’exécution de l'origine du dossier jusqu’à la preuve auditable.</p>
      </div>

      <div className="executive-card p-8 space-y-6">
        <h2 className="font-editorial font-bold text-xl text-sovereign-navy">Traçabilité de la Décision DEC-2026-089</h2>

        <div className="relative border-l-2 border-sovereign-blue ml-4 space-y-6 pl-6">
          {steps.map((s, idx) => (
            <div key={idx} className="relative">
              <div className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-2 ${
                s.current ? 'bg-authority-gold border-sovereign-navy ring-4 ring-yellow-100' :
                s.done ? 'bg-trust-green border-white' : 'bg-slate-300 border-white'
              }`} />
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1">
                <span className="font-mono text-[10px] font-bold text-sovereign-blue uppercase">{s.step}</span>
                <h3 className="font-bold text-sm text-slate-900">{s.title}</h3>
                <p className="text-xs text-slate-500 font-mono">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Scale, FileText, AlertTriangle, CheckCircle, ArrowRight, ShieldCheck, User, Clock, Building2 } from 'lucide-react';

export function DecisionObjectCard({ decision, onArbitrate }) {
  const [selectedOption, setSelectedOption] = useState(decision.options[0]?.id);
  const [validated, setValidated] = useState(decision.status === 'VALIDE');

  return (
    <article className="executive-card p-6 space-y-6 relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              {decision.id}
            </span>
            <span className={`badge-classification badge-${decision.classification.toLowerCase()}`}>
              {decision.classification}
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Dossier Réf: <strong className="text-slate-700">{decision.dossierRef}</strong>
            </span>
          </div>
          <h3 className="font-editorial font-bold text-xl text-sovereign-navy leading-snug">
            {decision.title}
          </h3>
        </div>

        <div className="flex flex-col items-end shrink-0">
          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
            decision.urgency === 'CRITIQUE' ? 'bg-red-100 text-red-800 border border-red-200' : 'bg-amber-100 text-amber-900 border border-amber-200'
          }`}>
            Échéance: {decision.deadline}
          </span>
          <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
            <Building2 className="w-3 h-3" />
            {decision.department}
          </span>
        </div>
      </div>

      {/* Decision Object Chain Visualizer Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">Chaîne de Décision Inaltérable</span>
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 overflow-x-auto gap-2 pb-1">
          <span className="px-2 py-1 bg-white border border-slate-200 rounded shrink-0">1. DOSSIER</span>
          <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="px-2 py-1 bg-white border border-slate-200 rounded shrink-0">2. FAITS</span>
          <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="px-2 py-1 bg-white border border-slate-200 rounded shrink-0">3. OPTIONS</span>
          <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="px-2 py-1 bg-amber-100 text-amber-900 font-bold border border-amber-300 rounded shrink-0">4. ARBITRAGE MINISTÈRE</span>
          <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="px-2 py-1 bg-white border border-slate-200 rounded shrink-0">5. DIRECTIVE</span>
          <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="px-2 py-1 bg-white border border-slate-200 rounded shrink-0">6. PREUVE AUDIT</span>
        </div>
      </div>

      {/* Facts & Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sovereign-blue flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-sovereign-blue" />
            Faits & Données Consolidées
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-700 list-disc pl-4">
            {decision.facts.map((fact, idx) => (
              <li key={idx} className="leading-relaxed">{fact}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sovereign-blue flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-trust-green" />
            Sources & Responsabilités
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1">
              <span>Responsable dossier:</span>
              <strong className="text-slate-800">{decision.responsible}</strong>
            </div>
            <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1">
              <span>Impact Budgétaire:</span>
              <strong className="text-sovereign-blue">{decision.budgetImpact}</strong>
            </div>
            <div className="text-[11px] text-slate-500">
              <span className="font-bold block text-slate-600 mb-1">Preuve requise à l'exécution:</span>
              <span className="font-mono bg-slate-50 p-1.5 rounded border border-slate-200 block text-slate-700">{decision.proofRequirement}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Options Matrix */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sovereign-navy flex items-center gap-1.5">
          <Scale className="w-3.5 h-3.5 text-authority-gold" />
          Options d'Arbitrage Ministériel Comparées
        </h4>

        <div className="grid grid-cols-1 gap-3">
          {decision.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-blue-50/50 border-sovereign-blue ring-1 ring-sovereign-blue shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-sovereign-navy">{opt.title}</span>
                  <input
                    type="radio"
                    name={`decision-opt-${decision.id}`}
                    checked={isSelected}
                    onChange={() => setSelectedOption(opt.id)}
                    className="accent-sovereign-blue"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-xs">
                  <div className="bg-emerald-50/70 p-2.5 rounded border border-emerald-200">
                    <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase block mb-1">Avantages</span>
                    <p className="text-slate-700 text-[11px]">{opt.advantages}</p>
                  </div>
                  <div className="bg-rose-50/70 p-2.5 rounded border border-rose-200">
                    <span className="font-mono text-[10px] font-bold text-rose-800 uppercase block mb-1">Risques majeurs</span>
                    <p className="text-slate-700 text-[11px]">{opt.risks}</p>
                  </div>
                  <div className="bg-amber-50/70 p-2.5 rounded border border-amber-200">
                    <span className="font-mono text-[10px] font-bold text-amber-900 uppercase block mb-1">Impact Exécutif</span>
                    <p className="text-slate-700 text-[11px]">{opt.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommendation & Action Bar */}
      <div className="p-4 bg-sovereign-navy text-white rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-authority-gold uppercase tracking-wider font-bold block">Recommandation du Cabinet (IA + Conseillers) :</span>
          <p className="text-xs text-slate-200 font-medium">{decision.recommendation}</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              setValidated(true);
              if (onArbitrate) onArbitrate(decision, selectedOption);
            }}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md flex items-center gap-2 ${
              validated
                ? 'bg-trust-green text-white'
                : 'bg-authority-gold hover:bg-yellow-400 text-sovereign-navy'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{validated ? 'Arbitrage Validé & Signé' : 'Valider & Émettre l’Instruction'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

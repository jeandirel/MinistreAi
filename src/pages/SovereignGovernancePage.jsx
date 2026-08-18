import React from 'react';
import { Cpu, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export function SovereignGovernancePage() {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-trust-green bg-trust-soft px-2 py-0.5 rounded uppercase">Infrastructure Nationale</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Gouvernance IA & Souveraineté Numérique</h1>
        <p className="text-xs text-slate-500 mt-1">Supervision de l'hébergement au Data Center National de Libreville et contrôle des modèles LLM privés.</p>
      </div>

      <div className="executive-card p-6 space-y-6">
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-900">
            <Lock className="w-4 h-4 text-emerald-700" />
            <span>Infrastructure Prête pour le Data Center Souverain Gabonais (Private Cloud / On-Premise)</span>
          </div>
          <span className="bg-emerald-700 text-white px-2 py-0.5 rounded font-bold">MODE LOCAL FIRST</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <span className="text-slate-400 block text-[10px] uppercase">Fournisseur 1 (Prioritaire)</span>
            <strong className="text-sovereign-blue text-sm block">Souverain Local Privé</strong>
            <span className="text-emerald-700 font-bold block">Accrédité Confidentialité</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <span className="text-slate-400 block text-[10px] uppercase">Fournisseur 2 (Secours Cloud)</span>
            <strong className="text-slate-800 text-sm block">Google Gemini API</strong>
            <span className="text-amber-700 font-bold block">Données Démo / Publiques</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
            <span className="text-slate-400 block text-[10px] uppercase">Fournisseur 3 (Secours Cloud)</span>
            <strong className="text-slate-800 text-sm block">OpenRouter Free Models</strong>
            <span className="text-amber-700 font-bold block">Données Démo / Publiques</span>
          </div>
        </div>
      </div>
    </div>
  );
}

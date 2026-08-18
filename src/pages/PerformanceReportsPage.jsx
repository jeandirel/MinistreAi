import React from 'react';
import { FileText, Download, Sparkles } from 'lucide-react';

export function PerformanceReportsPage() {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded uppercase">Rapports Automatiques</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Rapports & Synthèses Exécutives</h1>
      </div>

      <div className="executive-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-editorial font-bold text-lg text-sovereign-navy">Rapport Mensuel d'Exécution — Août 2026</h3>
            <p className="text-xs text-slate-500 font-mono">Généré le 18 août 2026 par MINISTRE AI · Données certifiées</p>
          </div>
          <button className="px-4 py-2 bg-sovereign-blue text-white text-xs font-bold uppercase rounded flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" />
            <span>Générer PDF Officiel</span>
          </button>
        </div>
      </div>
    </div>
  );
}

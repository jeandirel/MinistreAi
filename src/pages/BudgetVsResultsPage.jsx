import React from 'react';
import { DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';

export function BudgetVsResultsPage() {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-authority-gold bg-authority-soft px-2 py-0.5 rounded uppercase">Analyse Croisée Financière & Physique</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Budget × Résultats</h1>
        <p className="text-xs text-slate-500 mt-1">Détection des anomalies de rendement budgétaire vs progression réelle sur le terrain.</p>
      </div>

      <div className="executive-card p-6 space-y-4">
        <div className="p-4 bg-amber-50 border-l-4 border-authority-gold rounded text-amber-950 text-xs space-y-1">
          <strong className="font-bold flex items-center gap-1.5 text-authority-gold uppercase font-mono">
            <AlertTriangle className="w-4 h-4" />
            Anomalie Majeure Révélée par le Système :
          </strong>
          <p>
            "Le Programme Infrastructure Numérique a consommé <strong>71% du budget alloué</strong> mais n'a atteint que <strong>42% de sa cible de livraison physique</strong>."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Taux de Consommation Budgétaire</span>
            <div className="font-editorial font-bold text-3xl text-sovereign-blue">71.4 %</div>
            <p className="text-xs text-slate-600">Engagements financiers validés par la Direction Financière.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Taux de Réalisation Physique</span>
            <div className="font-editorial font-bold text-3xl text-escalation-red">42.0 %</div>
            <p className="text-xs text-slate-600">Livrables et équipements certifiés sur le terrain.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { BarChart3, AlertTriangle, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { MOCK_PERFORMANCE_CONTRACT } from '../data/mockData';

export function PerformanceContractPage() {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded uppercase">Engagements Gouvernementaux</span>
          <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Mon Contrat de Performance 2026</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-4 bg-sovereign-navy text-white rounded-lg text-center font-mono">
            <span className="text-[10px] text-slate-300 block uppercase">Score Global</span>
            <span className="font-editorial font-bold text-2xl text-authority-gold">{MOCK_PERFORMANCE_CONTRACT.scoreGlobal}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_PERFORMANCE_CONTRACT.objectives.map(obj => (
          <div key={obj.id} className="executive-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-100 px-2 py-0.5 rounded">{obj.code}</span>
              <span className="text-xs font-mono text-slate-500">Responsable: <strong className="text-slate-800">{obj.owner}</strong></span>
            </div>

            <h3 className="font-editorial font-bold text-xl text-sovereign-navy">{obj.title}</h3>

            <div className="grid grid-cols-4 gap-3 text-center text-xs font-mono">
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Cible</span>
                <span className="font-bold text-slate-900">{obj.target}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Réalisé</span>
                <span className="font-bold text-sovereign-blue">{obj.achieved}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Écart / Variance</span>
                <span className={`font-bold ${obj.variance.includes('-') ? 'text-red-600' : 'text-emerald-600'}`}>{obj.variance}</span>
              </div>
              <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <span className="text-[10px] text-slate-400 block uppercase">Budget Consommé</span>
                <span className="font-bold text-slate-800">{obj.budgetConsumed}</span>
              </div>
            </div>

            {obj.anomaly && (
              <div className="p-3 bg-amber-50 border border-authority-border rounded text-xs text-amber-950 font-medium flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-authority-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block text-amber-900">Anomalie Détectée par l'IA :</strong>
                  <p className="mt-0.5">{obj.anomaly}</p>
                </div>
              </div>
            )}

            <div className="text-xs font-mono text-slate-500 pt-1">
              Confiance de la donnée: <span className="text-emerald-700 font-bold">{obj.confidence}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Clock, AlertTriangle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { MOCK_100_DAYS_ROADMAP } from '../data/mockData';

export function Roadmap100DaysPage() {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold text-trust-green bg-trust-soft px-2 py-0.5 rounded uppercase">Engagements Présidentiels</span>
          <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Feuille de Route 100 Jours</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-sovereign-navy text-white rounded-lg font-mono text-xs font-bold flex items-center gap-2">
            <Clock className="w-4 h-4 text-authority-gold" />
            <span>JOUR {MOCK_100_DAYS_ROADMAP.currentDay} / {MOCK_100_DAYS_ROADMAP.totalDays}</span>
          </div>
        </div>
      </div>

      {/* Progress Items */}
      <div className="space-y-4">
        {MOCK_100_DAYS_ROADMAP.items.map(item => (
          <div key={item.id} className="executive-card p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded">{item.id}</span>
                <span className="text-xs font-mono text-slate-500">Échéance: <strong>{item.deadline}</strong></span>
              </div>
              <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded uppercase ${
                item.status === 'ON_TRACK' ? 'bg-emerald-100 text-emerald-800' :
                item.status === 'AT_RISK' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {item.status}
              </span>
            </div>

            <h3 className="font-editorial font-bold text-lg text-sovereign-navy">{item.title}</h3>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span className="text-slate-600">Progression Réelle</span>
                <span className="text-sovereign-blue">{item.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div className={`h-full ${item.status === 'AT_RISK' ? 'bg-escalation-red' : 'bg-trust-green'}`} style={{ width: `${item.progress}%` }} />
              </div>
            </div>

            {item.blocker && (
              <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-900 font-medium">
                ⚠️ Blocage identifié: {item.blocker}
              </div>
            )}

            <div className="text-xs text-slate-500 font-mono pt-1">
              Preuve auditable: <span className="text-slate-800 font-semibold">{item.proof}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

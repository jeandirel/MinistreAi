import React from 'react';
import { ArrowRight, AlertTriangle, Building2, CheckCircle2, Shield } from 'lucide-react';
import { MOCK_INTERMINISTERIAL_MAP } from '../data/mockData';

export function InterministerialMapPage() {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-escalation-red bg-red-50 px-2 py-0.5 rounded uppercase">Vue Système Vivant</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Dépendances Interministérielles</h1>
        <p className="text-xs text-slate-500 mt-1">Identification immédiate des blocages externes empêchant la concrétisation des directives.</p>
      </div>

      <div className="space-y-4">
        {MOCK_INTERMINISTERIAL_MAP.map((dep, idx) => (
          <div key={idx} className="executive-card p-6 space-y-4 border-l-4 border-l-escalation-red">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-sovereign-blue" />
                <span className="font-bold text-xs text-slate-800">{dep.from}</span>
              </div>

              <div className="flex items-center gap-2 text-escalation-red font-mono text-xs font-bold px-3 py-1 bg-red-50 rounded border border-red-200">
                <span>Retard {dep.lagDays} jours</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-red-600" />
                <strong className="font-bold text-xs text-red-900">{dep.to}</strong>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-editorial font-bold text-lg text-sovereign-navy">{dep.project}</h3>
              <p className="text-xs text-slate-600">Impact: <strong className="text-red-800">{dep.impact}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

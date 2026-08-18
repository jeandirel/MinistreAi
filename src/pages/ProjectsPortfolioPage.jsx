import React from 'react';
import { Rocket, Building2, CheckCircle2, Clock } from 'lucide-react';

export function ProjectsPortfolioPage() {
  const projects = [
    { title: 'Data Center National (Phase Souveraineté)', budget: '4.2 Mds FCFA', progress: 72, status: 'En cours', lead: 'ANINF / DIN' },
    { title: 'Câble Sous-marin Fibre Atterrissage Port-Gentil', budget: '12 Mds FCFA', progress: 88, status: 'Bloqué', lead: 'DG Télécoms' },
    { title: 'Numérisation du Registre Foncier et Civil', budget: '1.8 Mds FCFA', progress: 45, status: 'En cours', lead: 'DG Numérique' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded uppercase">Vue d'Ensemble</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Portfolio des Chantiers Stratégiques</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="executive-card p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded">{p.lead}</span>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${p.status === 'Bloqué' ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>
                {p.status}
              </span>
            </div>
            <h3 className="font-editorial font-bold text-lg text-sovereign-navy">{p.title}</h3>
            <div className="text-xs text-slate-500 font-mono">Budget global: <strong className="text-slate-900">{p.budget}</strong></div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span>Progression</span>
                <span className="font-bold">{p.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-sovereign-blue h-full" style={{ width: `${p.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

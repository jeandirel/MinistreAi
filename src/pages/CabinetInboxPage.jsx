import React from 'react';
import { Inbox, FileText, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

export function CabinetInboxPage() {
  const items = [
    { from: 'Conseiller Juridique', subject: 'Projet d’Arrêté sur la Gouvernance des Données Santé', priority: 'HAUTE', status: 'En attente qualification DirCab' },
    { from: 'DG Télécoms', subject: 'Demande d’Arbitrage Budgétaire Complémentaire Port-Gentil', priority: 'CRITIQUE', status: 'Note préparée' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded uppercase">Espace Directeur de Cabinet</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Cabinet Inbox · Triage & Relances</h1>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="executive-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">{item.from}</span>
                <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{item.priority}</span>
              </div>
              <h3 className="font-editorial font-bold text-lg text-sovereign-navy">{item.subject}</h3>
            </div>

            <button className="px-4 py-2 bg-sovereign-blue hover:bg-sovereign-navy text-white text-xs font-bold uppercase rounded flex items-center gap-1.5">
              <span>Transmettre au Ministre pour Arbitrage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

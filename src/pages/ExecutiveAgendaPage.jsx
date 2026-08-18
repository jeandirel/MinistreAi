import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { MOCK_AGENDA } from '../data/mockData';

export function ExecutiveAgendaPage({ onOpenPrepareMe }) {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded uppercase">Planning Ministériel</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Agenda Exécutif Connecté</h1>
      </div>

      <div className="space-y-4">
        {MOCK_AGENDA.map((item, idx) => (
          <div key={idx} className="executive-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sovereign-navy text-authority-gold font-mono font-bold text-sm rounded">
                {item.time}
              </div>
              <div className="space-y-1">
                <h3 className="font-editorial font-bold text-lg text-sovereign-navy">{item.title}</h3>
                {item.location && <span className="text-xs text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{item.location}</span>}
              </div>
            </div>

            {item.prepareAvailable && (
              <button
                onClick={onOpenPrepareMe}
                className="px-4 py-2 bg-trust-green hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ouvrir Fiche Prépare-moi</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Scale, CheckCircle2, ShieldCheck, Filter } from 'lucide-react';
import { MOCK_DECISION_OBJECTS } from '../data/mockData';
import { DecisionObjectCard } from '../components/DecisionObjectCard';

export function DecisionsPage() {
  const [decisions, setDecisions] = useState(MOCK_DECISION_OBJECTS);

  const handleArbitrate = (decision, optionId) => {
    setDecisions(decisions.map(d => 
      d.id === decision.id ? { ...d, status: 'VALIDE' } : d
    ));
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-authority-gold bg-authority-soft px-2 py-0.5 rounded uppercase">Registre d'Arbitrage</span>
            <span className="text-xs font-mono text-slate-500">2 Notes en Attente</span>
          </div>
          <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">À Décider · Arbitrages Exécutifs</h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>Filtrer par urgence</span>
          </button>
        </div>
      </div>

      {/* Decision Objects List */}
      <div className="space-y-6">
        {decisions.map(decision => (
          <DecisionObjectCard key={decision.id} decision={decision} onArbitrate={handleArbitrate} />
        ))}
      </div>
    </div>
  );
}

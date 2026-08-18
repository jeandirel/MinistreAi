import React from 'react';
import { FileText, CheckCircle2, Clock, AlertTriangle, Plus } from 'lucide-react';
import { MOCK_INSTRUCTIONS } from '../data/mockData';

export function InstructionsPage() {
  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded uppercase">Centre de Commandement</span>
          <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Instructions & Directives Ministérielles</h1>
        </div>

        <button className="px-4 py-2 bg-sovereign-blue text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Nouvelle Directive</span>
        </button>
      </div>

      <div className="executive-card p-6 space-y-4">
        <div className="space-y-3">
          {MOCK_INSTRUCTIONS.map(inst => (
            <div key={inst.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-100 px-2 py-0.5 rounded">{inst.ref}</span>
                  <span className="text-xs font-mono text-slate-500">Assigné à: <strong className="text-slate-800">{inst.assignedTo}</strong></span>
                </div>
                <h3 className="font-bold text-sm text-slate-900">{inst.title}</h3>
                <span className="text-[11px] text-slate-500 font-mono">Échéance de rigueur: {inst.dueDate}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-sovereign-blue h-full" style={{ width: `${inst.progress}%` }} />
                </div>
                <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded uppercase ${
                  inst.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' :
                  inst.status === 'OVERDUE' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {inst.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

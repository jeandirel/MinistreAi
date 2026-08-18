import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export function AuditTraceabilityPage() {
  const logs = [
    { time: '18/08/2026 08:45:12', user: 'Monsieur le Ministre', action: 'Arbitrage & Validation Décision DEC-2026-089 (Option A)', hash: '0x8f7a9d0b...3c1e' },
    { time: '18/08/2026 08:30:05', user: 'Directeur de Cabinet', action: 'Transmission Note pour Décision DOS-NUM-2026-042', hash: '0x4e2b8c9f...1a4d' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-trust-green bg-trust-soft px-2 py-0.5 rounded uppercase">Registres Inaltérables</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Audit & Journal de Traçabilité</h1>
      </div>

      <div className="executive-card p-6 space-y-4">
        <div className="space-y-3 font-mono text-xs">
          {logs.map((log, idx) => (
            <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-slate-400 text-[10px] block">{log.time} · {log.user}</span>
                <span className="font-bold text-slate-800 font-sans text-xs">{log.action}</span>
              </div>
              <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded">{log.hash}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

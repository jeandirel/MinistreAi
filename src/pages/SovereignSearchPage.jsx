import React, { useState } from 'react';
import { Search, Shield, Globe, Lock, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';

export function SovereignSearchPage() {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('hybrid');
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setResults({
      originalQuery: query,
      neutralizedQuery: query.replace(/Gabon|Ministre|Confidentiel/gi, '[ENTITÉ_NEUTRALISÉE]'),
      internalSources: [
        { title: 'Note de Synthèse DIN 2026', confidence: '98%', classification: 'CONFIDENTIEL' },
        { title: 'Directive d’Habilitation ANINF N°4', confidence: '94%', classification: 'INTERNE' }
      ],
      publicSources: [
        { title: 'Journal Officiel — Standards de Cybersécurité', date: '2026-05-12' },
        { title: 'Rapport ITU Afrique de l’Ouest & Centrale', date: '2026-06-20' }
      ],
      mergedSynthesis: "L'analyse combinée souveraine confirme l'alignement des directives gabonaises avec les standards internationaux de neutralisation des données sensibles."
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="border-b border-slate-200 pb-4">
        <span className="font-mono text-[10px] font-bold text-trust-green bg-trust-soft px-2 py-0.5 rounded uppercase">Fonction Différenciante Souveraine</span>
        <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Recherche Souveraine Multi-Mode</h1>
        <p className="text-xs text-slate-500 mt-1">Recherche hybride avec neutralisation locale des requêtes et fusion sécurisée des résultats.</p>
      </div>

      {/* Mode Selector & Input Bar */}
      <div className="executive-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('internal')}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-lg flex items-center gap-2 transition-colors ${
              mode === 'internal' ? 'bg-sovereign-blue text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            100% Interne Souverain
          </button>

          <button
            onClick={() => setMode('public')}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-lg flex items-center gap-2 transition-colors ${
              mode === 'public' ? 'bg-sovereign-blue text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-blue-500" />
            Web Public
          </button>

          <button
            onClick={() => setMode('hybrid')}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-lg flex items-center gap-2 transition-colors ${
              mode === 'hybrid' ? 'bg-sovereign-blue text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-authority-gold" />
            Hybride Sécurisé (Neutralisé)
          </button>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Saisissez votre recherche stratégique..."
            className="flex-1 px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sovereign-blue"
          />
          <button type="submit" className="px-6 py-3 bg-sovereign-blue hover:bg-sovereign-navy text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2">
            <Search className="w-4 h-4" />
            <span>Rechercher</span>
          </button>
        </form>
      </div>

      {/* Results View */}
      {results && (
        <div className="space-y-6">
          {/* Prompt Neutralizer Inspection Card */}
          {mode === 'hybrid' && (
            <div className="executive-card p-6 bg-slate-900 text-white space-y-3">
              <span className="font-mono text-xs text-authority-gold font-bold uppercase tracking-widest block">inspection du neutralisateur souverain</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 bg-white/10 rounded border border-white/10">
                  <span className="text-slate-400 block text-[10px] mb-1">REQUÊTE INTERNE BRUTE (Confidentielle) :</span>
                  <span className="text-red-300">{results.originalQuery}</span>
                </div>
                <div className="p-3 bg-emerald-950/60 rounded border border-emerald-500/30">
                  <span className="text-emerald-400 block text-[10px] mb-1">REQUÊTE NEUTRALISÉE TRANSMISE AU WEB :</span>
                  <span className="text-emerald-200">{results.neutralizedQuery}</span>
                </div>
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="executive-card p-6 space-y-3">
              <h3 className="font-editorial font-bold text-lg text-sovereign-navy">Sources Internes Ministérielles</h3>
              <div className="space-y-2">
                {results.internalSources.map((src, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded text-xs flex items-center justify-between">
                    <span className="font-bold text-slate-800">{src.title}</span>
                    <span className="font-mono text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{src.confidence}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="executive-card p-6 space-y-3">
              <h3 className="font-editorial font-bold text-lg text-sovereign-navy">Sources Publiques Officielles</h3>
              <div className="space-y-2">
                {results.publicSources.map((src, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded text-xs flex items-center justify-between">
                    <span className="font-bold text-slate-800">{src.title}</span>
                    <span className="font-mono text-[10px] text-slate-500">{src.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

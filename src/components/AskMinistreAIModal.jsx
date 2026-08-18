import React, { useState } from 'react';
import { X, Sparkles, Shield, Globe, Lock, Cpu, ArrowRight, AlertTriangle, CheckCircle2, Copy } from 'lucide-react';

export function AskMinistreAIModal({ isOpen, onClose, currentRole }) {
  const [prompt, setPrompt] = useState('');
  const [searchMode, setSearchMode] = useState('hybrid'); // 'internal', 'public', 'hybrid'
  const [dataClass, setDataClass] = useState('DEMO'); // 'DEMO', 'CONFIDENTIEL'
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const quickPrompts = [
    "Quelles sont les 2 décisions urgentes nécessitant mon arbitrage aujourd’hui ?",
    "Pourquoi le projet d’extension de la Fibre à Port-Gentil est-il bloqué ?",
    "Prépare-moi pour la réunion interministérielle de 10h30.",
    "Quels engagements de la Feuille de Route 100 Jours sont à risque ?",
    "Compare les 3 options du dossier Data Center National.",
    "Quelles sont les anomalies entre notre consommation budgétaire et nos cibles ?"
  ];

  const handleExecute = async (promptToRun) => {
    const query = promptToRun || prompt;
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          mode: searchMode === 'hybrid' ? 'hybrid_search_neutralizer' : 'command',
          role: currentRole.id,
          dataClass: dataClass,
          context: `Contexte synthétique République Gabonaise — Ministère du Numérique. Rôle actif: ${currentRole.title}.`
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || `Erreur API ${res.status}`);
      }

      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sovereign-navy/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-300 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-sovereign-navy text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-authority-gold text-sovereign-navy font-mono font-bold flex items-center justify-center">
              AI
            </div>
            <div>
              <h2 className="font-editorial font-bold text-lg text-white">Ask MINISTRE AI</h2>
              <p className="text-[11px] text-slate-300 font-mono">Console d'Intelligence Ambiante & Recherche Souveraine</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 bg-[#F9F8F3]">
          {/* Mode Switcher */}
          <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider pl-2">Mode de Recherche :</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchMode('internal')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  searchMode === 'internal' ? 'bg-sovereign-blue text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Lock className="w-3.5 h-3.5 text-trust-green" />
                Interne Souverain
              </button>
              <button
                onClick={() => setSearchMode('public')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  searchMode === 'public' ? 'bg-sovereign-blue text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                Web Public
              </button>
              <button
                onClick={() => setSearchMode('hybrid')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  searchMode === 'hybrid' ? 'bg-sovereign-blue text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-authority-gold" />
                Hybride Sécurisé (Neutralisé)
              </button>
            </div>
          </div>

          {/* Prompt Area */}
          <div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Que souhaitez-vous analyser, vérifier ou préparer ? Ex: 'Prépare-moi pour ma réunion de 10h30'..."
              className="w-full h-28 p-4 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sovereign-blue text-slate-800 shadow-inner resize-none font-sans"
            />
          </div>

          {/* Quick Prompts */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">Exemples de requêtes exécutives rapides :</span>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(qp);
                    handleExecute(qp);
                  }}
                  className="text-left text-xs bg-white hover:bg-blue-50/60 border border-slate-200 hover:border-sovereign-blue text-slate-700 rounded-md px-3 py-1.5 transition-colors shadow-xs"
                >
                  {qp}
                </button>
              ))}
            </div>
          </div>

          {/* Neutralization Alert for Hybrid mode */}
          {searchMode === 'hybrid' && (
            <div className="p-3 bg-amber-50 border border-authority-border rounded-md text-amber-900 text-xs flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-authority-gold shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Neutralisation Souveraine Activée :</strong>
                <p className="text-[11px] text-amber-800 mt-0.5">
                  Aucune donnée nominative ou classifiée ne sera transmise aux moteurs extérieurs. La requête brute est nettoyée localement avant toute consultation du web public.
                </p>
              </div>
            </div>
          )}

          {/* Loading indicator */}
          {loading && (
            <div className="p-6 bg-white border border-slate-200 rounded-lg flex items-center justify-center gap-3">
              <Cpu className="w-5 h-5 text-sovereign-blue animate-spin" />
              <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">Traitement par le moteur souverain MINISTRE AI...</span>
            </div>
          )}

          {/* Error display */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <div>
                <strong className="font-bold">Erreur du Moteur IA :</strong>
                <p className="mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Answer display */}
          {response && (
            <div className="p-5 bg-white border border-slate-300 rounded-lg shadow-sm space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-trust-green" />
                  <span className="font-editorial font-bold text-sovereign-navy text-sm">Analyse Exécutive</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="px-2 py-0.5 bg-trust-soft text-trust-green rounded font-bold uppercase">{response.provider}</span>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">{response.model}</span>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded">{response.latencyMs} ms</span>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-xs leading-relaxed whitespace-pre-line text-slate-800 font-sans">
                {response.answer}
              </div>

              {response.externalDemoWarning && (
                <div className="p-2.5 bg-yellow-50 border border-yellow-200 rounded text-[11px] text-yellow-800 font-mono">
                  ⚠️ {response.externalDemoWarning}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-400">MINISTRE AI v2.0 · République Gabonaise</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition-colors"
            >
              Fermer
            </button>
            <button
              onClick={() => handleExecute()}
              disabled={loading || !prompt.trim()}
              className="px-5 py-2 bg-sovereign-blue hover:bg-sovereign-navy text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
            >
              <span>Exécuter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { BookOpen, FileText, Download, Share2, AlertTriangle, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export function DossierPage({ onOpenAskAI }) {
  const [qaInput, setQaInput] = useState('');
  const [qaAnswers, setQaAnswers] = useState([
    {
      q: "Quels sont les trois points de vigilance identifiés par la Direction du Numérique ?",
      a: "1. VECTEUR DONNÉES : Risque élevé de transfert hors infrastructure nationale.\n2. VECTEUR MODÈLES : Dépendance fournisseur sans clause de réversibilité assurée.\n3. VECTEUR GOUVERNANCE : Inexistence d'un registre inaltérable des habilitations.",
      source: "Note d'Évaluation Réf. MIN-DIR-077 (18 août 2026)"
    }
  ]);

  const handleAskDossier = (e) => {
    e.preventDefault();
    if (!qaInput.trim()) return;

    setQaAnswers([...qaAnswers, {
      q: qaInput,
      a: "Analyse basée sur le corpus du dossier MIN-DIR-077 :\nLe programme impose la localisation stricte des registres nationaux au Data Center de Libreville avec réversibilité sous 30 jours.",
      source: "Rapport d'Architecture & Souveraineté — ANINF 2026"
    }]);
    setQaInput('');
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="badge-classification badge-confidentiel">CONFIDENTIEL</span>
            <span className="text-xs font-mono text-slate-500">Réf. MIN-DIR-077 · 18 août 2026</span>
          </div>
          <h1 className="font-editorial font-bold text-3xl text-sovereign-navy mt-1">Programme Souverain — Note d’Évaluation Préliminaire</h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>Exporter PDF Audit</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3): Strategic Document Reader */}
        <div className="lg:col-span-2 executive-card p-8 space-y-6 bg-white">
          <div className="space-y-4 text-sm text-slate-800 leading-relaxed font-sans border-b border-slate-100 pb-6">
            <h2 className="font-editorial font-bold text-2xl text-sovereign-blue">1.0 Contexte & Enjeux de Souveraineté</h2>
            <p>
              Le programme stratégique vise à garantir la souveraineté numérique absolue sur les registres d'état civil, les passeports biométriques et les données de santé des citoyens de la République Gabonaise.
            </p>
            <div className="p-4 bg-amber-50 border-l-4 border-authority-gold rounded text-amber-950 font-medium text-xs">
              <strong className="font-bold block text-authority-gold uppercase font-mono mb-1">Point de Décision Majeur :</strong>
              Privilégier l'architecture réversible du Data Center National avec contrôle humain obligatoire sur toute modification de privilège d'accès.
            </div>

            <h2 className="font-editorial font-bold text-2xl text-sovereign-blue pt-4">2.0 Points de Vigilance Critique</h2>
            <ul className="space-y-2 list-disc pl-5 text-xs text-slate-700">
              <li><strong>Données :</strong> Risque de fuite transfrontalière via des dépendances d'API externes non souveraines.</li>
              <li><strong>Modèles IA :</strong> Nécessité d'exécuter des modèles locaux privés sans dépendance envers un cloud tiers.</li>
              <li><strong>Audits :</strong> Exigence de traçabilité complète de l'origine de chaque décision.</li>
            </ul>
          </div>
        </div>

        {/* Right Column (1/3): Document AI Q&A Assistant */}
        <div className="space-y-4">
          <div className="executive-card p-6 space-y-4 bg-slate-50">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sovereign-blue" />
                <h3 className="font-editorial font-bold text-lg text-sovereign-navy">Interroger le Corpus</h3>
              </div>
              <span className="text-[10px] font-mono text-trust-green bg-trust-soft px-2 py-0.5 rounded font-bold">100% Souverain</span>
            </div>

            {/* Q&A List */}
            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
              {qaAnswers.map((item, idx) => (
                <div key={idx} className="space-y-2 text-xs">
                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded text-sovereign-navy font-bold">
                    Q: {item.q}
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded text-slate-800 space-y-1">
                    <p className="whitespace-pre-line leading-relaxed">{item.a}</p>
                    <span className="text-[10px] font-mono text-slate-400 block pt-1 border-t border-slate-100">Source: {item.source}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Q&A Input */}
            <form onSubmit={handleAskDossier} className="flex gap-2 pt-2">
              <input
                type="text"
                value={qaInput}
                onChange={(e) => setQaInput(e.target.value)}
                placeholder="Posez une question sur ce dossier..."
                className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-sovereign-blue"
              />
              <button type="submit" className="px-3 py-2 bg-sovereign-blue text-white text-xs font-bold rounded hover:bg-sovereign-navy">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

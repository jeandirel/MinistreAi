import React from 'react';
import { Sparkles, AlertTriangle, ArrowRight, CheckCircle2, Clock, Calendar, FileText, Activity, ShieldCheck, ChevronRight } from 'lucide-react';
import { MOCK_DECISION_OBJECTS, MOCK_100_DAYS_ROADMAP, MOCK_PREPARE_ME } from '../data/mockData';

export function TodayPage({ setActiveTab, currentRole, onOpenAskAI, onOpenPrepareMe }) {
  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* 15-SECOND VALUE PROPOSITION HEADER */}
      <section className="executive-card p-8 bg-gradient-to-r from-sovereign-navy via-sovereign-blue to-sovereign-navy text-white relative overflow-hidden shadow-xl border-none">
        {/* Subtle decorative crest watermark */}
        <div className="absolute right-[-40px] top-[-50px] w-80 h-80 rounded-full border border-white/10 pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-authority-gold text-xs font-mono font-bold tracking-wider uppercase border border-authority-gold/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Brief Quotidien · {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <span className="text-xs font-mono text-slate-300">Perspective: <strong className="text-white">{currentRole.title}</strong></span>
          </div>

          <div className="space-y-2">
            <h1 className="font-editorial font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Bonjour {currentRole.title}.
            </h1>
            <p className="text-slate-200 text-sm max-w-3xl font-normal leading-relaxed">
              Le système souverain a analysé l'état du Ministère. Voici ce qui exige votre attention immédiate ce matin pour maintenir le contrôle et la vélocité d'exécution.
            </p>
          </div>

          {/* 5 Key Immediate Human Answers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div 
              onClick={() => setActiveTab('decide')}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-3.5 rounded-lg border border-white/15 cursor-pointer transition-colors space-y-1"
            >
              <div className="flex items-center justify-between text-authority-gold">
                <span className="text-xs font-mono font-bold uppercase">À Arbitrer</span>
                <span className="text-xs font-bold font-mono bg-authority-gold text-sovereign-navy px-2 py-0.5 rounded">2 requis</span>
              </div>
              <p className="text-xs text-white font-medium">Déploiement Cluster Souverain & Fibre Port-Gentil</p>
            </div>

            <div 
              onClick={() => setActiveTab('execute')}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-3.5 rounded-lg border border-white/15 cursor-pointer transition-colors space-y-1"
            >
              <div className="flex items-center justify-between text-escalation-red">
                <span className="text-xs font-mono font-bold uppercase text-red-300">100 Jours à Risque</span>
                <span className="text-xs font-bold font-mono bg-red-500 text-white px-2 py-0.5 rounded">1 alerte</span>
              </div>
              <p className="text-xs text-white font-medium">IA Médicale dans 10 centres ruraux (Retard kits solaires)</p>
            </div>

            <div 
              onClick={onOpenPrepareMe}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-3.5 rounded-lg border border-white/15 cursor-pointer transition-colors space-y-1"
            >
              <div className="flex items-center justify-between text-trust-green">
                <span className="text-xs font-mono font-bold uppercase text-emerald-300">Réunion à 10h30</span>
                <span className="text-xs font-bold font-mono bg-trust-green text-white px-2 py-0.5 rounded">Prépare-moi</span>
              </div>
              <p className="text-xs text-white font-medium">Arbitrage Interministériel Souveraineté Données</p>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setActiveTab('decide')}
              className="px-5 py-2.5 bg-authority-gold hover:bg-yellow-400 text-sovereign-navy text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Voir ce qui nécessite mon arbitrage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAskAI}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-md transition-colors border border-white/20 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-authority-gold" />
              <span>Interroger MINISTRE AI</span>
            </button>
          </div>
        </div>
      </section>

      {/* EXECUTIVE DASHBOARD SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3): Priorities & Decisions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Urgent Decisions Section */}
          <div className="executive-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-authority-gold animate-pulse" />
                <h2 className="font-editorial font-bold text-xl text-sovereign-navy">
                  Dossiers Prioritaires à Arbitrer
                </h2>
              </div>
              <button 
                onClick={() => setActiveTab('decide')}
                className="text-xs text-sovereign-blue font-bold hover:underline flex items-center gap-1"
              >
                Voir tout le registre ({MOCK_DECISION_OBJECTS.length})
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {MOCK_DECISION_OBJECTS.map((doc) => (
                <div key={doc.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-sovereign-blue bg-blue-100 px-2 py-0.5 rounded">{doc.id}</span>
                    <span className="text-[10px] font-mono text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded font-bold">Échéance: {doc.deadline}</span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-800">{doc.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{doc.facts[0]}</p>
                  <div className="pt-2 flex items-center justify-between border-t border-slate-200/60">
                    <span className="text-[11px] text-slate-500 font-mono">Recommandation: <strong className="text-slate-700">{doc.recommendation}</strong></span>
                    <button
                      onClick={() => setActiveTab('decide')}
                      className="px-3 py-1 bg-sovereign-blue hover:bg-sovereign-navy text-white text-[11px] font-bold uppercase tracking-wider rounded"
                    >
                      Arbitrer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 100 Days Roadmap Summary */}
          <div className="executive-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sovereign-blue" />
                <h2 className="font-editorial font-bold text-xl text-sovereign-navy">
                  Feuille de Route 100 Jours · Jour {MOCK_100_DAYS_ROADMAP.currentDay} / 100
                </h2>
              </div>
              <button 
                onClick={() => setActiveTab('execute')}
                className="text-xs text-sovereign-blue font-bold hover:underline flex items-center gap-1"
              >
                Détail des 14 engagements
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <span className="font-editorial font-bold text-2xl text-sovereign-navy">{MOCK_100_DAYS_ROADMAP.stats.totalEngagements}</span>
                <span className="text-[10px] font-mono uppercase text-slate-500 block mt-1">Total Engagements</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded border border-emerald-200">
                <span className="font-editorial font-bold text-2xl text-emerald-700">{MOCK_100_DAYS_ROADMAP.stats.onTrack}</span>
                <span className="text-[10px] font-mono uppercase text-emerald-800 block mt-1">Trajectoire Bonne</span>
              </div>
              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <span className="font-editorial font-bold text-2xl text-amber-700">{MOCK_100_DAYS_ROADMAP.stats.watchNeeded}</span>
                <span className="text-[10px] font-mono uppercase text-amber-800 block mt-1">À Surveiller</span>
              </div>
              <div className="p-3 bg-rose-50 rounded border border-rose-200">
                <span className="font-editorial font-bold text-2xl text-rose-700">{MOCK_100_DAYS_ROADMAP.stats.atRisk}</span>
                <span className="text-[10px] font-mono uppercase text-rose-800 block mt-1">À Risque Majeur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (1/3): Pre-meeting Prep & Immediate Alerts */}
        <div className="space-y-6">
          {/* Pre-Meeting Briefing Widget */}
          <div className="executive-card p-6 space-y-4 border-l-4 border-l-trust-green bg-gradient-to-b from-emerald-50/30 to-white">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-trust-green bg-trust-soft px-2 py-0.5 rounded uppercase">Prochaine Réunion</span>
              <span className="text-xs font-mono text-slate-500 font-bold">10:30</span>
            </div>

            <div>
              <h3 className="font-editorial font-bold text-lg text-sovereign-navy">{MOCK_PREPARE_ME.meetingTitle}</h3>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">{MOCK_PREPARE_ME.context60s}</p>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenPrepareMe}
                className="w-full py-2 bg-sovereign-blue hover:bg-sovereign-navy text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Ouvrir Fiche "Prépare-moi"</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Institutional Critical Alerts */}
          <div className="executive-card p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <AlertTriangle className="w-4 h-4 text-escalation-red" />
              <h3 className="font-editorial font-bold text-lg text-sovereign-navy">Alertes de Gouvernance</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-red-50 border-l-2 border-red-500 rounded text-red-900 space-y-1">
                <span className="font-mono text-[10px] font-bold text-red-700 block uppercase">08:15 · Blocage Interministériel</span>
                <p className="font-medium">Le Ministère des Transports maintient la réserve sur l'atterrissage câble Port-Gentil.</p>
              </div>

              <div className="p-3 bg-amber-50 border-l-2 border-amber-500 rounded text-amber-900 space-y-1">
                <span className="font-mono text-[10px] font-bold text-amber-700 block uppercase">10:00 · Traçabilité Audit</span>
                <p className="font-medium">2 directives émises le 1er août n'ont pas encore reçu de preuve d'exécution physique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

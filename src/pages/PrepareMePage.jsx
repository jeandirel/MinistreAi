import React, { useState } from 'react';
import { Clock, Users, HelpCircle, AlertOctagon, CheckCircle2, Shield, ArrowLeft, Download, FileText } from 'lucide-react';
import { MOCK_PREPARE_ME } from '../data/mockData';

export function PrepareMePage({ setActiveTab }) {
  const [briefingDepth, setBriefingDepth] = useState('2min'); // '30sec', '2min', 'full'

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveTab('today')}
            className="p-2 text-slate-500 hover:text-sovereign-blue bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-trust-green bg-trust-soft px-2 py-0.5 rounded uppercase">Mode Prépare-moi</span>
              <span className="text-xs font-mono text-slate-500">{MOCK_PREPARE_ME.time}</span>
            </div>
            <h1 className="font-editorial font-bold text-2xl text-sovereign-navy mt-0.5">{MOCK_PREPARE_ME.meetingTitle}</h1>
          </div>
        </div>

        {/* Depth Selector */}
        <div className="flex items-center bg-white border border-slate-300 rounded-lg p-1 shadow-xs">
          <button
            onClick={() => setBriefingDepth('30sec')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
              briefingDepth === '30sec' ? 'bg-sovereign-blue text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Flash 30 sec
          </button>
          <button
            onClick={() => setBriefingDepth('2min')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
              briefingDepth === '2min' ? 'bg-sovereign-blue text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Briefing 2 min
          </button>
          <button
            onClick={() => setBriefingDepth('full')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
              briefingDepth === 'full' ? 'bg-sovereign-blue text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Dossier Complet
          </button>
        </div>
      </div>

      {/* Depth Content */}
      {briefingDepth === '30sec' && (
        <div className="p-6 bg-gradient-to-r from-sovereign-navy to-sovereign-blue text-white rounded-xl shadow-lg space-y-3">
          <span className="font-mono text-xs text-authority-gold font-bold uppercase tracking-wider">Synthèse Ultra-Rapide (30 secondes)</span>
          <p className="text-base font-editorial font-semibold leading-relaxed text-slate-100">
            "{MOCK_PREPARE_ME.context60s}"
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300 font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>Objectif unique : Faire signer l'Arrêté de Migration sous réserve d'audit hebdomadaire.</span>
          </div>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3): Key Questions & Disagreements */}
        <div className="lg:col-span-2 space-y-6">
          {/* 3 Key Questions to Ask */}
          <div className="executive-card p-6 space-y-4 border-l-4 border-l-authority-gold">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-authority-gold" />
              <h2 className="font-editorial font-bold text-xl text-sovereign-navy">3 Questions Pièges à Poser à la Réunion</h2>
            </div>

            <div className="space-y-3">
              {MOCK_PREPARE_ME.keyQuestionsToAsk.map((q, idx) => (
                <div key={idx} className="p-4 bg-amber-50/60 border border-authority-border/60 rounded-lg text-amber-950 font-medium text-xs leading-relaxed flex items-start gap-3">
                  <span className="font-mono font-bold text-authority-gold text-sm shrink-0">#{idx + 1}</span>
                  <p>{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Points of Disagreement */}
          <div className="executive-card p-6 space-y-4">
            <div className="flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-escalation-red" />
              <h2 className="font-editorial font-bold text-xl text-sovereign-navy">Points de Friction / Désaccords Identifiés</h2>
            </div>

            <div className="space-y-2.5">
              {MOCK_PREPARE_ME.pointsOfDisagreement.map((pod, idx) => (
                <div key={idx} className="p-3 bg-red-50/60 border border-red-200 rounded-lg text-red-900 text-xs font-medium flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-1.5" />
                  <p>{pod}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Past Commitments */}
          <div className="executive-card p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-sovereign-blue" />
              <h2 className="font-editorial font-bold text-xl text-sovereign-navy">Suivi des Engagements Antérieurs</h2>
            </div>

            <div className="space-y-3">
              {MOCK_PREPARE_ME.pastCommitments.map((pc, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-slate-800 font-medium">{pc.text}</span>
                  <span className={`px-2.5 py-0.5 font-mono text-[10px] font-bold rounded ${
                    pc.status.includes('TENU') && !pc.status.includes('NON') 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {pc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1/3): Participants & Possible Decisions */}
        <div className="space-y-6">
          {/* Participants & Stances */}
          <div className="executive-card p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-sovereign-blue" />
              <h2 className="font-editorial font-bold text-xl text-sovereign-navy">Personnes Présentes</h2>
            </div>

            <div className="space-y-3">
              {MOCK_PREPARE_ME.participants.map((p, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs text-slate-900 font-bold">{p.name}</strong>
                  </div>
                  <span className="text-[11px] text-slate-500 block">{p.role}</span>
                  <span className="text-[10px] font-mono text-sovereign-blue bg-blue-50 px-2 py-0.5 rounded inline-block mt-1 font-bold">
                    Position: {p.stance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2 Possible Decisions */}
          <div className="executive-card p-6 space-y-4 bg-slate-900 text-white">
            <h2 className="font-editorial font-bold text-xl text-authority-gold">2 Issues Posibles de la Réunion</h2>
            <div className="space-y-3 text-xs">
              {MOCK_PREPARE_ME.possibleDecisions.map((pd, idx) => (
                <div key={idx} className="p-3 bg-white/10 border border-white/15 rounded text-slate-200">
                  <span className="font-mono text-[10px] text-authority-gold font-bold uppercase block mb-1">Option #{idx + 1}</span>
                  <p>{pd}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { RoleSelector } from './RoleSelector';
import { Search, Sparkles, Lock } from 'lucide-react';

export function TopHeader({ activeTab, setActiveTab, currentRole, setCurrentRole, onOpenAskAI }) {
  return (
    <header className="fixed top-1 left-[72px] right-0 h-16 bg-white/95 backdrop-blur-md border-b border-[#E2DDD5] z-30 flex items-center justify-between px-6">
      {/* Brand & Subtitle */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-editorial font-bold text-lg text-sovereign-blue leading-none tracking-tight">
            MINISTRE<span className="text-authority-gold">.AI</span>
          </span>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">
            République Gabonaise
          </span>
        </div>

        <div className="h-7 w-[1px] bg-slate-200" />

        <div className="hidden lg:flex flex-col">
          <span className="text-xs font-semibold text-slate-700">The Sovereign Executive Operating System</span>
          <span className="text-[10px] text-slate-400">Union · Travail · Justice</span>
        </div>
      </div>

      {/* Center Ambient Quick Prompt Bar */}
      <div className="flex-1 max-w-lg mx-6">
        <button
          onClick={onOpenAskAI}
          className="w-full h-9 bg-slate-100/80 hover:bg-slate-100 border border-slate-300/80 hover:border-slate-400 rounded-lg px-3 flex items-center justify-between text-slate-500 text-xs transition-all shadow-inner group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-sovereign-blue" />
            <span>Demandez à MINISTRE AI... Ex. « Quelles sont mes priorités ? »</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="bg-white border border-slate-300 rounded px-1.5 py-0.5 text-[9px] font-mono text-slate-500">⌘K</kbd>
          </div>
        </button>
      </div>

      {/* Actions & Role Selector */}
      <div className="flex items-center gap-3">
        {/* Sovereign Security Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-trust-soft/60 border border-trust-border/50 rounded-full text-trust-green text-[10px] font-mono font-bold tracking-wide uppercase">
          <Lock className="w-3 h-3 text-trust-green" />
          <span>Infrastructure Souveraine</span>
        </div>

        {/* Role Selector */}
        <RoleSelector currentRole={currentRole} setCurrentRole={setCurrentRole} />

        {/* Executive Action Button */}
        <button
          onClick={onOpenAskAI}
          className="h-9 px-3.5 bg-sovereign-blue hover:bg-sovereign-navy text-white text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-authority-gold" />
          <span>Commande IA</span>
        </button>
      </div>
    </header>
  );
}

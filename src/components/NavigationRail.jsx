import React from 'react';
import { 
  Zap, 
  BookOpen, 
  Scale, 
  FileText, 
  Rocket, 
  BarChart3, 
  Inbox, 
  ShieldCheck, 
  Search,
  Calendar,
  Settings,
  HelpCircle
} from 'lucide-react';

export function NavigationRail({ activeTab, setActiveTab, currentRole, onOpenAskAI }) {
  const navItems = [
    { id: 'today', label: 'Aujourd’hui', subtitle: 'Executive Brief', icon: Zap, category: 'priorite' },
    { id: 'understand', label: 'Comprendre', subtitle: 'Briefings & Intelligence', icon: BookOpen, category: 'analyse' },
    { id: 'decide', label: 'Décider', subtitle: 'Notes & Arbitrages', icon: Scale, badge: '2', category: 'decision' },
    { id: 'instruct', label: 'Instruire', subtitle: 'Directives & Délégations', icon: FileText, category: 'action' },
    { id: 'execute', label: 'Exécuter', subtitle: '100 Jours & Projets', icon: Rocket, badge: '1', category: 'action' },
    { id: 'prove', label: 'Prouver', subtitle: 'Performance & Budget', icon: BarChart3, category: 'audit' },
    { id: 'inbox', label: 'Cabinet Inbox', subtitle: 'Triage & Relances', icon: Inbox, badge: '5', showForRoles: ['dircab', 'conseiller'] },
    { id: 'agenda', label: 'Agenda', subtitle: 'Réunions & Briefs', icon: Calendar },
    { id: 'search', label: 'Recherche Souveraine', subtitle: 'Corpus & Web Neutralisé', icon: Search },
    { id: 'governance', label: 'Gouvernance IA', subtitle: 'Souveraineté & Modèles', icon: ShieldCheck }
  ];

  return (
    <aside className="fixed top-1 left-0 bottom-0 w-[72px] bg-white border-r border-[#E2DDD5] flex flex-col items-center py-4 z-40 shadow-sm">
      {/* Coat of arms seal */}
      <div 
        onClick={() => setActiveTab('today')}
        className="w-10 h-10 border border-slate-300 bg-sovereign-navy text-white rounded flex items-center justify-center font-editorial font-bold text-xl cursor-pointer shadow-inner hover:opacity-90 transition-opacity"
        title="République Gabonaise — MINISTRE AI"
      >
        M
      </div>

      <div className="w-8 h-[1px] bg-slate-200 my-4" />

      {/* Navigation list */}
      <nav className="flex flex-col gap-1.5 w-full px-2">
        {navItems.map((item) => {
          if (item.showForRoles && !item.showForRoles.includes(currentRole.id)) {
            return null;
          }
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group relative w-full h-12 rounded-lg flex flex-col items-center justify-center transition-all ${
                isActive 
                  ? 'bg-sovereign-blue text-white shadow-md' 
                  : 'text-slate-500 hover:text-sovereign-blue hover:bg-slate-50'
              }`}
              title={`${item.label} — ${item.subtitle}`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-600 group-hover:text-sovereign-blue'}`} />
              
              {/* Badge count */}
              {item.badge && (
                <span className={`absolute top-1 right-1.5 px-1.5 py-0.2 text-[9px] font-mono font-bold rounded-full ${
                  isActive ? 'bg-authority-gold text-sovereign-navy' : 'bg-escalation-red text-white'
                }`}>
                  {item.badge}
                </span>
              )}

              {/* Active Indicator Bar */}
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-1 bg-authority-gold rounded-r" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom tools */}
      <div className="mt-auto flex flex-col gap-2 w-full px-2 pt-3 border-t border-slate-100">
        <button 
          onClick={onOpenAskAI}
          className="w-full h-11 bg-sovereign-navy text-white rounded-lg flex items-center justify-center hover:bg-sovereign-deep transition-colors shadow-sm"
          title="Ask MINISTRE AI (Console Ambiante)"
        >
          <span className="font-mono text-xs font-bold text-authority-gold">AI</span>
        </button>
        <button 
          onClick={() => setActiveTab('governance')}
          className="w-full h-10 text-slate-400 hover:text-slate-700 flex items-center justify-center"
          title="Paramètres & Gouvernance"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}

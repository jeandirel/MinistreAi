import React, { useState } from 'react';
import { GABON_MINISTRY_ROLES } from '../data/mockData';
import { UserCheck, ChevronDown, Shield } from 'lucide-react';

export function RoleSelector({ currentRole, setCurrentRole }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md text-left transition-colors"
      >
        <Shield className="w-3.5 h-3.5 text-sovereign-blue" />
        <div className="flex flex-col">
          <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-semibold">Perspective rôle</span>
          <span className="text-xs font-bold text-sovereign-navy leading-tight">{currentRole.title}</span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-slate-300 rounded-lg shadow-xl py-2 z-50">
          <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Changer la perspective d’analyse</p>
          </div>
          {GABON_MINISTRY_ROLES.map((role) => (
            <button
              key={role.id}
              onClick={() => {
                setCurrentRole(role);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-slate-50 transition-colors ${
                currentRole.id === role.id ? 'bg-blue-50/60 border-l-2 border-sovereign-blue' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800">{role.title}</span>
                {currentRole.id === role.id && <UserCheck className="w-3.5 h-3.5 text-sovereign-blue" />}
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5">{role.subtitle}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

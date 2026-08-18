import React, { useState } from 'react';
import { GABON_MINISTRY_ROLES } from './data/mockData';
import { NavigationRail } from './components/NavigationRail';
import { TopHeader } from './components/TopHeader';
import { AskMinistreAIModal } from './components/AskMinistreAIModal';

// Pages
import { TodayPage } from './pages/TodayPage';
import { DecisionsPage } from './pages/DecisionsPage';
import { DossierPage } from './pages/DossierPage';
import { SovereignSearchPage } from './pages/SovereignSearchPage';
import { InstructionsPage } from './pages/InstructionsPage';
import { DecisionToActionPage } from './pages/DecisionToActionPage';
import { Roadmap100DaysPage } from './pages/Roadmap100DaysPage';
import { PerformanceContractPage } from './pages/PerformanceContractPage';
import { ProjectsPortfolioPage } from './pages/ProjectsPortfolioPage';
import { BudgetVsResultsPage } from './pages/BudgetVsResultsPage';
import { InterministerialMapPage } from './pages/InterministerialMapPage';
import { ExecutiveAgendaPage } from './pages/ExecutiveAgendaPage';
import { CabinetInboxPage } from './pages/CabinetInboxPage';
import { PerformanceReportsPage } from './pages/PerformanceReportsPage';
import { AuditTraceabilityPage } from './pages/AuditTraceabilityPage';
import { SovereignGovernancePage } from './pages/SovereignGovernancePage';
import { PrepareMePage } from './pages/PrepareMePage';

export function App() {
  const [activeTab, setActiveTab] = useState('today');
  const [currentRole, setCurrentRole] = useState(GABON_MINISTRY_ROLES[0]); // Default: Ministre
  const [isAskAIOpen, setIsAskAIOpen] = useState(false);

  const handleOpenAskAI = () => setIsAskAIOpen(true);
  const handleCloseAskAI = () => setIsAskAIOpen(false);
  const handleOpenPrepareMe = () => setActiveTab('prepare');

  return (
    <div className="min-h-screen bg-[#F9F8F3] text-slate-900 font-sans antialiased flex flex-col">
      {/* Top National Ribbon */}
      <div className="fixed top-0 left-0 right-0 h-1 flag-accent-bar z-50" />

      {/* Navigation Rail */}
      <NavigationRail 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        currentRole={currentRole}
        onOpenAskAI={handleOpenAskAI}
      />

      {/* Top Header */}
      <TopHeader 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        onOpenAskAI={handleOpenAskAI}
      />

      {/* Main Content Area */}
      <main className="pl-[72px] pt-20 px-6 md:px-10 max-w-[1600px] mx-auto w-full flex-1">
        {activeTab === 'today' && (
          <TodayPage 
            setActiveTab={setActiveTab} 
            currentRole={currentRole} 
            onOpenAskAI={handleOpenAskAI}
            onOpenPrepareMe={handleOpenPrepareMe}
          />
        )}

        {activeTab === 'understand' && <DossierPage onOpenAskAI={handleOpenAskAI} />}
        {activeTab === 'decide' && <DecisionsPage />}
        {activeTab === 'instruct' && <InstructionsPage />}
        {activeTab === 'execute' && <Roadmap100DaysPage />}
        {activeTab === 'prove' && <PerformanceContractPage />}
        {activeTab === 'inbox' && <CabinetInboxPage />}
        {activeTab === 'agenda' && <ExecutiveAgendaPage onOpenPrepareMe={handleOpenPrepareMe} />}
        {activeTab === 'search' && <SovereignSearchPage />}
        {activeTab === 'governance' && <SovereignGovernancePage />}

        {/* Extended Executive Screens */}
        {activeTab === 'prepare' && <PrepareMePage setActiveTab={setActiveTab} />}
        {activeTab === 'decision_action' && <DecisionToActionPage />}
        {activeTab === 'projects' && <ProjectsPortfolioPage />}
        {activeTab === 'budget_results' && <BudgetVsResultsPage />}
        {activeTab === 'interministerial' && <InterministerialMapPage />}
        {activeTab === 'reports' && <PerformanceReportsPage />}
        {activeTab === 'audit' && <AuditTraceabilityPage />}
      </main>

      {/* Universal Ambient Ask MINISTRE AI Overlay */}
      <AskMinistreAIModal 
        isOpen={isAskAIOpen} 
        onClose={handleCloseAskAI} 
        currentRole={currentRole} 
      />
    </div>
  );
}

export default App;

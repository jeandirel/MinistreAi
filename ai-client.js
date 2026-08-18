(() => {
  const doc = document;

  const escapeHtml = (s = '') => s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const formatAnswer = (text = '') => escapeHtml(text)
    .replace(/^([A-ZÀ-Ÿ][A-ZÀ-Ÿ /'-]{3,})$/gm, '<strong class="ai-heading">$1</strong>')
    .replace(/\n/g, '<br>');

  const style = doc.createElement('style');
  style.textContent = `
    .ai-live-banner{position:fixed;right:24px;bottom:22px;z-index:60;max-width:360px;background:#0e1319;border:1px solid #2e4550;box-shadow:0 18px 55px rgba(0,0,0,.35);padding:10px 12px;color:#9daaba;font:10px/1.45 Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:.035em}
    .ai-live-banner b{color:#b9effa;font-weight:650}.ai-live-banner .safe{color:#83ddb7}.ai-live-banner .warn{color:#f1c64a}
    .ai-result{margin-top:14px;padding:16px;background:#0d1117;border:1px solid #29323d;max-height:300px;overflow:auto;color:#cbd4df;font-size:12px;line-height:1.65;display:none}
    .ai-result.visible{display:block}.ai-heading{display:inline-block;margin:8px 0 2px;color:#9feaff;font-size:10px;letter-spacing:.12em}.ai-meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.ai-pill{border:1px solid #34414d;padding:4px 6px;font-size:8px;text-transform:uppercase;letter-spacing:.09em;color:#8e9cab}.ai-pill.good{color:#a1f0cf;border-color:#285845}.ai-pill.warn{color:#f6d879;border-color:#66572a}.ai-loading{opacity:.65;pointer-events:none}.ai-error{color:#ffaaa5}.ask .btn{min-width:74px}.ai-inline-answer{margin-top:10px;padding:14px;border:1px solid #2c3741;background:#0e1217;color:#cbd4df;font-size:12px;line-height:1.65}
    @media(max-width:640px){.ai-live-banner{left:12px;right:12px;bottom:12px;max-width:none}}
  `;
  doc.head.appendChild(style);

  const banner = doc.createElement('div');
  banner.className = 'ai-live-banner';
  banner.innerHTML = '<b>MINISTRE AI · IA CONNECTÉE</b><br><span class="warn">Mode démonstration : API cloud gratuite, données publiques/synthétiques uniquement.</span>';
  doc.body.appendChild(banner);

  async function aiRequest({ prompt, mode = 'command', context = '' }) {
    const r = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, mode, context, dataClass: 'DEMO' })
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error || `Erreur IA ${r.status}`);
    return data;
  }

  function demoContext(scope = 'general') {
    const contexts = {
      general: `Contexte de démonstration MINISTRE AI — République Gabonaise.\nLes informations visibles dans l'interface sont synthétiques et servent uniquement à démontrer le produit.\nPriorités simulées : souveraineté numérique, hébergement stratégique, identité numérique, infrastructures critiques, coordination interministérielle et traçabilité des décisions.`,
      dossier: `DOSSIER DE DÉMONSTRATION — Réf. MIN-DIR-077 — 18 août 2026.\nObjet : Programme souverain, note d'évaluation préliminaire.\nExigences identifiées : hébergement maîtrisé, séparation des habilitations, réversibilité fournisseur, contrôle humain des actions sensibles.\nVecteur A — Données : risque de transfert non maîtrisé vers une infrastructure tierce, niveau élevé.\nVecteur B — Modèles : dépendance à un fournisseur unique et réversibilité insuffisante.\nVecteur C — Gouvernance : absence de registre consolidé des décisions et habilitations.\nSources de démonstration référencées : Directive de sécurité — Révision interne ; Rapport d'architecture & souveraineté.\nImportant : ne pas inventer d'autres sources.`,
      decision: `REGISTRE DE DÉMONSTRATION.\nDIR-26-089 : Réallocation budgétaire infrastructure. Progression 65 %, retard 48 h, responsable : Secrétariat général, blocage après validation, dérogation exécutive requise.\nDIR-26-092 : Protocole de communication sécurisée. Progression 42 %, échéance 24 août, responsable : Direction numérique.\nDIR-26-075 : Briefing stratégique trimestriel, clôturé le 12 août.\nToutes les données sont synthétiques.`
    };
    return contexts[scope] || contexts.general;
  }

  function providerLabel(data) {
    const provider = data.provider === 'local' ? 'SOUVERAIN LOCAL' : (data.provider || 'IA').toUpperCase();
    const warning = data.provider === 'local' ? 'good' : 'warn';
    return `<div class="ai-meta"><span class="ai-pill ${warning}">${escapeHtml(provider)}</span><span class="ai-pill">${escapeHtml(data.model || '')}</span><span class="ai-pill">${Number(data.latencyMs || 0)} ms</span><span class="ai-pill good">Validation humaine</span></div>`;
  }

  function updateTrust(data) {
    const trustNodes = [...doc.querySelectorAll('.trust')];
    trustNodes.forEach(node => {
      if (data.provider === 'local') node.innerHTML = '<span class="dot"></span> IA SOUVERAINE · LOCALE';
      else node.innerHTML = '<span class="dot" style="background:#f1c64a;box-shadow:0 0 12px rgba(241,198,74,.45)"></span> IA CLOUD · DÉMO UNIQUEMENT';
    });
    if (data.provider === 'local') banner.innerHTML = '<b>MINISTRE AI · IA SOUVERAINE ACTIVE</b><br><span class="safe">Traitement via fournisseur local/privé configuré.</span>';
    else banner.innerHTML = `<b>MINISTRE AI · ${escapeHtml(data.provider || 'IA').toUpperCase()}</b><br><span class="warn">API cloud gratuite : données publiques/synthétiques uniquement.</span>`;
  }

  // Executive command modal
  const modal = doc.getElementById('commandModal');
  if (modal) {
    const box = modal.querySelector('.modalbox');
    const textarea = box?.querySelector('textarea');
    const actions = box?.querySelector('.modalactions');
    const execute = actions?.querySelector('.btn.primary');
    const result = doc.createElement('div');
    result.className = 'ai-result';
    if (actions) box.insertBefore(result, actions);

    if (execute && textarea) {
      execute.textContent = 'Exécuter avec IA';
      execute.addEventListener('click', async () => {
        const prompt = textarea.value.trim();
        if (!prompt) { textarea.focus(); return; }
        execute.classList.add('ai-loading');
        execute.textContent = 'Analyse…';
        result.className = 'ai-result visible';
        result.innerHTML = 'Analyse exécutive en cours…';
        try {
          const data = await aiRequest({ prompt, mode: 'command', context: demoContext('general') });
          result.innerHTML = `${formatAnswer(data.answer)}${providerLabel(data)}`;
          updateTrust(data);
        } catch (err) {
          result.innerHTML = `<span class="ai-error">${escapeHtml(err.message)}</span><br><br>Ajoute une clé gratuite <b>GEMINI_API_KEY</b> ou <b>OPENROUTER_API_KEY</b> dans les variables Vercel.`;
        } finally {
          execute.classList.remove('ai-loading');
          execute.textContent = 'Exécuter avec IA';
        }
      });
    }
  }

  // Dossier intelligence Q&A
  const ask = doc.querySelector('#dossiers .ask');
  if (ask) {
    const input = ask.querySelector('input');
    const button = ask.querySelector('button');
    const inline = doc.createElement('div');
    inline.className = 'ai-inline-answer';
    inline.style.display = 'none';
    ask.parentElement.appendChild(inline);

    const send = async () => {
      const prompt = input.value.trim();
      if (!prompt) return;
      button.classList.add('ai-loading');
      button.textContent = '…';
      inline.style.display = 'block';
      inline.innerHTML = 'Interrogation du dossier de démonstration…';
      try {
        const data = await aiRequest({ prompt, mode: 'dossier', context: demoContext('dossier') });
        inline.innerHTML = `${formatAnswer(data.answer)}${providerLabel(data)}`;
        updateTrust(data);
      } catch (err) {
        inline.innerHTML = `<span class="ai-error">${escapeHtml(err.message)}</span>`;
      } finally {
        button.classList.remove('ai-loading');
        button.textContent = 'Envoyer';
      }
    };
    button.addEventListener('click', send);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  }

  // Decision analysis button: add an AI option without changing core visual structure
  const decisionTrace = doc.querySelector('#decisions .trace');
  if (decisionTrace) {
    const aiBtn = doc.createElement('button');
    aiBtn.className = 'btn primary';
    aiBtn.style.cssText = 'width:100%;margin-top:8px';
    aiBtn.textContent = 'Analyser l’arbitrage avec IA';
    const output = doc.createElement('div');
    output.className = 'ai-inline-answer';
    output.style.display = 'none';
    decisionTrace.appendChild(aiBtn);
    decisionTrace.appendChild(output);
    aiBtn.addEventListener('click', async () => {
      aiBtn.classList.add('ai-loading');
      output.style.display = 'block';
      output.innerHTML = 'Préparation des options d’arbitrage…';
      try {
        const data = await aiRequest({
          prompt: 'Analyse DIR-26-089. Donne les faits disponibles, les risques, 3 options maximum et la prochaine action. N’invente rien.',
          mode: 'decision',
          context: demoContext('decision')
        });
        output.innerHTML = `${formatAnswer(data.answer)}${providerLabel(data)}`;
        updateTrust(data);
      } catch (err) {
        output.innerHTML = `<span class="ai-error">${escapeHtml(err.message)}</span>`;
      } finally {
        aiBtn.classList.remove('ai-loading');
      }
    });
  }

  // Probe API configuration without sending content
  fetch('/api/ai').then(r => r.json()).then(status => {
    if (!status.ok) return;
    const configured = status.configured || {};
    if (!configured.local && !configured.gemini && !configured.openrouter) {
      banner.innerHTML = '<b>MINISTRE AI · INTERFACE PRÊTE</b><br><span class="warn">Moteur IA non configuré : ajouter une clé gratuite dans Vercel.</span>';
    } else if (configured.local) {
      banner.innerHTML = '<b>MINISTRE AI · MODE SOUVERAIN DISPONIBLE</b><br><span class="safe">Un fournisseur local/privé est configuré.</span>';
    }
  }).catch(() => {});
})();

# MINISTRE AI — Sovereign Executive Interface

Interfaces **MINISTRE AI uniquement** :

- Briefing stratégique exécutif
- Espace documentaire intelligent
- Centre de commandement décision → action
- Commande exécutive IA
- Analyse IA du dossier
- Aide à l'arbitrage décisionnel

## Architecture

- `index.html` : interface Stitch d'origine
- `app.html` : montage principal avec client IA
- `ai-client.js` : interactions IA côté interface
- `api/ai.js` : gateway serveur, clés jamais exposées au navigateur
- `vercel.json` : route `/` vers l'interface IA

## Fournisseurs IA

Ordre par défaut :

1. **Local / souverain** via endpoint OpenAI-compatible si `LOCAL_AI_BASE_URL` est configuré
2. **Gemini API** via `GEMINI_API_KEY`
3. **OpenRouter Free Models Router** via `OPENROUTER_API_KEY`

Le gateway effectue un fallback automatique selon les fournisseurs configurés.

## Variables Vercel

Copier les variables utiles depuis `.env.example` dans **Vercel → Project → Settings → Environment Variables**.

Minimum pour une démo gratuite :

```env
GEMINI_API_KEY=...
GEMINI_MODEL=gemini-3.5-flash
```

ou :

```env
OPENROUTER_API_KEY=...
OPENROUTER_MODEL=openrouter/free
```

Puis redéployer.

## Politique de souveraineté

Les API cloud gratuites servent **uniquement aux données publiques ou synthétiques de démonstration**.

Le serveur bloque une demande classifiée `CONFIDENTIEL`, `SENSIBLE`, `SECRET` ou `TRÈS SECRET` lorsqu'aucun fournisseur local/privé n'est configuré.

Pour des données institutionnelles réelles, utiliser un modèle privé/local et une infrastructure adaptée aux exigences de sécurité, de protection des données et de souveraineté.

## Navigation

- `#briefing`
- `#dossiers`
- `#decisions`

Les données visibles dans la version actuelle sont des **données de démonstration**.

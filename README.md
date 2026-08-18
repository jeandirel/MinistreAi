# MINISTRE AI — Intelligence exécutive souveraine

Prototype **MINISTRE AI uniquement** pour le contexte gabonais.

## Interfaces

- **Bilan exécutif du Ministre** : priorités, alertes, dossiers et décisions à valider
- **Dossier stratégique** : intelligence documentaire, risques, sources et Q&A IA
- **Centre de commandement décision → action** : directives, échéances, blocages, escalades et traçabilité
- **Commande exécutive IA** : préparation de notes et briefings
- **Analyse IA de dossier**
- **Aide à l’arbitrage décisionnel**

La nouvelle interface reprend les principes du design Stitch `Sovereign Trust` : ivoire institutionnel, bleu souverain, vert de confiance, or d’autorité, typographie éditoriale, faible usage des ombres et hiérarchie d’information très forte.

Les éléments spécifiques à l’APDPVP ont été volontairement retirés : le produit reste **MINISTRE AI**, sans prétendre être un produit officiel d’une autorité existante.

## Architecture

- `index.html` : interface souveraine MINISTRE AI
- `app.html` : shell principal et injection du client IA
- `ai-client.js` : interactions IA côté navigateur
- `api/ai.js` : gateway serveur, clés jamais exposées au navigateur
- `vercel.json` : route `/` vers l’application

## Fournisseurs IA

Ordre par défaut :

1. **Local / souverain** via endpoint OpenAI-compatible si `LOCAL_AI_BASE_URL` est configuré
2. **Gemini API** via `GEMINI_API_KEY`
3. **OpenRouter Free Models Router** via `OPENROUTER_API_KEY`

Le gateway effectue un fallback automatique selon les fournisseurs configurés.

## Variables Vercel

Copier les variables utiles depuis `.env.example` dans **Vercel → Project → Settings → Environment Variables**.

Exemple pour une démo cloud :

```env
GEMINI_API_KEY=...
GEMINI_MODEL=...
```

ou :

```env
OPENROUTER_API_KEY=...
OPENROUTER_MODEL=openrouter/free
```

Puis redéployer.

## Politique de souveraineté

Les API cloud servent **uniquement aux données publiques ou synthétiques de démonstration**.

Le serveur bloque une demande classifiée `CONFIDENTIEL`, `SENSIBLE`, `SECRET` ou `TRÈS SECRET` lorsqu’aucun fournisseur local/privé n’est configuré.

Pour des données institutionnelles réelles, utiliser un modèle privé/local et une infrastructure conforme aux exigences de sécurité, de protection des données et de souveraineté.

## Navigation

- `#briefing`
- `#dossiers`
- `#decisions`

Les données visibles sont des **données synthétiques de démonstration**.
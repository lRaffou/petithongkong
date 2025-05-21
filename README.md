HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# petithongkong

f6428f00e15fb550337a0910b8fc9da9fa08e695

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

# **Badge "build passing" >** [![CI - Next.js](https://github.com/lRaffou/petithongkong/actions/workflows/ci.yml/badge.svg)](https://github.com/lRaffou/petithongkong/actions)

#### Initialisation du projet.

Mise en place de next.js

## Premier test perso.

J'ai créé une Header, Footer, About et Contact pour faire des premiers tests. C'est responsive oui, mais le menu burger n'est pas automatiquement créé. (à faire)

Pour une page, il faut son dossier avec sa page dédiée à l'intérieur. Pour les composants pas besoin. (directement les pages dans dans le dossier)

## Création du pipeline avec github.

J'ai créé une nouvelle branche pour installer une pipeline avec github. (pipeline-github)

Pipeline CI Github vérifie le code à chaque **push**

**Ce que cette pipeline va faire automatiquement :**

📥 Cloner le dépôt

📦 Installer les dépendances (npm install)

🔍 Lancer npm run lint (ESLint)

🛠️ Construire le projet (npm run build)

Création de _.github/workflows/ci.yml_ et sont contenu.

Après avoir testé la pipeline sur github j'ai eu une erreur :

    🔍 Run ESLint
    Process completed with exit code 1.

**Evaluation et correction de problème :**

_Ce que tu vois est très clair : la première exécution de next lint dans la pipeline déclenche le configurateur interactif d’ESLint, car tu ne l’as pas encore configuré localement._

Solution : configurer ESLint en local.
Next.js va générer un fichier .eslintrc.json et installer ce qu’il faut.

J'ai ajouté aussi Prettier au package.json, pour formater le code. (npm run format)

La pipeline m'a signalé des variables inutilisées, j'avais supprimé les polices de base next.js. (j'ai supprimé l'import et la constante dans layout)

_J'y est ajouter un badge "Build passing" au README._

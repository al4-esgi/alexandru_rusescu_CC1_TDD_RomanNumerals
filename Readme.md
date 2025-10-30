# 🧮 Roman Numerals Converter - TDD Kata

Projet réalisé dans le cadre du **Contrôle Continu #1** sur le **Test Driven Development (TDD)**.

## 📝 Description

Ce projet implémente un convertisseur de nombres entiers (1-3999) en chiffres romains, en suivant rigoureusement la méthodologie TDD (Red → Green → Refactor).

## 🛠️ Langage et outils

- **Langage** : TypeScript
- **Framework de test** : Vitest
- **Runtime** : Node.js

## 🚀 Installation

```bash
npm install
```

## ▶️ Exécution des tests

```bash
npm test
```

Pour lancer les tests en mode watch :

```bash
npm run test:watch
```

## 📐 Approche TDD suivie

J’ai suivi une approche Test Driven Development (TDD) tout au long du développement. Dans un premier temps, j’ai commencé par écrire les tests pour les cas simples (1, 2 et 3), puis j’ai implémenté une version initiale de la fonction à l’aide de conditions explicites (if/else) afin de les faire passer. Par la suite, j’ai ajouté un tableau pour gérer les valeurs de 1 à 5, tout en écrivant systématiquement les tests avant chaque modification du code. Enfin, j’ai introduit tableau de correspondance permettant de gérer les combinaisons soustractives (IV, IX, etc.), ce qui a permis de rendre l’implémentation plus claire, évolutive et conforme aux règles des nombres romains.

## ✅ Règles implémentées

- **Symboles de base** : I, V, X, L, C, D, M
- **Règles soustractives** : IV (4), IX (9), XL (40), XC (90), CD (400), CM (900)
- **Plage supportée** : 1 à 3999

## 📂 Structure du projet

```
/src
  └── roman-converter.ts    → Classe RomanConverter
/tests
  └── roman-converter.test.ts → Tests unitaires
```

## 💡 Exemple d'utilisation

```typescript
import { RomanConverter } from "./src/roman-converter";

const converter = new RomanConverter();
console.log(converter.convert(1994)); // "MCMXCIV"
console.log(converter.convert(58)); // "LVIII"
console.log(converter.convert(3999)); // "MMMCMXCIX"
```

---

**Auteur** : Alexandru Rusescu
**Date** : 30 Octobre 2025

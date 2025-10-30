# Guide d'initialisation : Projet TypeScript avec Vitest

Ce guide vous explique comment configurer un projet TypeScript avec des tests Vitest depuis zéro.

## Prérequis

- Node.js installé (version 18 ou supérieure recommandée)
- npm (inclus avec Node.js)

## Pourquoi Vitest ?

Vitest est un framework de test moderne, rapide et compatible avec Vite. Il offre :

- ⚡ **Performance** : Exécution ultra-rapide des tests
- 🔄 **Hot Module Replacement** : Rechargement instantané en mode watch
- 🎯 **Compatible Jest** : API similaire à Jest, migration facile
- 📦 **TypeScript natif** : Support TypeScript sans configuration supplémentaire
- 📊 **Coverage intégré** : Couverture de code native

## Étapes d'initialisation

### 1. Créer le projet et initialiser npm

```bash
mkdir mon-projet-tdd
cd mon-projet-tdd
npm init -y
```

### 2. Installer les dépendances

Installez TypeScript et Vitest :

```bash
npm install --save-dev typescript vitest
```

**Explication des packages :**

- `typescript` : Compilateur TypeScript
- `vitest` : Framework de test moderne et rapide

### 3. Créer la structure de dossiers

```bash
mkdir src tests
```

**Structure du projet :**

```
mon-projet-tdd/
├── src/              # Code source TypeScript
├── tests/            # Fichiers de tests
├── dist/             # Code compilé (généré automatiquement)
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

### 4. Configurer TypeScript (`tsconfig.json`)

Créez le fichier `tsconfig.json` à la racine :

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["dist"]
}
```

**Options importantes :**

- `target` : Version JavaScript de sortie
- `module` : Système de modules (commonjs pour Node.js)
- `rootDir` : Dossier source
- `outDir` : Dossier de sortie de la compilation
- `strict` : Active tous les contrôles stricts de TypeScript

### 5. Configurer Vitest (`vitest.config.ts`)

Créez le fichier `vitest.config.ts` à la racine :

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["tests/**/*.{test,spec}.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "dist/", "tests/"],
    },
  },
});
```

**Options importantes :**

- `globals: true` : Permet d'utiliser `describe`, `it`, `expect` sans import
- `environment: 'node'` : Environnement d'exécution Node.js
- `include` : Pattern pour trouver les fichiers de test
- `coverage` : Configuration de la couverture de code

### 6. Ajouter les scripts dans `package.json`

Modifiez votre `package.json` pour ajouter :

```json
{
  "scripts": {
    "build": "tsc",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  },
  "type": "commonjs"
}
```

### 7. Créer le fichier `.gitignore`

```
node_modules
dist
coverage
```

### 8. Créer votre premier fichier source

Créez `src/sum.function.ts` :

```typescript
export function sum(a: number, b: number): number {
  return a + b;
}
```

### 9. Créer votre premier test

Créez `tests/sum.test.ts` :

```typescript
import { describe, it, expect } from "vitest";
import { sum } from "../src/sum.function";

describe("sum", () => {
  it("additionne deux nombres", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("additionne deux nombres négatifs", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it("gère le zéro", () => {
    expect(sum(5, 0)).toBe(5);
  });
});
```

**Note :** Si vous avez configuré `globals: true`, vous pouvez omettre l'import de `describe`, `it`, `expect`.

## Utilisation

### Lancer les tests (une fois)

```bash
npm test
```

### Lancer les tests en mode watch (recommandé pour TDD)

```bash
npm run test:watch
```

Le mode watch relance automatiquement les tests à chaque modification !

### Lancer les tests avec couverture

```bash
npm run test:coverage
```

### Compiler le TypeScript

```bash
npm run build
```

Le code compilé sera généré dans le dossier `dist/`.

## Conventions de nommage

- **Fichiers de test** : `*.test.ts` ou `*.spec.ts`
- **Fichiers source** : `*.ts` dans le dossier `src/`
- **Organisation** : Gardez vos tests dans le dossier `tests/` avec une structure miroir de `src/`

## Astuces TDD

1. **Red-Green-Refactor** : Écrivez d'abord un test qui échoue, puis le code pour le faire passer, puis refactorisez
2. **Un test à la fois** : Concentrez-vous sur un comportement par test
3. **Nommage descriptif** : Utilisez `describe` et `it` avec des descriptions claires
4. **Arrange-Act-Assert** : Organisez vos tests en trois parties (préparer, agir, vérifier)
5. **Mode watch** : Utilisez `npm run test:watch` pour un feedback instantané

## Matchers Vitest les plus courants

Vitest utilise la même API que Jest :

```typescript
// Égalité
expect(value).toBe(3); // Égalité stricte (===)
expect(value).toEqual({ a: 1 }); // Égalité profonde pour objets/tableaux

// Véracité
expect(value).toBeTruthy(); // Valeur vraie
expect(value).toBeFalsy(); // Valeur fausse
expect(value).toBeNull(); // Null
expect(value).toBeUndefined(); // Undefined
expect(value).toBeDefined(); // Défini

// Nombres
expect(value).toBeGreaterThan(3); // Supérieur à
expect(value).toBeLessThan(5); // Inférieur à
expect(value).toBeCloseTo(0.3); // Proche de (pour les flottants)

// Chaînes
expect(value).toMatch(/pattern/); // Correspond au pattern
expect(value).toContain("substring"); // Contient la sous-chaîne

// Tableaux et objets
expect(array).toContain(item); // Contient l'élément
expect(array).toHaveLength(3); // Longueur
expect(object).toHaveProperty("key"); // Possède la propriété

// Exceptions
expect(() => fn()).toThrow(); // Lance une exception
expect(() => fn()).toThrow("error message"); // Lance avec message spécifique

// Promises
await expect(promise).resolves.toBe(value); // Promise résolue
await expect(promise).rejects.toThrow(); // Promise rejetée
```

## Fonctionnalités avancées de Vitest

### Tests de snapshot

```typescript
import { describe, it, expect } from "vitest";

describe("snapshot", () => {
  it("correspond au snapshot", () => {
    const data = { name: "John", age: 30 };
    expect(data).toMatchSnapshot();
  });
});
```

### Mocking

```typescript
import { describe, it, expect, vi } from "vitest";

describe("mocking", () => {
  it("mock une fonction", () => {
    const mockFn = vi.fn(() => "mocked");
    expect(mockFn()).toBe("mocked");
    expect(mockFn).toHaveBeenCalled();
  });
});
```

### Tests paramétrés

```typescript
import { describe, it, expect } from "vitest";

describe.each([
  { a: 1, b: 2, expected: 3 },
  { a: 5, b: 10, expected: 15 },
  { a: -1, b: -2, expected: -3 },
])("sum($a, $b)", ({ a, b, expected }) => {
  it(`returns ${expected}`, () => {
    expect(sum(a, b)).toBe(expected);
  });
});
```

## Commandes utiles

```bash
# Installer les dépendances
npm install

# Lancer les tests
npm test

# Tests en mode watch
npm run test:watch

# Tests avec couverture
npm run test:coverage

# Compiler le TypeScript
npm run build

# Lancer un seul fichier de test
npx vitest run tests/sum.test.ts

# Mode UI (interface graphique)
npx vitest --ui

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json && npm install
```

## Interface utilisateur Vitest (optionnel)

Vitest propose une interface graphique moderne :

```bash
npm install --save-dev @vitest/ui
```

Puis lancez :

```bash
npx vitest --ui
```

## Migration depuis Jest

Si vous avez un projet Jest existant :

1. Désinstallez Jest : `npm uninstall jest ts-jest @types/jest`
2. Installez Vitest : `npm install --save-dev vitest`
3. Remplacez `jest.config.js` par `vitest.config.ts`
4. Mettez à jour les scripts dans `package.json`
5. Vos tests devraient fonctionner sans modification ! 🎉

## Prochaines étapes

- **Interface UI** : Installez `@vitest/ui` pour une interface graphique
- **Coverage** : La couverture est déjà configurée, lancez `npm run test:coverage`
- **Linter** : Configurez ESLint pour maintenir la qualité du code
- **Prettier** : Ajoutez le formatage automatique du code
- **Husky** : Configurez des hooks Git pour lancer les tests avant commit
- **CI/CD** : Intégrez les tests dans votre pipeline d'intégration continue

## Comparaison Jest vs Vitest

| Caractéristique  | Jest              | Vitest          |
| ---------------- | ----------------- | --------------- |
| Vitesse          | Rapide            | Ultra-rapide ⚡ |
| Configuration TS | Nécessite ts-jest | Natif           |
| HMR              | Non               | Oui 🔥          |
| ESM              | Support limité    | Support complet |
| API              | Mature            | Compatible Jest |
| UI               | Non               | Oui (optionnel) |

## Ressources

- [Documentation Vitest](https://vitest.dev/)
- [Documentation TypeScript](https://www.typescriptlang.org/)
- [Guide de migration Jest → Vitest](https://vitest.dev/guide/migration.html)
- [Guide TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

## Troubleshooting

### Erreur d'import

Si vous avez des erreurs d'import, vérifiez que `globals: true` est dans `vitest.config.ts` ou ajoutez les imports :

```typescript
import { describe, it, expect } from "vitest";
```

### Couverture ne fonctionne pas

Installez le provider de coverage :

```bash
npm install --save-dev @vitest/coverage-v8
```

### Tests trop lents

Vitest exécute les tests en parallèle par défaut. Si nécessaire, ajoutez dans la config :

```typescript
test: {
  threads: false, // Désactive le parallélisme
}
```

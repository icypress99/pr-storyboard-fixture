# PR Storyboard Fixture

Throwaway repo for exercising the **PR Storyboard** GitEase plugin.

## What to open

1. Open `C:\work\Ronia\Magic\pr-storyboard-fixture` in GitEase.
2. Check out branch `demo/storyboard`.
3. Open **Storyboard** from the nav rail (or right-click the branch → **Open Storyboard**).

## Expected storyboard

Base should resolve to `main` / `origin/main`. Ahead of base you get ~7 commits that cluster into fewer frames when clustering is on:

| Commit | Type / path | Clustering note |
|--------|-------------|-----------------|
| `feat(ui): add story header` | `src/ui` | clusters with next ui commit |
| `feat(ui): heat chips` | `src/ui` | same type + path |
| `fix(api): null base ref` | `src/api` | separate frame |
| `chore: ignore build artifacts` | root | separate |
| `feat(api): draft body builder` | `src/api` | clusters with next api |
| `feat(api): existing pr detect` | `src/api` | same type + path |
| `docs: how to scrub the story` | `docs` | separate |

Toggle **Cluster** off to see every commit as its own frame. Use Play / ← → to scrub, then **Create PR**.

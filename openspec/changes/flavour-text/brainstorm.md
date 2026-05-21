## Design Summary

Display a random two-word phrase in the top-left corner of the todo app. The phrase is generated on page load from a static local word list and changes on every page refresh. No persistence, no reactivity — purely decorative.

## Alternatives Considered

### Alternative A: Static local word list
- **Approach**: A JS module exports an array of ~60-80 words. A function picks 2 at random and returns them joined.
- **Pros**: Zero external dependencies, instant load, works offline, trivially testable, fits the vanilla JS ethos
- **Cons**: Fixed vocabulary
- **Why not chosen**: This IS the chosen approach

### Alternative B: Random word API
- **Approach**: Fetch 2 words from a free random word API on page load
- **Pros**: Infinite variety of words
- **Cons**: Network latency on load, can fail (needs fallback), CORS concerns, external dependency for a purely cosmetic feature
- **Why not chosen**: Over-engineered for a decorative two-word label; adds a failure mode for no meaningful benefit

### Alternative C: Hybrid (API with static fallback)
- **Approach**: Try the API first, fall back to the local list on failure
- **Pros**: Best variety when online, still works offline
- **Cons**: Combines the complexity of both approaches for a feature that doesn't warrant it
- **Why not chosen**: Unnecessary complexity; the static list provides more than enough variety for flavour text

## Agreed Approach

Static local word list (Alternative A). A new `words.js` module contains a curated array of words and a `getRandomPhrase()` function. On page load, the phrase is generated and injected into a `<span id="flavour-text">` element in the top-left of the app container. Styled small and muted so it doesn't compete with app content.

## Key Decisions

- **Word source**: Static local array (~60-80 words mixing nouns and adjectives)
- **Sampling**: Pick 2 words without replacement from the array
- **Positioning**: Top-left of the `.container`, before the `<h1>`
- **Styling**: Small (0.75rem), muted color using existing `--color-muted` CSS variable
- **Lifecycle**: Generated once on page load, no persistence, new phrase on every refresh

## Open Questions

None — the scope is fully defined.

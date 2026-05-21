## ADDED Requirements

### Requirement: Random Phrase Generation

The application SHALL provide a function that selects 2 words at random without replacement from a static word list and returns them joined with a space. The word list MUST contain at least 50 words. The two selected words MUST be distinct (no duplicates in a single phrase).

#### Scenario: Generate a two-word phrase

- **WHEN** `getRandomPhrase()` is called
- **THEN** it SHALL return a string containing exactly two words separated by a single space, both sourced from the static word list

#### Scenario: Words are not repeated within a phrase

- **WHEN** `getRandomPhrase()` is called
- **THEN** the two words in the returned phrase SHALL be different from each other

---

### Requirement: Phrase Display on Page Load

The application SHALL display the generated two-word phrase in a `<span id="flavour-text">` element positioned at the top of the app container, before the main heading. The phrase MUST be rendered once during page initialization and SHALL NOT update again until the next page load.

#### Scenario: Phrase appears on initial page load

- **WHEN** the page loads
- **THEN** the `#flavour-text` element SHALL contain a two-word phrase generated from the static word list

#### Scenario: Phrase changes on page refresh

- **WHEN** the user refreshes the page
- **THEN** a new random phrase SHALL be generated (the phrase MAY be the same by chance, but is re-generated each time)

---

### Requirement: Phrase Visual Styling

The flavour text MUST be styled as a small, muted label that does not visually compete with the app's primary content. It SHALL use a font size no larger than 0.75rem and a muted color consistent with the app's existing muted text styling.

#### Scenario: Phrase is visually subtle

- **WHEN** the page loads and the flavour text is displayed
- **THEN** the `#flavour-text` element SHALL have a font size of 0.75rem or smaller and use the app's muted text color

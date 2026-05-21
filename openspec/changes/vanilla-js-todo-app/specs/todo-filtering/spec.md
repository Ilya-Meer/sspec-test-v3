## ADDED Requirements

### Requirement: Filter Todos by Status

The application SHALL provide filter controls that allow the user to view a subset of todos by their completion status. The available filters MUST be "All", "Active", and "Completed". The default filter on page load SHALL be "All".

#### Scenario: User selects "Active" filter

- **WHEN** the user clicks the "Active" filter button
- **THEN** only todos that are not completed SHALL be visible in the list, and the "Active" filter button SHALL appear selected

#### Scenario: User selects "Completed" filter

- **WHEN** the user clicks the "Completed" filter button
- **THEN** only todos that are completed SHALL be visible in the list, and the "Completed" filter button SHALL appear selected

#### Scenario: User selects "All" filter

- **WHEN** the user clicks the "All" filter button
- **THEN** all todos SHALL be visible regardless of completion status, and the "All" filter button SHALL appear selected

---

### Requirement: Active Item Count

The application SHALL display a count of remaining active (not completed) todos. This count MUST update in real time as todos are added, completed, reactivated, or deleted.

#### Scenario: Count reflects current active todos

- **WHEN** there are 3 todos total and 1 is completed
- **THEN** the displayed count SHALL read "2 items left"

#### Scenario: Count updates after toggling completion

- **WHEN** the user completes an active todo
- **THEN** the active count SHALL decrease by one immediately

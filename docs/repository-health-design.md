# Repository Health Design

## Scope

Detailed health monitoring is limited to the four curated flagship repositories:

- labyrinth-ai-engine
- Aeronautics-reliability
- Data-Science-Projects
- BGA-hometask-smart-contract-engineer-

## Data Sources

- GitHub repository metadata
- Latest commit
- Latest GitHub Actions workflow run
- Latest release
- Curated deployment URLs

## Normalized Workflow States

- HEALTHY
- IN_PROGRESS
- FAILING
- NO_WORKFLOW
- UNAVAILABLE
- UNKNOWN

## Health Score

- Recent commit within 30 days: 25
- Recent commit within 31 to 120 days: 15
- Successful workflow: 30
- In-progress workflow: 20
- No workflow configured: 10
- Published release: 15
- Repository not archived: 10
- License present: 10
- Description present: 5
- Topics present: 5

## Score Bands

- 85 to 100: HEALTHY
- 65 to 84: OPERATIONAL
- 40 to 64: DEGRADED
- 0 to 39: NEEDS_ATTENTION

## Deployment Monitoring

Labyrinth currently responds successfully from Render. A cold request took approximately 22.4 seconds, so a slow initial response should be classified as WAKING rather than UNAVAILABLE.

## Security

GitHub credentials must never be exposed through VITE-prefixed environment variables. Authenticated health aggregation will eventually be performed by a server-side endpoint.

# Contribution Guidelines
1. Create an issue using the naming convention for details of the country you want to add and wait to be assigned.
`add details/country name`

2. Fork the repository & name the branch in the following manner
`feat/add-country-<code>`

3. Editing JSON block carefully
- Pick the correct continent HTML file.
- Inside its JSON block, append a new object to the `countries` array
- Ensure an `iso2` uppercase code (ISO 3166‑1 alpha‑2) exists – this drives the flag image.
- Add helpline keys using `snake_case` (e.g., `gender_based_violence`) – they are prettified automatically (`_` → space).
- Update the `updated` field to today’s date (YYYY-MM-DD)

4. Common mistakes to avoid:
- Make sure to add a line as space
- To make sure the valid JSON – no trailing commas
- Keep the countries in **alphabetical order [A-Z]**.
- Manually open the continent page to verify rendering & filtering before creating PR.

5. Add proper title and description for the pull request
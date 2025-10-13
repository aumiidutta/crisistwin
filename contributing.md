# Contribution Guidelines

1. Create an issue using the naming convention for the country you want to add and wait to be assigned:
	`add details/<country name>`

2. Fork the repository and create a branch named:
	`feat/add-country-<iso2>`

3. Edit the JSON block carefully
- Pick the correct continent HTML file.
- Inside its JSON block, append a new object to the `countries` array.
- Ensure an uppercase `iso2` code (ISO 3166‑1 alpha‑2) – this drives the flag image.
- Add helpline keys using `snake_case` (e.g., `gender_based_violence`) – they are prettified automatically (`_` → space).
- Update the `updated` field to today’s date (YYYY-MM-DD).

4. Common mistakes to avoid
- Do not leave trailing commas – keep the JSON valid.
- Keep countries in alphabetical order by `name` (A→Z).
- Keep consistent formatting (one object per line block, with commas between objects only).

5. Verify locally
- Manually open the continent page in a browser to verify rendering and filtering.
- Check that the flag shows (correct `iso2`) and helpline keys look correct.

6. Open a pull request
- Use a clear title and description (e.g., "Add helplines for <Country> in <Continent>").
- Reference the issue number in the description.
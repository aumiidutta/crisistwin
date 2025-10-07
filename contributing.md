# Contribution Guidelines
- Fork & branch (`feat/add-country-<code>`).

- Add / edit JSON block carefully (valid JSON – no trailing commas).
1. Pick the correct continent HTML file.
2. Inside its JSON block, append a new object to the `countries` array keeping **alphabetical order [A-Z]**.
3. Ensure an `iso2` uppercase code (ISO 3166‑1 alpha‑2) exists – this drives the flag image.
4. Add helpline keys using `snake_case` (e.g., `gender_based_violence`) – they are prettified automatically (`_` → space).
5. Update the `updated` field to today’s date (YYYY-MM-DD).

- Manually open the continent page to verify rendering & filtering.

- Run an HTML validator before PR.

- Add your details in README.MD as contributor for this

- Common rules:
1. Make sure to add a line as space
2. Check for commas (most common error in json)
<!-- 3.  -->
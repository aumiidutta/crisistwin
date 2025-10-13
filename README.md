# Crisistwin
Global Emergency & Helpline Reference <br />
Crisistwin is a lightweight, static, browser-based directory of critical emergency, crisis, and support helpline numbers across countries and regions. Each continent page lists countries with quick-reference data (capital, ISD code, currency, categorized helplines and flags for instant visual recognition). The goal is to provide a fast, searchable, offline‑friendly (once cached) resource that can expand through community contributions.


## Key Features
- Fast, zero-build static site (just open `index.html`).
- Continent → country drilldown with structured helplines.
- Client-side filtering (matches country name, capital, or helpline key/value).
- Inline country flags (via [flagcdn.com](https://flagcdn.com) – no assets stored locally yet).
- Consistent card layout with semantic markup for future accessibility improvements.
- Easily extensible JSON-in-`<script type="application/json">` block per continent page (no external JS bundling). A small shared `script.js` handles rendering and filtering.


## Repository Structure
```
index.html                # Landing page (continent cards)
africa.html               # Africa country data + filter logic
asia.html                 # Asia country data + filter logic
europe.html               # Europe country data + filter logic
northamerica.html         # North America country data + filter logic
southamerica.html         # South America country data + filter logic
australia.html            # Oceania region page
contributing.md           # Contribution guidelines
style.css                 # Global + layout + card styles
script.js                 # Shared rendering + filtering + footer year
asset/                    # Static images (continents + logo)
LICENSE                   # MIT License
```

## Data Model (Per Continent Page)
Each continent page embeds a JSON object inside a `<script id="continent-data" type="application/json">` tag. Example:
```jsonc
{
	"continent": "Africa",
	"updated": "2025-10-07",
	"countries": [
		{
			"name": "Nigeria",
			"iso2": "NG",            // Used to build flag URL
			"isd": "+234",
			"capital": "Abuja",
			"currency": "NGN",
			"helplines": {
				"emergency": "112",
				"police": "112",
				"fire": "112",
				"ambulance": "112"
			}
		}
	]
}
```
The shared `script.js` reads this JSON, renders country cards, and wires up the filter input.


## Disclaimer
This project is informational only. Emergency and support numbers may change without notice. Always verify with an official local authority when possible. The maintainers are not liable for any inaccuracies or outcomes resulting from use of the data.

## Quick start
- Open `index.html` in your browser. Click a continent to view countries and use the filter box to search.

## Contribution
- To contribute, please read `contributing.md`.
- If you want to add details for a country, please create an issue and ask to be assigned.
- Create an issue to suggest an improvement.
- Please make sure the code you have written follows the rules mentioned in `contributing.md`.

© 2025 Crisistwin
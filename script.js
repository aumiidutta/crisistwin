// Shared utilities for Crisistwin pages
(function(){
  'use strict';

  function $(id){ return document.getElementById(id); }

  function parseContinentData(){
    const el = $('continent-data');
    if(!el) return null;
    try{
      const json = el.textContent.trim();
      return JSON.parse(json);
    }catch(err){
      console.error('Invalid JSON in #continent-data', err);
      return null;
    }
  }

  function titleCase(s){
    return s.replace(/_/g,' ')
            .replace(/\s*&\s*/g, ' & ')
            .replace(/\s+/g,' ')
            .trim()
            .toLowerCase()
            .replace(/(^|\s)\S/g, t => t.toUpperCase());
  }

  function renderCountries(countries, gridEl){
    gridEl.innerHTML = '';
    countries.forEach(c => {
      const card = document.createElement('article');
      card.className = 'country-card';
      const helplines = Object.entries(c.helplines || {}).map(([k,v]) => {
        return '<li><strong>' + titleCase(String(k)) + ':</strong> ' + v + '</li>';
      }).join('');
      const iso = (c.iso2 || '').toLowerCase();
      const flagUrl = iso ? ('https://flagcdn.com/w40/' + iso + '.png') : '';
      card.innerHTML =
        (flagUrl ? ('\n<h2><img class="country-flag" src="' + flagUrl + '" alt="' + (c.name||'') + ' flag">' + (c.name||'') + '</h2>')
                  : ('\n<h2>' + (c.name||'') + '</h2>')) +
        '\n<p><strong>Capital:</strong> ' + (c.capital||'') + '</p>' +
        '\n<p><strong>Official language(s):</strong> ' + (Array.isArray(c.languages) ? c.languages.join(', ') : (c.languages||'')) + '</p>' +
        '\n<p><strong>ISD:</strong> ' + (c.isd||'') + '</p>' +
        '\n<p><strong>Currency:</strong> ' + (c.currency||'') + '</p>' +
        '\n<ul class="helplines">' + helplines + '</ul>';
      gridEl.appendChild(card);
    });
  }

  function setupFilter(data, gridEl, statsEl){
    const input = $('country-filter');
    if(!input) return;
    function applyFilter(){
      const q = input.value.trim().toLowerCase();
      if(!q){
        renderCountries(data.countries, gridEl);
        if(statsEl) statsEl.textContent = '';
        return;
      }
      const filtered = data.countries.filter(c => {
        if((c.name||'').toLowerCase().includes(q)) return true;
        if((c.capital||'').toLowerCase().includes(q)) return true;
        if(Array.isArray(c.languages) && c.languages.some(l => String(l).toLowerCase().includes(q))) return true;
        return Object.entries(c.helplines || {}).some(([k,v]) => String(k).toLowerCase().includes(q) || String(v).toLowerCase().includes(q));
      });
      renderCountries(filtered, gridEl);
      if(statsEl) statsEl.textContent = filtered.length + ' / ' + data.countries.length + ' match';
    }
    input.addEventListener('input', applyFilter);
  }

  function initCountryPage(){
    const data = parseContinentData();
    if(!data) return;
    const grid = $('country-grid');
    const countEl = $('countries-count');
    const statsEl = $('filter-stats');
    if(countEl) countEl.textContent = 'Countries listed: ' + (data.countries ? data.countries.length : 0);
    if(grid && data.countries) renderCountries(data.countries, grid);
    setupFilter(data, grid, statsEl);
  }

  function updateFooterYear(){
    const footer = document.querySelector('.footer');
    if(!footer) return;
    const year = new Date().getFullYear();
    // Try to replace an existing year; otherwise append
    const text = footer.textContent || '';
    if(/\d{4}/.test(text)){
      footer.textContent = text.replace(/\d{4}/, String(year));
    }else{
      footer.textContent = '© ' + year + ' Crisistwin';
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    initCountryPage();
    updateFooterYear();
  });
})();

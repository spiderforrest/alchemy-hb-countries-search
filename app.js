/* Imports */
// Slice A: import getCountries from fetch-utils.js
// Slice B: import getContinents from fetch-utils.js
import { getCountries, getContinents } from './fetch-utils.js';

import { renderContinentOption, renderCountry } from './render-utils.js';

/* Get DOM Elements */
const countryList = document.getElementById('country-list');
const searchForm = document.getElementById('search-form');
const continentSelect = document.getElementById('continent-select');

/* State */
let countries = [];
let continents = [];

/* Events */
window.addEventListener('load', async () => {
    // on page load load all countries(well, 100 of them)
    findCountries();
    // fetch the continents
    const response = await getContinents();
    // catch for if backend does a bad
    if (response.error) return;
    // populate the dropdown
    continents = response.data;
    displayContinentOptions();
});

async function findCountries(continent) {
    // fetch countries
    const rawCountries = await getCountries(continent);
    // catch
    if (rawCountries.error) return;
    // display list
    countries = rawCountries.data;
    displayCountries();
}

searchForm.addEventListener('submit', (e) => {
    // don't query for the continent "All continents"
    e.preventDefault();
    // fetch countries with continent filter
    const formData = new FormData(searchForm);
    findCountries(formData.get('continent'));
});

/* Display Functions */
function displayCountries() {
    // reset
    countryList.textContent = '';
    // iterate country array generating and appending dom elements
    for (const item of countries) {
        countryList.append(renderCountry(item));
    }
}

function displayContinentOptions() {
    // iterate continent array genreating and appending <li>s
    for (const item of continents) {
        continentSelect.append(renderContinentOption(item));
    }
}

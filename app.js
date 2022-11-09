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
    // call findCountries function with no arguments to fetch all countries (Slice A);
    findCountries();
    // Slice B: call asynchronous getContinents fetch function and set to response variable
    const response = await getContinents();
    // Slice B: set the continents state to the response.data
    if (response.error) return;
    continents = response.data;
    // Slice B: call displayContinentOptions function;
    displayContinentOptions();
});

async function findCountries(continent) {
    // Slice A: call the asynchronous fetch function to get the countries
    const rawCountries = await getCountries(continent);
    // Slice C: add continent argument to getCountries function call
    // console log the response object to see all of the nested information returned
    // Slice A: set the countries state to the response.data
    if (rawCountries.error) return;
    countries = rawCountries.data;
    // Slice A: call displayCountries function;
    displayCountries();
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    // Slice C: Call findCountries with continent from formData
});

/* Display Functions */
function displayCountries() {
    //Slice A: reset the countries List
    countryList.textContent = '';

    for (const item of countries) {
        // Slice A: Call imported render countries function and append to list
        countryList.append(renderCountry(item));
    }
}

function displayContinentOptions() {
    for (const item of continents) {
        // Slice B: Call continent render function and append to continent selector
        continentSelect.append(renderContinentOption(item));
    }
}

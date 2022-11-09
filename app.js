/* Imports */
// Slice A: import getCountries from fetch-utils.js
// Slice B: import getContinents from fetch-utils.js

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
    // Slice B: set the continents state to the response.data
    // Slice B: call displayContinentOptions function;
});

async function findCountries(continent) {
    // Slice A: call the asynchronous fetch function to get the countries
    // Slice C: add continent argument to getCountries function call
    // console log the response object to see all of the nested information returned
    // Slice A: set the countries state to the response.data
    // Slice A: call displayCountries function;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    // Slice C: Call findCountries with continent from formData
});

/* Display Functions */
function displayCountries() {
    //Slice A: reset the countries List

    for (const country of countries) {
        // Slice A: Call imported render countries function and append to list
    }
}

function displayContinentOptions() {
    for (const continent of continents) {
        // Slice B: Call continent render function and append to continent selector
    }
}

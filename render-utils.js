export function renderCountry(country) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    li.classList.add('card');

    img.src = `https://flagcdn.com/72x54/${country.iso2.toLowerCase()}.png`;
    img.alt = country.name;

    h2.textContent = country.name;

    p.textContent = country.continent;

    li.append(h2, img, p);

    return li;
}

export function renderContinentOption(continent) {
    const option = document.createElement('option');
    option.value = continent.name;
    option.textContent = continent.name;
    return option;
}

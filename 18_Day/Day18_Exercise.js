const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// EXERCISE LEVEL 1

// NO 1
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        for (const {name, capital, languages, population, area} of data) {
            let formattedLanguages = languages.length > 1 ? 
            `have ${languages.length} different languages `: `has ${languages.length} `
            console.log(`The name of the country is ${name}, 
             and it's capital is ${capital},
             and the country ${formattedLanguages}
             with a population of ${population}
             in an area of ${area}`);
        }
        
    })
    .catch(err => console.log(err));

// EXERCISE LEVEL 2

// N0 2
const fetchCatData = async function(){
    try {
        const response = await fetch(catsAPI);
        const value = await response.json();
        const {catNames} = await value.name;
        console.log(catNames);
    } catch (err) {
        console.log(err);
    }
}

fetchCatData();
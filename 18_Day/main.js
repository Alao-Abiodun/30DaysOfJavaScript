// EXERCISE LEVEL 1
// Q1
const countriesAPI = 'https://restcountries.eu/rest/v2/all';
fetch(countriesAPI)
        .then(response => response.json())
        .then(country => country.map(({name, capital, languages, population, area}) => {
            console.log(name, capital, languages, population, area);
        }))
        .catch(err => console.log(err));

// EXERCISE 2
// Q1
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const catNames =  async () => {
    try {
        const response = await fetch(catsAPI);
        const catData =  await response.json();
        const catNames  = catData.map(({name}) => name);
        console.log(catData);
        console.log(catNames);
    } catch(err) {
        console.log(err);
    }
}
catNames();

// EXERCISE LEVEL 3
// Q1
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
fetch(catsAPI)
        .then(res => res.json())
        .then(cat => cat.map(({ weight }) => {
            console.log(weight);
            console.log(cat);
        }))
        .catch(err => console.log(err));

// Q2
const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const countryData = fetch(countriesAPI)
        .then(response => response.json())
        .then(country => console.log(country))
        .catch(err => console.log(err));

const catWeight = () => {
    countryData.map(({ weight }) => {
        return weight;
    })
}

catWeight();
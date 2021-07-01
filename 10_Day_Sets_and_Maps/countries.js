// EXERCISE 3
const countries = [
    {
        name: 'Afghanistan',
        capital: 'Kabul',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145,
        flag: 'https://restcountries.eu/data/afg.svg',
        currency: 'Afghan afghani'
    },
    {
        name: 'Åland Islands',
        capital: 'Mariehamn',
        languages: ['Swedish', 'English'],
        population: 28875,
        flag: 'https://restcountries.eu/data/ala.svg',
        currency: 'Euro'
    },
    {
        name: 'Albania',
        capital: 'Tirana',
        languages: ['Albanian'],
        population: 2886026,
        flag: 'https://restcountries.eu/data/alb.svg',
        currency: 'Albanian lek'
    },
    {
        name: 'Algeria',
        capital: 'Algiers',
        languages: ['Arabic'],
        population: 40400000,
        flag: 'https://restcountries.eu/data/dza.svg',
        currency: 'Algerian dinar'
    },
    {
        name: 'American Samoa',
        capital: 'Pago Pago',
        languages: ['English', 'Samoan', 'Arabic'],
        population: 57100,
        flag: 'https://restcountries.eu/data/asm.svg',
        currency: 'United State Dollar'
    }
]

// 1
const countryLanguage = countries.map(country => country.languages);
const [[...a], [...b], [...c], [...d], [...e]] = countryLanguage;
const setOfLanguage = [...a, ...b, ...c, ...d, ...e];
const uniqueLanguage = new Set(setOfLanguage);
console.log(uniqueLanguage.size);



// 2
const countryLanguage = countries.map(country => country.languages);
const [[...a], [...b], [...c], [...d], [...e]] = countryLanguage;
const Languages = [...a, ...b, ...c, ...d, ...e];
const setOfLanguage = new Set(Languages);
console.log(Languages);
console.log(setOfLanguage);
const counts = [];
for (const langSet of setOfLanguage) {
    const filteredLangSet = Languages.filter(lang => lang === langSet);
    counts.push({ language: langSet, count: filteredLangSet.length });
}
console.log(counts);



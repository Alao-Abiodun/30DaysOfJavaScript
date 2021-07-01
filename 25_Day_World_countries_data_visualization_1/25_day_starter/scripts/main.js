let subtitleParagraph = document.querySelector('.subtitle');
let feedbackParagraph = document.querySelector('.feedback');

feedbackParagraph.textContent = `Currently, we have ${countries.length} countries`;
feedbackParagraph.style.textAlign = 'center';
feedbackParagraph.style.fontSize = '20px';
feedbackParagraph.style.color = 'gray';
feedbackParagraph.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'

const styleButton = () => {
    let graphButton = document.querySelector('.graph-buttons');
    let buttonPopulation = document.querySelector('.population');
    let buttonLanguage = document.querySelector('.languages');
    graphButton.style.textAlign = 'center';
    buttonPopulation.style.backgroundColor = 'orange';
    buttonLanguage.style.backgroundColor = 'orange';
    buttonPopulation.style.border = 'none';
    buttonLanguage.style.border = 'none';
    buttonPopulation.style.borderRadius = '2px';
    buttonLanguage.style.borderRadius = '2px';
    buttonPopulation.style.width = '120px'
    buttonPopulation.style.height = '35px';
    buttonPopulation.style.textTransform = 'uppercase';
    buttonLanguage.style.width = '120px'
    buttonLanguage.style.height = '35px';
    buttonLanguage.style.textTransform = 'uppercase';
    buttonPopulation.style.padding = '10px';
    buttonLanguage.style.padding = '10px';
}

styleButton();

const showButtonContentGraph = () => {
    let btnPopulation = document.querySelector('.population');
    let btnLanguage = document.querySelector('.languages');
    let graphTitle = document.querySelector('.graph-title');
    let graph = document.querySelector('.graphs');
    graph.style.textAlign = 'center';
    let countryNames = document.querySelector('#countryNames');
    countryNames.style.width = '100px';
    countryNames.style.height = '40px';
    countryNames.style.display = 'inline-block';
    countryNames.style.padding = '50px'
    let barGraph = document.querySelector('#barGraph');
    barGraph.style.width = '100px';
    barGraph.style.height = '40px';
    barGraph.style.display = 'inline-block';
    barGraph.style.padding = '50px'
    let populations = document.querySelector('#populations');
    populations.style.width = '100px';
    populations.style.height = '40px';
    populations.style.display = 'inline-block';
    populations.style.padding = '50px'

    const mostTenPopulatedCountries = (arr, n) => {
        const counts = [];
        let sortedByPopulation;
        for (const { name, population } of countries) {
            counts.push({ country: name, population: population });
        }
        sortedByPopulation = counts.sort((b, a) => a.population - b.population);
        return sortedByPopulation.slice(0, n);
    }

    btnPopulation.addEventListener('click', (e) => {
        graphTitle.textContent = '10 Most populated countries in the world';
        graphTitle.style.textAlign = 'center';

        const tenCountry = mostTenPopulatedCountries(countries, 10)

        const maxPopulation = tenCountry[0].population;

        for (let i = 0; i < 10; i++) {

            let p1 = document.createElement('p');
            p1.setAttribute('id', 'country-' + i);
            p1.innerHTML = tenCountry[i].country;
            document.getElementById('countryNames').appendChild(p1);

            let div = document.createElement('div');
            div.setAttribute('id', 'bar-' + i);
            div.style.height = '50px';
            div.style.width = (tenCountry[i].population / maxPopulation * 100) + '%';
            div.style.backgroundColor = 'orange';
            div.style.padding = '20px';
            // div.style.display = 'inline-block';
            div.style.marginBottom = '10px';

            document.getElementById('barGraph').appendChild(div);

            let p2 = document.createElement('p');
            p2.setAttribute('id', 'population-' + i);
            p2.innerHTML = tenCountry[i].population;
            document.getElementById('populations').appendChild(p2);
        }
    })

    btnLanguage.addEventListener('click', (e) => {
        graphTitle.textContent = '10 Most Spoken languges in the world'
        graphTitle.style.textAlign = 'center'
    })
}

showButtonContentGraph();




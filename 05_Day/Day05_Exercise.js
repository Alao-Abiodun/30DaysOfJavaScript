const iTCompanies = ['Facebook', 'Google', 'Microsoft','Apple', 'IBM', 'Oracle','Amazon'];
const techCompanies = iTCompanies.slice(0, iTCompanies.length-1).join(', ');
const companies = iTCompanies.slice(iTCompanies.length-1);
console.log(`${techCompanies} and ${companies} are big IT companies`);

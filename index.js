const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(driversArray, name) {
    const nameLowerCase = name.toLowerCase()

    const matchingDrivers = driversArray.filter(dereva => 
        dereva.toLowerCase().includes(nameLowerCase)
    )
    return matchingDrivers
}

drivers.length = 0
drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby')

function fuzzyMatch(driversArray, name) {
    const drivers = []
    const nameLowerCase = name.toLowerCase()

    const matchingDrivers = driversArray.filter(dereva => 
        dereva.toLowerCase().startsWith(nameLowerCase)
    )
    return matchingDrivers;
}


drivers.length = 0
drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby')

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];


function matchName(driversArray, name) {
    const nameLowerCase = name.toLowerCase()

    const matchingDrivers = driversArray.filter(dereva => 
        dereva.name.toLowerCase() === nameLowerCase
    )
    return matchingDrivers
}


  
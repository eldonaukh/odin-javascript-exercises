const findTheOldest = function(people) {
    thisYear = new Date().getFullYear()
    let oldest;

    for (person of people) {

        if (!Object.hasOwn(person, "yearOfDeath")) {
            person.yearOfDeath = thisYear;
        }
        if (!oldest) {
            oldest = person;
            continue;
        }
        age = person.yearOfDeath - person.yearOfBirth;
        
        if (age > (oldest.yearOfDeath - oldest.yearOfBirth)) oldest = person;
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

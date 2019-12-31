function isLeapYear(input) {
    let date = new Date(input),
        year = date.getFullYear();

    if(isNaN(year)) {
        return "Invalid date";
    } else {
        return !(year % 4) ? 
            `${year} is a leap year` : 
            `${year} is not a leap year`;

    }
}



console.log(isLeapYear('2020-01-01 00:00:00')); // => ‘2020 is a leap year’
console.log(isLeapYear('2020-01-01 00:00:00777')); // => ‘Invalid Date’
console.log(isLeapYear('2021-01-15 13:00:00')); // => ‘2021 is not a leap year’
console.log(isLeapYear('2200-01-15 13:00:00')); // => ‘2200 is not a leap year’

var regularYear = 365;
function leapYear(year){
    if (year > regularYear){
        console.log('Leap Year')
    }
    else{
        console.log('Regular Year');
    }
    return year;
}

leapYear(366);